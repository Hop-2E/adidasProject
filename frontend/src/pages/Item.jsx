import { useParams } from "react-router-dom";
import { instance } from "../App";
import Header from "../components/Header";

const Item = () => {
  const { id } = useParams();
  const sags = async () => {
    const res = await instance.put(`items/${id}`, {
      token: JSON.parse(localStorage.getItem("token")),
      sags: JSON.parse(localStorage.getItem("user_id")),
    });
  };
  return (
    <div>
      <Header />
      {id}
      <button onClick={sags}>sagsand hiih</button>
    </div>
  );
};
export default Item;
