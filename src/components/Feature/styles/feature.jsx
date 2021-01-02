import styled from "styled-components/macro";

export const Container = styled.div`
  text-align: center;
  fisplay: flex;
  flex-direction: column;
  color: #fff;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 50px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
