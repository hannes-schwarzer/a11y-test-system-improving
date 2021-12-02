import { Frame } from "../../components/Frame/Frame";
import {
  GuidelineError,
  Level,
} from "../../components/GuidelineError/GuidelineError";
import BBC from "../../assets/bbc-blocks-dark.png";

interface Props {
  pageTitle: string;
}

export const Homepage = (homepageProps: Props) => {
  return (
    <>
      <Frame pageTitle={homepageProps.pageTitle}>
        <p>This is the current look of all test cases.</p>
        <p>
          Each test case is surrounded by a solid border. Inside the area is
          devided into two parts. Above the dashed line in the top row it shows
          the title, the guideline level and the actual success criterion. If
          available beneath the top row there is an explanation to the violation
          and a link for further information.
        </p>

        <GuidelineError
          title={
            'F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"'
          }
          guideline={"1.1.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
          }
          linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F65.html"}
          explanation={
            "In the code example below, the person using a screen reader would not know the purpose of the image."
          }
          serial={1}
          successCriterion={"Non-text Content"}
          level={Level.A}
        >
          <img src={BBC} />
        </GuidelineError>
      </Frame>
    </>
  );
};
