import { useState } from 'react';

import questions from './data';
import './App.css';
import SingleQuestion from './SingleQuestion';

function App() {
  const [index, setIndex] = useState(0);

  const lastNum = questions.length - 1;

  const getNext = () => {
    if (index === lastNum) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const getPrev = () => {
    if (index === 0) {
      setIndex(lastNum);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <main>
      <section className="container">
        <h1 className="title">Questions</h1>
        <SingleQuestion question={questions[index]} />

        <div className="controls">
          <button type="button" className="btn" onClick={getPrev}>
            {'<'}
          </button>
          <button type="button" className="btn" onClick={getNext}>
            {'>'}
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
