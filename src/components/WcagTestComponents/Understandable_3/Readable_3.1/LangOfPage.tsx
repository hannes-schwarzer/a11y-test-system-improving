import { GuidelineError, Level } from "../../../GuidelineError";

export const LangOfPage = () => {
  document.documentElement.lang = "";

  return (
    <>
      <GuidelineError
        title={"html element has an empty lang attribute"}
        category={"3.1.1 Language of Page"}
        serial={1}
        level={Level.A}
        guideline={"3.1.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-page"
        }
      >
        <p>
          Placeholder and Reminder: This page has an empty lang attribute: "html
          lang"
        </p>
      </GuidelineError>
    </>
  );
};
