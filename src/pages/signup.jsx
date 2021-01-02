import React from "react";
import HeaderContainer from "../containers/header";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const { firebase } = React.useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const isInvalid = password === "" || emailAddress === "" || firstName === "";

  const handleSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setFirstName("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error ? <Form.Error>{error}</Form.Error> : ""}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              value={emailAddress}
              placeholder="Email or phone number"
              type="text"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              type="text"
              autoComplete="off"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Login"
            />
            <Form.Input
              type="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Form.Submit disabled={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Have an account?{" "}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signup;
