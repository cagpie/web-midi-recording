import parseUint8 from './parseUint8';
import insertUint8List from './insertUint8List';

export default function convertMIDIRecordingToSMF (recordingData, tempo = 120, resolution = 960) {
  // TODO - 決め打ちになっちゃってるので、うまいこと可変長っぽい感じでやりたい
  const dv = new DataView(new ArrayBuffer(2 ** 16));
  let p = 0;

  // Header
  p = insertUint8List(dv, p, 'MThd');
  p = insertUint8List(dv, p, [0, 0, 0, 6]); // Header data size
  p = insertUint8List(dv, p, [0, 1]); // Format type
  p = insertUint8List(dv, p, [0, 2]); // Track count
  p = insertUint8List(dv, p, [0, ...parseUint8(resolution)].slice(-2));

  // Temp Track
  p = insertUint8List(dv, p, 'MTrk');
  p = insertUint8List(dv, p, [0, 0, 0, 0x0b]);
  // TODO - テンポを任意の値に
  p = insertUint8List(dv, p, [0, 0xff, 0x51, 0x03, 0x07, 0xA1, 0x20])
  p = insertUint8List(dv, p, [0, 0xff, 0x2f, 0]);

  // Tracks
  recordingData.tracks.forEach((track) => {
    let preEventTime = 0;
    let dataSize = 0;

    // Track Header
    const dataSizePoint = insertUint8List(dv, p, 'MTrk');
    p = insertUint8List(dv, dataSizePoint, [0, 0, 0, 0]);

    track.forEach((event) => {
      const deltaTime = Math.round((event.startTime - preEventTime) * 2 * resolution / 1000);
      const deltaTimeUint8 = parseUint8(deltaTime, true);

      // Delta time
      p = insertUint8List(dv, p, deltaTimeUint8);
      // Event
      p = insertUint8List(dv, p, event.data);

      preEventTime = event.startTime;
      dataSize += deltaTimeUint8.length + event.data.length;
    });

    // Track Footer
    p = insertUint8List(dv, p, [0]);
    p = insertUint8List(dv, p, [0xff, 0x2f, 0]);

    // トラック頭のデータ長を改めて上書きする
    insertUint8List(dv, dataSizePoint, [0, 0, 0, ...parseUint8(dataSize)].slice(-4));
  });

  return dv.buffer;
}
