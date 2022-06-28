import { Container } from "./styles";
import react from "../../assets/react.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import python from "../../assets/python.svg";
import django from "../../assets/django.svg";
import flask from "../../assets/flask.svg";
import node from "../../assets/nodedotjs.svg";
import heroku from "../../assets/heroku.svg";
import express from "../../assets/express.svg";

const Technologies = () => {
  return (
    <Container>
      <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer">
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
      <a href="https://www.python.org/" target="_blank" rel="noreferrer">
        <img src={python} alt="python" />
      </a>
      <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer">
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
      <a href="https://dashboard.heroku.com/" target="_blank" rel="noreferrer">
        <img src={heroku} alt="heroku" />
      </a>
      <a href="https://expressjs.com/pt-br/" target="_blank" rel="noreferrer">
        <img src={express} alt="express" />
      </a>
    </Container>
  );
};

export default Technologies;
