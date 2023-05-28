import "./SingleProduct.scss";

import RelatedProcuts from "./RelatedProducts/RelatedProducts";

import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaCartPlus,
    FaLink,
    FaPinterest,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-1.webp";


const SingleProduct = () => {
    return <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right"></div>
                        <span className="name">Nome do produto</span>
                        <span className="price">Preço</span>
                        <span className="desc">Descrição</span>

                    <div className="cart-buttons">
                        <span>-</span>
                        <span>5</span>
                        <span>+</span>
                    </div>
                    <button className="add-to-cart">
                        <FaCartPlus size={20} />
                        Adicionar ao carrinho
                    </button>
                </div>]
                <span className="divider"/>
                <div className="info-item">
                    <span className="text-bold">Categoria:
                        <span>Fones de ouvido</span>
                    </span>
                    <span className="text-bold">Compartilhe:
                        <span className="social-icons">
                            <FaFacebookF size={16} />
                            <FaTwitter size={16} />
                            <FaInstagram size={16} />
                            <FaLinkedinIn size={16} />
                            <FaPinterest size={16} />
                        </span>
                    </span>
                </div>
            </div>
            <RelatedProcuts />
        </div>

};

export default SingleProduct;
