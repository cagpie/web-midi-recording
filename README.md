# web-midi-recording

## Quick Example
```javascript
const { MIDIRecording } = require('web-midi-recording');

MIDIRecording.attachHandler(InputMIDIDevice);

MIDIRecording.startRecording();

MIDIRecording.stopRecording()

const smfData = MIDIRecording.getSMF();
```

## Licence

### web-midi-recording

Copyright (c) 2020 cagpie <cagpie@gmail.com>

Code licensed under the MIT License: http://opensource.org/licenses/MIT
