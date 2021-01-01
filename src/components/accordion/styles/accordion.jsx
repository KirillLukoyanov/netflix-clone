import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
`;
export const Body = styled.div`
  padding: 0.8em 1.2em;
  background-color: #303030;
  line-height: 1.4;
  font-size: 26px;
  max-height: 1200px;
  white-space: pre-wrap;
  user-select: none;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Header = styled.div`
  font-weight: normal;
  display: flex;
  justify-content: space-between;
  background-color: #303030;
  align-items: center;
  font-size: 26px;
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  user-select: none;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    transition: 0.2s ease;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Inner = styled.div`
  max-width: 815px;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
`;
export const Title = styled.h1`
  font-size: 50px;
  color: white;
  line-height: 1.1;
  margin-top: 0px;
  margin-bottom: 15px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  max-width: 670px;

  &:first-of-type {
    margin-top: 3em;
  }
`;
