import Footer from "./components/footer";
import Header from "./components/Header";
import { GlobalStyle } from "./global";
import photo from "./assets/photo.png";
import react from "./assets/react.svg";
import html from "./assets/html.svg";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.svg";
import python from "./assets/python.svg";
import django from "./assets/django.svg";
import flask from "./assets/flask.svg";
import node from "./assets/nodedotjs.svg";
import heroku from "./assets/heroku.svg";
import express from "./assets/express.svg";
import { Lig4App, SpaceNews, Legends, Hamburger, VintageRentals, CarRentals, Leads, Crud } from "./components/Aplications";

import {
  Button,
  Container,
  Description,
  ImageCard,
  LinkDeploy,
  Main,
  ProjectCard,
  Projects,
  Section,
  Tecnologies,
  VideoBackGround,
} from "./styles";
import { useState } from "react";
import InfoModal from "./components/InfoModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main>        
        <Section>
          <ImageCard>
            <img src={photo} alt="roberto" />
          </ImageCard>
          <Description>
            <p>
              Apaixonado por tecnologia, curioso e em busca de novos desafios,
              concluí recentemente o curso de Desenvolvedor Web Full Stack e
              estou pronto para contribuir nesta área tão promissora e presente
              na vida de todos.
            </p>
          </Description>
        </Section>
        <Section>
          <div>
            <h2>Tecnologias</h2>
            <Tecnologies>
              <a
                href="https://pt-br.reactjs.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={react} alt="react" />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noreferrer"
              >
                <img src={html} alt="html" />
              </a>

              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
              >
                <img src={css} alt="css" />
              </a>
              <a
                href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img src={javascript} alt="javascript" />
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={python} alt="python" />
              </a>
              <a
                href="https://www.djangoproject.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={django} alt="django" />
              </a>
              <a
                href="https://flask.palletsprojects.com/en/2.1.x/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={flask} alt="flask" />
              </a>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img src={node} alt="node" />
              </a>
              <a
                href="https://dashboard.heroku.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={heroku} alt="heroku" />
              </a>
              <a
                href="https://expressjs.com/pt-br/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={express} alt="express" />
              </a>
            </Tecnologies>
          </div>
        </Section>
        <Section>
          <Projects>
            <h2>Projetos</h2>
            <div id="projects-container">
              <Lig4App />
              <SpaceNews />
              <Legends />
              <Hamburger />
              <VintageRentals />
              <CarRentals />
              <Leads />
              <Crud />
            </div>
          </Projects>
        </Section>
      </Main>

      <Footer></Footer>
    </Container>
  );
}

export default App;
