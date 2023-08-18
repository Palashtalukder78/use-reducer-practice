import { useState, useReducer } from "react";
import { reducer } from "./reducer";

const booklist = [
  { id: 1, name: "Harry Potter" },
  { id: 2, name: "Padma Nodir Maji" },
  { id: 3, name: "Naker Ful" },
];

let Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};
const initialState = {
  books: booklist,
  isModalOpen: false,
  modalText: "",
};
const UseingReducer = () => {
  const [bookState, dispatch] = useReducer(reducer, initialState);

  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };
  const removeBook =(id)=>{
    dispatch({ type: "REMOVE", payload: id });
  }
  return (
    <div>
      <h1>Use Reducer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      {bookState.books.map((book) => {
        const { id, name } = book;
        return (
          <li style={{ margin: "15px 5px" }} key={id}>
            {name} 
            <button onClick={()=>removeBook(id)}>x</button>
          </li>
        );
      })}
    </div>
  );
};

export default UseingReducer;
