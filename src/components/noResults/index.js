import HeaderTitle from "components/typography/HeaderTitle";

const NoResults = ({ helloFromMessage }) => {
  console.log(`${helloFromMessage}`, "components/noResults/index");

  return (
    <div className="d-flex justify-content-center container-fluid p-3 p-md-5 text-center">
      <div className="d-flex flex-column justify-content-center col-md-5 p-lg-5 mx-auto my-5">
        <HeaderTitle
          helloFromMessage={helloFromMessage}
          className="text-uppercase"
          title="No results"
        />
      </div>
    </div>
  );
};

export default NoResults;
