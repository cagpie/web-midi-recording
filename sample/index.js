import 'babel-polyfill';

import loadSounds from './utils/loadSounds';

import * as MIDIRecording from '../src';

async function init () {
  try {
    const data = await navigator.requestMIDIAccess({ sysex: false });

    const midiInputs = new Object();
    const inputIterator = data.inputs.values();
    for (let input = inputIterator.next(); !input.done; input = inputIterator.next()) {
        midiInputs[input.value.name] = input.value;
    }

    if (!Object.keys(midiInputs).length) {
      alert('MIDIデバイスがありません！');
      throw new Error();
    }

    const pianoBuffers = await loadSounds();

    console.log('initalized');

    main(midiInputs, pianoBuffers);
  } catch (e) {
    alert(e);
  }
}

function main (midiInputs, pianoBuffers) {
  let smf

  const buttonRecordingStart = document.getElementById('recording-start');
  const buttonRecordingStop = document.getElementById('recording-stop');
  const buttonPlayRecording = document.getElementById('play-recording');
  const linkMidiDownload = document.getElementById('midi-download');

  document.getElementById('init-button').style.display = 'none';
  buttonRecordingStart.style.display = 'block';

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const context = new AudioContext();

  const playingNote = new Array();
  const soundPianoHandler = (event) => {
    const { data } = event;

    const root = data[0] >> 4;
    switch (root) {
      case 0x8:
      case 0x9:
        if (root === 0x9 && data[2] > 0) {
          // Note On
          console.log("note on", event);
          
          const source = context.createBufferSource();
          const gainNode = context.createGain();
          const stopGainNode = context.createGain();
          source.buffer = pianoBuffers[data[1]];
          gainNode.gain.value = data[2] / 127;
          stopGainNode.gain.value = 1;
          source.connect(gainNode);
          gainNode.connect(stopGainNode);
          stopGainNode.connect(context.destination);
          source.start(0);

          playingNote[data[1]] = {
            source,
            gainNode,
            stopGainNode
          };
        } else {
          // Note Off
          console.log("note off", data);

          const note = playingNote[data[1]];
          if (note) {
            note.stopGainNode.gain.setValueAtTime(1, context.currentTime);
            note.stopGainNode.gain.linearRampToValueAtTime(0, context.currentTime + 0.1);
            note.source.stop(context.currentTime + 0.3);
          }
        }
        break;

      default:
    }
  }

  // MIDIデバイスそれぞれにメッセージ受け取りとピアノ鳴らすハンドラを登録する
  Object.values(midiInputs).forEach((midiInput) => {
    midiInput.addEventListener('midimessage', soundPianoHandler);
    MIDIRecording.attachHandler(midiInput);
  });


  // buttons
  buttonRecordingStart.addEventListener('click', () => {
    MIDIRecording.startRecording();

    buttonRecordingStart.style.display = 'none';
    buttonRecordingStop.style.display = 'block';
  });

  buttonRecordingStop.addEventListener('click', () => {
    MIDIRecording.stopRecording()
    smf = MIDIRecording.getSMF();

    linkMidiDownload.href = URL.createObjectURL(new Blob([smf]));
    
    buttonRecordingStop.style.display = 'none';
    buttonPlayRecording.style.display = 'block';
    linkMidiDownload.style.display = 'block';
  });

  buttonPlayRecording.addEventListener('click', () => {
    const picoAudio = new PicoAudio();
    const data = picoAudio.parseSMF(new Uint8Array(smf));
    picoAudio.setData(data);
    picoAudio.init();
    picoAudio.play();
  });
}

window.addEventListener('load', () => {
  document.getElementById('init-button').addEventListener('click', () => {
    init();
  })
});
