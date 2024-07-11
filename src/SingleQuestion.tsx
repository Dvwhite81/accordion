import { useState } from 'react';
import { QuestionType } from './data';

interface QuestionProps {
  question: QuestionType;
}

const SingleQuestion = ({ question }: QuestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, info } = question;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '-' : '+'}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
