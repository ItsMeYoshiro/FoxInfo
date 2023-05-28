import "./Products.scss";
import Product from "./Product/Product";


const Products = ({ innerPage }) => {
    return <div className="products-container">
        {!innerPage && <div className="sec-heading">Sessão de produtos</div> }
        
        <div className="products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>    
    </div>;
};

export default Products;
