import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={foto} alt="maquina de escrever" />
      <div>
        <h1>Entre em Contato </h1>
        <ul className={styles.dados}>
          <li>guuholiver567@gmail.com</li>
          <li>86 994349947</li>
          <li>
            <a href="https://www.linkedin.com/in/gustavo-oliveira-197081227/">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
