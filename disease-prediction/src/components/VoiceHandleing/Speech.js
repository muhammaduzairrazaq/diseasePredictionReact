import React, { useState } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
 
export const  Speech = () => {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
 
  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={listen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
}




// import React, { useState } from 'react';
// import { useSpeechSynthesis } from 'react-speech-kit';
 
// function Example() {
//   const [value, setValue] = useState('');
//   const { speak } = useSpeechSynthesis();
 
//   return (
//     <div>
//       <textarea
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//       />
//       <button onClick={() => speak({ text: value })}>Speak</button>
//     </div>
//   );
// }