import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { instance } from "../App";
import BodySearch from "../components/BodySearch";
import Header from "../components/header";

const Search = () => {
  const [data, setData] = useState();
  const { search } = useParams();
  const getData = async () => {
    const res = await instance.get("items");
    setData(res.data.data);
  };
  useEffect(() => {
    getData();
  });
  return (
    <div>
      <Header />
      <div style={{ display: "flex", overflowX: "scroll", marginLeft: "10vw" }}>
        {" "}
        {data &&
          data.map((item) => {
            if (item.name.includes(search)) {
              return <BodySearch item={item} />;
            }
          })}
      </div>
    </div>
  );
};
export default Search;
