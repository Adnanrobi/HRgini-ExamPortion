//create

//provider

//usage

import { createContext, useState } from 'react';

export const QstContext = createContext();

export const QstContextProvider = (props) => {
  const [qstList, setQstList] = useState([
    {
      questionText: "What is the capital of France?",
      answerText1: "New York",
      answerText2: "London",
      answerText3: "Paris",
      answerText4: "Dublin",
      a: false, b: false, c: false, d: false,
      qstMark: false,
      qstNumber: 1,
      mark: 1,
      textQst: true
    },
    {
      questionText: "Which dog is in black color?",
      answerText1: "https://picsum.photos/id/237/200/300",
      answerText2: "https://picsum.photos/id/1/200/300",
      answerText3: "https://picsum.photos/id/1/200/300",
      answerText4: "https://picsum.photos/id/1/200/300",
      a: false, b: false, c: false, d: false,
      qstMark: false,
      qstNumber: 2,
      mark: 2,
      textQst: false
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerText1: "Jeff Bezos",
      answerText2: "Elon Musk",
      answerText3: "Bill Gates",
      answerText4: "Tony Stark",
      a: false, b: false, c: false, d: false,
      qstMark: false,
      qstNumber: 3,
      mark: 2,
      textQst: true
    },
    {
      questionText: "The iPhone was created by which company?",
      answerText1: "Apple",
      answerText2: "Intel",
      answerText3: "Microsoft",
      answerText4: "Microsoft",
      a: false, b: false, c: false, d: false,
      qstMark: false,
      qstNumber: 4,
      mark: 1,
      textQst: true
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerText1: "1",
      answerText2: "4",
      answerText3: "6",
      answerText4: "7",
      a: false, b: false, c: false, d: false,
      qstMark: false,
      qstNumber: 5,
      mark: 2,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 5,
      textQst: true
    },
    {
      qstNumber: 6,
      textQst: true
    }
  ]);
  return (
    <QstContext.Provider value={[qstList, setQstList]}>
      {props.children}
    </QstContext.Provider>
  );
};