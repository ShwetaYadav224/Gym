import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";
const FQA = ({question,ans}) => {
    const[isAnswerShowing, setIsAnswerShowing]=useState(false);
  return (
    <article className="faq" > 
    <div> 
    
    
    <h3>{question}</h3>
    <button className="faq_icon"onClick={()=>setIsAnswerShowing(prev=>!prev)}> {isAnswerShowing?<AiOutlineMinus/>:<AiOutlinePlus/>} </button>
    
    
    </div>
      
   
    {isAnswerShowing &&  <p>{ans}</p>}
    </article>

  )
};

export default FQA