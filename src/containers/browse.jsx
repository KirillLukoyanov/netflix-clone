import React from "react";
import SelectProfileContainer from "./profiles";
import { FirebaseContext } from "../context/firebase";
import FooterContainer from "./footer";
import { Loading, Header, Card, Player } from "../components";
import * as ROUTES from "../constants/routes";
import logoSvg from "../logo.svg";
import Fuse from "fuse.js";

function BrowseContainer({ slides }) {
  const [category, setCategoty] = React.useState("films");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [profile, setProfile] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const { firebase } = React.useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [slideRows, setSlideRows] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  React.useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  React.useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

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
              <Header.TextLink
                active={category === "films" ? true : false}
                onClick={() => {
                  setCategoty("films");
                }}
              >
                Films
              </Header.TextLink>
              <Header.TextLink
                active={category === "series" ? true : false}
                onClick={() => {
                  setCategoty("series");
                }}
              >
                Series
              </Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.Profile>
                <Header.Picture src={`/images/users/${user.photoURL}.png`} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture
                      src={`/images/users/${user.photoURL}.png`}
                    />
                    <Header.TextLink>{profile.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}>
                      Sign Out
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Container>
          <Header.Feature dontShowOnSmallViewPort>
            <Header.Title>Watch New Joker</Header.Title>
            <Header.Text>
              Forever alone in a crowd, failed comedian Arthur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>

        <Card.Group>
          {slideRows.map((slideItem) => (
            <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={`${item.docId}`} item={item}>
                    <Card.Image
                      src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Card.Feature>
            </Card>
          ))}
        </Card.Group>
        <FooterContainer />
      </>
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}

export default BrowseContainer;
