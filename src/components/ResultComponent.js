import React from 'react';

function ResultComponent({ result }) {
  return (
    <div>
      <div className='result'>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default ResultComponent;
