import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import { AiOutlineMail } from 'react-icons/ai'
import { Container } from "./styles";

const Footer = () => {
  return (
    <Container id='nav'>
      <nav>
        <a href="https://github.com/rbressanelli">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/robertobressanelli/"><BsLinkedin /></a>
        <a href="https://www.facebook.com/roberto.bressanelli/"><BsFacebook /></a>
        <a href="mailto:rbressanelli@gmail.com" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a>
      </nav>
    </Container>
  );
};

export default Footer;
