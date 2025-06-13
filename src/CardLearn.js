import { useState } from "react";

const CardLearn = ({cardData,result}) => {
    const [currentIdx,setCurrentIdx] = useState(0);
    const [isOpen,setIsOpen] = useState(false);
    const nextBtn = ()=>{
        if(currentIdx+1 < cardData.length){
            setCurrentIdx(currentIdx+1)
        } else {
            result(true);
        }
    }
    return (
        <div className="learn-mode">
            <h2>플래시카드 학습</h2>
            <p>질문 : {cardData[currentIdx].question}</p>
            <div>{isOpen ? <p>답변 : {cardData[currentIdx].answer}</p> : "" }</div>
            <button onClick={()=>{setIsOpen(!isOpen)}}>{isOpen ? "답변닫기" : "답변보기"}</button>
            <button onClick={nextBtn}>{currentIdx+1 === cardData.length ? "결과보기" : "다음문제"}</button>
            <button onClick={()=>{result(true)}}>학습종료</button>
        </div>
    );
};

export default CardLearn;