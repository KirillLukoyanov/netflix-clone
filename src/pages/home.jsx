import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import { OptForm, Feature } from "../components";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import FaqsContainer from "../containers/faqs";

function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>TRY 30 DAYS FREE</OptForm.Button>
            <OptForm.Text>
              Only new members are eligible for this offer.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
