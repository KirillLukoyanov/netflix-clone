import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 815px;
  margin: auto;
  margin-top: 20px;
  height: 100%;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    padding: 20px 30px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px 20px;
  outline: none;
  height: 70px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    margin-bottom: 20px;
    max-width: 100%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  border: 0;
  cursor: pointer;
  outline: none;
  color: white;
  justify-content: space-between;
  padding: 0 32px;
  font-size: 26px;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    margin-left: 15px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  @media (max-width: 1000px) {
    font-size: 20px;
    font-weight: 500;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 20px;
`;
