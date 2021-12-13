import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const MediaAlternativePrerecorded = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Link to a multimedia file, no transcript"}
          successCriterionInWords={"Media Alternative (Prerecorded)"}
          linkToExplanation={"https://webaim.org/techniques/captions/"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded"
          }
          successCriterionNumber={"1.2.8"}
          level={Level.AAA}
          explanation={
            "Accessible multimedia (visual and auditory content that is synchronized) must include captions—text versions of speech and other important audio content—allowing it to be accessible to people who can't hear all of the audio. Beyond people with disabilities, captioning helps people who only partially understand the language presented. Captions are also useful in noisy environments like airports, in quiet environments like libraries, and for multimodal learning."
          }
          id={"1.2.8_1"}
        >
          <a href={"interview.mov"}>Watch the interview</a>
        </TestCase>
      </Frame>
    </>
  );
};
