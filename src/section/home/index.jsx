import React from "react";
import FotoPerfil from "../../assets/Foto-Perfil.jpeg";
import "./home.css";
import icon1 from "../../assets/icons/linkedin.png";
import icon2 from "../../assets/icons/discordia.png";
import icon3 from "../../assets/icons/github.png";
import icon4 from "../../assets/icons/whatsapp.png";

export default function Home() {
  return (
    <div id="home">
      <div
        className="imgHome"
        style={{
          backgroundColor: `#0a0c21`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          margin: 0,
        }}
      >
        <div id="principal">
          <h1 className="inicio">Bem vindo ao meu portifolio</h1>

          <p className="description">
            Meu nome é Deivid, estou estudando Analise e Desenvolvimento de
            Sistemas. Gosto desde da infância da área de tecnologia. Atualmente
            estou trabalhando como Suporte Técnico, tenho conhecimento básico em
            algumas linguagens de programação e na tecnologia pretendo seguir a
            área de Desenvolvimento e sempre estou aprendendo algo novo.
          </p>
        </div>

        <div id="contato">
          <img className="perfil" src={FotoPerfil}></img>
          <span typeof="email" className="contato">
            <span className="contactsText">E-Mail: </span>
            deividmaciel6@gmail.com
          </span>
          <span typeof="phone" className="contato">
            <span className="contactsText">Telefone: </span>
            65 99204-8761
          </span>
        </div>
        <hr></hr>
        <div id="iconP">
          <a
            href="https://www.linkedin.com/in/deivid-maciel-rodrigues-531596202/"
            target="_blank"
          >
            <img className="icon" src={icon1}></img>
          </a>
          <a href="#" target="_blank">
            <img className="icon" src={icon2}></img>
          </a>
          <a href="https://github.com/deividrw" target="_blank">
            <img className="icon" src={icon3}></img>
          </a>
          <a href="https://wa.me/5565992048761" target="_blank">
            <img className="icon" src={icon4}></img>
          </a>
          {/* <span className="copyright">&#169; todos os direitos reservados</span> */}
        </div>
      </div>
      
    </div>
  );
}
