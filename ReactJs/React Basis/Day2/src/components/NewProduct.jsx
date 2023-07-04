import "./NewProduct.css";
import ProductForm from "./ProductForm";

function NewProduct(props) {

  function newProductStatusUpdate(newProduct){
    console.log("I am in NewProduct.jsx")
    console.log("newProduct",newProduct)
    newProduct.productCreated=true;
    props.newProductStatus(newProduct)

  }

  return (
    <div className="new-product">
      <ProductForm onSaveProduct = {newProductStatusUpdate} />
    </div>
  );
}

export default NewProduct;
