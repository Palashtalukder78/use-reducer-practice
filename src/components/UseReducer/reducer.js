export const reducer = (state, action) => {
  //action.type and action.payload from dispatch
  if (action.type === "ADD") {
    const allBooks = [...state.books, action.payload];
    return {
      ...state,
      books: allBooks,
      isModalOpen: true,
      modalText: "The Book is Added",
    };
  }
  if(action.type ==="REMOVE"){
    const filterBook = [...state.books].filter(book=> book.id !== action.payload);
    return {
        ...state,
        books: filterBook,
        isModalOpen: true,
        modalText: "The Book deleted"
    }
  }
  return state;
};
