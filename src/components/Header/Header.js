import { Navbar, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Header = ({ auth }) => {
  return (
    <Navbar variant="light" expand="lg" className="sticky-top" collapseOnSelect>
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>DATAPARADE</Navbar.Brand>
        </LinkContainer>
        {auth.uid ? <SignedOutLinks /> : <SignedInLinks />}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Header);
