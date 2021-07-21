import { Button, Container, Navbar } from "react-bootstrap";

function NavbarComp(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="justify-content-start">
        <Navbar.Brand>Stratagems</Navbar.Brand>
        <Button
          variant="outline-success"
          className="me-2"
          onClick={props.onFactionSelection.bind(null, "Necrons")}
        >
          Necrons
        </Button>
        <Button
          variant="outline-danger"
          className="me-2"
          onClick={props.onFactionSelection.bind(null, "Blood Angels")}
        >
          Blood Angels
        </Button>
      </Container>
    </Navbar>
  );
}
export default NavbarComp;
