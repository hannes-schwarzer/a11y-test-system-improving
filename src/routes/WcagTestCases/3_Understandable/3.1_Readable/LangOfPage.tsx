import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LangOfPage = (props: Props) => {
  document.documentElement.lang = "";

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"html element has an empty lang attribute"}
          successCriterion={"3.1.1 Language of Page"}
          serial={1}
          level={Level.A}
          guideline={"3.1.1"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-page"
          }
        >
          <p>
            Placeholder and Reminder: This page has an empty lang attribute:
            "html lang"
          </p>
        </GuidelineError>
      </Frame>
    </>
  );
};
