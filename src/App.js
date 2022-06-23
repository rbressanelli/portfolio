import Footer from "./components/footer";
import Header from "./components/Header";
import GlobalStyle from "./global";
import photo from "./assets/photo.png";
import react from "./assets/react.svg";
import html from "./assets/html.svg"
import css from "./assets/css.svg"
import javascript from "./assets/javascript.svg"
import python from "./assets/python.svg"
import django from "./assets/django.svg"
import flask from './assets/flask.svg'
import node from './assets/nodedotjs.svg'
import heroku from './assets/heroku.svg'
import express from './assets/express.svg'

import {
  Container,
  Description,
  ImageCard,
  Main,
  Section,
  Tecnologies,
} from "./styles";

function App() {
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
            <img src={react} alt="react" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={javascript} alt="javascript" />
            <img src={python} alt="python" />
            <img src={django} alt="django" />
            <img src={flask} alt="flask" />
            <img src={node} alt="node" />
            <img src={heroku} alt="heroku" />
            <img src={express} alt="express" />
          </Tecnologies>
          </div>        
        </Section>
      </Main>
      <Footer></Footer>
    </Container>
  );
}

export default App;
