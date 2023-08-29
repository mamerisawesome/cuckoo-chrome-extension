import styled from "styled-components";

const IFRAME_NAME = "checkin-manager";
const MAIN_SITE_LOCATION = "https://syk0saje.gitlab.io/checkin/";

const App = () => {
  return (
    <Container>
      <StyledFrame
        id={IFRAME_NAME}
        src={MAIN_SITE_LOCATION}
        title={IFRAME_NAME}
      />
      <Link href={MAIN_SITE_LOCATION} target="_blank">
        <span role="img" aria-label="link-indicator">
          ▶️{" "}
        </span>
        Go to site
      </Link>
    </Container>
  );
};

export default App;

const Container = styled.div`
  position: relative;

  padding: 0;
  margin: 0;
  width: 450px;
  height: 480px;

  overflow: hidden;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;

  margin-top: 12px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const StyledFrame = styled.iframe`
  height: 440px;
  width: 100%;
  border: 0;
`;
