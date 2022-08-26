import { Container } from "./styles";

const Experience = ({ showExpDiv }) => {
  return (
    <Container display={showExpDiv}>
      <h3>Empresa: Brilliant Machine</h3>
      <h4>
        Função: <spam>Desenvolvedor Python Pleno</spam> - ago/2022 - atual
      </h4>
      <ul>
        <li>Desenvolvimento de aplicação full stack em Python/Django;</li>
        <li>Programação em Python.</li>
      </ul>
      <h3>Empresa: Kenzie Academy Brasil</h3>
      <h4>
        Função: <spam>Peer Coach M5 (Monitoria)</spam> - jun/2022 - ago/2022
      </h4>
      <ul>
        <li>Correção de atividades dos alunos;</li>
        <li>Atuação junto aos alunos para tirar dúvidas;</li>
        <li>Acompanhamento dos alunos quanto ao seu progresso no curso.</li>
      </ul>
      <h3>Empresa: INLAC BRASIL</h3>
      <h4>
        Função: <spam>Técnico de Certificação</spam> - jun/2010 - fev/2020
      </h4>
      <ul>
        <li>
          Elaboração de documentos do Sistema de Gestão da Qualidade e de
          procedimentos de certificação de Conteúdo Local;
        </li>
        <li>Realização de auditorias internas e externas;</li>
        <li>Responsável pela realização de certificação de Conteúdo Local.</li>
      </ul>
      <h3>Empresa: In-Dermo Ind. e Com. Ltda.</h3>
      <h4>
        Função: <spam>Técnico em Eletrônica / Coord. de Produção</spam> -
        mai/1998 - ago/2009
      </h4>
      <ul>
        <li>Realização de Auditorias Internas;</li>
        <li>Responsável por Coordenar a produção dos equipamentos;</li>
        <li>Responsável pelo Sistema de Gestão da Qualidade.</li>
      </ul>
    </Container>
  );
};

export default Experience;
