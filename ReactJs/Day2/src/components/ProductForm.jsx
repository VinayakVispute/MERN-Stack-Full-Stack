import { useState } from "react";
import "./ProductForm.css";

function ProductForm() {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
    // console.log(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
    // console.log(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();

    const productData = {
        title:newTitle,
        date:newDate
    }

    console.log(productData); 
    setDate('');
    setTitle('');
    
  }

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}>
        <div className="new-product_title">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-product_date">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-12"
            onChange={dateChangeHandler}
            value={newDate}
          ></input>
        </div>
        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
