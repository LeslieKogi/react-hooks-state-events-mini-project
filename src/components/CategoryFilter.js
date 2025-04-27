import React,{useState} from "react";

function CategoryFilter({categories ,}) {
const [selectedcategory, setSelectedCategory]=useState("All")

  function handleClick(category){
    console.log({category})
    setSelectedCategory(category)
  }

  const categoryButtons=categories.map((category)=>(
    <button key={category} 
    className={category===selectedcategory? "selected":""}
     onClick={()=>handleClick(category)} >{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
