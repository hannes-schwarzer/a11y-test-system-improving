import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import "./SensoryCharacteristics.css";

interface Props {
  pageTitle: string;
}

export const SensoryCharacteristics = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Content solely identified by location"}
          successCriterionInWords={"Sensory Characteristics"}
          successCriterionNumber={"1.3.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            "The objective of this technique is to show how identifying content only by its shape or location makes content difficult to understand and operate. When only visual identification or location is used, users with visual disabilities may find it difficult to locate content since they cannot see the screen or may perceive only a small portion of the screen at one time. Also, location of content can vary if page layout varies due to variations in font, window, or screen size."
          }
          linkToExplanation={
            "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F14"
          }
          id={"1.3.3_1"}
        >
          <p>The artist on the right won the Album of the year</p>
          <a href="swift.html" style={{ float: "right" }}>
            Tailor Swift
          </a>
          <a href="sheeran.html" style={{ float: "left" }}>
            Ed Sheeran
          </a>
        </TestCase>

        <TestCase
          title={"Button solely identified by size"}
          successCriterionInWords={"Sensory Characteristics"}
          successCriterionNumber={"1.3.3"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence"
          }
          level={Level.A}
          explanation={
            "The objective of this technique is to show how identifying content only by its shape or location makes content difficult to understand and operate. When only visual identification or location is used, users with visual disabilities may find it difficult to locate content since they cannot see the screen or may perceive only a small portion of the screen at one time. Also, location of content can vary if page layout varies due to variations in font, window, or screen size."
          }
          linkToExplanation={
            "https://www.w3.org/TR/2008/WD-WCAG20-TECHS-20081103/F14"
          }
          id={"1.3.3_2"}
        >
          <p>Press the big button</p>
          <button
            className={"sc__big-button"}
            onClick={() => {
              alert("Big Button");
            }}
          >
            Button
          </button>
          <button
            className={"sc__small-button"}
            onClick={() => {
              alert("Small Button");
            }}
          >
            Button
          </button>
        </TestCase>
      </Frame>
    </>
  );
};
