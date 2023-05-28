import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">Sobre</div>
                <div className="text">Depois eu boto um texto aqui
                bem do massa ta ligado mas por enquanto
                vai isso aqui mesmo para não ficar sem nada.
                </div>
            </div>
            <div className="col"><div className="title">Contato</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">Localizado na pipipipopopo no cep tal, Nº 123213</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">Nº 12321</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Email:Issoaimesmo@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categorias</div>
                <div className="text">Fones de ouvido</div>
                <div className="text">Fones de ouvido</div>
                <div className="text">Fones de ouvido</div>
                <div className="text">Fones de ouvido</div>
                <div className="text">Fones de ouvido</div>
                <div className="text">Fones de ouvido</div>
            </div>
            <div className="col">
                <div className="title">Páginas</div>
                <div className="text">Início</div>
                <div className="text">Sobre</div>
                <div className="text">Políticas de Privacidade</div>
                <div className="text">Retornos</div>
                <div className="text">Termos & Condições</div>
                <div className="text">Contate a gente</div>
            
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Todos os direitos reservados a PIPIPIPOPOPO depois eu crio.
                </div>
                <img src={Payment} alt=""></img>
            </div>

        </div>

    </footer>;
};

export default Footer;
