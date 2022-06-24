import { Modal, Container, Button } from "./styles";
import lig4 from "../../assets/lig4.png";
import space from '../../assets/spaceFlightNews.png'
import hamburger from '../../assets/hamburgerShop.png'
import geek from '../../assets/geekLegends.png'
import { lig4Text, spaceText, hamburgerText, legendsText } from "./infoText";

const InfoModal = ({ show, handleClick, app }) => {
  let infoToShow = {
    

    space: "Space flight news",
    legends: 'Legends',
    hamburger: 'Hamburger'
  };

  return (
    <>
      <Modal style={{ visibility: show ? "visible" : "hidden" }}>
        {app === "lig4" ? (
          <Container>
            <img src={lig4} alt="" />
            <p>{lig4Text.text1}</p>
            <p>{lig4Text.text2}</p>
          </Container>
        ) : app === 'space' ? (
          <Container>
            <img src={space} alt="" />
            <p>{spaceText.text1}</p>
            <p>{spaceText.text2}</p>
            <p>{spaceText.text3}</p>
          </Container>
        ) : app === 'legends' ? (
          <Container>
            <img src={geek} alt="" />
            <p>{legendsText.text1}</p>
            <p>{legendsText.text2}</p>
          </Container>
        ) : (
          <Container>
            <img src={hamburger} alt="" />
            <p>{hamburgerText.text1}</p>
            <p>{hamburgerText.text2}</p>
          </Container>
        )}
        <Button onClick={() => handleClick(!show)}>fechar</Button>
      </Modal>
    </>
  );
};

export default InfoModal;
