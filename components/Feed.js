import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useState } from "react";
import { format } from "timeago.js";

function Feed(props) {
  const [flag, setFlag] = useState(false);
  const ID = props.id;

  const copyFun = () => {
    navigator.clipboard.writeText(props.link);
    //console.log(document.getElementById(ID).lastChild.firstChild.textContent)
    document.getElementById(ID).lastChild.firstChild.textContent="Copied"

  }

  const toggle = () => {
    setFlag(!flag);
    document.getElementById(ID).classList.toggle("desc");
    
  };

  return (
    <div
      className="container mx-auto p-2 bg-green-800 justify-between items-center text-center text-slate-200  flex flex-wrap mb-3 shadow-lg"
     
    >
      <div className="flex flex-1 items-center justify-between" onClick={toggle}>
        <div className="flex items-center">
          {props.type == 2 && (
            <div>
              <FaFacebook className="text-slate-200 mr-2" size="28" />
            </div>
          )}
          {props.type == 3 && (
            <div>
              <BiWorld className="text-slate-200 mr-2" size="28" />
            </div>
          )}
          {props.type == 4 && (
            <div>
              <FaYoutube className="text-slate-200 mr-2" size="28" />
            </div>
          )}
          {props.type == 5 && (
            <div>
              <GiNotebook className="text-slate-200 mr-2" size="28" />
            </div>
          )}
          <h1 className="text-xl text-slate-200 py-1 bg-slate-700 rounded-md font-medium mx-0 px-2 ">
            <span className="">{props.title}</span>
          </h1>
        </div>
        <div>
          <div className="bg-neutral-900 p-2 mr-1 ml-2 rounded-lg " >
            {!flag && <BsChevronDown />}
            {flag && <BsChevronUp />}
          </div>
        </div>
      </div>

      <div
        id={ID}
        className="open desc flex-none bg-slate-800 mt-3 mx-auto p-2 rounded-lg container space-y-2 transition-all duration-400 ease-out text-left"
      >
        <div className="flex items-center justify-between">
          <p className="p-1 text-lg">- {props.description}</p>
          <h6>{format(props.createdAt)}</h6>
        </div>
        <p className="p-1 pl-4">{props.link}</p>

        <div className="flex justify-center relative">
          <button className="bg-neutral-900 shadow-md w-24 p-2 rounded-lg cursor-pointer" onClick={copyFun}>
          
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
