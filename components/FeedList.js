import Feed from "./Feed";
import { useState } from "react";
import { useEffect } from "react";

function FeedList(props) {
  const [data, setData] = useState(props.data);
  const [originalData, setOriginalData] = useState(data);

  // const catFetcher = async(value) => {
  //   const response = await fetch(`/api/notes/${value}`, {
  //     method: "GET",

  //   });
  //   const newdata = await response.json()
  //   console.log(newdata)
  //   setData(newdata)
  // }
  const catFilter = (value) => {
    if (value === "1") {
      setData(originalData);
    } else {
      const filtered = originalData.filter((item) => item.type == value);
      setData(filtered);
    }
  };
  //console.log(data)

  const dateFilter = (value) => {
    //for new,date is bigger to smaller,so last-first,descending
    //important!!
    //need to copy data state; sorting data alone won't refresh ui,
    //react does not recognize sorting; meaning no changes in state 
    let copyData = [...data];
    if (value === "1") {
      const dated = copyData.sort((item1, item2) => {
        const date1 = new Date(item1.createdAt);
        const date2 = new Date(item2.createdAt);
        return date2 - date1;
      });
      setData(dated)
     
     
    }
    //for old,date is smaller to bigger,so first-last,asscending
    else {
      const dated = copyData.sort((item1, item2) => {
        const date1 = new Date(item1.createdAt);
        const date2 = new Date(item2.createdAt);
        return date1 - date2;
      });
      setData(dated);
    }
  };
  // useEffect(() => {
    
  // },[data])

  return (
    <div className="container mx-auto mt-1 p-1 bg-slate-400">
      <div className="secondaryNav container bg-slate-300 flex justify-between items-center text-md p-3 pb-2  mt-0 mb-3 shadow-xl">
        <div className="categoriesDiv flex items-center">
          <label htmlFor="categories" className="mr-2">
            Categories:{" "}
          </label>
          <select
            name="categories"
            className="border-none p-1 pt-2 pb-2 text-sm rounded-lg bg-gray-100 font-medium"
            onChange={(e) => catFilter(e.target.value)}
          >
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
          <select
            name="sorting"
            className="border-none text-sm p-1 pt-2 pb-2 rounded-lg bg-gray-100 font-medium"
            onChange={(e) => dateFilter(e.target.value)}
          >
            <option value="2">Old</option>
            <option value="1">New</option>
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
