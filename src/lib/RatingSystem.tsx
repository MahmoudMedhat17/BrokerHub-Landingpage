import { useState } from "react";

const RatingSystem = () => {

    const rateNumbers = [1,2,3,4,5];    
    const [rating,setRating] = useState(0);

  return (
    <div>
        {
            rateNumbers.map((rate, index)=>(
                <span key={index} className={`${rating >= rate ? `text-yellow-500` : `text-gray-400`} cursor-pointer`} onClick={()=> setRating(rate)}>
                    {" "} 
                        <span className="">★</span>
                    {" "}
                </span>
            ))
        }
    </div>
  )
}

export default RatingSystem;