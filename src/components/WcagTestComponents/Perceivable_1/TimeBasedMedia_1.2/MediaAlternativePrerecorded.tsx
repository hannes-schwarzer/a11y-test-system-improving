import { GuidelineError, Level } from "../../../GuidelineError";

export const MediaAlternativePrerecorded = () => {
  return (
    <>
      <GuidelineError
        title={"Link to a multimedia file, no transcript"}
        successCriterion={"links"}
        serial={85}
        linkToExplanation={"https://webaim.org/techniques/captions/"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#media-alternative-prerecorded"
        }
        guideline={"1.2.8"}
        level={Level.AAA}
      >
        <a href={"interview.mov"}>Watch the interview</a>
      </GuidelineError>
    </>
  );
};
