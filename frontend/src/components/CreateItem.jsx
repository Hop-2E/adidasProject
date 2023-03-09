import { useRef } from "react";
import { instance } from "../App";
const CreateItem = ({ value }) => {
  const styleCreate = {
    create: {
      width: "30vw",
      height: "600px",
      backgroundColor: "white",
      display: value,
      position: "fixed",
      top: 200,
      left: "35vw",
      border: "1px solid black",
    },
    createContainer: {
      width: "30vw",
      height: "600px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    createTitle: {
      fontSize: "30px",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    },
    input: {
      width: "90%",
      height: "50px",
      border: "0.5px solid white",
      margin: "10px",
    },
    button: {
      width: "90%",
      height: "50px",
      margin: "20px",
      border: "0.5px solid grey",
      backgroundColor: "black",
      color: "white",
      font: "bold",
      fontSize: "21px",
    },
    miniContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    none: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    email: {
      width: "90%",
    },
    signTitle: {
      fontSize: "30px",
    },
    coolLaber: {
      width: "90%",
      height: "45px",
      marginTop: "20px",
    },
    signSwitch: {
      width: "90%",
      font: "bold",
      display: "flex",
      marginTop: "10px",
      justifyContent: "center",
    },
  };

  const nameRef = useRef();
  const priceRef = useRef();
  const colorRef = useRef();
  const typeRef = useRef();
  const imageRef = useRef();
  const storageRef = useRef();

  const createButton = async () => {
    const res = await instance.post("/items", {
      name: nameRef.current.value,
      type: typeRef.current.value,
      price: priceRef.current.value,
      color: colorRef.current.value,
      img: imageRef.current.value,
      token: JSON.parse(localStorage.getItem("token")),
      role: JSON.parse(localStorage.getItem("role")),
    });
    console.log(res);
  };

  return (
    <div className="create" style={styleCreate.create}>
      <div className="createContainer" style={styleCreate.createContainer}>
        <div className="createTitle" style={styleCreate.createTitle}>
          add your new item
        </div>
        <div className="minicontainer" style={styleCreate.inputContainer}>
          <div className="inputContainer" style={styleCreate.miniContainer}>
            <input
              type="text"
              className="input"
              style={styleCreate.input}
              ref={nameRef}
              placeholder="name"
            />
          </div>
          <div className="inputContainer" style={styleCreate.miniContainer}>
            <input
              type="text"
              className="input"
              style={styleCreate.input}
              ref={priceRef}
              placeholder="price"
            />
          </div>
          <div className="inputContainer" style={styleCreate.miniContainer}>
            <input
              type="text"
              className="input"
              style={styleCreate.input}
              ref={typeRef}
              placeholder="type"
            />
          </div>
          <div className="inputContainer" style={styleCreate.miniContainer}>
            <input
              type="text"
              className="input"
              style={styleCreate.input}
              ref={colorRef}
              placeholder="colors"
            />
          </div>
          <div className="inputContainer" style={styleCreate.miniContainer}>
            <input
              type="text"
              className="input"
              style={styleCreate.input}
              ref={imageRef}
              placeholder="imageURL"
            />
          </div>
          <div className="inputContainer" style={styleCreate.miniContainer}>
            <input
              type="text"
              className="input"
              style={styleCreate.input}
              ref={storageRef}
              placeholder="storage"
            />
          </div>
        </div>
        <div className="miniContainer" style={styleCreate.miniContainer}>
          <button
            className="button"
            style={styleCreate.button}
            onClick={createButton}
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateItem;
