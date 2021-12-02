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
        >
          <a accessKey={"A"} href={"page.html"}>
            A link with an accesskey attribute
          </a>
        </TestCase>
      </Frame>
    </>
  );
};
