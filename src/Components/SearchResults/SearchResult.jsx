import styled from "styled-components";
import { Button } from "../../App";
function SearchResult({data}) {
    console.log(data);
    return ( 
        <FoodContainer>
        <FoodCards>
         {data?.map((food)=>(
            <FoodCard key={food.name}>
            <div className="food_image">
                <img src={"public"+food.image} alt="" />
            </div>
            <div className="food_info">
                <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
                </div>
                <Button className="bttn">${food.price}.00</Button>
            </div>
            </FoodCard>
         ))}
        </FoodCards>
      </FoodContainer>
     );
}

export default SearchResult;

const FoodCards=styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-evenly;
gap:32px;
margin-top:100px;

`
const FoodContainer=styled.div`



`

const FoodCard=styled.div`
display: flex;
flex-direction: row;
max-width: 340px;
height: 167px;
/* background-color: black; */
            border-radius: 25px;
            backdrop-filter:blur(10px) ;
            border-top: 1px solid rgba(255,255,255,0.4);
            border-left: 1px solid rgba(255,255,255,0.4);
            background-color: rgba(255, 255, 255, 0);
            box-shadow:20px 20px 20px  rgba(0,0,0,0.089);
            align-items: center;
            justify-content: center;
.food_info{
    height:167px;
    display: flex;
    flex-direction: column;
    align-items:end;
    justify-content: space-around;    
    p{
        font-size: 12px;
        margin-top: 4px;
    }
    h3{
        margin-top: 8px;
        font-size: 16px;
        font-weight: 588;
    }
    .bttn{
        width: 60px;
        height: 25px;
        margin-right: 20px;
    }
}
`
