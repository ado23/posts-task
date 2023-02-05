const PostBody = ({ title, text, subtext, action }) => (
  <div className="card shadow-sm" style={{ borderRadius: "6px 6px 0px 0px" }}>
    <div className="card-body">
      <h5 className="card-title">Post title</h5>
      <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <small className="text-muted">Admir Ćejvanović</small>

        <button type="button" className="btn btn-sm btn-outline-secondary">
          Read more
        </button>
      </div>
    </div>
  </div>
);

export default PostBody;
