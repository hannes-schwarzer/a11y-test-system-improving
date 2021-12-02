import { Header } from "../../../../components/Header/Header";
import { Navigation } from "../../../../components/Navigation/Navigation";
import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";

export const MediaAlternativePrerecorded = () => {
  return (
    <>
      <Header pageTitle={"1.2.8 Media Alternative (Prerecorded)"} />
      <main className={"main-content"}>
        <Navigation />
        <section className={"middle-section"}>
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
        </section>
      </main>
    </>
  );
};
