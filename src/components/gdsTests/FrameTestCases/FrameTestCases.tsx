import { TestCase } from "../../TestCase";

export const FrameTestCases = () => {
  return (
    <>
      <h2>Frames</h2>
      <TestCase
        testCaseTitle={"iframe is missing a title attribute"}
        testCategory={"frame"}
        testCaseNumber={125}
      >
        <iframe height={100} src={"/demo-page"} width={300}></iframe>
      </TestCase>
      <TestCase
        testCaseTitle={
          "iframe title attribute does not describe the content or purpose of the iframe"
        }
        testCategory={"frame"}
        testCaseNumber={126}
      >
        <iframe
          height={100}
          src={"/demo-page"}
          title={"Facebook"}
          width={300}
        ></iframe>
      </TestCase>
    </>
  );
};
