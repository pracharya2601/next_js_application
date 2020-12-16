import PropTypes from "prop-types";
import styled from "styled-components";

const WebsiteLayout = ({ children }) => (
  <Layout>
    {children}
  </Layout>
);

WebsiteLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default WebsiteLayout;

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
`;
