import { GuidelineError } from "../../../../components/GuidelineError/GuidelineError";
// @ts-ignore
import JEFFBOB from "../../../../assets/jeffbob.mp3";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const AudioControl = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays"
          }
          successCriterion={"1.4.2 Audio Control"}
          serial={1}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-control"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F93.html"
          }
          guideline={"1.4.2"}
        >
          <audio src={JEFFBOB} autoPlay loop></audio>
        </GuidelineError>
      </Frame>
    </>
  );
};
