

const Category = ({cardData,click}) => {
    return (
        <div>
            <h1>학습카테고리</h1>
            <div className="category-wrap">
                {
                    cardData.map((value)=>{
                        return <button key={value.id} onClick={()=>{click(value)}}>{value.name}</button>
                    })
                }
            </div>
        </div>
    );
};

export default Category;