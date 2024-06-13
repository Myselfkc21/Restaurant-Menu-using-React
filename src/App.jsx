import { useState,useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./Components/SearchResults/SearchResult";
const BASE_UL="http://localhost:9000/";
const App = () => {
  const[data,setData]=useState();
  const[error,setError]=useState();
  const[filteredData,setFilteredData]=useState();
  const[SelectBtn,setSelectBtn]=useState();
  const[isSelectted,setisSelected]=useState();

 useEffect(() => {
   
  async function getFoodData() {
    try{
      const respone=await fetch(BASE_UL);
      const json=await respone.json();
      setData(json)
      setFilteredData(json)
      // console.log(json)
    }
    catch(error){
      setError("No data found")
    }
    
   };
   getFoodData();
 }, [])
 
 function FilterData(event){
  const searchValue=(event.target.value);
  if(searchValue===""){
    setFilteredData("null");
  }
  const filters=data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(filters)
setFilteredData(filters)

 }

 function btnFilter(types){
  
  if(types=="all"){
    setFilteredData(data)
    setSelectBtn("all");
  }
  else{
    const filters=data?.filter((food)=>food.type.toLowerCase().includes(types.toLowerCase()));
    setFilteredData(filters)
    setSelectBtn(types)
    
  }
 }
 
  
if(error)return <div>{error}</div>

  return(
    <MainContainer>

      <TopContainer>
      <div className="logo">
      <img src="/Foody Zone.svg" alt="" />
      </div>
      <div className="searchBar">
        <input onChange={FilterData} placeholder="Search Here" type="text" name="" id="" />
        
      </div>
      </TopContainer>
      <FilterContainer>
      <Button isSelectted={SelectBtn=="all"} onClick={()=>{btnFilter("all")}}>All</Button>
      <Button   isSelectted={SelectBtn=="Breakfast"} onClick={()=>{btnFilter("Breakfast")}}>Breakfast</Button>
      <Button  isSelectted={SelectBtn=="Lunch"} onClick={()=>{btnFilter("Lunch")}}>Lunch</Button>
      <Button  isSelectted={SelectBtn=="dinner"} onClick={()=>{btnFilter("dinner")}}>Dinner</Button>
      </FilterContainer>

      <SearchResult data={filteredData}></SearchResult>
      
    </MainContainer>
  )
};

export default App;
const MainContainer=styled.div`
max-width: 1200px;
margin:0 auto;
`
const TopContainer=styled.div`
min-height: 140px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 16px;
align-items: center;

.logo{
  margin-top: 15px;
}
.searchBar{
  input{
    background-color:#FFF5E1;
    border:#E2725B solid 5px;
    width: 285px;
    height:40px;
    font-weight: lighter;
    border-radius: 10px;
    padding: 0 9px;
    &::placeholder{
      color: #4B3F3B;
      opacity: 1;
    }
    &:focus{
      outline: none;
    }
  }
}
@media (0<width<600px){
  flex-direction: column;

}
`

const FilterContainer=styled.div`

display: flex;
gap: 30px;
justify-content:center;
align-items: center;
padding-top:25px;
margin-left: 30px;
margin-right: 30px;
`

export const Button=styled.button`
width: 96px;
height: 31px;
padding: 6px 12px;
border-radius: 6px;
background-color:${({isSelectted})=>isSelectted?"#E2725B":"#FFF5E1" };
border:none;
color: black;
font-weight:600;
&:hover{
  background-color:#E2725B;
  color: #FFF5E1;
}

`
// `

