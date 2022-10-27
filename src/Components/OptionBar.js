import { useState, useEffect } from "react";


const OptionBar = (props) => {

  const { generateUrlParams } = props;
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sortBy , setSortBy] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    generateUrlParams(limit, page, sortBy, order)
  }, [limit, page, sortBy, order])

  return (
    <div>
      <label> Limit: </label>
      <input 
        type="number" 
        value={limit}
        onChange={(e) => {
          setLimit(e.target.value)
        }}
      ></input>
      {/* <br/> */}
      <label> Page: </label>
      <input 
        type="number" 
        value={page}
        onChange={(e) => {
          setPage(e.target.value)
        }}
      ></input>
      {/* <br/> */}
      <label> Sort By: </label>
      <select onChange={(e) => {
          setSortBy(e.target.value)
      }}>
        <option value=""></option>
        <option value="id">Id</option>
        <option value="title">Title</option>
        <option value="createdAt">Created At</option>
      </select>
      {/* <br/> */}
      <label> Order: </label>
      <select onChange={(e) => {
          setOrder(e.target.value)
        }}>
        <option></option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}

export default OptionBar;