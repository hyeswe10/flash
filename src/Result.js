
const Result = ({click}) => {
    return (
        <div>
            <p>종료페이지</p>
            <button onClick={()=>{click(null)}}>처음으로</button>
        </div>
    );
};

export default Result;