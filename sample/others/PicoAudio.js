/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _init_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _player_set_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _player_init_status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _player_play_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _player_stop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _player_sound_source_create_base_note_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _player_sound_source_create_note_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13);
/* harmony import */ var _player_sound_source_create_percussion_note_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14);
/* harmony import */ var _player_stop_manager_stop_audio_node_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15);
/* harmony import */ var _player_stop_manager_push_func_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(16);
/* harmony import */ var _player_stop_manager_clear_func_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _player_time_get_time_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18);
/* harmony import */ var _player_time_get_timing_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(19);
/* harmony import */ var _util_performance_util_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(20);
/* harmony import */ var _smf_parse_smf_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21);
/* harmony import */ var _web_midi_start_web_midi_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(25);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


















/**
 * MIDIをブラウザで再生するためのライブラリ
 */

window.PicoAudio =
/*#__PURE__*/
function () {
  /**
   * PicoAudioクラスのコンストラクタ
   * @param {AudioContext} audioContext 
   * @param {PicoAudio} picoAudio 
   */
  function PicoAudio(audioContext, picoAudio) {
    _classCallCheck(this, PicoAudio);

    _init_constructor_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, audioContext, picoAudio);
  }
  /**
   * 初期化・準備
   * @param {AudioContext} audioContext 
   * @param {PicoAudio} picoAudio 
   */


  _createClass(PicoAudio, [{
    key: "init",
    value: function init(audioContext, picoAudio) {
      return _init_init_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, audioContext, picoAudio);
    }
    /**
     * MIDIファイル(SMF)を解析する
     * @param {Uint8Array} smf MIDIファイルの内容が入ったUint8Arrayオブジェクト
     * @returns {Object} 再生用の情報が入ったオブジェクト
     */

  }, {
    key: "parseSMF",
    value: function parseSMF(smf) {
      return _smf_parse_smf_js__WEBPACK_IMPORTED_MODULE_15__["default"].call(this, smf);
    }
    /**
     * 再生用のデータをセットする
     * @param {Object} data PicoAudio.parseSMF()で返されたオブジェクト
     */

  }, {
    key: "setData",
    value: function setData(data) {
      return _player_set_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, data);
    }
    /**
     * 再生
     * @param {boolean} _isSongLooping PicoAudio内部で使う引数
     */

  }, {
    key: "play",
    value: function play(_isSongLooping) {
      return _player_play_js__WEBPACK_IMPORTED_MODULE_4__["default"].call(this, _isSongLooping);
    }
    /**
     * 停止
     * @param {boolean} _isSongLooping PicoAudio内部で使う引数
     */

  }, {
    key: "stop",
    value: function stop(_isSongLooping) {
      return _player_stop_js__WEBPACK_IMPORTED_MODULE_5__["default"].call(this, _isSongLooping);
    }
    /**
     * リセット
     * @param {boolean} _isSongLooping PicoAudio内部で使う引数
     * @param {boolean} _isLight PicoAudio内部で使う引数
     */

  }, {
    key: "initStatus",
    value: function initStatus(_isSongLooping, _isLight) {
      return _player_init_status_js__WEBPACK_IMPORTED_MODULE_3__["default"].call(this, _isSongLooping, _isLight);
    } // 時関関係 //

    /**
     * tickからtime(秒)を求める
     * @param {number} tick
     * @returns {number} time(秒)
     */

  }, {
    key: "getTime",
    value: function getTime(tick) {
      return _player_time_get_time_js__WEBPACK_IMPORTED_MODULE_12__["default"].call(this, tick);
    }
    /**
     * time(秒)からtickを求める
     * @param {number} time
     * @returns {number} tick
     */

  }, {
    key: "getTiming",
    value: function getTiming(time) {
      return _player_time_get_timing_js__WEBPACK_IMPORTED_MODULE_13__["default"].call(this, time);
    } // 再生・音源関係 //

    /**
     * 再生処理（Web Audio API の oscillator等で音を鳴らす）
     * @param {Object} option 
     * @param {boolean} isDrum 
     * @param {boolean} isExpression 
     * @param {boolean} nonChannel 
     * @param {boolean} nonStop 
     * @returns {Object} AudioNodeやパラメータを返す
     */

  }, {
    key: "createBaseNote",
    value: function createBaseNote(option, isDrum, isExpression, nonChannel, nonStop) {
      return _player_sound_source_create_base_note_js__WEBPACK_IMPORTED_MODULE_6__["default"].call(this, option, isDrum, isExpression, nonChannel, nonStop);
    }
    /**
     * 音源（パーカッション以外）
     * @param {Object} option 
     * @returns {Object} 音をストップさせる関数を返す
     */

  }, {
    key: "createNote",
    value: function createNote(option) {
      return _player_sound_source_create_note_js__WEBPACK_IMPORTED_MODULE_7__["default"].call(this, option);
    }
    /**
     * パーカッション音源
     * @param {Object} option 
     * @returns {Object} 音をストップさせる関数を返す
     */

  }, {
    key: "createPercussionNote",
    value: function createPercussionNote(option) {
      return _player_sound_source_create_percussion_note_js__WEBPACK_IMPORTED_MODULE_8__["default"].call(this, option);
    } // 停止管理関係 //

    /**
     * 各々のNoteの音停止処理
     * @param {Object} tar 
     * @param {number} time 
     * @param {Object} stopGainNode 
     * @param {boolean} isNoiseCut 
     */

  }, {
    key: "stopAudioNode",
    value: function stopAudioNode(tar, time, stopGainNode, isNoiseCut) {
      return _player_stop_manager_stop_audio_node_js__WEBPACK_IMPORTED_MODULE_9__["default"].call(this, tar, time, stopGainNode, isNoiseCut);
    }
    /**
     * stop()するときに実行するコールバック等を登録
     * @param {Object} tar 
     */

  }, {
    key: "pushFunc",
    value: function pushFunc(tar) {
      return _player_stop_manager_push_func_js__WEBPACK_IMPORTED_MODULE_10__["default"].call(this, tar);
    }
    /**
     * pushFunc()で予約したコールバック等を削除する
     * @param {Object} tar1 
     * @param {Object} tar2 
     */

  }, {
    key: "clearFunc",
    value: function clearFunc(tar1, tar2) {
      return _player_stop_manager_clear_func_js__WEBPACK_IMPORTED_MODULE_11__["default"].call(this, tar1, tar2);
    }
    /**
     * Web MIDI API
     */

  }, {
    key: "startWebMIDI",
    value: function startWebMIDI() {
      return _web_midi_start_web_midi_js__WEBPACK_IMPORTED_MODULE_16__["default"].call(this);
    }
    /**
     * パフォーマンス計測
     */

  }, {
    key: "measurePerformanceReverb",
    value: function measurePerformanceReverb() {
      return _util_performance_util_js__WEBPACK_IMPORTED_MODULE_14__["default"].measureReverb.call(this);
    } // インターフェース関係 //

  }, {
    key: "addEventListener",
    value: function addEventListener(type, func) {
      // type = EventName (play, stop, noteOn...)
      this.events.push({
        type: type,
        func: func
      });
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(type, option) {
      this.events.forEach(function (event) {
        if (event.type == type) {
          try {
            event.func(option);
          } catch (e) {
            console.log(e);
          }
        }
      });
    }
  }, {
    key: "getChannels",
    value: function getChannels() {
      return this.channels;
    }
  }, {
    key: "setChannels",
    value: function setChannels(channels) {
      var _this = this;

      channels.forEach(function (channel, idx) {
        _this.channels[idx] = channel;
      });
    }
  }, {
    key: "initChannels",
    value: function initChannels() {
      for (var i = 0; i < 16; i++) {
        this.channels[i] = [0, 0, 1];
      }
    }
  }, {
    key: "getMasterVolume",
    value: function getMasterVolume() {
      return this.settings.masterVolume;
    }
  }, {
    key: "setMasterVolume",
    value: function setMasterVolume(volume) {
      this.settings.masterVolume = volume;

      if (this.isStarted) {
        this.masterGainNode.gain.value = this.settings.masterVolume;
      }
    }
  }, {
    key: "isLoop",
    value: function isLoop() {
      return this.settings.loop;
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.settings.loop = loop;
    }
  }, {
    key: "isWebMIDI",
    value: function isWebMIDI() {
      return this.settings.isWebMIDI;
    }
  }, {
    key: "setWebMIDI",
    value: function setWebMIDI(enable) {
      this.settings.isWebMIDI = enable;
    }
  }, {
    key: "isCC111",
    value: function isCC111() {
      return this.settings.isCC111;
    }
  }, {
    key: "setCC111",
    value: function setCC111(enable) {
      this.settings.isCC111 = enable;
    }
  }, {
    key: "setStartTime",
    value: function setStartTime(offset) {
      this.states.startTime -= offset;
    }
  }, {
    key: "setOnSongEndListener",
    value: function setOnSongEndListener(listener) {
      this.onSongEndListener = listener;
    }
  }, {
    key: "onSongEnd",
    value: function onSongEnd() {
      if (this.onSongEndListener) {
        var isStopFunc = this.onSongEndListener();
        if (isStopFunc) return;
      }

      if (this.settings.loop) {
        this.initStatus(true);

        if (this.settings.isCC111 && this.cc111Time != -1) {
          this.setStartTime(this.cc111Time);
        }

        this.play(true);
      }
    }
  }, {
    key: "isReverb",
    value: function isReverb() {
      return this.settings.isReverb;
    }
  }, {
    key: "setReverb",
    value: function setReverb(enable) {
      this.settings.isReverb = enable;
    }
  }, {
    key: "getReverbVolume",
    value: function getReverbVolume() {
      return this.settings.reverbVolume;
    }
  }, {
    key: "setReverbVolume",
    value: function setReverbVolume(volume) {
      this.settings.reverbVolume = volume;
    }
  }, {
    key: "isChorus",
    value: function isChorus() {
      return this.settings.isChorus;
    }
  }, {
    key: "setChorus",
    value: function setChorus(enable) {
      this.settings.isChorus = enable;
    }
  }, {
    key: "getChorusVolume",
    value: function getChorusVolume() {
      return this.settings.chorusVolume;
    }
  }, {
    key: "setChorusVolume",
    value: function setChorusVolume(volume) {
      this.settings.chorusVolume = volume;
    }
  }]);

  return PicoAudio;
}(); // PicoAudioをグローバル変数に登録


window.PicoAudio = PicoAudio;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return picoAudioConstructor; });
function picoAudioConstructor(_audioContext, _picoAudio) {
  this.debug = false;
  this.isStarted = false;
  this.isPlayed = false;
  this.isTonyu2 = false;
  this.settings = {
    masterVolume: 1,
    generateVolume: 0.15,
    tempo: 120,
    basePitch: 440,
    resolution: 480,
    isWebMIDI: false,
    WebMIDIPortOutputs: null,
    WebMIDIPortOutput: null,
    WebMIDIPort: -1,
    // -1:auto
    WebMIDIPortSysEx: true,
    // MIDIデバイスのフルコントロールをするかどうか（SysExを使うかどうか）(httpsじゃないと使えない)
    isReverb: true,
    // リバーブONにするか
    reverbVolume: 1.5,
    isChorus: true,
    chorusVolume: 0.5,
    isCC111: true,
    loop: false,
    isSkipBeginning: this.isTonyu2,
    // 冒頭の余白をスキップ(Tonyu2はtrue)
    isSkipEnding: true,
    // 末尾の空白をスキップ
    holdOnValue: 64,
    maxPoly: -1,
    // 同時発音数 -1:infinity
    maxPercPoly: -1,
    // 同時発音数(パーカッション) -1:infinity
    isOfflineRendering: false,
    // TODO 演奏データを作成してから演奏する
    isSameDrumSoundOverlap: false // 同じドラムの音が重なることを許容するか

  };
  this.events = [];
  this.trigger = {
    isNoteTrigger: true,
    play: function play() {},
    stop: function stop() {},
    noteOn: function noteOn() {},
    noteOff: function noteOff() {},
    songEnd: function songEnd() {}
  };
  this.states = {
    isPlaying: false,
    startTime: 0,
    stopTime: 0,
    stopFuncs: [],
    webMIDIWaitState: null,
    webMIDIStopTime: 0,
    playIndices: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    updateBufTime: 100,
    updateBufMaxTime: 350,
    updateIntervalTime: 0,
    latencyLimitTime: 0
  };
  this.hashedDataList = [];
  this.hashedMessageList = [];
  this.playData = null;
  this.channels = [];
  this.tempoTrack = [{
    timing: 0,
    value: 120
  }, {
    timing: 0,
    value: 120
  }];
  this.cc111Time = -1;
  this.onSongEndListener = null; // チャンネルの設定値（音色, 減衰, 音量） //

  for (var i = 0; i < 17; i++) {
    this.channels.push([0, 0, 1]);
  } // AudioContextがある場合はそのまま初期化、なければAudioContextを用いる初期化をinit()で


  if (_audioContext) {
    this.init(_audioContext, _picoAudio);
  } // Fallback
  // Unsupport performance.now()


  if (typeof performance === "undefined") {
    window.performance = {};
  }

  if (!performance.now) {
    performance.now = function () {
      return Date.now();
    };
  } // Unsupport Number.MAX_SAFE_INTEGER


  if (!Number.MAX_SAFE_INTEGER) {
    Number.MAX_SAFE_INTEGER = 9007199254740991;
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _util_random_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _util_interpolation_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


function init(_audioContext, _picoAudio) {
  if (this.isStarted) return;
  this.isStarted = true; // AudioContextを生成 //

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  this.context = _audioContext ? _audioContext : new AudioContext(); // マスターボリューム //
  // リアルタイムで音量変更するためにdestination前にgainNodeを一つ噛ませる

  this.masterGainNode = this.context.createGain();
  this.masterGainNode.gain.value = this.settings.masterVolume; // 仮想サンプルレート //

  var sampleRate = this.context.sampleRate;
  var sampleRateVT = sampleRate >= 48000 ? 48000 : sampleRate; // ホワイトノイズ //

  if (_picoAudio && _picoAudio.whitenoise) {
    // 使いまわし
    this.whitenoise = _picoAudio.whitenoise;
  } else {
    _util_random_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetSeed(); // 乱数パターンを固定にする（Math.random()を使わない）
    // 再生環境のサンプルレートによって音が変わってしまうので //
    // 一旦仮想サンプルレートで音源を作成する //

    var seLength = 1;
    var sampleLength = sampleRate * seLength;
    var sampleLengthVT = sampleRateVT * seLength;
    var vtBufs = [];

    for (var ch = 0; ch < 2; ch++) {
      vtBufs.push(new Float32Array(sampleLengthVT));
      var vtBuf = vtBufs[ch];

      for (var i = 0; i < sampleLengthVT; i++) {
        var r = _util_random_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].random();
        vtBuf[i] = r * 2 - 1;
      }
    } // 仮想サンプルレート音源を本番音源に変換する //


    this.whitenoise = this.context.createBuffer(2, sampleLength, sampleRate);
    _util_interpolation_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].lerpWave(this.whitenoise, vtBufs);
  } // リバーブ用のインパルス応答音声データ作成（てきとう） //


  if (_picoAudio && _picoAudio.impulseResponse) {
    // 使いまわし
    this.impulseResponse = _picoAudio.impulseResponse;
  } else {
    _util_random_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].resetSeed(); // 乱数パターンを固定にする（Math.random()を使わない）
    // 再生環境のサンプルレートによって音が変わってしまうので //
    // 一旦仮想サンプルレートで音源を作成する //

    var _seLength = 3.5;

    var _sampleLength = sampleRate * _seLength;

    var _sampleLengthVT = sampleRateVT * _seLength;

    var _vtBufs = [];

    for (var _ch = 0; _ch < 2; _ch++) {
      _vtBufs.push(new Float32Array(_sampleLengthVT));

      var _vtBuf = _vtBufs[_ch];

      for (var _i = 0; _i < _sampleLengthVT; _i++) {
        var v = (_sampleLengthVT - _i) / _sampleLengthVT;
        var s = _i / sampleRateVT;
        var d = (s < 0.030 ? 0 : v) * (s >= 0.030 && s < 0.031 ? v * 2 : v) * (s >= 0.040 && s < 0.042 ? v * 1.5 : v) * (s >= 0.050 && s < 0.054 ? v * 1.25 : v) * _util_random_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].random() * 0.2 * Math.pow(v - 0.030, 4);
        _vtBuf[_i] = d;
      }
    } // 仮想サンプルレート音源を本番音源に変換する //


    this.impulseResponse = this.context.createBuffer(2, _sampleLength, this.context.sampleRate);
    _util_interpolation_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].lerpWave(this.impulseResponse, _vtBufs);
  } // リバーブ用のAudioNode作成・接続 //


  this.convolver = this.context.createConvolver();
  this.convolver.buffer = this.impulseResponse;
  this.convolver.normalize = true;
  this.convolverGainNode = this.context.createGain();
  this.convolverGainNode.gain.value = this.settings.reverbVolume;
  this.convolver.connect(this.convolverGainNode);
  this.convolverGainNode.connect(this.masterGainNode);
  this.masterGainNode.connect(this.context.destination); // コーラス用のAudioNode作成・接続 //

  this.chorusDelayNode = this.context.createDelay();
  this.chorusGainNode = this.context.createGain();
  this.chorusOscillator = this.context.createOscillator();
  this.chorusLfoGainNode = this.context.createGain();
  this.chorusDelayNode.delayTime.value = 0.025;
  this.chorusLfoGainNode.gain.value = 0.010;
  this.chorusOscillator.frequency.value = 0.05;
  this.chorusGainNode.gain.value = this.settings.chorusVolume;
  this.chorusOscillator.connect(this.chorusLfoGainNode);
  this.chorusLfoGainNode.connect(this.chorusDelayNode.delayTime);
  this.chorusDelayNode.connect(this.chorusGainNode);
  this.chorusGainNode.connect(this.masterGainNode);
  this.masterGainNode.connect(this.context.destination);
  this.chorusOscillator.start(0); // リバーブON/OFF設定を引き継ぐ。未設定ならパフォーマンス計測する(Tonyu2用)

  if (this.isTonyu2) {
    if (_picoAudio) {
      this.settings.isReverb = _picoAudio.settings.isReverb;
    } else {
      this.settings.isReverb = this.measurePerformanceReverb();
    }
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomUtil; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 固定パターンの乱数を提供するクラス
 */
var RandomUtil =
/*#__PURE__*/
function () {
  function RandomUtil() {
    _classCallCheck(this, RandomUtil);
  }

  _createClass(RandomUtil, null, [{
    key: "resetSeed",

    /**
     * 乱数のシード値をリセットする
     */
    value: function resetSeed() {
      this.init = true;
      this.x = 123456789;
      this.y = 362436069;
      this.z = 521288629;
      this.w = 8867512;
    }
    /**
     * 乱数を返す
     * 
     *     Math.random() と違い、毎回固定パターンで乱数が返される
     * Xorshiftアルゴリズム
     * @returns {number} 乱数
     */

  }, {
    key: "random",
    value: function random() {
      if (!this.init) this.resetSeed();
      var t = this.x ^ this.x << 11;
      this.x = this.y;
      this.y = this.z;
      this.z = this.w;
      var r = this.w = this.w ^ this.w >>> 19 ^ (t ^ t >>> 8);
      r = Math.abs(r) / 2147483648 % 2;
      return r;
    }
  }]);

  return RandomUtil;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterpolationUtil; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 補間を提供するクラス
 */
var InterpolationUtil =
/*#__PURE__*/
function () {
  function InterpolationUtil() {
    _classCallCheck(this, InterpolationUtil);
  }

  _createClass(InterpolationUtil, null, [{
    key: "lerpWave",

    /**
     * 波形を線形補間する
     * @param {AudioBuffer} buffer 補間結果を入れるAudioBuffer
     * @param {Array} vtBufs 仮想音源の配列([Float32Array, Float32Array])
     */
    value: function lerpWave(buffer, vtBufs) {
      // 仮想サンプルレート音源を本番音源に変換する //
      var bufferSize = buffer.getChannelData(0).length;
      var vtBufsSize = vtBufs[0].length;

      if (bufferSize == vtBufsSize) {
        // 線形補間の必要なし //
        for (var ch = 0; ch < 2; ch++) {
          var data = buffer.getChannelData(ch);
          var vtBuf = vtBufs[ch];

          for (var i = 0; i < bufferSize; i++) {
            data[i] = vtBuf[i];
          }
        }
      } else {
        // 線形補間 //
        var ratio = vtBufsSize / bufferSize;

        for (var _ch = 0; _ch < 2; _ch++) {
          var _data = buffer.getChannelData(_ch);

          var _vtBuf = vtBufs[_ch];

          for (var _i = 0; _i < bufferSize; _i++) {
            // 線形補間しながら波形を作成 //
            // TODO 音がまだ少し違和感あるので、スプライン補正に変更した方がいいかも //
            var idxF = _i * ratio;
            var idx1 = Math.trunc(idxF);
            var idx2 = (idx1 + 1) % vtBufsSize;
            var idxR = idxF - idx1;
            var w = _vtBuf[idx1] * (1 - idxR) + _vtBuf[idx2] * idxR;
            _data[_i] = w;
          }
        }
      }
    }
  }]);

  return InterpolationUtil;
}();



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setData; });
function setData(data) {
  if (this.debug) {
    var syoriTimeS = performance.now();
  }

  if (this.states.isPlaying) this.stop();
  this.playData = data;
  this.settings.resolution = data.header.resolution;
  this.settings.tempo = data.tempo || 120;
  this.tempoTrack = data.tempoTrack;
  this.cc111Time = data.cc111Time;
  this.firstNoteOnTiming = data.firstNoteOnTiming;
  this.lastNoteOffTiming = data.lastNoteOffTiming;
  this.firstNoteOnTime = data.firstNoteOnTime;
  this.lastNoteOffTime = data.lastNoteOffTime;
  this.initStatus();

  if (this.debug) {
    var syoriTimeE = performance.now();
    console.log("setData time", syoriTimeE - syoriTimeS);
  }

  return this;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initStatus; });
function initStatus(isSongLooping, isLight) {
  // WebMIDI使用中の場合、initStatus()連打の対策 //
  if (this.settings.isWebMIDI) {
    if (this.states.webMIDIWaitState != null) return;
  } // 演奏中の場合、停止する //


  this.stop(isSongLooping); // statesを初期化 //

  this.states = {
    isPlaying: false,
    startTime: 0,
    stopTime: 0,
    stopFuncs: [],
    webMIDIWaitState: null,
    webMIDIStopTime: this.states.webMIDIStopTime,
    playIndices: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    updateBufTime: this.states.updateBufTime,
    updateBufMaxTime: this.states.updateBufMaxTime,
    updateIntervalTime: this.states.updateIntervalTime,
    latencyLimitTime: this.states.latencyLimitTime,
    noteOnAry: [],
    noteOffAry: []
  }; // WebMIDIの初期化・リセットメッセージ送信 //

  if (this.settings.isWebMIDI && !isLight) {
    if (isSongLooping) return;

    if (this.settings.WebMIDIPortOutput == null) {
      this.startWebMIDI();
      return;
    }

    if (this.settings.WebMIDIPortSysEx) {
      // GM1システム・オン
      this.settings.WebMIDIPortOutput.send([0xF0, 0x7E, 0x7F, 0x09, 0x01, 0xF7]);
    } else {
      // SysExの使用が拒否されているので、できる限り設定値を初期値に戻す
      for (var t = 0; t < 16; t++) {
        this.settings.WebMIDIPortOutput.send([0xC0 + t, 0]);
        this.settings.WebMIDIPortOutput.send([0xE0 + t, 0, 64]); // ピッチあたりのずれがひどくなる場合がある よくわからない

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 100, 0]);
        this.settings.WebMIDIPortOutput.send([0xB0 + t, 101, 0]);
        this.settings.WebMIDIPortOutput.send([0xB0 + t, 6, 2]); //pitchbend

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 100, 1]);
        this.settings.WebMIDIPortOutput.send([0xB0 + t, 96, 0]);
        this.settings.WebMIDIPortOutput.send([0xB0 + t, 97, 64]); //tuning?

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 7, 100]); // volume

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 10, 64]); // pan

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 11, 127]); // expression
        //this.settings.WebMIDIPortOutput.send([0xB0+t, 91, 40]); // リバーブ以外のエフェクトに設定される場合がありそうなのでコメントアウト
        //this.settings.WebMIDIPortOutput.send([0xB0+t, 93, 0]); // コーラス以外のエフェクトに設定されるのか音が出なくなる場合があるのでコメントアウト

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 98, 0]);
        this.settings.WebMIDIPortOutput.send([0xB0 + t, 99, 0]); //this.settings.WebMIDIPortOutput.send([0xB0+t, 121, 0]);

        this.settings.WebMIDIPortOutput.send([0xB0 + t, 122, 0]);
      }
    }
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return play; });
/* harmony import */ var _play_update_note_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

function play(isSongLooping) {
  var _this = this;

  var context = this.context;
  var settings = this.settings;
  var trigger = this.trigger;
  var states = this.states; // 再生中の場合、処理しない //

  if (states.isPlaying) return; // WebMIDIの場合、少し待ってから再生する //

  if (settings.isWebMIDI && !isSongLooping) {
    // Web MIDI API使用時はstop()から800ms程待機すると音がバグりにくい
    if (states.webMIDIWaitState != "completed") {
      if (states.webMIDIWaitState != "waiting") {
        // play()連打の対策
        // stop()から1000ms後にplay()を実行
        states.webMIDIWaitState = "waiting";
        var waitTime = 1000 - (context.currentTime - states.webMIDIStopTime) * 1000;
        if (states.webMIDIStopTime == 0) waitTime = 1000; // MIDI Portをopenして最初に呼び出すときも少し待つ

        setTimeout(function () {
          states.webMIDIWaitState = "completed";
          states.isPlaying = false;

          _this.play();
        }, waitTime);
      }

      return;
    } else {
      states.webMIDIWaitState = null;
    }
  } // 変数を用意 //


  var currentTime = context.currentTime;
  this.isPlayed = true;
  states.isPlaying = true;
  states.startTime = !states.startTime && !states.stopTime ? currentTime : states.startTime + currentTime - states.stopTime;
  states.stopFuncs = []; // 冒頭の余白をスキップ //

  if (settings.isSkipBeginning) {
    var firstNoteOnTime = this.firstNoteOnTime;

    if (-states.startTime + currentTime < firstNoteOnTime) {
      this.setStartTime(firstNoteOnTime + states.startTime - currentTime);
    }
  } // 曲終了コールバックを予約 //


  var reserveSongEnd;

  var reserveSongEndFunc = function reserveSongEndFunc() {
    _this.clearFunc("rootTimeout", reserveSongEnd);

    var finishTime = settings.isCC111 && _this.cc111Time != -1 ? _this.lastNoteOffTime : _this.getTime(Number.MAX_SAFE_INTEGER);

    if (finishTime - context.currentTime + states.startTime <= 0) {
      // 予定の時間以降に曲終了
      trigger.songEnd();

      _this.onSongEnd();

      _this.fireEvent('songEnd');
    } else {
      // 処理落ちしたりしてまだ演奏中の場合、1ms後に曲終了コールバックを呼び出すよう予約
      reserveSongEnd = setTimeout(reserveSongEndFunc, 1);

      _this.pushFunc({
        rootTimeout: reserveSongEnd,
        stopFunc: function stopFunc() {
          clearTimeout(reserveSongEnd);
        }
      });
    }
  };

  var finishTime = settings.isCC111 && this.cc111Time != -1 ? this.lastNoteOffTime : this.getTime(Number.MAX_SAFE_INTEGER);
  var reserveSongEndTime = (finishTime - context.currentTime + states.startTime) * 1000;
  reserveSongEnd = setTimeout(reserveSongEndFunc, reserveSongEndTime);
  this.pushFunc({
    rootTimeout: reserveSongEnd,
    stopFunc: function stopFunc() {
      clearTimeout(reserveSongEnd);
    }
  }); // 再生開始をコールバックに通知 //

  trigger.play();
  this.fireEvent('play'); // 1ms毎コールバックの準備 //

  _play_update_note_js__WEBPACK_IMPORTED_MODULE_0__["default"].init(this, currentTime); // 1ms毎コールバックを開始 //

  var reserve = setInterval(function () {
    _play_update_note_js__WEBPACK_IMPORTED_MODULE_0__["default"].update(_this);
  }, 1);
  this.pushFunc({
    rootTimeout: reserve,
    stopFunc: function stopFunc() {
      clearInterval(reserve);
    }
  });
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpdateNote; });
/* harmony import */ var _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _util_parse_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var UpdateNote =
/*#__PURE__*/
function () {
  function UpdateNote() {
    _classCallCheck(this, UpdateNote);
  }

  _createClass(UpdateNote, null, [{
    key: "init",

    /**
     * 1ms毎処理用の変数を初期化
     */
    value: function init(picoAudio, currentTime) {
      this.updatePreTime = performance.now();
      this.pPreTime = performance.now();
      this.cPreTime = picoAudio.context.currentTime * 1000;
      this.pTimeSum = 0;
      this.cTimeSum = 0;
      this.cnt = 0;
      this.initCurrentTime = currentTime;
    }
    /**
     * 再生中、1ms毎に呼ばれるコールバック
     * （ブラウザの制限で実際は最短4ms毎に呼ばれる）
     * @returns {number} 現在の時間
     */

  }, {
    key: "update",
    value: function update(picoAudio) {
      var _this = this;

      var context = picoAudio.context;
      var settings = picoAudio.settings;
      var states = picoAudio.states;
      var updateNowTime = performance.now();
      var updatePreTime = this.updatePreTime;
      var pPreTime = this.pPreTime;
      var cPreTime = this.cPreTime;
      var pTimeSum = this.pTimeSum;
      var cTimeSum = this.cTimeSum;
      var cnt = this.cnt; // サウンドが重くないか監視（フリーズ対策） //
      //   performance.now()とAudioContext.currentTimeの時間差を計算し
      //   AudioContext.currentTimeが遅れていたら処理落ちしていると判断する

      var updateBufTime = updateNowTime - updatePreTime;
      var pTime = updateNowTime;
      var cTime = context.currentTime * 1000;
      pTimeSum += pTime - pPreTime;
      cTimeSum += cTime - cPreTime;
      pPreTime = pTime;
      cPreTime = cTime;
      var latencyTime = pTimeSum - cTimeSum;
      states.latencyTime = latencyTime; // サウンドが重い場合、負荷軽減処理を発動するリミットを上げていく //

      if (latencyTime >= 100) {
        // currentTimeが遅い（サウンドが重い）
        states.latencyLimitTime += latencyTime;
        cTimeSum += 100;
      } else if (latencyTime <= -100) {
        // currentTimeが速い（誤差）
        cTimeSum = pTimeSum;
      } else {
        if (states.latencyLimitTime > 0) {
          // currentTimeが丁度いい
          states.latencyLimitTime -= updateBufTime * 0.003;
          if (states.latencyLimitTime < 0) states.latencyLimitTime = 0;
        }
      } // ノートを先読み度合いを自動調整（予約しすぎると重くなる） //


      states.updateIntervalTime = updateBufTime;

      if (states.updateBufTime < updateBufTime) {
        // 先読み遅れている場合
        states.updateBufTime = updateBufTime;
      } else {
        // 先読み量に余裕がある場合
        // 先読み量を少しずつ減らす //
        if (states.updateBufMaxTime > 350) {
          states.updateBufMaxTime -= states.updateBufMaxTime * 0.002;
        } // 先読み量を少しずつ増やす //


        if (states.updateBufTime < 20) {
          states.updateBufTime += states.updateBufTime * 0.0005;
        }

        if (states.updateBufMaxTime >= 10 && states.updateBufMaxTime < 340) {
          states.updateBufMaxTime += states.updateBufMaxTime * 0.002;
        }
      } // 先読み量が足りなくなった場合


      if (states.updateBufTime > states.updateBufMaxTime) {
        if (updateBufTime >= 900 && states.latencyLimitTime <= 150) {
          // バックグラウンドっぽくて重くない場合、バックグラウンド再生
          states.updateBufMaxTime += updateBufTime;
        } else {
          // 通常
          var tempTime = updateBufTime - states.updateBufMaxTime;
          states.updateBufTime = states.updateBufMaxTime; // 先読み量が小さい場合大きくする

          if (states.updateBufMaxTime < 10) {
            states.updateBufTime = states.updateBufMaxTime;
            states.updateBufMaxTime *= 1.25;
          } else {
            states.updateBufMaxTime += tempTime / 2;
          }
        }

        if (states.updateBufMaxTime > 1100) states.updateBufMaxTime = 1100;
      } // サウンドが重すぎる場合、先読み度合いを小さくして負荷軽減 //


      if (states.latencyLimitTime > 150) {
        cTimeSum = pTimeSum;
        states.latencyLimitTime -= 5;
        if (states.latencyLimitTime > 1000) states.latencyLimitTime = 1000; // ノート先読みをかなり小さくする（フリーズ対策）

        states.updateBufMaxTime = 1;
        states.updateBufTime = 1;
        updateBufTime = 1;
      } // 再生処理 //


      for (var ch = 0; ch < 16; ch++) {
        var notes = picoAudio.playData.channels[ch].notes;
        var idx = states.playIndices[ch];

        var _loop2 = function _loop2() {
          var note = notes[idx];
          var curTime = cnt == 0 ? _this.initCurrentTime - states.startTime : context.currentTime - states.startTime; // 終わったノートは演奏せずにスキップ

          if (curTime >= note.stopTime) return "continue"; // （シークバーで途中から再生時）startTimeが過ぎたものは鳴らさない

          if (cnt == 0 && curTime > note.startTime + 0.05) return "continue"; // AudioParam.setValueAtTime()等でマイナスが入るとエラーになるので対策

          if (curTime + note.startTime < 0) return "continue"; // 演奏開始時間 - 先読み時間(ノート予約) になると演奏予約or演奏開始

          if (curTime < note.startTime - states.updateBufTime / 1000) return "break"; // PicoAudio音源の再生処理 //

          if (!settings.isWebMIDI) {
            // 予約ノート数が急激に増えそうな時、先読み量を小さくしておく //
            if (states.stopFuncs.length >= 350 && states.updateBufTime < 1000) {
              states.updateBufTime = 12;
              states.updateBufMaxTime = states.updateBufTime;
            } // レトロモード（和音制限モード） //


            if (settings.maxPoly != -1 || settings.maxPercPoly != -1) {
              var polyCnt = 0;
              var percCnt = 0;
              states.stopFuncs.forEach(function (tar) {
                if (!tar.note) return;

                if (tar.note.channel != 9) {
                  if (note.start >= tar.note.start && note.start < tar.note.stop) {
                    polyCnt++;
                  }
                } else {
                  if (note.start == tar.note.start) {
                    percCnt++;
                  }
                }
              });

              if (note.channel != 9 && polyCnt >= settings.maxPoly || note.channel == 9 && percCnt >= settings.maxPercPoly) {
                return "continue";
              }
            } // １ノート分の再生処理（WebAudioで再生） //


            var stopFunc = note.channel != 9 ? picoAudio.createNote(note) : picoAudio.createPercussionNote(note);
            if (!stopFunc) return "continue"; // 無音の場合、処理しない

            picoAudio.pushFunc({
              note: note,
              stopFunc: stopFunc
            });
          }

          states.noteOnAry.push(note);
        };

        _loop: for (; idx < notes.length; idx++) {
          var _ret = _loop2();

          switch (_ret) {
            case "continue":
              continue;

            case "break":
              break _loop;
          }
        } // notesのどこまで再生したかを記憶して、次回コールバック時にそこから処理を始める


        states.playIndices[ch] = idx;
      } // noteOnの時間になったか監視 //


      this.checkNoteOn(picoAudio); // noteOffの時間になったか監視 //

      this.checkNoteOff(picoAudio); // WebMIDIの再生処理 //

      if (settings.isWebMIDI && settings.WebMIDIPortOutput != null) {
        var messages = picoAudio.playData.messages;
        var smfData = picoAudio.playData.smfData;
        var _idx = states.playIndices[16]; // 17chはWebMIDI用

        for (; _idx < messages.length; _idx++) {
          var message = messages[_idx];
          var curTime = context.currentTime - states.startTime; // 終わったノートは演奏せずにスキップ

          if (curTime > message.time + 1) continue; // 演奏開始時間 - 先読み時間(ノート予約) になると演奏予約or演奏開始

          if (curTime < message.time - 1) break; // WebMIDIでMIDIメッセージを送信する処理 //

          var pLen = message.smfPtrLen;
          var p = message.smfPtr;
          var time = message.time;
          var state = smfData[p];

          if (state != 0xff) {
            try {
              if (state == 0xF0 || state == 0xF7) {
                // sysExのMIDIメッセージ
                if (settings.WebMIDIPortSysEx) {
                  // 長さ情報を取り除いて純粋なSysExメッセージにする
                  var lengthAry = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_1__["default"].variableLengthToInt(smfData, p + 1, p + 1 + 4);
                  var sysExStartP = p + 1 + lengthAry[1];
                  var sysExEndP = sysExStartP + lengthAry[0];
                  var webMIDIMes = new Uint8Array(1 + lengthAry[0]);
                  webMIDIMes[0] = state;
                  var size = sysExEndP - sysExStartP;

                  for (var i = 0; i < size; i++) {
                    webMIDIMes[i + 1] = smfData[sysExStartP + i];
                  }

                  settings.WebMIDIPortOutput.send(webMIDIMes, (time - context.currentTime + window.performance.now() / 1000 + states.startTime) * 1000);
                }
              } else {
                // sysEx以外のMIDIメッセージ
                var sendMes = [];

                for (var _i = 0; _i < pLen; _i++) {
                  sendMes.push(smfData[p + _i]);
                }

                settings.WebMIDIPortOutput.send(sendMes, (time - context.currentTime + window.performance.now() / 1000 + states.startTime) * 1000);
              }
            } catch (e) {
              console.log(e, p, pLen, time, state);
            }
          }
        } // messagesのどこまで送信したかを記憶して、次回コールバック時にそこから処理を始める


        states.playIndices[16] = _idx;
      } // 1msコールバックが呼ばれた回数をカウント


      cnt++; // 変数を反映 //

      this.updatePreTime = updateNowTime;
      this.pPreTime = pPreTime;
      this.cPreTime = cPreTime;
      this.pTimeSum = pTimeSum;
      this.cTimeSum = cTimeSum;
      this.cnt = cnt;
    }
    /**
     * noteOnの時間になったか監視
     * @param {PicoAudio} picoAudio PicoAudioインスタンス
     */

  }, {
    key: "checkNoteOn",
    value: function checkNoteOn(picoAudio) {
      var context = picoAudio.context;
      var trigger = picoAudio.trigger;
      var states = picoAudio.states;
      var noteOnAry = picoAudio.states.noteOnAry;
      var noteOffAry = picoAudio.states.noteOffAry;

      for (var i = 0; i < noteOnAry.length; i++) {
        var tempNote = noteOnAry[i];
        var nowTime = context.currentTime - states.startTime;

        if (tempNote.startTime - nowTime <= 0) {
          _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](noteOnAry, i); // noteOnAry.splice(i, 1); の高速化

          noteOffAry.push(tempNote); // イベント発火

          if (trigger.isNoteTrigger) trigger.noteOn(tempNote);
          picoAudio.fireEvent('noteOn', tempNote);
          i--;
        }
      }
    }
    /**
     * noteOffの時間になったか監視
     * @param {PicoAudio} picoAudio PicoAudioインスタンス
     */

  }, {
    key: "checkNoteOff",
    value: function checkNoteOff(picoAudio) {
      var context = picoAudio.context;
      var trigger = picoAudio.trigger;
      var states = picoAudio.states;
      var noteOffAry = picoAudio.states.noteOffAry;

      for (var i = 0; i < noteOffAry.length; i++) {
        var tempNote = noteOffAry[i];
        var nowTime = context.currentTime - states.startTime;

        if (tempNote.channel != 9 && tempNote.stopTime - nowTime <= 0 || tempNote.channel == 9 && tempNote.drumStopTime - nowTime <= 0) {
          _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](noteOffAry, i); // noteOffAry.splice(i, 1); の高速化

          picoAudio.clearFunc("note", tempNote); // イベント発火

          if (trigger.isNoteTrigger) trigger.noteOff(tempNote);
          picoAudio.fireEvent('noteOff', tempNote);
          i--;
        }
      }
    }
  }]);

  return UpdateNote;
}();



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ArrayUtil; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ArrayUtil =
/*#__PURE__*/
function (_Array) {
  _inherits(ArrayUtil, _Array);

  function ArrayUtil() {
    _classCallCheck(this, ArrayUtil);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrayUtil).apply(this, arguments));
  }

  _createClass(ArrayUtil, null, [{
    key: "delete",

    /**
     * 配列から要素１つを削除する
     * 
     *     Array.splice(index, 1); を高速化する
     *     特に配列末尾、又は配列先頭を削除するときに高速処理が期待できる
     * @param {Array} array 配列
     * @param {number} index 添え字
     */
    value: function _delete(array, index) {
      if (index == array.length - 1) array.pop(); // 配列末尾をArray.pop()で削除すると高速化する
      else if (index == 0) array.shift(); // 配列先頭をArray.shift()で削除すると高速化する（あまり変わらない環境もある）
        else array.splice(index, 1); // 配列先頭・末尾以外を削除する場合はArray.splice()で削除する
    }
  }]);

  return ArrayUtil;
}(_wrapNativeSuper(Array));



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParseUtil; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParseUtil =
/*#__PURE__*/
function () {
  function ParseUtil() {
    _classCallCheck(this, ParseUtil);
  }

  _createClass(ParseUtil, null, [{
    key: "getInt",

    /**
     * バイト配列内に含まれる"データ長"を数値に変換する
     * @param {Uint8Array} arr バイト配列
     * @param {number} startIdx データ長の始点の場所(index)
     * @param {number} endIdx データ長の終点の場所(index) - 1
     * @returns {number} データ長
     */
    value: function getInt(arr, startIdx, endIdx) {
      var value = 0;

      for (var i = startIdx; i < endIdx; i++) {
        value = (value << 8) + arr[i];
      }

      return value;
    }
    /**
     * バイト配列内に含まれる"可変長のデータ長"を数値に変換する
     * @param {Uint8Array} arr バイト配列
     * @param {number} startIdx データ長の始点の場所(index)
     * @param {number} endIdx データ長の終点の場所(index) - 1 (終点の場所は多くてもかまわない)
     * @returns {Array} [データ長, "可変長のデータ長"のバイト数]
     */

  }, {
    key: "variableLengthToInt",
    value: function variableLengthToInt(arr, startIdx, endIdx) {
      var i = startIdx;
      var value = 0;

      while (i < endIdx - 1 && arr[i] >= 0x80) {
        if (i < startIdx + 4) value = (value << 7) + (arr[i] - 0x80);
        i++;
      }

      value = (value << 7) + arr[i];
      i++;
      return [value, i - startIdx];
    }
    /**
     * デルタタイムの順番になるように配列に挿入
     * @param {PicoAudio} that PicoAudioインスタンス
     * @param {number} ch チャンネル番号
     * @param {number} time デルタタイム
     * @param {number} p 対象のMIDIイベントの場所(SMFデータ内の位置)
     * @param {number} len MIDIイベントの長さ
     */

  }, {
    key: "chIndicesInsert",
    value: function chIndicesInsert(that, ch, time, p, len) {
      var indices = ch.indices; // デルタタイムの順番になるようにリスト配列に挿入 //

      if (ch.indicesLength >= 4 && time < indices[ch.indicesFoot]) {
        // Insert //
        while (ch.indicesCur != -1) {
          if (time < indices[ch.indicesCur]) {
            if (ch.indicesCur == ch.indicesHead) {
              ch.indicesHead = ch.indicesLength;
            } else {
              indices[ch.indicesPre + 3] = ch.indicesLength;
            }

            indices[ch.indicesLength] = time;
            indices[ch.indicesLength + 1] = len;
            indices[ch.indicesLength + 2] = p;
            indices[ch.indicesLength + 3] = ch.indicesCur;
            ch.indicesPre = ch.indicesLength;
            ch.indicesLength += 4;
            break;
          }

          ch.indicesPre = ch.indicesCur;
          ch.indicesCur = indices[ch.indicesCur + 3];
        }
      } else {
        // Push //
        if (ch.indicesLength >= 4) {
          indices[ch.indicesFoot + 3] = ch.indicesLength;
        } else {
          ch.indicesHead = 0;
        }

        ch.indicesFoot = ch.indicesLength;
        indices[ch.indicesLength] = time;
        indices[ch.indicesLength + 1] = len;
        indices[ch.indicesLength + 2] = p;
        indices[ch.indicesLength + 3] = -1;
        ch.indicesLength += 4;
      }
    }
  }]);

  return ParseUtil;
}();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stop; });
function stop(isSongLooping) {
  var _this = this;

  var states = this.states; // 再生していない場合、何もしない //

  if (states.isPlaying == false) return; // ステータスを停止状態にする・終了処理を呼ぶ //

  states.isPlaying = false;
  states.stopTime = this.context.currentTime;
  states.stopFuncs.forEach(function (n) {
    // 再生中の音の停止関数を呼ぶ
    n.stopFunc();
  });
  states.stopFuncs = [];
  states.playIndices.forEach(function (n, i, ary) {
    ary[i] = 0;
  });
  states.noteOnAry = [];
  states.noteOffAry = []; // WebMIDIで再生中の場合、停止メッセージを送信 //

  if (this.settings.isWebMIDI) {
    if (isSongLooping) return;
    if (this.settings.WebMIDIPortOutput == null) return;
    states.webMIDIStopTime = this.context.currentTime;
    setTimeout(function () {
      for (var t = 0; t < 16; t++) {
        _this.settings.WebMIDIPortOutput.send([0xB0 + t, 120, 0]);
      }
    }, 1000);
  } // 停止をコールバックに通知 //


  this.trigger.stop();
  this.fireEvent('stop');
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createBaseNote; });
function createBaseNote(option, isDrum, isExpression, nonChannel, nonStop) {
  var _this = this;

  // 最低限の変数を準備（無音の場合は処理終了するため） //
  var settings = this.settings;
  var context = this.context;
  var songStartTime = this.states.startTime;
  var channel = nonChannel ? 0 : option.channel || 0;
  var velocity = option.velocity * Number(nonChannel ? 1 : this.channels[channel][2] != null ? this.channels[channel][2] : 1) * settings.generateVolume;
  var isGainValueZero = true; // 無音の場合は処理終了 //

  if (velocity <= 0) return {
    isGainValueZero: true
  }; // 音量の変化を設定 //

  var expGainValue = velocity * ((option.expression ? option.expression[0].value : 100) / 127);
  var expGainNode = context.createGain();
  expGainNode.gain.value = expGainValue;

  if (isExpression) {
    option.expression ? option.expression.forEach(function (p) {
      var v = velocity * (p.value / 127);
      if (v > 0) isGainValueZero = false;
      expGainNode.gain.setValueAtTime(v, p.time + songStartTime);
    }) : false;
  } else {
    if (expGainValue > 0) {
      isGainValueZero = false;
    }
  } // 無音の場合は処理終了 //


  if (isGainValueZero) {
    // 音量が常に0なら音を鳴らさない
    return {
      isGainValueZero: true
    };
  } // 全ての変数を準備 //


  var start = option.startTime + songStartTime;
  var stop = option.stopTime + songStartTime;
  var pitch = settings.basePitch * Math.pow(Math.pow(2, 1 / 12), (option.pitch || 69) - 69);
  var oscillator = !isDrum ? context.createOscillator() : context.createBufferSource();
  var panNode = context.createStereoPanner ? context.createStereoPanner() : context.createPanner ? context.createPanner() : {
    pan: {
      setValueAtTime: function setValueAtTime() {}
    }
  };
  var gainNode = context.createGain();
  var stopGainNode = context.createGain(); // ドラムはホワイトノイズ、ドラム以外はoscillatorを設定 //
  // oscillatorはピッチ変動も設定 //

  if (!isDrum) {
    oscillator.type = option.type || "sine";
    oscillator.detune.value = 0;
    oscillator.frequency.value = pitch;
    option.pitchBend ? option.pitchBend.forEach(function (p) {
      oscillator.frequency.setValueAtTime(settings.basePitch * Math.pow(Math.pow(2, 1 / 12), option.pitch - 69 + p.value), p.time + songStartTime);
    }) : false;
  } else {
    oscillator.loop = true;
    oscillator.buffer = this.whitenoise;
  } // パンの初期値を設定 //


  var panValue = option.pan && option.pan[0].value != 64 ? option.pan[0].value / 127 * 2 - 1 : 0;
  initPanValue(context, panNode, panValue); // パンの変動を設定 //

  if (context.createStereoPanner || context.createPanner) {
    // StereoPannerNode or PannerNode がどちらかでも使える
    var firstNode = true;

    if (context.createStereoPanner) {
      // StereoPannerNode が使える
      option.pan ? option.pan.forEach(function (p) {
        if (firstNode) {
          firstNode = false;
          return;
        }

        var v = p.value == 64 ? 0 : p.value / 127 * 2 - 1;
        if (v > 1.0) v = 1.0;
        panNode.pan.setValueAtTime(v, p.time + songStartTime);
      }) : false;
    } else if (context.createPanner) {
      // StereoPannerNode が未サポート、PannerNode が使える
      if (panNode.positionX) {
        // setValueAtTimeが使える
        // Old Browser
        option.pan ? option.pan.forEach(function (p) {
          if (firstPan) {
            firstPan = false;
            return;
          }

          var v = p.value == 64 ? 0 : p.value / 127 * 2 - 1;
          var posObj = convPosition(v);
          panNode.positionX.setValueAtTime(posObj.x, p.time + songStartTime);
          panNode.positionY.setValueAtTime(posObj.y, p.time + songStartTime);
          panNode.positionZ.setValueAtTime(posObj.z, p.time + songStartTime);
        }) : false;
      } else {
        // iOS
        // setValueAtTimeが使えないためsetTimeoutでパンの動的変更
        option.pan ? option.pan.forEach(function (p) {
          if (firstNode) {
            firstNode = false;
            return;
          }

          var reservePan = setTimeout(function () {
            _this.clearFunc("pan", reservePan);

            var v = p.value == 64 ? 0 : p.value / 127 * 2 - 1;
            if (v > 1.0) v = 1.0;
            var posObj = convPosition(v);
            panNode.setPosition(posObj.x, posObj.y, posObj.z);
          }, (p.time + songStartTime - context.currentTime) * 1000);

          _this.pushFunc({
            pan: reservePan,
            stopFunc: function stopFunc() {
              clearTimeout(reservePan);
            }
          });
        }) : false;
      }
    }

    oscillator.connect(panNode);
    panNode.connect(expGainNode);
  } else {
    // StereoPannerNode、PannerNode が未サポート
    oscillator.connect(expGainNode);
  } // AudioNodeを接続 //


  expGainNode.connect(gainNode);
  gainNode.connect(stopGainNode);
  stopGainNode.connect(this.masterGainNode);
  this.masterGainNode.connect(context.destination); // モジュレーションの変動を設定 //

  var modulationOscillator;
  var modulationGainNode;

  if (!isDrum && option.modulation && (option.modulation.length >= 2 || option.modulation[0].value > 0)) {
    modulationOscillator = context.createOscillator();
    modulationGainNode = context.createGain();
    var _firstNode = true;
    option.modulation ? option.modulation.forEach(function (p) {
      if (_firstNode) {
        _firstNode = false;
        return;
      }

      var m = p.value / 127;
      if (m > 1.0) m = 1.0;
      modulationGainNode.gain.setValueAtTime(pitch * 10 / 440 * m, p.time + songStartTime);
    }) : false;
    var m = option.modulation ? option.modulation[0].value / 127 : 0;
    if (m > 1.0) m = 1.0;
    modulationGainNode.gain.value = pitch * 10 / 440 * m;
    modulationOscillator.frequency.value = 6;
    modulationOscillator.connect(modulationGainNode);
    modulationGainNode.connect(oscillator.frequency);
  } // リバーブの変動を設定 //


  if (this.settings.isReverb && option.reverb && (option.reverb.length >= 2 || option.reverb[0].value > 0)) {
    var convolver = this.convolver;
    var convolverGainNode = context.createGain();
    var _firstNode2 = true;
    option.reverb ? option.reverb.forEach(function (p) {
      if (_firstNode2) {
        _firstNode2 = false;
        return;
      }

      var r = p.value / 127;
      if (r > 1.0) r = 1.0;
      convolverGainNode.gain.setValueAtTime(r, p.time + songStartTime);
    }) : false;
    var r = option.reverb ? option.reverb[0].value / 127 : 0;
    if (r > 1.0) r = 1.0;
    convolverGainNode.gain.value = r;
    gainNode.connect(stopGainNode);
    stopGainNode.connect(convolverGainNode);
    convolverGainNode.connect(convolver);
  } // コーラスの変動を設定 //


  if (this.settings.isChorus && option.chorus && (option.chorus.length >= 2 || option.chorus[0].value > 0)) {
    var chorusDelayNode = this.chorusDelayNode;
    var chorusGainNode = context.createGain();
    var _firstNode3 = true;
    option.chorus ? option.chorus.forEach(function (p) {
      if (_firstNode3) {
        _firstNode3 = false;
        return;
      }

      var c = p.value / 127;
      if (c > 1.0) c = 1.0;
      chorusGainNode.gain.setValueAtTime(c, p.time + songStartTime);
    }) : false;
    var c = option.chorus ? option.chorus[0].value / 127 : 0;
    if (c > 1.0) c = 1.0;
    chorusGainNode.gain.value = c;
    gainNode.connect(stopGainNode);
    stopGainNode.connect(chorusGainNode);
    chorusGainNode.connect(chorusDelayNode);
  } // モジュレーションをスタート //


  if (modulationOscillator) {
    modulationOscillator.start(start);
    this.stopAudioNode(modulationOscillator, stop, modulationGainNode);
  } // oscillator又はホワイトノイズをスタート //


  oscillator.start(start);

  if (!isDrum && !nonChannel && !nonStop) {
    this.stopAudioNode(oscillator, stop, stopGainNode);
  } // AudioNodeやパラメータを返す //


  return {
    start: start,
    stop: stop,
    pitch: pitch,
    channel: channel,
    velocity: velocity,
    oscillator: oscillator,
    panNode: panNode,
    gainNode: gainNode,
    stopGainNode: stopGainNode,
    isGainValueZero: false
  };
}
/**
 * パンの初期値を設定
 * @param {PannerNode | StereoPannerNode} panNode 
 * @param {number} panValue 
 */

function initPanValue(context, panNode, panValue) {
  if (context.createStereoPanner) {
    if (panValue > 1.0) panValue = 1.0;
    panNode.pan.value = panValue;
  } else if (context.createPanner) {
    // iOS, Old Browser
    var posObj = convPosition(panValue);
    panNode.panningModel = "equalpower";
    panNode.setPosition(posObj.x, posObj.y, posObj.z);
  }
}
/**
 * pan値を基に、PannerNode用の値を{x, y, z}で返す
 * @param {number} panValue panの値
 * @returns Object{x, y, z}
 */


function convPosition(panValue) {
  if (panValue > 1.0) panValue = 1.0;
  var obj = {};
  var panAngle = panValue * 90;
  obj.x = Math.sin(panAngle * (Math.PI / 180));
  obj.y = 0;
  obj.z = -Math.cos(panAngle * (Math.PI / 180));
  return obj;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createNote; });
function createNote(option) {
  var _this = this;

  var note = this.createBaseNote(option, false, true, false, true); // oscillatorのstopはこちらで実行するよう指定

  if (note.isGainValueZero) return null;
  var oscillator = note.oscillator;
  var gainNode = note.gainNode;
  var stopGainNode = note.stopGainNode;
  var isPizzicato = false;
  var isNoiseCut = false;
  var note2; // 音色の設定 //

  switch (this.channels[note.channel][0] * 1000 || option.instrument) {
    // Sine
    case 1000:
    case 6:
    case 15:
    case 24:
    case 26:
    case 46:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 82:
    case 85:
    case 86:
      {
        oscillator.type = "sine";
        gainNode.gain.value *= 1.5;
        break;
      }
    // Square

    case 2000:
    case 4:
    case 12:
    case 13:
    case 16:
    case 19:
    case 20:
    case 32:
    case 34:
    case 45:
    case 48:
    case 49:
    case 55:
    case 56:
    case 57:
    case 61:
    case 62:
    case 63:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 84:
      {
        oscillator.type = "square";
        gainNode.gain.value *= 0.8;
        break;
      }
    // Sawtooth

    case 3000:
    case 0:
    case 1:
    case 2:
    case 3:
    case 6:
    case 7:
    case 17:
    case 18:
    case 21:
    case 22:
    case 23:
    case 27:
    case 28:
    case 29:
    case 30:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 47:
    case 59:
    case 64:
    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 82:
    case 87:
      {
        oscillator.type = "sawtooth";
        break;
      }
    // Triangle

    case 4000:
    case 8:
    case 9:
    case 10:
    case 11:
    case 14:
    case 25:
    case 31:
    case 33:
    case 35:
    case 58:
    case 60:
    case 83:
    case 88:
    case 89:
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
      {
        oscillator.type = "triangle";
        gainNode.gain.value *= 1.5;
        break;
      }
    // Other - Square

    default:
      {
        oscillator.type = "square";
      }
  } // 音の終わりのプチプチノイズが気になるので、音の終わりに5ms減衰してノイズ軽減 //


  if ((oscillator.type == "sine" || oscillator.type == "triangle") && !isPizzicato && note.stop - note.start > 0.01) {
    isNoiseCut = true;
  } // 減衰の設定 //


  switch (this.channels[note.channel][1] / 10 || option.instrument) {
    // ピッチカート系減衰
    case 0.2:
    case 12:
    case 13:
    case 45:
    case 55:
      {
        isPizzicato = true;
        gainNode.gain.value *= 1.1;
        gainNode.gain.setValueAtTime(gainNode.gain.value, note.start);
        gainNode.gain.linearRampToValueAtTime(0.0, note.start + 0.2);
        this.stopAudioNode(oscillator, note.start + 0.2, stopGainNode);
        break;
      }
    // ピアノ程度に伸ばす系

    case 0.3:
    case 0:
    case 1:
    case 2:
    case 3:
    case 6:
    case 9:
    case 11:
    case 14:
    case 15:
    case 32:
    case 36:
    case 37:
    case 46:
    case 47:
      {
        gainNode.gain.value *= 1.1;
        var decay = (128 - option.pitch) / 128;
        gainNode.gain.setValueAtTime(gainNode.gain.value, note.start);
        gainNode.gain.linearRampToValueAtTime(gainNode.gain.value * 0.85, note.start + decay * decay / 8);
        gainNode.gain.linearRampToValueAtTime(gainNode.gain.value * 0.8, note.start + decay * decay / 4);
        gainNode.gain.setTargetAtTime(0, note.start + decay * decay / 4, 5 * decay * decay);
        this.stopAudioNode(oscillator, note.stop, stopGainNode, isNoiseCut);
        break;
      }
    // ギター系

    case 0.4:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 34:
      {
        gainNode.gain.value *= 1.1;
        gainNode.gain.setValueAtTime(gainNode.gain.value, note.start);
        gainNode.gain.linearRampToValueAtTime(0.0, note.start + 1.0 + note.velocity * 4);
        this.stopAudioNode(oscillator, note.stop, stopGainNode, isNoiseCut);
        break;
      }
    // 減衰していくけど終わらない系

    case 0.5:
    case 4:
    case 5:
    case 7:
    case 8:
    case 10:
    case 33:
    case 35:
      {
        gainNode.gain.value *= 1.0;
        gainNode.gain.setValueAtTime(gainNode.gain.value, note.start);
        gainNode.gain.linearRampToValueAtTime(gainNode.gain.value * 0.95, note.start + 0.1);
        gainNode.gain.setValueAtTime(gainNode.gain.value * 0.95, note.start + 0.1);
        gainNode.gain.linearRampToValueAtTime(0.0, note.start + 2.0 + note.velocity * 10);
        this.stopAudioNode(oscillator, note.stop, stopGainNode, isNoiseCut);
        break;
      }

    case 119:
      // Reverse Cymbal
      {
        gainNode.gain.value = 0;
        this.stopAudioNode(oscillator, note.stop, stopGainNode, isNoiseCut);
        note2 = this.createBaseNote(option, true, true);
        if (note2.isGainValueZero) break;
        note2.oscillator.playbackRate.setValueAtTime((option.pitch + 1) / 128, note.start);
        note2.gainNode.gain.setValueAtTime(0, note.start);
        note2.gainNode.gain.linearRampToValueAtTime(1.3, note.start + 2);
        this.stopAudioNode(note2.oscillator, note.stop, note2.stopGainNode);
        break;
      }

    default:
      {
        gainNode.gain.value *= 1.1;
        gainNode.gain.setValueAtTime(gainNode.gain.value, note.start);
        this.stopAudioNode(oscillator, note.stop, stopGainNode, isNoiseCut);
      }
  } // 音をストップさせる関数を返す //


  return function () {
    _this.stopAudioNode(oscillator, 0, stopGainNode, true);

    if (note2 && note2.oscillator) _this.stopAudioNode(note2.oscillator, 0, note2.stopGainNode, true);
  };
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createPercussionNote; });
function createPercussionNote(option) {
  var _this = this;

  var note = this.createBaseNote(option, true, false);
  if (note.isGainValueZero) return null;
  var source = note.oscillator;
  var gainNode = note.gainNode;
  var stopGainNode = note.stopGainNode;
  var start = note.start;
  var velocity = 1; // ドラム全体の音量調整用

  var note2 = this.createBaseNote(option, false, false, true);
  var oscillator = note2.oscillator;
  var gainNode2 = note2.gainNode;
  var stopGainNode2 = note2.stopGainNode;
  var nextSameNoteOnInterval = option.nextSameNoteOnInterval; // oscillator.frequency.setValueAtTime()がcurrentTimeより遅れると周波数設定がされないので対策

  if (start < this.context.currentTime) start = this.context.currentTime;
  var stopAudioTime = 0;
  var stopAudioTime2 = 0;

  switch (option.pitch) {
    // 元々のパーカッション音源 //
    // Bass drum
    case 35:
    case 36:
      // w
      gainNode.gain.value = velocity * 0.6;
      source.playbackRate.value = 0.02;
      stopAudioTime = 0.07; // s

      gainNode2.gain.value = velocity * 1.1;
      oscillator.frequency.setValueAtTime(120, start);
      oscillator.frequency.linearRampToValueAtTime(50, start + 0.07);
      stopAudioTime2 = 0.07;
      break;
    // Snare

    case 38:
    case 40:
      // w
      source.playbackRate.value = 0.7;
      stopAudioTime = 0.05; // s

      gainNode2.gain.setValueAtTime(velocity * 0.8, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.05);
      oscillator.frequency.setValueAtTime(300, start);
      oscillator.frequency.linearRampToValueAtTime(200, start + 0.05);
      stopAudioTime2 = 0.05;
      break;
    // Toms

    case 41:
    case 43:
    case 45:
    case 47:
    case 48:
    case 50:
      // w
      source.playbackRate.value = 0.01;
      stopAudioTime = 0.1; // s

      oscillator.type = "square";
      gainNode2.gain.setValueAtTime(velocity, start);
      gainNode2.gain.linearRampToValueAtTime(0.01, start + 0.1);
      oscillator.frequency.setValueAtTime(150 + 20 * (option.pitch - 40), start);
      oscillator.frequency.linearRampToValueAtTime(50 + 20 * (option.pitch - 40), start + 0.1);
      stopAudioTime2 = 0.1;
      break;
    // Close Hihat

    case 42:
    case 44:
      source.playbackRate.value = 1.5;
      stopAudioTime = 0.02;
      stopAudioTime2 = 0;
      break;
    // Open Hihat

    case 46:
      source.playbackRate.value = 1.5;
      stopAudioTime = 0.3;
      gainNode.gain.setValueAtTime(velocity * 0.9, start);
      gainNode.gain.linearRampToValueAtTime(0.0, start + 0.3);
      stopAudioTime2 = 0;
      break;
    // Cymbal

    case 49:
    case 51:
    case 52:
    case 53:
    case 55:
    case 57:
      source.playbackRate.value = 1.2;
      stopAudioTime = 0.5;
      gainNode.gain.setValueAtTime(velocity * 1, start);
      gainNode.gain.linearRampToValueAtTime(0.0, start + 0.5);
      stopAudioTime2 = 0;
      break;
    // Cymbal2

    case 51:
      source.playbackRate.value = 1.1;
      stopAudioTime = 0.4;
      gainNode.gain.setValueAtTime(velocity * 0.8, start);
      gainNode.gain.linearRampToValueAtTime(0.0, start + 0.4);
      stopAudioTime2 = 0;
      break;
    // Cymbal3

    case 59:
      source.playbackRate.value = 1.8;
      stopAudioTime = 0.3;
      gainNode.gain.setValueAtTime(velocity * 0.5, start);
      gainNode.gain.linearRampToValueAtTime(0.0, start + 0.3);
      stopAudioTime2 = 0;
      break;
    // Bongo

    case 60:
    case 61:
      // w
      source.playbackRate.value = 0.03;
      stopAudioTime = 0.03; // s

      gainNode2.gain.setValueAtTime(velocity * 0.8, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.1);
      oscillator.frequency.setValueAtTime(400 - 40 * (option.pitch - 60), start);
      oscillator.frequency.linearRampToValueAtTime(450 - 40 * (option.pitch - 60), start + 0.1);
      stopAudioTime2 = 0.1;
      break;
    // mute Conga

    case 62:
      // w
      source.playbackRate.value = 0.03;
      stopAudioTime = 0.03; // s

      gainNode2.gain.setValueAtTime(velocity, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.03);
      oscillator.frequency.setValueAtTime(200, start);
      oscillator.frequency.linearRampToValueAtTime(250, start + 0.03);
      stopAudioTime2 = 0.03;
      break;
    // open Conga

    case 63:
    case 64:
      // w
      source.playbackRate.value = 0.03;
      stopAudioTime = 0.03; // s

      gainNode2.gain.setValueAtTime(velocity, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.1);
      oscillator.frequency.setValueAtTime(200 - 30 * (option.pitch - 63), start);
      oscillator.frequency.linearRampToValueAtTime(250 - 30 * (option.pitch - 63), start + 0.1);
      stopAudioTime2 = 0.1;
      break;
    // Cowbell, Claves

    case 56:
    case 75:
      // w
      source.playbackRate.value = 0.01;
      stopAudioTime = 0.1; // s

      gainNode2.gain.setValueAtTime(velocity, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.1);
      oscillator.frequency.setValueAtTime(1000 + 48 * (option.pitch - 56), start);
      stopAudioTime2 = 0.1;
      break;
    // mute triangle

    case 80:
      // w
      source.playbackRate.value = 5;
      gainNode.gain.setValueAtTime(velocity * 0.5, start);
      gainNode.gain.linearRampToValueAtTime(0.0, start + 0.2);
      stopAudioTime = 0.05; // s

      oscillator.type = "triangle";
      gainNode2.gain.setValueAtTime(velocity * 0.7, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.2);
      oscillator.frequency.setValueAtTime(6000, start);
      stopAudioTime2 = 0.05;
      break;
    // open triangle

    case 81:
      // w
      source.playbackRate.value = 5;
      gainNode.gain.setValueAtTime(velocity * 0.9, start);
      gainNode.gain.linearRampToValueAtTime(0.0, start + 0.5);
      stopAudioTime = 0.5; // s

      oscillator.type = "triangle";
      gainNode2.gain.setValueAtTime(velocity * 0.8, start);
      gainNode2.gain.linearRampToValueAtTime(0.0, start + 0.3);
      oscillator.frequency.setValueAtTime(6000, start);
      stopAudioTime2 = 0.3;
      break;
    // 新しいパーカッション音源 //
    //     旧音源が優先で鳴る。上のソース
    //     旧音源で定義されていない場合は、新音源で鳴る。下のソース //
    // Bass Drum

    case 35: // Acoustic Bass Drum

    case 36:
      // Bass Drum
      {
        // w
        source.playbackRate.value = 0.25;
        gainNode.gain.setValueAtTime(0, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.7, start + 0.004);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.008);
        stopAudioTime = 0.008; // s

        oscillator.frequency.setValueAtTime(option.pitch == 35 ? 90 : 160, start);
        oscillator.frequency.linearRampToValueAtTime(40, start + 0.08);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * 3, start + 0.02);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.08);
        stopAudioTime2 = 0.08;
        break;
      }
    // Snare Drum

    case 37:
      // Side Stick
      {
        // w
        source.playbackRate.value = 0.26;
        gainNode.gain.setValueAtTime(velocity * 1.5, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.041);
        stopAudioTime = 0.041; // s

        oscillator.frequency.setValueAtTime(330, start);
        oscillator.frequency.linearRampToValueAtTime(120, start + 0.02);
        gainNode2.gain.setValueAtTime(velocity, start);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.02);
        stopAudioTime2 = 0.02;
        break;
      }

    case 38: // Acoustic Snare

    case 40:
      // Electric Snare
      {
        var len = option.pitch == 38 ? 0.25 : 0.2; // w

        source.playbackRate.value = 0.7;
        gainNode.gain.setValueAtTime(velocity, start);
        gainNode.gain.linearRampToValueAtTime(0, start + len);
        stopAudioTime = len; // s

        oscillator.frequency.setValueAtTime(option.pitch == 38 ? 140 : 200, start);
        oscillator.frequency.linearRampToValueAtTime(option.pitch == 38 ? 100 : 160, start + 0.1);
        gainNode2.gain.setValueAtTime(velocity * 2, start);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.1);
        stopAudioTime2 = 0.1;
        break;
      }

    case 39:
      // Hand Clap
      {
        // w
        source.playbackRate.value = 0.5;
        gainNode.gain.setValueAtTime(velocity * 1.3, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.010);
        gainNode.gain.setValueAtTime(velocity * 1.3, start + 0.0101);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.020);
        gainNode.gain.setValueAtTime(velocity * 1.3, start + 0.0201);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.09);
        stopAudioTime = 0.09; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(180, start);
        gainNode2.gain.setValueAtTime(velocity * 0.8, start);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.010);
        gainNode2.gain.setValueAtTime(velocity * 0.8, start + 0.0101);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.020);
        gainNode2.gain.setValueAtTime(velocity * 0.8, start + 0.0201);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.030);
        stopAudioTime2 = 0.11;
        break;
      }
    // Toms

    case 41: // Low Floor Tom

    case 43: // High Floor Tom

    case 45: // Low Tom

    case 47: // Low-Mid Tom

    case 48: // High-Mid Tom

    case 50:
      // High Tom
      {
        var _len = option.pitch - 41 + (option.pitch >= 48 ? 1 : 0); // w


        source.playbackRate.value = 0.3 + _len / 45;
        gainNode.gain.setValueAtTime(velocity * 1.5, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.02);
        stopAudioTime = 0.02; // s

        oscillator.frequency.setValueAtTime(90 + 15 * _len, start);
        oscillator.frequency.linearRampToValueAtTime(30 + 7.5 * _len, start + 0.5 - _len / 35);
        gainNode2.gain.setValueAtTime(velocity * 1.5, start);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.5 - _len / 35);
        stopAudioTime2 = 0.5 - _len / 35;
        break;
      }
    // Hi-hat

    case 42: // Closed High-Hat

    case 44:
      // Pedal High-Hat
      {
        // w
        source.playbackRate.value = 1;

        if (option.pitch == 42) {
          gainNode.gain.setValueAtTime(velocity * 0.8, start);
        } else {
          gainNode.gain.setValueAtTime(0, start);
          gainNode.gain.linearRampToValueAtTime(velocity * 0.8, start + 0.014);
        }

        gainNode.gain.linearRampToValueAtTime(0, start + 0.08);
        stopAudioTime = 0.08; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 46:
      // Open Hihat
      {
        // w
        source.playbackRate.setValueAtTime(0.35, start);
        source.playbackRate.linearRampToValueAtTime(0.6, start + 0.1);
        source.playbackRate.linearRampToValueAtTime(1, start + 0.3);
        gainNode.gain.setValueAtTime(velocity * 1.1, start);
        gainNode.gain.setTargetAtTime(0, start, 0.3);
        stopAudioTime = 1.5; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }
    // Cymbal

    case 49: // Crash Cymbal 1

    case 57:
      // Crash Cymbal 2
      {
        // w
        var r = option.pitch == 49 ? 0.3 : 0.5;
        var r2 = option.pitch == 49 ? 0.4 : 0.7;
        source.playbackRate.setValueAtTime(r, start);
        source.playbackRate.linearRampToValueAtTime(r2, start + 0.15);
        source.playbackRate.linearRampToValueAtTime(0.9, start + 0.4);
        gainNode.gain.setValueAtTime(velocity * 1.3, start);
        gainNode.gain.setTargetAtTime(0, start, 0.35);
        stopAudioTime = 2; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 51: // Ride Cymbal 1

    case 59:
      // Ride Cymbal 2
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 0.9, start);
        gainNode.gain.setTargetAtTime(0, start, 0.35);
        stopAudioTime = 2; // s

        oscillator.type = "triangle";
        var f = option.pitch == 51 ? 372 : 400;
        oscillator.frequency.setValueAtTime(f, start);
        gainNode2.gain.setValueAtTime(velocity * 0.4, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.35);
        stopAudioTime2 = 2;
        break;
      }

    case 52:
      // Chinese Cymbal
      {
        // w
        source.playbackRate.setValueAtTime(0.17, start);
        source.playbackRate.linearRampToValueAtTime(0.25, start + 0.1);
        source.playbackRate.linearRampToValueAtTime(0.5, start + 0.6);
        gainNode.gain.setValueAtTime(velocity * 1.3, start);
        gainNode.gain.setTargetAtTime(0, start, 0.35);
        stopAudioTime = 2; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(382, start);
        gainNode2.gain.setValueAtTime(velocity * 0.2, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.35);
        stopAudioTime2 = 2;
        break;
      }

    case 53:
      // Ride Bell
      {
        // w
        source.playbackRate.setValueAtTime(0.6, start);
        gainNode.gain.setValueAtTime(velocity, start);
        gainNode.gain.setTargetAtTime(0, start, 0.3);
        stopAudioTime = 2; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(377, start);
        gainNode2.gain.setValueAtTime(velocity * 0.5, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.35);
        stopAudioTime2 = 2;
        break;
      }

    case 55:
      // Splash Cymbal
      {
        // w
        source.playbackRate.setValueAtTime(0.5, start);
        source.playbackRate.linearRampToValueAtTime(0.8, start + 0.1);
        source.playbackRate.linearRampToValueAtTime(1, start + 0.6);
        gainNode.gain.setValueAtTime(velocity * 1.5, start);
        gainNode.gain.setTargetAtTime(0, start, 0.3);
        stopAudioTime = 1.75; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }
    // Bell

    case 54: // Tambourine

    case 56:
      // Cowbell
      {
        // w
        source.playbackRate.setValueAtTime(1, start);
        var v = option.pitch == 54 ? 1 : 0.4;

        var _len2 = option.pitch == 54 ? 0.01 : 0;

        gainNode.gain.setValueAtTime(velocity * v / 2, start);
        gainNode.gain.linearRampToValueAtTime(velocity * v, start + _len2);
        gainNode.gain.setTargetAtTime(0, start + _len2, 0.05);
        stopAudioTime = 0.3; // s

        oscillator.frequency.setValueAtTime(option.pitch == 54 ? 6000 : 495, start);
        v = option.pitch == 54 ? 1 : 2;
        gainNode2.gain.setValueAtTime(velocity * v / 2, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * v, start + _len2);
        gainNode2.gain.setTargetAtTime(0, start + _len2, 0.05);
        stopAudioTime2 = 0.3;
        break;
      }

    case 58:
      // Vibraslap
      {
        // w s
        source.playbackRate.setValueAtTime(0.6, start);
        source.playbackRate.linearRampToValueAtTime(1, start + 0.8);
        var _len3 = 40;
        gainNode.gain.setValueAtTime(velocity * 1.5, start);
        gainNode2.gain.setValueAtTime(velocity * 0.5, start);

        for (var i = 0; i < _len3; i++) {
          gainNode.gain.linearRampToValueAtTime(velocity * 0.1 * (_len3 - i) / _len3, start + i / _len3 * 0.8);
          gainNode.gain.linearRampToValueAtTime(velocity * 1.5 * (_len3 - (i + 1)) / _len3, start + (i + 0.99) / _len3 * 0.8);
          gainNode2.gain.linearRampToValueAtTime(velocity * 0.025 * (_len3 - i) / _len3, start + i / _len3 * 0.8);
          gainNode2.gain.linearRampToValueAtTime(velocity * 0.25 * (_len3 - (i + 1)) / _len3, start + (i + 0.99) / _len3 * 0.8);
        }

        gainNode.gain.linearRampToValueAtTime(0, start + 0.8);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.8);
        stopAudioTime = 0.8; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(1000, start);
        stopAudioTime2 = 0.8;
        break;
      }

    case 80:
      // Mute Triangle
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 0.5, start);
        gainNode.gain.setTargetAtTime(0, start, 0.015);
        stopAudioTime = 0.2; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(6000, start);
        gainNode2.gain.setValueAtTime(velocity * 2.5, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.02);
        stopAudioTime2 = 0.3;
        break;
      }

    case 81:
      // Open Triangle
      {
        // w
        source.playbackRate.value = 5;
        gainNode.gain.setValueAtTime(velocity * 0.5, start);
        gainNode.gain.setTargetAtTime(0, start, 0.08);
        stopAudioTime = 0.75; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(6000, start);
        gainNode2.gain.setValueAtTime(velocity * 2.5, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.18);
        stopAudioTime2 = 1;
        break;
      }
    // Other Percussion

    case 60: // High Bongo

    case 61: // Low Bongo

    case 62: // Mute High Conga

    case 63: // Open High Conga

    case 64:
      // Low Conga
      {
        var p = option.pitch;

        var _r = p == 60 ? 700 : p == 61 ? 282 : p == 62 ? 385 : p == 63 ? 295 : 210;

        var _len4 = p == 60 ? 0.08 : p == 61 ? 0.1 : p == 62 ? 0.03 : p == 63 ? 0.12 : 0.15; // w


        source.playbackRate.value = 0.03;
        gainNode.gain.setValueAtTime(velocity * 1.2, start);
        stopAudioTime = 0.03; // s

        oscillator.frequency.setValueAtTime(_r * 0.97, start);
        oscillator.frequency.linearRampToValueAtTime(_r, start + _len4);
        gainNode2.gain.setValueAtTime(velocity * 1.8, start);
        gainNode2.gain.linearRampToValueAtTime(0, start + _len4);
        stopAudioTime2 = _len4;
        break;
      }

    case 65: // High Timbale

    case 66:
      // Low Timbale
      {
        var _len5 = option.pitch == 65 ? 0.22 : 0.25; // w


        source.playbackRate.setValueAtTime(option.pitch == 65 ? 0.25 : 0.22, start);
        source.playbackRate.linearRampToValueAtTime(option.pitch == 65 ? 0.2 : 0.18, start + _len5);
        gainNode.gain.setValueAtTime(velocity * 1.3, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.2, start + _len5 / 3.5);
        gainNode.gain.linearRampToValueAtTime(0, start + _len5);
        stopAudioTime = _len5; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(option.pitch == 65 ? 190 * 1.07 : 136 * 1.07, start);
        oscillator.frequency.linearRampToValueAtTime(option.pitch == 65 ? 190 : 136, start + 0.1);
        gainNode2.gain.setValueAtTime(velocity * 3.2, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.08);
        stopAudioTime2 = 1;
        break;
      }

    case 67: // High Agogo

    case 68:
      // Low Agogo
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 0.5, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.1, start + 0.02);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.08);
        stopAudioTime = 0.08; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(option.pitch == 67 ? 1430 : 1055, start);
        gainNode2.gain.setValueAtTime(velocity * 2, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.06);
        stopAudioTime2 = 0.75;
        break;
      }

    case 69:
      // Cabasa
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 0.3, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.8, start + 0.03);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.08);
        stopAudioTime = 0.08; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 70:
      // Maracas
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 1.2, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.06);
        stopAudioTime = 0.06; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 71: // Short Whistle

    case 72:
      // Long Whistle
      {
        // w
        gainNode.gain.value = 0;
        stopAudioTime = 0; // s

        var _len6 = option.pitch == 71 ? 0.07 : 0.4;

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(option.pitch == 71 ? 2408 : 2105, start);
        gainNode2.gain.setValueAtTime(0, start);

        for (var _i = 0; _i < _len6 * 74; _i++) {
          gainNode2.gain.linearRampToValueAtTime(velocity * 2.5, start + (_i + 0.2) / 75);
          gainNode2.gain.linearRampToValueAtTime(velocity * 0.5, start + (_i + 0.9) / 75);
        }

        gainNode2.gain.linearRampToValueAtTime(0, start + _len6);
        stopAudioTime2 = _len6;
        break;
      }

    case 73: // Short Guiro

    case 74:
      // Long Guiro
      {
        // w
        var _len7 = option.pitch == 73 ? 0.05 : 0.35;

        source.playbackRate.setValueAtTime(option.pitch == 73 ? 0.2 : 0.2, start);
        source.playbackRate.linearRampToValueAtTime(option.pitch == 73 ? 0.7 : 0.5, start + _len7);
        gainNode.gain.value = velocity * 0.2;

        for (var _i2 = 0; _i2 < _len7 * 100; _i2++) {
          gainNode.gain.setValueAtTime(velocity * 0.4, start + _i2 / 100);
          gainNode.gain.setValueAtTime(velocity * 0.9, start + (_i2 + 0.7) / 100);
        }

        stopAudioTime = _len7; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 75:
      // Claves
      {
        // w
        gainNode.gain.value = 0;
        stopAudioTime = 0; // s

        oscillator.frequency.setValueAtTime(2181, start);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.setValueAtTime(velocity * 2, start + 0.005);
        gainNode2.gain.linearRampToValueAtTime(velocity * 1, start + 0.015);
        gainNode2.gain.linearRampToValueAtTime(velocity * 1.5, start + 0.025);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.08);
        stopAudioTime2 = 0.1;
        break;
      }

    case 76: // High Wood Block

    case 77:
      // Low Wood Block
      {
        // w
        source.playbackRate.value = 0.1;
        gainNode.gain.setValueAtTime(velocity * 1.2, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.015);
        stopAudioTime = 0.015; // s

        oscillator.frequency.setValueAtTime(option.pitch == 76 ? 800 : 600, start);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * 3, start + 0.005);
        gainNode2.gain.setTargetAtTime(0, start + 0.005, 0.02);
        stopAudioTime2 = 0.2;
        break;
      }

    case 78: // Close Cuica

    case 79:
      // Open Cuica
      {
        // w
        gainNode.gain.value = 0;
        stopAudioTime = 0; // s

        var _len8 = 0.18;

        var _f = option.pitch == 78 ? 750 : 270;

        oscillator.frequency.setValueAtTime(_f, start);
        oscillator.frequency.linearRampToValueAtTime(_f, start + _len8 / 3);
        if (option.pitch == 78) oscillator.frequency.linearRampToValueAtTime(_f * 0.9, start + _len8);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * 1.5, start + 0.005);
        gainNode2.gain.linearRampToValueAtTime(velocity * 0.5, start + 0.02);
        gainNode2.gain.linearRampToValueAtTime(velocity * 3, start + 0.04);
        gainNode2.gain.linearRampToValueAtTime(velocity * 2, start + _len8 / 4 * 3);
        gainNode2.gain.linearRampToValueAtTime(0, start + _len8);
        stopAudioTime2 = _len8;
        break;
      }
    // GS, GM2

    case 27:
      // High Q
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 1, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.002);
        stopAudioTime = 0.002; // s

        oscillator.frequency.setValueAtTime(1500, start);
        oscillator.frequency.linearRampToValueAtTime(280, start + 0.015);
        oscillator.frequency.linearRampToValueAtTime(0, start + 0.07);
        gainNode2.gain.setValueAtTime(velocity * 1.9, start);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.07);
        stopAudioTime2 = 0.07;
        break;
      }

    case 28:
      // Slap
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 1.3, start);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.010);
        gainNode.gain.setValueAtTime(velocity * 1.1, start + 0.0101);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.020);
        gainNode.gain.setValueAtTime(velocity * 0.9, start + 0.0201);
        gainNode.gain.setTargetAtTime(0, start + 0.0201, 0.03);
        stopAudioTime = 0.2; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 29: // Scratch Push

    case 30:
      // Scratch Pull
      {
        var t1 = option.pitch == 29 ? 0.05 : 0.07;
        var t2 = option.pitch == 29 ? 0.06 : 0.09;
        var t3 = option.pitch == 29 ? 0.07 : 0.11;
        var t4 = option.pitch == 29 ? 0.1 : 0.15;
        var t5 = option.pitch == 29 ? 0.25 : 0.4; // w

        var r1 = option.pitch == 29 ? 0.1 : 0.06;

        var _r2 = option.pitch == 29 ? 0.3 : 0.2;

        var r3 = option.pitch == 29 ? 0.18 : 0.12;
        source.playbackRate.setValueAtTime(r1, start);
        source.playbackRate.linearRampToValueAtTime(_r2, start + t1);
        source.playbackRate.linearRampToValueAtTime(0, start + t2);
        source.playbackRate.linearRampToValueAtTime(_r2, start + t3);
        source.playbackRate.linearRampToValueAtTime(r3, start + t4);
        source.playbackRate.linearRampToValueAtTime(0, start + t5);
        gainNode.gain.setValueAtTime(0, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.4, start + t1);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.1, start + t3);
        gainNode.gain.linearRampToValueAtTime(velocity * 0.3, start + t4);
        gainNode.gain.linearRampToValueAtTime(0, start + t5);
        stopAudioTime = t5; // s

        var r4 = option.pitch == 29 ? 500 : 400;
        var r5 = option.pitch == 29 ? 1950 : 1200;
        var r6 = option.pitch == 29 ? 430 : 250;
        oscillator.frequency.setValueAtTime(r4, start);
        oscillator.frequency.linearRampToValueAtTime(r5, start + t1);
        oscillator.frequency.linearRampToValueAtTime(0, start + t2);
        oscillator.frequency.linearRampToValueAtTime(r5, start + t3);
        oscillator.frequency.linearRampToValueAtTime(r6, start + t4);
        oscillator.frequency.linearRampToValueAtTime(0, start + t5);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * 0.7, start + t1);
        gainNode2.gain.linearRampToValueAtTime(velocity * 0.2, start + t3);
        gainNode2.gain.linearRampToValueAtTime(velocity * 0.6, start + t4);
        gainNode2.gain.linearRampToValueAtTime(0, start + t5);
        stopAudioTime2 = t5;
        break;
      }

    case 31:
      // Sticks
      {
        // w
        source.playbackRate.setValueAtTime(0.4, start);
        source.playbackRate.linearRampToValueAtTime(0.5, start + 0.015);
        gainNode.gain.setValueAtTime(velocity * 1.2, start);
        gainNode.gain.setTargetAtTime(0, start, 0.035);
        stopAudioTime = 0.3; // s

        oscillator.frequency.setValueAtTime(3140, start);
        gainNode2.gain.setValueAtTime(velocity * 1.2, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.012);
        stopAudioTime2 = 0.3;
        break;
      }

    case 32:
      // Square Click
      {
        // w
        gainNode.gain.value = 0;
        stopAudioTime = 0; // s

        oscillator.type = "square";
        oscillator.frequency.setValueAtTime(333, start);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * 4, start + 0.0016);
        gainNode2.gain.linearRampToValueAtTime(0, start + 0.0032);
        stopAudioTime2 = 0.0032;
        break;
      }

    case 33: // Metronome Click

    case 34:
      // Metronome Bell
      {
        // w
        source.playbackRate.setValueAtTime(0.17, start);
        source.playbackRate.linearRampToValueAtTime(0.22, start + 0.01);
        gainNode.gain.setValueAtTime(velocity * 1.5, start);
        gainNode.gain.setTargetAtTime(0, start, 0.015);
        stopAudioTime = 0.3; // s

        if (option.pitch == 34) {
          oscillator.frequency.setValueAtTime(2040, start);
          gainNode2.gain.setValueAtTime(velocity * 1, start);
          gainNode2.gain.setTargetAtTime(0, start, 0.12);
          stopAudioTime2 = 1.1;
        } else {
          gainNode2.gain.value = 0;
          stopAudioTime2 = 0;
        }

        break;
      }

    case 82:
      // Shaker
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(velocity * 0.5, start);
        gainNode.gain.linearRampToValueAtTime(velocity, start + 0.02);
        gainNode.gain.linearRampToValueAtTime(0, start + 0.07);
        stopAudioTime = 0.07; // s

        gainNode2.gain.value = 0;
        stopAudioTime2 = 0;
        break;
      }

    case 83:
      // Jingle Bell
      {
        // w
        source.playbackRate.value = 1;
        gainNode.gain.setValueAtTime(0, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 1.2, start + 0.015);
        gainNode.gain.setTargetAtTime(0, start + 0.015, 0.06);
        stopAudioTime = 0.5; // s

        oscillator.type = "triangle";
        oscillator.frequency.setValueAtTime(2709, start);
        oscillator.frequency.linearRampToValueAtTime(2657, start + 0.3);
        gainNode2.gain.setValueAtTime(0, start);
        gainNode2.gain.linearRampToValueAtTime(velocity * 0.7, start + 0.025);
        gainNode2.gain.setTargetAtTime(0, start + 0.025, 0.07);
        stopAudioTime2 = 0.5;
        break;
      }

    case 84:
      // Bell Tree
      {
        // w s
        var invert = false;
        source.playbackRate.value = 1;

        for (var _i3 = 0; _i3 < 28; _i3++) {
          gainNode.gain.setValueAtTime(velocity * 0.1, start + _i3 / 24 * 0.45);
          gainNode.gain.setTargetAtTime(0, start + _i3 / 24 * 0.45, 0.01);
          oscillator.frequency.setValueAtTime(1380 * (1 + (invert ? (24 - _i3) / 24 : _i3 / 24)), start + _i3 / 24 * 0.45);
          gainNode2.gain.setValueAtTime(velocity * (0.2 + _i3 / 24), start + _i3 / 24 * 0.45);
          gainNode2.gain.setTargetAtTime(0, start + _i3 / 24 * 0.45, _i3 == 27 ? 0.2 : 0.01);
        }

        stopAudioTime = 0.5;
        stopAudioTime2 = 1.5;
        break;
      }

    case 85:
      // Castanets
      {
        // w
        source.playbackRate.setValueAtTime(0.35, start);
        gainNode.gain.setValueAtTime(velocity * 1.3, start);
        gainNode.gain.setTargetAtTime(0, start, 0.01);
        stopAudioTime = 0.1; // s

        oscillator.frequency.setValueAtTime(1730, start);
        gainNode2.gain.setValueAtTime(velocity * 0.5, start);
        gainNode2.gain.setTargetAtTime(0, start, 0.01);
        stopAudioTime2 = 0.1;
        break;
      }

    case 86: // Mute Surdo

    case 87:
      // Open Surdo
      {
        // w
        source.playbackRate.setValueAtTime(0.020, start);
        source.playbackRate.linearRampToValueAtTime(0.015, start + 0.5);
        gainNode.gain.setValueAtTime(0, start);
        gainNode.gain.linearRampToValueAtTime(velocity * 2, start + 0.005);
        gainNode.gain.setTargetAtTime(0, start + 0.005, option.pitch == 86 ? 0.03 : 0.06);
        stopAudioTime = 0.5; // s

        oscillator.frequency.setValueAtTime(88, start);
        oscillator.frequency.linearRampToValueAtTime(86, start + 0.3);
        gainNode2.gain.setValueAtTime(velocity * 2.5, start);
        gainNode2.gain.setTargetAtTime(0, start, option.pitch == 86 ? 0.1 : 0.3);
        stopAudioTime2 = option.pitch == 86 ? 0.5 : 1.5;
        break;
      }

    default:
      {
        source.playbackRate.value = option.pitch / 69 * 2;
        stopAudioTime = 0.05;
        stopAudioTime2 = 0;
        break;
      }
  } // 同じドラムの音が重ならないようにする機能
  // ドラム再生中に次の同じドラムがすぐ鳴る場合、次が鳴る前に止めて音が重ならないようにする（同時発音数の増加を軽減する）


  if (!this.settings.isSameDrumSoundOverlap && nextSameNoteOnInterval != -1) {
    if (stopAudioTime > nextSameNoteOnInterval) {
      stopAudioTime = nextSameNoteOnInterval;
    }

    if (stopAudioTime2 > nextSameNoteOnInterval) {
      stopAudioTime2 = nextSameNoteOnInterval;
    }
  } // ドラム音停止時間を設定


  this.stopAudioNode(source, start + stopAudioTime, stopGainNode);
  this.stopAudioNode(oscillator, start + stopAudioTime2, stopGainNode2); // ドラム停止時間を設定

  option.drumStopTime = option.startTime + (stopAudioTime >= stopAudioTime2 ? stopAudioTime : stopAudioTime2); // 音をストップさせる関数を返す //

  return function () {
    _this.stopAudioNode(source, 0, stopGainNode, true);

    _this.stopAudioNode(oscillator, 0, stopGainNode2, true);
  };
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stopAudioNode; });
function stopAudioNode(tar, time, stopGainNode, isNoiseCut) {
  var isImmed = time <= this.context.currentTime; // 即時ストップか？
  // 予約ストップ //

  var vol1Time = time - 0.005;
  var stopTime = time; // 時間設定 //

  if (isImmed) {
    // 即時ストップ
    if (!isNoiseCut) {
      stopTime = this.context.currentTime;
    } else {
      // ノイズカット
      vol1Time = this.context.currentTime;
      stopTime = this.context.currentTime + 0.005;
    }
  } // 音の停止 //


  try {
    // 通常の音停止処理
    if (!isNoiseCut) {
      tar.stop(stopTime);
    } else {
      // ノイズカット（音の終わりに短いフェードアウトを入れる）
      tar.stop(stopTime);
      stopGainNode.gain.cancelScheduledValues(0);
      stopGainNode.gain.setValueAtTime(1, vol1Time);
      stopGainNode.gain.linearRampToValueAtTime(0, stopTime);
    }
  } catch (e) {
    // iOS用 (stopが２回以上使えないので、代わりにstopGainNodeでミュートにする)
    stopGainNode.gain.cancelScheduledValues(0);

    if (!isNoiseCut) {
      stopGainNode.gain.setValueAtTime(0, stopTime);
    } else {
      // ノイズカット（音の終わりに短いフェードアウトを入れる）
      stopGainNode.gain.setValueAtTime(1, vol1Time);
      stopGainNode.gain.linearRampToValueAtTime(0, stopTime);
    }
  }
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pushFunc; });
function pushFunc(tar) {
  if (!tar.note && !tar.rootTimeout && !tar.pan && !this.trigger.isNoteTrigger) {
    return;
  }

  this.states.stopFuncs.push(tar);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clearFunc; });
/* harmony import */ var _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

function clearFunc(tar1, tar2) {
  if (tar1 != "note" && tar1 != "rootTimeout" && tar1 != "pan" && !this.trigger.isNoteTrigger) {
    return;
  }

  this.states.stopFuncs.some(function (n, i, ary) {
    if (n[tar1] == tar2) {
      _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](ary, i); // ary.splice(i, 1); を高速化

      return true;
    }
  });
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTime; });
/**
 * tickからtime(秒)を求める
 * @param {number} tick
 * @returns {number} time(秒)
 */
function getTime(tick) {
  var imid = -1; // tempo変更がある場合、tickを検索する //

  if (this.tempoTrack && this.tempoTrack.length >= 1) {
    // 最後のtickを超える場合、最後のtimeを返す //
    if (tick >= this.tempoTrack[this.tempoTrack.length - 1].timing) {
      return this.tempoTrack[this.tempoTrack.length - 1].time;
    } // 二分探索でtickを探す //


    var imin = 0;
    var imax = this.tempoTrack.length - 1;

    while (true) {
      imid = Math.floor(imin + (imax - imin) / 2);
      var tempTiming = this.tempoTrack[imid].timing;

      if (tick < tempTiming) {
        imax = imid - 1;
      } else if (tick > tempTiming) {
        imin = imid + 1;
      } else {
        break;
      }

      if (imin > imax) {
        if (tick < tempTiming) imid--;
        break;
      }
    }
  }

  var time = 0;
  var baseTiming = 0;
  var tempo = 120;

  if (imid >= 0) {
    // tickを探索して見つかった場合
    // 引数tickに一番近いtickを取得
    var tempoObj = this.tempoTrack[imid];
    time = tempoObj.time;
    baseTiming = tempoObj.timing;
    tempo = tempoObj.value;
  } // tickからtimeを算出する
  // 引数tickに一番近いtickのtime ＋ 引数tickから残りのtimeを算出 ＝ 現在のtime


  time += 60 / tempo / this.settings.resolution * (tick - baseTiming);
  return time;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getTiming; });
/**
 * time(秒)からtickを求める
 * @param {number} time
 * @returns {number} tick
 */
function getTiming(time) {
  var imid = -1; // tempo変更がある場合、timeを検索する //

  if (this.tempoTrack && this.tempoTrack.length >= 1) {
    // 最後のtimeを超える場合、最後のtickを返す
    if (time >= this.tempoTrack[this.tempoTrack.length - 1].time) {
      return this.tempoTrack[this.tempoTrack.length - 1].timing;
    } // 二分探索でtimeを探す


    var imin = 0;
    var imax = this.tempoTrack.length - 1;

    while (true) {
      imid = Math.floor(imin + (imax - imin) / 2);
      var tempTime = this.tempoTrack[imid].time;

      if (time < tempTime) {
        imax = imid - 1;
      } else if (time > tempTime) {
        imin = imid + 1;
      } else {
        break;
      }

      if (imin > imax) {
        if (time < tempTime) imid--;
        break;
      }
    }
  }

  var baseTime = 0;
  var tick = 0;
  var tempo = 120;

  if (imid >= 0) {
    // timeを探索して見つかった場合
    // 引数timeに一番近いtimeを取得
    var tempoObj = this.tempoTrack[imid];
    baseTime = tempoObj.time;
    tick = tempoObj.timing;
    tempo = tempoObj.value;
  } // timeからtickを算出する
  // 引数timeに一番近いtimeのtick ＋ 現在timeから残りのtickを算出 ＝ 現在のtick


  tick += (time - baseTime) / (60 / tempo / this.settings.resolution);
  return tick;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerformanceUtil; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PerformanceUtil =
/*#__PURE__*/
function () {
  function PerformanceUtil() {
    _classCallCheck(this, PerformanceUtil);
  }

  _createClass(PerformanceUtil, null, [{
    key: "measureReverb",

    /**
     * 0.5秒パフォーマンス計測して、リバーブONで良さそうか判断する
     * @returns {boolean} リバーブONで良さそう
     */
    value: function measureReverb() {
      var max = 500000; // 0.5秒以内にここまで計算できればリバーブON

      var startTime = performance.now();
      var i = 0;

      for (; i < max; i++) {
        if (performance.now() - startTime >= 500) break;
      }

      if (this.debug) {
        console.log("measureReverb", i, performance.now() - startTime);
      }

      if (i < max) return false;
      return true;
    }
  }]);

  return PerformanceUtil;
}();



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseSMF; });
/* harmony import */ var _parse_smf_parse_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _parse_smf_parse_track_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _parse_smf_parse_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);



function parseSMF(_smf) {
  if (this.debug) {
    console.log(_smf);
    var syoriTimeS1 = performance.now();
  } // smf配列はデータ上書きするので_smfをディープコピーする


  var smf = new Uint8Array(_smf); // SMFのフォーマットかどうかチェック //
  // "MThd"

  if (smf[0] != 77 || smf[1] != 84 || smf[2] != 104 || smf[3] != 100) return "Not Sandard MIDI File."; // 関数間でデータをやり取りするためのObject //

  var info = {};
  info.smf = smf; // ヘッダー解析 //

  _parse_smf_parse_header_js__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, info);

  if (this.debug) {
    var syoriTimeS2 = performance.now();
  } // トラック解析 //


  _parse_smf_parse_track_js__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, info);

  if (this.debug) {
    var syoriTimeS3 = performance.now();
  } // MIDIイベント解析 //


  _parse_smf_parse_event_js__WEBPACK_IMPORTED_MODULE_2__["default"].call(this, info); // return用のオブジェクトに情報を代入 //

  var data = {};
  data.header = info.header;
  data.tempoTrack = info.tempoTrack;
  data.beatTrack = info.beatTrack;
  data.channels = info.channels;
  data.songLength = info.songLength;
  data.cc111Tick = info.cc111Tick;
  data.cc111Time = info.cc111Time;
  data.firstNoteOnTiming = info.firstNoteOnTiming;
  data.firstNoteOnTime = info.firstNoteOnTime;
  data.lastNoteOffTiming = info.lastNoteOffTiming;
  data.lastNoteOffTime = info.lastNoteOffTime;

  if (this.settings.isWebMIDI) {
    data.messages = info.messages;
    data.smfData = new Uint8Array(smf); // lastStateを上書きしたsmfをコピー
  }

  if (this.debug) {
    var syoriTimeE = performance.now();
    console.log("parseSMF time", syoriTimeE - syoriTimeS1);
    console.log("parseSMF(0/2) time", syoriTimeS2 - syoriTimeS1);
    console.log("parseSMF(1/2) time", syoriTimeS3 - syoriTimeS2);
    console.log("parseSMF(2/2) time", syoriTimeE - syoriTimeS3);
    console.log(data);
  }

  return data;
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseHeader; });
/* harmony import */ var _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function parseHeader(info) {
  // 関数呼び出し元からデータをもらう //
  var smf = info.smf; // SMFのヘッダチャンクを解析 //

  var p = 4;
  var header = {};
  header.size = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].getInt(smf, 4, 8);
  header.format = smf[9];
  header.trackcount = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].getInt(smf, 10, 12);
  header.timemanage = smf[12];
  header.resolution = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].getInt(smf, 12, 14); // TODO 0除算防止。15bit目1のとき、https://sites.google.com/site/yyagisite/material/smfspec#ConductorTrack

  p += 4 + header.size; // 変数を用意 //

  var channels = [];
  var chSize = this.settings.isWebMIDI ? 17 : 16; // WebMIDI用に17chに全てのイベントを入れるため17ch分作る

  for (var i = 0; i < chSize; i++) {
    var channel = {};
    channels.push(channel); // smfを読む順番を記録した索引配列を作る //
    // 型付き配列をリスト構造の配列のように使う（リスト構造にすることで挿入処理を高速化する）
    // [tick, smfMesLength, smfPtr, nextIndicesPtr, ...]

    channel.indices = [];
    channel.indicesLength = 0;
    channel.indicesHead = -1; // 先頭のポインタ

    channel.indicesFoot = 0; // 末尾のポインタ

    channel.indicesCur = 0; // 現在のinsert用ポインタ

    channel.indicesPre = 0; // 前回のinsert用ポインタ

    channel.notes = [];
  } // 関数呼び出し元にデータを返す //


  info.p = p;
  info.header = header;
  info.channels = channels;
  return info;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseTrack; });
/* harmony import */ var _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

function parseTrack(info) {
  // 関数呼び出し元からデータをもらう //
  var smf = info.smf;
  var p = info.p;
  var header = info.header;
  var channels = info.channels; // SMFのトラックチャンクの解析・"SMF読み込み順序配列"を作成 //
  //   全トラックを解析しながら、SMFを読む順番を記録した配列を作成する
  //   読み込む順番は、この解析でデルタタイム順になるようソートしておく
  //   SMFのMIDIイベント解析時は、上記配列から「次はMIDIファイルの何バイト目を見るか」を取得して解析する
  //   上記配列はリスト構造の配列のように使う（リスト構造にすることで配列のinsert処理を高速化する）
  // 
  // ■配列イメージ（json風）■
  // [
  //     {
  //         tick : このMIDIイベントのTick,
  //         smfMesLength : １つのMIDIイベントの長さ,
  //         smfPtr : このMIDIイベントはMIDIファイルの何バイト目にあるか,
  //         nextIndicesPtr : 次のオブジェクトはリスト配列の何番目にあるか
  //     },
  //     ...
  // ]
  // 
  // ■実際の配列イメージ■
  // [tick, smfMesLength, smfPtr, nextIndicesPtr, ...]

  var tempoTrack = [];
  var beatTrack = [];
  var songLength = 0;

  for (var t = 0; t < header.trackcount; t++) {
    console.log("aaa");
    // "MTrk"
    if (smf[p] != 77 || smf[p + 1] != 84 || smf[p + 2] != 114 || smf[p + 3] != 107) {
      console.log("yokuani");
      return "Irregular SMF.";
    }
    p += 4;
    var endPoint = p + 4 + _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].getInt(smf, p, p + 4);
    p += 4;
    var tick = 0;
    var tempo = 120;
    var tempoCurTick = 0;
    var tempoCurTime = 0;
    var lastState = 1;
    var dt = void 0;

    while (p < endPoint) {
      // DeltaTime
      if (lastState != null) {
        var lengthAry = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].variableLengthToInt(smf, p, p + 5);
        dt = lengthAry[0];
        tick += dt;
        p += lengthAry[1];
      }

      var cashP = p; // WebMIDI用
      // Events

      var mes0 = smf[p] >> 4; // Math.floor(smf[p] / 0x10)

      switch (mes0) {
        case 0x8: // Note OFF - 8[ch], Pitch, Velocity

        case 0x9: // Note ON - 9[ch], Pitch, Velocity

        case 0xA: // Polyfonic Key Pressure - A[ch], Pitch?, Velocity?

        case 0xB: // Control Change - B[ch],,

        case 0xE:
          // PitchBend Change - E[ch],,
          {
            // チャンネル毎に仕分けた後に解析する
            lastState = smf[p];
            var ch = channels[lastState & 0x0F];
            _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].chIndicesInsert(this, ch, tick, p, 3);
            p += 3;
            break;
          }

        case 0xC: // Program Change - C[ch],

        case 0xD:
          // Channel Pre - D[ch],
          {
            // チャンネル毎に仕分けた後に解析する
            lastState = smf[p];
            var _ch = channels[lastState & 0x0F];
            _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].chIndicesInsert(this, _ch, tick, p, 2);
            p += 2;
            break;
          }
        // SysEx Events or Meta Events - F[ch], ...

        case 0xF:
          {
            //lastState = smf[p]; <- ランニングステートは無い
            switch (smf[p]) {
              case 0xF0:
              case 0xF7:
                {
                  // SysEx Events
                  var _lengthAry = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].variableLengthToInt(smf, p + 1, p + 1 + 4); // Master Volume
                  // 0xF0, size, 0x7f, 0x7f, 0x04, 0x01, 0xNN, volume, 0xF7


                  if (_lengthAry[0] >= 7 && smf[p + 2] == 0x7f && smf[p + 3] == 0x7f && smf[p + 4] == 0x04 && smf[p + 5] == 0x01) {
                    // 全チャンネルにMasterVolumeイベントを挿入する
                    for (var i = 0; i < 16; i++) {
                      var _ch2 = channels[i];
                      _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].chIndicesInsert(this, _ch2, tick, p, _lengthAry[0]);
                    }
                  }

                  p += 1 + _lengthAry[1] + _lengthAry[0];
                  break;
                }

              case 0xF1:
                p += 2;
                break;

              case 0xF2:
                p += 3;
                break;

              case 0xF3:
                p += 2;
                break;

              case 0xF6:
              case 0xF8:
              case 0xFA:
              case 0xFB:
              case 0xFC:
              case 0xFE:
                p += 1;
                break;

              case 0xFF:
                {
                  // Meta Events
                  switch (smf[p + 1]) {
                    case 0x00:
                    case 0x01:
                    case 0x02:
                    case 0x03:
                    case 0x04:
                    case 0x05:
                    case 0x06:
                    case 0x07:
                    case 0x20:
                      break;

                    case 0x2F:
                      tick += (this.settings.isSkipEnding ? 0 : header.resolution) - dt;
                      break;

                    case 0x51:
                      // Tempo
                      // 全チャンネルにTempoイベントを挿入する
                      for (var _i = 0; _i < 16; _i++) {
                        var _ch3 = channels[_i];
                        _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].chIndicesInsert(this, _ch3, tick, p, 6);
                      }

                      tempoCurTime += 60 / tempo / header.resolution * (tick - tempoCurTick);
                      tempoCurTick = tick;
                      tempo = 60000000 / (smf[p + 3] * 0x10000 + smf[p + 4] * 0x100 + smf[p + 5]);
                      tempoTrack.push({
                        timing: tick,
                        time: tempoCurTime,
                        value: tempo
                      });
                      break;

                    case 0x54:
                      break;

                    case 0x58:
                      // Beat
                      beatTrack.push({
                        timing: tick,
                        value: [smf[p + 3], Math.pow(2, smf[p + 4])]
                      });
                      break;

                    case 0x59:
                    case 0x7F:
                      break;
                  }

                  var _lengthAry2 = _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].variableLengthToInt(smf, p + 2, p + 2 + 4);

                  p += 2 + _lengthAry2[1] + _lengthAry2[0];
                  break;
                }
            }

            break;
          }

        default:
          {
            if (lastState == null) return "Irregular SMF. (" + p + " byte addr)";
            p--;
            smf[p] = lastState; // 上書き

            lastState = null;
          }
      } // WebMIDIAPI


      if (this.settings.isWebMIDI) {
        if (lastState != null) {
          // WebMIDI用に17chに全てのMIDIイベントを入れる
          _util_parse_util_js__WEBPACK_IMPORTED_MODULE_0__["default"].chIndicesInsert(this, channels[16], tick, cashP, p - cashP);
        }
      }
    }

    if (!this.settings.isSkipEnding && songLength < tick) songLength = tick; // リスト配列のポインタを初期化

    for (var _i2 = 0; _i2 < channels.length; _i2++) {
      channels[_i2].indicesCur = channels[_i2].indicesHead;
      channels[_i2].indicesPre = channels[_i2].indicesHead;
    }
  } // 関数呼び出し元にデータを返す //

  console.log("aaaa");

  info.p = p;
  info.tempoTrack = tempoTrack;
  info.beatTrack = beatTrack;
  info.songLength = songLength;
  return info;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseEvent; });
/* harmony import */ var _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


function parseEvent(info) {
  var _this = this;

  // 関数呼び出し元からデータをもらう //
  var smf = info.smf;
  var header = info.header;
  var channels = info.channels;
  var tempoTrack = info.tempoTrack;
  var songLength = info.songLength; // SMFのMIDIイベント解析 //

  var tempo;
  var tempoCurTick;
  var tempoCurTime;
  var cc111Tick = -1;
  var cc111Time = -1;
  var firstNoteOnTiming = Number.MAX_SAFE_INTEGER; // 最初のノートオンのTick

  var firstNoteOnTime = Number.MAX_SAFE_INTEGER;
  var lastNoteOffTiming = 0; // 最後のノートオフのTick

  var lastNoteOffTime = 0; // Midi Events (0x8n - 0xEn) parse

  var _loop = function _loop(ch) {
    var channel = channels[ch];
    var dataEntry = 2;
    var pitchBend = 0;
    var pan = 64;
    var expression = 127;
    var velocity = 100;
    var modulation = 0;
    var hold = 0;
    var reverb = _this.isTonyu2 ? 0 : 10;
    var chorus = 0;
    var nrpnLsb = 127;
    var nrpnMsb = 127;
    var rpnLsb = 127;
    var rpnMsb = 127;
    var instrument = 0;
    var masterVolume = 127;
    tempo = 120;
    tempoCurTick = 0;
    tempoCurTime = 0;
    var nowNoteOnIdxAry = [];
    var indIdx = channel.indicesHead;
    var indices = channel.indices;
    var nextNoteOnAry = new Array(128);

    var _loop3 = function _loop3() {
      var tick = indices[indIdx];
      var p = indices[indIdx + 2];
      var nextIdx = indices[indIdx + 3];
      var time = 60 / tempo / header.resolution * (tick - tempoCurTick) + tempoCurTime; // Events

      var mes0 = smf[p] >> 4; // Math.floor(smf[p] / 0x10)

      switch (mes0) {
        case 0x8: // Note OFF - 8[ch], Pitch, Velocity

        case 0x9:
          // Note ON - 9[ch], Pitch, Velocity
          if (mes0 == 0x9 && smf[p + 2] != 0) {
            // ノートオン
            // ノート情報が入ったオブジェクトを作成 //
            var note = {
              start: tick,
              stop: null,
              startTime: time,
              stopTime: null,
              pitch: smf[p + 1],
              pitchBend: [{
                timing: tick,
                time: time,
                value: pitchBend
              }],
              pan: [{
                timing: tick,
                time: time,
                value: pan
              }],
              expression: [{
                timing: tick,
                time: time,
                value: expression * (masterVolume / 127)
              }],
              velocity: smf[p + 2] / 127 * (velocity / 127),
              modulation: [{
                timing: tick,
                time: time,
                value: modulation
              }],
              holdBeforeStop: null,
              reverb: [{
                timing: tick,
                time: time,
                value: reverb
              }],
              chorus: [{
                timing: tick,
                time: time,
                value: chorus
              }],
              instrument: instrument,
              channel: ch,
              nextSameNoteOnInterval: -1,
              drumStopTime: 2 // 再生時に使う

            }; // 前回鳴っていた同音ノートに次のノートオン時間を入れる //
            // 同音ノートを二重再生したくない場合のために記録する //

            var prevNote = nextNoteOnAry[smf[p + 1]];

            if (prevNote) {
              prevNote.nextSameNoteOnInterval = time - prevNote.startTime;
            }

            nextNoteOnAry[smf[p + 1]] = note; // 同音ノートがノートオン中の場合、ノートオフにする //

            nowNoteOnIdxAry.some(function (idx, i) {
              var note = channel.notes[idx];

              if (note.pitch == smf[p + 1] && note.stop == null) {
                note.stop = tick;
                note.stopTime = time;
                _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](nowNoteOnIdxAry, i); // nowNoteOnIdxAry.splice(i, 1); を軽量化
              }
            }); // ノートオン中配列に入れる

            nowNoteOnIdxAry.push(channel.notes.length); // notes一覧にnoteオブジェクトを入れる

            channel.notes.push(note); // 最初のノートオン時間を記録 //

            if (tick < firstNoteOnTiming) {
              firstNoteOnTiming = tick;
              firstNoteOnTime = time;
            }
          } else {
            // ノートオフ
            // ノートオン中配列から該当ノートを探し、ノートオフ処理をする //
            nowNoteOnIdxAry.some(function (idx, i) {
              var note = channel.notes[idx];

              if (note.pitch == smf[p + 1] && note.stop == null) {
                if (hold >= _this.settings.holdOnValue) {
                  // ホールドが効いている場合
                  if (note.holdBeforeStop == null) {
                    note.holdBeforeStop = [{
                      timing: tick,
                      time: time,
                      value: hold
                    }];
                  }
                } else {
                  // ホールドしていない場合
                  note.stop = tick;
                  note.stopTime = time;
                  _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](nowNoteOnIdxAry, i); // nowNoteOnIdxAry.splice(i, 1); を軽量化
                } // 最後のノートオフ時間を記録 //


                if (tick > lastNoteOffTiming) {
                  lastNoteOffTiming = tick;
                  lastNoteOffTime = time;
                }

                return true;
              }
            });
          }

          break;
        // Polyfonic Key Pressure - A[ch], Pitch?, Velocity?

        case 0xA:
          break;
        // Control Change - B[ch],,

        case 0xB:
          switch (smf[p + 1]) {
            case 1:
              // modulation
              modulation = smf[p + 2];
              nowNoteOnIdxAry.forEach(function (idx) {
                var note = channel.notes[idx];
                note.modulation.push({
                  timing: tick,
                  time: time,
                  value: modulation
                });
              });
              break;

            case 6:
              if (rpnLsb == 0 && rpnMsb == 0) {
                // RLSB=0 & RMSB=0 -> 6はピッチ
                dataEntry = smf[p + 2];

                if (dataEntry > 24) {
                  dataEntry = 24;
                }
              }

              if (nrpnLsb == 8 && nrpnMsb == 1) {// (保留)ビブラート・レイト(GM2/GS/XG)
                //console.log("CC  8 1 6 "+smf[p+2]+" tick:"+tick);
              } else if (nrpnLsb == 9 && nrpnMsb == 1) {// (保留)ビブラート・デプス(GM2/GS/XG)
                //console.log("CC  9 1 6 "+smf[p+2]+" tick:"+tick);
              } else if (nrpnLsb == 10 && nrpnMsb == 1) {// (保留)ビブラート・ディレイ(GM2/GS/XG)
                //console.log("CC 10 1 6 "+smf[p+2]+" tick:"+tick);
              }

              break;

            case 7:
              velocity = smf[p + 2];
              break;

            case 10:
              // Pan
              pan = smf[p + 2];
              nowNoteOnIdxAry.forEach(function (idx) {
                var note = channel.notes[idx];
                note.pan.push({
                  timing: tick,
                  time: time,
                  value: pan
                });
              });
              break;

            case 11:
              // Expression
              expression = smf[p + 2];
              nowNoteOnIdxAry.forEach(function (idx) {
                var note = channel.notes[idx];
                note.expression.push({
                  timing: tick,
                  time: time,
                  value: expression * (masterVolume / 127)
                });
              });
              break;

            case 64:
              // Hold1
              hold = smf[p + 2];

              if (hold < _this.settings.holdOnValue) {
                for (var _i = nowNoteOnIdxAry.length - 1; _i >= 0; _i--) {
                  var idx = nowNoteOnIdxAry[_i];
                  var _note = channel.notes[idx];

                  if (_note.stop == null && _note.holdBeforeStop != null) {
                    _note.stop = tick;
                    _note.stopTime = time;
                    _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](nowNoteOnIdxAry, _i); // nowNoteOnIdxAry.splice(i, 1); を軽量化
                  }
                }
              }

              break;

            case 91:
              // reverb
              reverb = smf[p + 2];
              nowNoteOnIdxAry.forEach(function (idx) {
                var note = channel.notes[idx];
                note.reverb.push({
                  timing: tick,
                  time: time,
                  value: reverb
                });
              });
              break;

            case 93:
              // chorus
              chorus = smf[p + 2];
              nowNoteOnIdxAry.forEach(function (idx) {
                var note = channel.notes[idx];
                note.chorus.push({
                  timing: tick,
                  time: time,
                  value: chorus
                });
              });
              break;

            case 98:
              nrpnLsb = smf[p + 2];
              break;

            case 99:
              nrpnMsb = smf[p + 2];
              break;

            case 100:
              rpnLsb = smf[p + 2];
              break;

            case 101:
              rpnMsb = smf[p + 2];
              break;

            case 111:
              // RPGツクール用ループ(CC111)
              if (cc111Tick == -1) {
                cc111Tick = tick;
                cc111Time = time;
              }

              break;
          }

          break;
        // Program Change - C[ch],

        case 0xC:
          instrument = smf[p + 1];
          break;
        // Channel Pre - D[ch],

        case 0xD:
          break;
        // PitchBend Change - E[ch],,

        case 0xE:
          pitchBend = (smf[p + 2] * 128 + smf[p + 1] - 8192) / 8192 * dataEntry;
          nowNoteOnIdxAry.forEach(function (idx) {
            var note = channel.notes[idx];
            note.pitchBend.push({
              timing: tick,
              time: time,
              value: pitchBend
            });
          });
          break;

        case 0xF:
          //lastState = smf[p]; <- ランニングステートは無い
          switch (smf[p]) {
            case 0xF0:
            case 0xF7:
              // Master Volume
              if (smf[p + 1] == 0x7f && smf[p + 2] == 0x7f && smf[p + 3] == 0x04 && smf[p + 4] == 0x01) {
                var vol = smf[p + 6];
                if (vol > 127) vol = 127;
                masterVolume = vol;
                nowNoteOnIdxAry.forEach(function (idx) {
                  var note = channel.notes[idx];
                  note.expression.push({
                    timing: tick,
                    time: time,
                    value: expression * (masterVolume / 127)
                  });
                });
              }

              break;

            case 0xFF:
              // Meta Events
              switch (smf[p + 1]) {
                case 0x51:
                  // Tempo
                  tempoCurTime += 60 / tempo / header.resolution * (tick - tempoCurTick);
                  tempoCurTick = tick;
                  tempo = 60000000 / (smf[p + 3] * 0x10000 + smf[p + 4] * 0x100 + smf[p + 5]);
                  break;
              }

              break;
          }

          break;

        default:
          {
            return {
              v: {
                v: "Error parseSMF. "
              }
            };
          }
      }

      indIdx = nextIdx;
    };

    while (indIdx != -1) {
      var _ret2 = _loop3();

      if (_typeof(_ret2) === "object") return _ret2.v;
    }

    channel.nowNoteOnIdxAry = nowNoteOnIdxAry;

    if (!_this.debug) {
      delete channel.indices;
    }
  };

  for (var ch = 0; ch < 16; ch++) {
    var _ret = _loop(ch);

    if (_typeof(_ret) === "object") return _ret.v;
  } // ホールドが効いてノートオンのままになったノートをノートオフする //


  for (var _ch = 0; _ch < 16; _ch++) {
    var channel = channels[_ch];
    var nowNoteOnIdxAry = channel.nowNoteOnIdxAry;

    var _loop2 = function _loop2(i) {
      var note = channel.notes[nowNoteOnIdxAry[i]];

      if (note.stop == null) {
        note.stop = lastNoteOffTiming;
        note.stopTime = lastNoteOffTime; // If (note.cc[x].timing > lastNoteOffTiming), delete note.cc[x]

        var nameAry = ["pitchBend", "pan", "expression", "modulation", "reverb", "chorus"];
        nameAry.forEach(function (name) {
          var ccAry = note[name];

          for (var i2 = ccAry.length - 1; i2 >= 1; i2--) {
            var obj = ccAry[i2];

            if (obj.timing > lastNoteOffTiming) {
              _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](ccAry, i2); // ccAry.splice(i2, 1); を軽量化
            }
          }
        });
        _util_array_util_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](nowNoteOnIdxAry, i); // nowNoteOnIdxAry.splice(i, 1); を軽量化
      }
    };

    for (var i = nowNoteOnIdxAry.length - 1; i >= 0; i--) {
      _loop2(i);
    }

    delete channel.nowNoteOnIdxAry;
  }

  if (this.settings.isSkipEnding) songLength = lastNoteOffTiming;
  tempoTrack.push({
    timing: songLength,
    time: 60 / tempo / header.resolution * (songLength - tempoCurTick) + tempoCurTime,
    value: 120
  }); // WebMIDI用のMIDIメッセージを作成 //

  var messages = [];

  if (this.settings.isWebMIDI) {
    var _channel = channels[16];
    var _tempo = 120;
    var _tempoCurTick = 0;
    var _tempoCurTime = 0;
    var indIdx = _channel.indicesHead;
    var indices = _channel.indices;

    while (indIdx != -1) {
      var tick = indices[indIdx];
      var pLen = indices[indIdx + 1];
      var p = indices[indIdx + 2];
      var nextIdx = indices[indIdx + 3];
      var time = 60 / _tempo / header.resolution * (tick - _tempoCurTick) + _tempoCurTime; // Events

      switch (smf[p]) {
        case 0xFF:
          // Meta Events
          switch (smf[p + 1]) {
            case 0x51:
              // Tempo
              _tempoCurTime += 60 / _tempo / header.resolution * (tick - _tempoCurTick);
              _tempoCurTick = tick;
              _tempo = 60000000 / (smf[p + 3] * 0x10000 + smf[p + 4] * 0x100 + smf[p + 5]);
              break;
          }

      }

      messages.push({
        time: time,
        tick: tick,
        smfPtr: p,
        smfPtrLen: pLen
      });
      indIdx = nextIdx;
    }
  } // 関数呼び出し元にデータを返す //


  info.songLength = songLength;
  info.cc111Tick = cc111Tick;
  info.cc111Time = cc111Time;
  info.firstNoteOnTiming = firstNoteOnTiming;
  info.firstNoteOnTime = firstNoteOnTime;
  info.lastNoteOffTiming = lastNoteOffTiming;
  info.lastNoteOffTime = lastNoteOffTime;

  if (this.settings.isWebMIDI) {
    info.messages = messages;
    info.smfData = new Uint8Array(smf); // lastStateを上書きしたsmfをコピー
  }

  return info;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startWebMIDI; });
function startWebMIDI() {
  var _this = this;

  var outputs;
  if (!navigator.requestMIDIAccess) return; // 1回目：ブラウザにMIDIデバイスのフルコントロールを要求する(SysExの使用を要求)
  // 2回目：MIDIデバイスのフルコントロールがブロックされたら、SysEx無しでMIDIアクセスを要求する

  var sysEx = this.settings.WebMIDIPortSysEx;

  var midiAccessSuccess = function midiAccessSuccess(midiAccess) {
    outputs = midiAccess.outputs;
    _this.settings.WebMIDIPortOutputs = outputs;
    var output;

    if (_this.settings.WebMIDIPort == -1) {
      _this.settings.WebMIDIPortOutputs.forEach(function (o) {
        if (!output) output = o;
      });
    } else {
      output = _this.settings.WebMIDIPortOutputs.get(settings.WebMIDIPort);
    }

    _this.settings.WebMIDIPortOutput = output;
    _this.settings.WebMIDIPortSysEx = sysEx;

    if (output) {
      output.open();

      _this.initStatus(); // リセットイベント（GMシステム・オン等）を送るため呼び出す

    }

    return outputs;
  };

  var midiAccessFailure = function midiAccessFailure(err) {
    console.log(err);

    if (sysEx) {
      sysEx = false;
      navigator.requestMIDIAccess({
        sysex: sysEx
      }).then(midiAccessSuccess)["catch"](midiAccessFailure);
    }
  };

  navigator.requestMIDIAccess({
    sysex: sysEx
  }).then(midiAccessSuccess)["catch"](midiAccessFailure); // 終了時に鳴らしている音を切る

  window.addEventListener('unload', function (e) {
    for (var t = 0; t < 16; t++) {
      _this.settings.WebMIDIPortOutput.send([0xB0 + t, 120, 0]);

      for (var i = 0; i < 128; i++) {
        _this.settings.WebMIDIPortOutput.send([0x80 + t, i, 0]);
      }
    }
  });
}

/***/ })
/******/ ]);