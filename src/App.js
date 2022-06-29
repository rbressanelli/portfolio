import { useState } from "react";
import { GlobalStyle } from "./global";
import photo from "./assets/photo.png";
import dio from "./assets/dio.png";
import front from "./assets/frontend.jpg";
import fullstack from "./assets/fullstack.png";
import eng from "./assets/eng.png";
import {
  Lig4App,
  SpaceNews,
  Legends,
  Hamburger,
  VintageRentals,
  CarRentals,
  Leads,
  Crud,
} from "./components/Aplications";
import Footer from "./components/footer";
import Header from "./components/Header";
import Technologies from "./components/Technologies";
import Qualification from "./components/Qualification";
import Experience from "./components/Experience";

import {
  Certificates,
  Container,
  Description,
  Formation,
  ImageCard,
  Main,
  Projects,
  Section,
  VerticalSpace,
} from "./styles";

function App() {
  const [showQualiDiv, setShowQualiDiv] = useState(false);
  const [showExpDiv, setShowExpDiv] = useState(false);

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
            <h1>
              Bem vindo a minha página!
            </h1> 
            <h3>
              Sobre mim:  
            </h3>
            <p>
              Tenho 52 anos, Trekker de carteirinha, gosto de filmes e séries bem como de um choppinho com os amigos! 
            </p>
            <p>
              Apaixonado por tecnologia, curioso e em busca de novos desafios,
              concluí recentemente o curso de Desenvolvedor Web Full Stack e
              estou pronto para contribuir nesta área tão promissora e presente
              na vida de todos.
            </p>  
            <p id='contact'><a href='#nav' >entre em contato</a></p>        
          </Description>
        </Section>
        <VerticalSpace />
        <Section>
          <div>
            <h1>Formação</h1>
            <Formation>
              <p>
                Engenharia Eletrônica - Universidade Veiga de Almeida - 2008 
              </p>
              <p>
                MBA Petróleo e Gás - Universidade Veiga de Almeida - 2011 
              </p>
              <p>
                Desenvolvedor Web Full Stack - Kenzie Academy Brasil - 2022
              </p>
            </Formation>
            <div>
              <h1>Certificados</h1>
              <Certificates>
                <img src={dio} alt="certificado dio" />
                <img src={front} alt="certificado kenzie front" />
                <img src={fullstack} alt="certificado kenzie full" />
                <img src={eng} alt="diploma engenharia" />
              </Certificates>
            </div>
          </div>
        </Section>
        <VerticalSpace />
        <Section>
          <h1
            style={{ boxShadow: showQualiDiv ? "-2px -2px 4px rgba(0,2,76,0.7)" : "" }}
            onClick={() => setShowQualiDiv(showExpDiv ? null : !showQualiDiv)}
          >
            Qualificações
          </h1>
          <h1
            style={{ boxShadow: showExpDiv ? "-2px -2px 4px rgba(0,2,76,0.7)" : "" }}
            onClick={() => setShowExpDiv(showQualiDiv ? null : !showExpDiv)}
          >
            Experiência Profissional
          </h1>
        </Section>
        <Qualification showQualiDiv={showQualiDiv} />
        <Experience showExpDiv={showExpDiv} />
        <VerticalSpace />
        <Section>
          <div>
            <h2>Tecnologias</h2>
            <Technologies />
          </div>
        </Section>
        <VerticalSpace />
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
