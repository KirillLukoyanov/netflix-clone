import React from "react";
import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { Loading, Header } from "../components";
import * as ROUTES from "../constants/routes";
import logoSvg from "../logo.svg";

function BrowseContainer({ slides }) {
  const [profile, setProfile] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { firebase } = React.useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  React.useEffect(() => {
    console.log("profile", profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={profile.photoURL} />
    ) : (
      <>
        <Loading.ReleaseBody />
        <Header src="joker1" dontShowOnSmallViewPort>
          <Header.Container>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src={logoSvg} alt="netflix-logo" />
              <Header.TextLink>Films</Header.TextLink>
              <Header.TextLink>Series</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Profile>
                <Header.Picture src={`/images/users/${user.photoURL}.png`} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture
                      src={`/images/users/${user.photoURL}.png`}
                    />
                    <Header.TextLink>{profile.displayName}</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Container>
          <Header.Feature>
            <Header.Title>Watch New Joker</Header.Title>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
          </Header.Feature>
        </Header>
      </>
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
