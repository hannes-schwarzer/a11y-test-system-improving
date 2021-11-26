import { TestCase } from "../../TestCase";
// @ts-ignore
import JEFFBOB from "../../../assets/jeffbob.mp3";

export const AudioControl = () => {
  return (
    <>
      <TestCase
        testCaseTitle={
          "F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays"
        }
        testCategory={"1.4.2 Audio Control"}
        testCaseNumber={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#audio-control"
        }
        linkToMoreDetails={
          "https://www.w3.org/WAI/WCAG21/Techniques/failures/F93.html"
        }
        guideline={"1.4.2"}
      >
        <audio src={JEFFBOB} autoPlay loop></audio>
      </TestCase>
    </>
  );
};
