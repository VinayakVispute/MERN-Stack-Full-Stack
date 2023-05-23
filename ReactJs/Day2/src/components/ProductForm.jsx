import { useState } from 'react';
import './ProductForm.css'

function ProductForm() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    function titleChangeHandler(event){
        console.log(event.target.value)
    }
    
    return (
        <div className="form-container">
        <form>
            <div className='new-product_title'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}></input>
            </div>
            <div  className='new-product_date'>
                <label>Date</label>
                <input type='date' min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
        </div>
    )
}


export default ProductForm; 