import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
// @ts-ignore
import ROAR from "../../../../../assets/t-rex-roar.mp3";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const AudioControl = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays"
          }
          successCriterionInWords={"Audio Control"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-control"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F93.html"
          }
          successCriterionNumber={"1.4.2"}
          level={Level.A}
          explanation={
            "This failure occurs when an audio or video element with an audio track contains the autoplay attribute and does not contain the muted attribute, and no controls or commands have been provided to pause or stop the media resource. If the media element is shorter than 3 seconds, the failure does not occur. If the user agent provides user preferences to override autoplay behavior, the failure does not occur. "
          }
        >
          <p>
            By visiting this site an audio file is started to play in a loop.
          </p>
          <audio src={ROAR} autoPlay loop></audio>
        </TestCase>
      </Frame>
    </>
  );
};
