import React from "react";
import {
  Container,
  Inner,
  Title,
  SubTitle,
  Image,
  Pane,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title>{children}</Title>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane>{children}</Pane>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle>{children}</SubTitle>;
};

Jumbotron.Image = function jumbotronImage({ src, alt, ...restProps }) {
  return <Image src={src} alt={alt} />;
};
