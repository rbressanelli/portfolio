import { Container } from "./styles";

const Qualification = ({ showQualiDiv }) => {
  return (
    <Container display={showQualiDiv}>
      <ul>
        <li>
          Habilidade e experiência em HTML, CSS, JavaSript, Python e Django;
        </li>
        <li>
          Habilidade em Linux, Git, Flask, 
          PostgreSQL, SQLAlchemy adquirida através de atividades desenvolvidas
          no curso da Kenzie Academy Brasil;
        </li>
        <li>Convivência com metodologias ágeis - Scrum;</li>
        <li>
          Fácil aprendizado, adaptabilidade e relacionamento interpessoal.
        </li>
      </ul>
    </Container>
  );
};

export default Qualification;
