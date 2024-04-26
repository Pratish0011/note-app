import { React, useState } from "react";
import { FaHeart } from "react-icons/fa";

const Completed = () => {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }

  return (
    <div className="bg-[#6841D8] rounded-full p-2 pl-4 pr-4 text-[13px] flex items-center">
      <p className="cursor-pointer" onClick={handleClick}>
        {click ? <FaHeart className="text-red-500" /> : <FaHeart />}
      </p>
    </div>
  );
};

export default Completed;
