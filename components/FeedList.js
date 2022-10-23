import Feed from "./Feed";

function FeedList(props) {
  return (
    <div className="container mx-auto mt-1 p-1 bg-slate-400">
      <div className="secondaryNav container bg-slate-300 flex justify-between items-center text-sm p-1 pb-2  mt-1 mb-3 shadow-xl">
        <div className="categoriesDiv flex items-center">
          <label htmlFor="categories" className="mr-2">
            Categories:{" "}
          </label>
          <select name="categories" className="border-none rounded-lg bg-gray-100">
            <option value="1">Facebook</option>
            <option value="2">Websites</option>
            <option value="3">Youtube</option>
            <option value="4">Others</option>
            <option value="5">All</option>
          </select>
        </div>
        <div className="sortingDiv flex items-center">
          <label htmlFor="sorting" className="mr-2">
            SortBy:{" "}
          </label>
          <select name="sorting" className="border-none rounded-lg bg-gray-100">
            <option value="1">Asd</option>
            <option value="2">Dsd</option>
          </select>
        </div>
      </div>
      {props.data.map((item) => (
        <Feed
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default FeedList;
