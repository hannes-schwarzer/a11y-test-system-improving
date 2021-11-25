import { TestCase } from "../TestCase";
import "./CssTestCases.css";

export const CssTestCases = () => {
  return (
    <>
      <h2>CSS</h2>
      <TestCase
        testCaseTitle={
          "Content is not readable and functional when text is increased"
        }
        testCategory={"css"}
        testCaseNumber={127}
      >
        <p className={"resize"}>
          This text becomes unreadable when you increase the text-size (Zoom
          text only) in{" "}
          <a href={"https://www.mozilla.org/en-GB/firefox/desktop/"}>Firefox</a>
          .
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Non-decorative content inserted using CSS"}
        testCategory={"css"}
        testCaseNumber={128}
      >
        <p id={"css-generated-text"}>My favourite food is </p>
      </TestCase>
      <TestCase
        testCaseTitle={
          "visibility:hidden used to visually hide content when it should be available to screenreader"
        }
        testCategory={"css"}
        testCaseNumber={129}
      >
        <a href={"rugby.html"}>
          Read more <span style={{ visibility: "hidden" }}>about rugby</span>
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={
          "display:none used to visually hide content when it should be available to screenreader"
        }
        testCategory={"css"}
        testCaseNumber={130}
      >
        <a href={"rugby.html"}>
          Read more <span style={{ display: "none" }}>about rugby</span>
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Page zoom - boxes that don't expand with the text"}
        testCategory={"css"}
        testCaseNumber={131}
      >
        <div className={"wont-expand-box"}>
          The box below this example won't expand to fit the text contained
          within when zoomed in.
          <p className={"wont-expand"}>
            This service is for England and Wales only. You must contact
            individual{" "}
            <a
              href={
                "https://www.justice-ni.gov.uk/topics/prisons/prison-visits"
              }
            >
              prisons in Northern Ireland
            </a>{" "}
            or{" "}
            <a href={"http://www.sps.gov.uk/Corporate/Prisons/Prisons.aspx"}>
              Scotland
            </a>{" "}
            to book a visit.
          </p>
        </div>
      </TestCase>
    </>
  );
};
