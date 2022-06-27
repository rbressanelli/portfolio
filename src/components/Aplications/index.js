import { AiOutlineGithub } from "react-icons/ai";
import {
  Button,
  LinkDeploy,
  ProjectCard,
  VideoBackGround,
  ImageBackground,
} from "../../styles";
import lig4 from "../../assets/lig4.webm";
import space from "../../assets/space.webm";
import legends from "../../assets/geek-legends.webm";
import hamburger from "../../assets/hamburger.webm";
import vintage from "../../assets/vintage.png";
import car from "../../assets/car.png";
import leads from '../../assets/leads.png'
import crud from '../../assets/crud.png'
import { useState } from "react";
import InfoModal from "../InfoModal";

const Lig4App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"lig4"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Game Lig4</h3>
        <VideoBackGround autoPlay loop muted id="video">
          <source src={lig4} type="video/webm" />
        </VideoBackGround>
        <LinkDeploy
          onClick={() =>
            window.location.assign(
              "https://rbressanelli.github.io/Game_Lig4_ColdWar_edition/"
            )
          }
        >
          site
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign(
              "https://github.com/bressanelli-personal-projects/Lig4"
            )
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const SpaceNews = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"space"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Space Flight News</h3>
        <VideoBackGround autoPlay loop muted id="video">
          <source src={space} type="video/webm" />
        </VideoBackGround>
        <LinkDeploy
          onClick={() =>
            window.location.assign("https://space-flight-news-eta.vercel.app/")
          }
        >
          site
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign(
              "https://github.com/rbressanelli/space_flight_news"
            )
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const Legends = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"legends"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Geek Legends</h3>
        <VideoBackGround autoPlay loop muted id="video">
          <source src={legends} type="video/webm" />
        </VideoBackGround>
        <LinkDeploy
          onClick={() =>
            window.location.assign("https://geek-legends.vercel.app/")
          }
        >
          site
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign(
              "https://github.com/rbressanelli/geek_legends"
            )
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const Hamburger = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal
        app={"hamburger"}
        show={showModal}
        handleClick={setShowModal}
      />
      <ProjectCard>
        <h3>Hamburger Shop</h3>
        <VideoBackGround autoPlay loop muted id="video">
          <source src={hamburger} type="video/webm" />
        </VideoBackGround>
        <LinkDeploy
          onClick={() =>
            window.location.assign("https://hamburger-shop.vercel.app/")
          }
        >
          site
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign(
              "https://github.com/rbressanelli/hamburger-shop"
            )
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const VintageRentals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"vintage"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Vintage Rentals</h3>
        <ImageBackground src={vintage} alt="vintage_rentals" />

        <LinkDeploy
          onClick={() =>
            window.location.assign(
              "https://documenter.getpostman.com/view/19787362/Uz5CNeSX"
            )
          }
        >
          documentação
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign(
              "https://github.com/rbressanelli/vintage_rentals"
            )
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const CarRentals = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"car"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Car Rentals</h3>
        <ImageBackground src={car} alt="car_rentals" />

        <LinkDeploy
          onClick={() =>
            window.location.assign(
              "https://carrental-capstone.herokuapp.com/api/docs/"
            )
          }
        >
          documentação
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign("https://github.com/rbressanelli/carrentals")
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const Crud = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"crud"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Crud</h3>
        <ImageBackground src={crud} alt="crud" />

        <LinkDeploy
          onClick={() =>
            window.location.assign(
              "https://github.com/rbressanelli/crud_node_express_orm#readme"
            )
          }
        >
          documentação
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign("https://github.com/rbressanelli/crud_node_express_orm")
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

const Leads = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <InfoModal app={"leads"} show={showModal} handleClick={setShowModal} />
      <ProjectCard>
        <h3>Leads</h3>
        <ImageBackground src={leads} alt="leads" />

        <LinkDeploy
          onClick={() =>
            window.location.assign(
              "https://github.com/rbressanelli/flask-api#readme"
            )
          }
        >
          documentação
        </LinkDeploy>
        <Button
          onClick={() =>
            window.location.assign("https://github.com/rbressanelli/flask-api")
          }
          disabled={showModal}
        >
          <AiOutlineGithub />
        </Button>
        <Button disabled={showModal} onClick={() => setShowModal(!showModal)}>
          info
        </Button>
      </ProjectCard>
    </>
  );
};

export {
  Lig4App,
  SpaceNews,
  Legends,
  Hamburger,
  VintageRentals,
  CarRentals,
  Leads,
  Crud,
};
