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
      dontShowOnSmallViewPort && "background: none;"}
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
    dis play: none;
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
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
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

  width: 100px;
  top: 32px;
  right: 10px;
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
