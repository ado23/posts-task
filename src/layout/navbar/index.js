const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid ">
      <div className="navbar-nav me-auto mb-2 mb-md-0">
        <div className="nav-item">
          <span className="nav-link active">POSTS</span>
        </div>
      </div>
      <div className="d-flex justify-end" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search posts"
          aria-label="Search"
          onChange={() => console.log("sada")}
        />
      </div>
    </div>
  </nav>
);

export default Navbar;
