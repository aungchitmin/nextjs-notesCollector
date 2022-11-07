import Feed from "./Feed";
import { useState } from "react";

function FeedList(props) {

  const [data, setData] = useState(props.data)

  const catFetcher = async(value) => {
    const response = await fetch(`/api/notes/${value}`, {
      method: "GET",
      
    });
    const newdata = await response.json()
    console.log(newdata)
    setData(newdata)
  }

  return (
    <div className="container mx-auto mt-1 p-1 bg-slate-400">
      <div className="secondaryNav container bg-slate-300 flex justify-between items-center text-md p-3 pb-2  mt-0 mb-3 shadow-xl">
        <div className="categoriesDiv flex items-center">
          <label htmlFor="categories" className="mr-2">
            Categories:{" "}
          </label>
          <select name="categories" className="border-none p-1 pt-2 pb-2 text-sm rounded-lg bg-gray-100 font-medium"
          onChange={(e) => catFetcher(e.target.value)}>
            <option value="1">All</option>
            <option value="2">Facebook</option>
            <option value="3">Websites</option>
            <option value="4">Youtube</option>
            <option value="5">Others</option>
          </select>
        </div>
        <div className="sortingDiv flex items-center">
          <label htmlFor="sorting" className="mr-2">
            SortBy:{" "}
          </label>
          <select name="sorting" className="border-none text-sm p-1 pt-2 pb-2 rounded-lg bg-gray-100 font-medium">
            <option value="1">New</option>
            <option value="2">Old</option>
          </select>
        </div>
      </div>
      {data.map((item) => (
        <Feed
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          link={item.link}
          type={item.type}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
}

export default FeedList;
