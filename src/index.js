import convertMIDIRecordingToSMF from './utils/convertMIDIRecordingToSMF';

let currentRecordingFlag = false;
let currentRecordingTrackIndex = 0;
let recordingData = null;
let recordingStartTime = null;

function midiMessageHandler (event) {
  const { data, timeStamp } = event;

  if (currentRecordingFlag && !recordingStartTime) {
    recordingStartTime = timeStamp;
  }

  const root = data[0] >> 4;
  switch (root) {
    case 0x8:
    case 0x9:
    case 0xA:
    case 0xB:
    case 0xC:
    case 0xD:
    case 0xE:
      // record event
      if (currentRecordingFlag) {
        recordingData.tracks[currentRecordingTrackIndex].push({
          data: data,
          startTime: timeStamp - recordingStartTime
        });
      }
      break;

    default:
  }
}

export function attachHandler (midiInput) {
  midiInput.addEventListener('midimessage', midiMessageHandler);
}

export function detachHandler (midiInput) {
  midiInput.removeEventListener('midimessage', midiMessageHandler);
}

export function initRecording (data) {
  recordingData = data || {
    tracks: []
  }
}

export function startRecording (trackAutoIncrement = true, trackIndex = 0) {
  if (!recordingData) {
    initRecording();
  }

  if (!(trackIndex in recordingData.tracks)) {
    // 指定のトラックがなければ作る
    recordingData.tracks[trackIndex] = [];
  } else {
    if (trackAutoIncrement) {
      while (trackIndex in recordingData.tracks) {
        trackIndex++;
      }
    }
    // 指定のトラックがすでに存在する場合はエラー
    throw Error('Cannot override the track.');
  }

  currentRecordingFlag = true;
  currentRecordingTrackIndex = trackIndex;
}

export function stopRecording () {
  currentRecordingFlag = false;
  recordingStartTime = null;

  return recordingData;
}

export function getSMF (data) {
  return convertMIDIRecordingToSMF(data || recordingData);
}
