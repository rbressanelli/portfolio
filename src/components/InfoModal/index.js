import lig4 from "../../assets/lig4.png";
import space from "../../assets/spaceFlightNews.png";
import hamburger from "../../assets/hamburgerShop.png";
import geek from "../../assets/geekLegends.png";
import vintage from "../../assets/vintage.png";
import car from "../../assets/car.png";
import leads from "../../assets/leads.png";
import crud from "../../assets/crud.png";
import {
  lig4Text,
  spaceText,
  hamburgerText,
  legendsText,
  vintageText,
  carText,
  leadsText,
  crudText,
} from "./infoText";
import { Modal, Container, Button } from "./styles";

const InfoModal = ({ show, handleClick, app }) => {
  return (
    <>
      <Modal style={{ visibility: show ? "visible" : "hidden" }}>
        {app === "lig4" ? (
          <Container>
            <img src={lig4} alt="" />
            <p>{lig4Text.text1}</p>
            <p>{lig4Text.text2}</p>
          </Container>
        ) : app === "space" ? (
          <Container>
            <img src={space} alt="" />
            <p>{spaceText.text1}</p>
            <p>{spaceText.text2}</p>
            <p>{spaceText.text3}</p>
          </Container>
        ) : app === "legends" ? (
          <Container>
            <img src={geek} alt="" />
            <p>{legendsText.text1}</p>
            <p>{legendsText.text2}</p>
          </Container>
        ) : app === "hamburger" ? (
          <Container>
            <img src={hamburger} alt="" />
            <p>{hamburgerText.text1}</p>
            <p>{hamburgerText.text2}</p>
          </Container>
        ) : app === "vintage" ? (
          <Container>
            <img src={vintage} alt="" />
            <p>{vintageText.text1}</p>
            <p>{vintageText.text2}</p>
          </Container>
        ) : app === "car" ? (
          <Container>
            <img src={car} alt="" />
            <p>{carText.text1}</p>
            <p>{carText.text2}</p>
          </Container>
        ) : app === "leads" ? (
          <Container>
            <img src={leads} alt="" />
            <p>{leadsText.text1}</p>
            <p>{leadsText.text2}</p>
          </Container>
        ) : (
          <Container>
            <img src={crud} alt="" />
            <p>{crudText.text1}</p>
            <p>{crudText.text2}</p>
            <p>{crudText.text3}</p>
          </Container>
        )}
        <Button onClick={() => handleClick(!show)}>fechar</Button>
      </Modal>
    </>
  );
};

export default InfoModal;
