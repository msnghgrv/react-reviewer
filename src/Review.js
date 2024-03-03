import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
let length= people.length-1;
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, id, text, job } = people[index];
  const nextPerson = () => {
    let newIndex = index + 1;
    if(newIndex> length){
      setIndex(length)
      console.log(`incremented index== ${newIndex}`)
    }else{
      
      setIndex(newIndex);
      console.log(`incremented index== ${newIndex}`)
    }
    console.log(newIndex);
  };
  const prevPerson = () => {
    let newIndex = index - 1;
    if(newIndex<= 0){
      setIndex(0)
      console.log("decreased index-->",newIndex )
    }
   else{setIndex(newIndex)}
    console.log(newIndex);
  };
  const randomPerson=()=>{
    let randomPeople= Math.floor(Math.random()* people.length)
    setIndex(randomPeople)
    console.log(randomPeople)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img  " />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Surprise me</button>
    </article>
  );
};

export default Review;
