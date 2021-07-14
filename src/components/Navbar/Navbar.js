function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid justify-content-start">
        <span className="navbar-brand mb-0 h1">Stratagems</span>
        <button className="btn btn-outline-success me-2" type="button" onClick={props.onFactionSelection.bind(null, "Necrons")}>Necrons</button>
        <button className="btn btn-outline-danger me-2" type="button" onClick={props.onFactionSelection.bind(null, "Blood Angels")}>Blood Angels</button>
      </div>
    </nav>
  );
}
export default Navbar;
