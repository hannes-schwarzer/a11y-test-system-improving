import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const CharacterKeyShortcuts = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Accesskey attribute used for link"}
          successCriterionInWords={"Character Key Shortcuts"}
          successCriterionNumber={"2.1.4"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts"
          }
          level={Level.A}
          explanation={
            "Failure of Success Criteria 2.1.4 due to a webpage or web app that includes single-key shortcuts not including a control that allows users to turn the shortcuts off or a control that allows users to change the shortcuts to key combinations that include keys that are not upper or lower-case letters, punctuation, number, or symbol characters."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=214#character-key-shortcuts"
          }
        >
          <a accessKey={"A"} href={"/some-page"}>
            A link with the accesskey attribute A
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
