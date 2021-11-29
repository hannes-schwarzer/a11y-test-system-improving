import { GuidelineError } from "../../GuidelineError";

export const FrameTestCases = () => {
  return (
    <>
      <h2>Frames</h2>
      <GuidelineError
        title={"iframe is missing a title attribute"}
        category={"frame"}
        serial={125}
      >
        <iframe height={100} src={"/demo-page"} width={300}></iframe>
      </GuidelineError>
      <GuidelineError
        title={
          "iframe title attribute does not describe the content or purpose of the iframe"
        }
        category={"frame"}
        serial={126}
      >
        <iframe
          height={100}
          src={"/demo-page"}
          title={"Facebook"}
          width={300}
        ></iframe>
      </GuidelineError>
    </>
  );
};
