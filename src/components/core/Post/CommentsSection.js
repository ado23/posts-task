import Comment from "components/comment";

const comments = [1, 2, 3, 4, 5, 6, 7];

const CommentsSection = () => (
  <div className="card shadow-sm rounded-bottom border-top-0" style={{ borderRadius: "0px 0px 6px 6px" }}>
    <p className="h5 px-3">Comments section</p>
    <div className="col" style={{ maxHeight: "230px", overflow: "scroll" }}>
      {comments.map((element) => (
        <Comment key={element} />
      ))}
    </div>
  </div>
);

export default CommentsSection;
