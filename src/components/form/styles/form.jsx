import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%
  max-width: 450px;
  padding: 60px 68px 40px;
  margin: auto;
  margin-bottom: 100px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: #fff;
  padding: 15px 20px;
  width: 100%;
  max-width: 260px;
`;

export const Text = styled.p``;

export const Submit = styled.button`
  height: 45px;
  color: #ffffff;
  background-color: #e50914;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  outline: none;
  border-radius: 5px;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
  max-width: 300px;
`;

export const Link = styled(ReachRouterLink)`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  padding: 20px 30px;
  border: 0;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
  outline: none;
  margin-top: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
