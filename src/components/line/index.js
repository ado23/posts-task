const Line = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/Line");

  return <hr className="border-dark opacity-10" />;
};

export default Line;
