
const FlashCard = ({cardData,click,learn}) => {
    return (
        <div className="flash-card">
            <h2>{cardData.name}</h2>
            <ul>
            {
                cardData.flashcards.map((value,idx)=>{
                    return <li key={idx}>{value.question}</li>
                })
            }
            </ul>
            <button onClick={()=>{learn(true)}}>학습시작</button>
            <button onClick={()=>{click(null)}}>뒤로가기</button>
        </div>
    );
};

export default FlashCard;