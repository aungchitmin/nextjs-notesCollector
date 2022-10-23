import {FaFacebook} from "react-icons/fa"
import {BsChevronDown,BsChevronUp} from "react-icons/bs"

function Feed(props) {
  const ID = props.id;

  const toggle = () => {
    document.getElementById(ID).classList.toggle("desc");
  };
  
  return (
    <div className="container mx-auto p-2 bg-green-800 justify-between items-center text-center text-white flex flex-wrap mb-3 shadow-lg">
      <h1 className="text-lg font-medium mx-0 px-1 flex items-center">
      <FaFacebook className="mr-2 text-lg"/>
        <span className="bg-orange-700">{props.title}</span>
      </h1>
      <div>
        <div
          onClick={toggle}
          className="bg-neutral-900 p-2 mr-2 rounded-lg"
        >
          <BsChevronDown/>
        </div>
      </div>

      <div
        id={ID}
        className="open desc flex-none bg-slate-800 mt-3 mx-auto p-2 rounded-lg container space-y-2"
      >
        <p className="p-1">- {props.description}</p>
        <div>
          <button className="bg-neutral-900 p-2 rounded-lg">Copy</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
