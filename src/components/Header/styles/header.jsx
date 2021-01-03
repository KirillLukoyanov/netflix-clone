import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: 1.6;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
  border-bottom: 8px solid #222;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort ? "background-image: none;" : ""};
  }
`;

export const Logo = styled.img`
  width: 108px;
  height: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  height: 750px;

  @media (max-width: 900px) {
    padding: 20px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  font-size: 15px;
  text-decoration: none;
  width: 70px;
  height: fit-content;
  border: 0;
  padding: 8px 17px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e50914;
  color: #fff;
  font-size: 18px;

  &:hover {
    background-color: #40612;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? "700" : "normal")};
  cursor: pointer;
  font-size: 20px;

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Picture = styled.button`
  width: 32px;
  background-image: url(${({ src }) => src});
  background-size: contain;
  border: none;
  cursor: pointer;
  height: 32px;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;

  width: 200px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }

    button {
      margin-right: 10px;
    }
  }
`;

export const Profile = styled.div`
  width: 20px;
  diplay: flex;
  align-items: center;
  position: relative;
  margin-left: 20px;
  height: auto;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  dipslay: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  border-radius: 5px;
  height: 30px;
  outline: none;
  margin-left: ${({ active }) => (active ? "10px" : "0")};
  width: ${({ active }) => (active ? "200px" : "0")};
  opacity: ${({ active }) => (active ? "1" : "0")};
  padding: ${({ active }) => (active ? "0 10px" : "0")};
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
    height: auto;
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  color: #000;
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #ff1e1e;
    color: #fff;
  }
`;
