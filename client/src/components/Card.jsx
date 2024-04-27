import React, { useState } from "react";
import { useEffect} from "react";
import Completed from "../utils/Completed";
import Favourite from "../utils/Favourite";
import axios from "axios";

const Card = () => {
  // let cardDetails = [
  //   {
  //     title: ["Gracathon"],
  //     content: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
  //     ],
  //   },
  //   {
  //     title: ["Gracathon 2.0"],
  //     content: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
  //     ],
  //   },
  //   {
  //     title: ["Gracathon 2.0"],
  //     content: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
  //     ],
  //   },
  //   {
  //     title: ["Gracathon"],
  //     content: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
  //     ],
  //   },
  //   {
  //     title: ["Gracathon 2.0"],
  //     content: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
  //     ],
  //   },
  //   {
  //     title: ["Gracathon 2.0"],
  //     content: [
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus sapiente quod, est molestias vitae cum commodi eius nulla debitis. Ipsa, consequuntur? ",
  //     ],
  //   },
  // ];

  const getCardDetails = async ()=>{
     try { 
      const res = await axios.get("http://localhost:3000/")
      setCardDetails(res.data)
     } catch (error) {
      console.log(error)
     }
  }

  const [cardDetails, setCardDetails] = useState([])

  useEffect(() => {
    getCardDetails()
  },[])
  


  return (
    <div className="grid grid-cols-3 gap-10 gap-y-4 w-full">
      {cardDetails.map((card, i) => {
        return (
          <div
            key={i}
            className="h-[14.6rem] w-[20rem] bg-[#494D7D]  rounded-xl pl-10 text-white p-3 ml-10"
          >
            <div className="text-white font-semibold mb-2">{card.title}</div>
            <p className="text-sm">{card.content}</p>
            <i className="text-[12px] opacity-45 mt-2">MM/DD/YYYY</i>
            <div className="flex justify-between mt-2">
              <Favourite />
              <Completed />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
