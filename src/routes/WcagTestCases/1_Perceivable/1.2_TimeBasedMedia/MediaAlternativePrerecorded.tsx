import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const MediaAlternativePrerecorded = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Link to a multimedia file, no transcript"}
          successCriterionInWords={"Media Alternative (Prerecorded)"}
          serial={85}
          linkToExplanation={"https://webaim.org/techniques/captions/"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded"
          }
          successCriterionNumber={"1.2.8"}
          level={Level.AAA}
        >
          <a href={"interview.mov"}>Watch the interview</a>
        </GuidelineError>
      </Frame>
    </>
  );
};
