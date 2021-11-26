import { TestCase } from "../../TestCase";
import BBC from "../../../assets/bbc-blocks-dark.png";

export const AudioVideoOnly = () => {
  return (
    <>
      <h2>1.2.1 Audio-only and Video-only</h2>
      <TestCase
        testCaseTitle={
          "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
        }
        testCategory={"1.2.1 Audio-only and Video-only (Prerecorded)"}
        testCaseNumber={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
        }
        guideline={"1.2.1"}
      >
        <h4>empty placeholder ""</h4>
        <p>
          empty placeholder "" that is put into the 'text alternative' location
          on images or pictures.
        </p>
        <img src={BBC} alt={""} />
        <h4>placeholder text such as "spacer"</h4>
        <p>
          placeholder text such as "spacer" or "image" or "picture" etc that are
          put into the 'text alternative' location on images or pictures.
        </p>
        <img src={BBC} alt={"spacer"} />
        <h4>programming references</h4>
        <p>
          programming references that do not convey the information or function
          of the non-text content such as "picture 1", "picture 2" or "0001",
          "0002" or "Intro#1", "Intro#2".
        </p>
        <img src={BBC} alt={"picture 1"} />
        <h4>filenames</h4>
        <p>
          filenames that are not valid text alternatives in their own right such
          as "Oct.jpg" or "Chart.jpg" or "sales\\oct\\top3.jpg"
        </p>
        <img src={BBC} alt={"Oct.jpg"} />
      </TestCase>
    </>
  );
};
