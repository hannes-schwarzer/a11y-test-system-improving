import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ThreeFlashesOrBelowThreshold = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Flashing content doesn't have warning"}
          successCriterionInWords={"Three Flashes or Below Threshold"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold"
          }
          successCriterionNumber={"2.3.1"}
          level={Level.A}
          id={"2.3.1_1"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G19.html"
          }
          explanation={
            "The objective of this technique is to avoid flashing at rates that are known to cause seizures if the flashes are bright and large enough. Since some users may be using screen enlargers, this technique limits the flashing of any size content to no more than three flashes in any 1-second period."
          }
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4LQLvgXLguk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </TestCase>
      </Frame>
    </>
  );
};
