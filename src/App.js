import './App.scss';
import Category from "./Category";
import mockData from "./data/mockData";
import { useState } from "react";
import FlashCard from './FlashCard';
import CardLearn from './CardLearn';
import Result from './Result';

const App = () => {
  const [category,setCategory] = useState(null);
  const [learningMode,setLearningMode] = useState(false);
  const [exitMode,setExitMode] = useState(false);
  const handleClick = (msg)=>{
    setCategory(msg)
  }
  const handleLearn = (data)=>{
    setLearningMode(data)
  }
  const handleResult = (value)=>{
    setExitMode(value)
  }
  return (
    <div>
      {/* 앞이 true면 뒤에가 실행되는 &&연산자 사용 */}
      {!category && <Category cardData={mockData.categories} click={handleClick}/>}
      {category && !learningMode && <FlashCard cardData={category} click={handleClick} learn={handleLearn}/>}
      {learningMode && !exitMode && <CardLearn  cardData={category.flashcards} result={handleResult}/>}
      {exitMode && <Result click={()=>{
        setCategory(null);
        setLearningMode(false);
        setExitMode(false);
      }}/>}
    </div>
  );
};

export default App;
