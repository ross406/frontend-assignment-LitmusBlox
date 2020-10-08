import React, { useState } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';

function App() {
  const [result, setResult] = useState('');

  const onClick = (button) => {
    if (button === '=') {
      calculate();
    } else if (button === 'C') {
      reset();
    } else if (button === 'CE') {
      backspace();
    } else {
      setResult(result + button);
    }
  };

  const calculate = () => {
    let checkResult = '';
    if (result.includes('--')) {
      checkResult = result.replace('--', '+');
    } else {
      checkResult = result;
    }

    try {
      setResult(
        // eslint-disable-next-line
        (eval(checkResult) || '') + ''
      );
    } catch (e) {
      setResult('error');
    }
  };

  const reset = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className='app'>
      <div className='calculator-body'>
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
}

export default App;
