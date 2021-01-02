import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  font-size: 45px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  color: #fff;
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 25px;

  &:hover {
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
`;

export const User = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }

  &:hover > ${Name} {
    font-weight: bold;
    color: #fff;
  }

  &:last-of-type: {
    margin-right: 0;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;
