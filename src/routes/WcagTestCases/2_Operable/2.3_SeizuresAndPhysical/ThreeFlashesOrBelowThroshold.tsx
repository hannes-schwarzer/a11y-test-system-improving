import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ThreeFlashesOrBelowThroshold = (props: Props) => {
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
