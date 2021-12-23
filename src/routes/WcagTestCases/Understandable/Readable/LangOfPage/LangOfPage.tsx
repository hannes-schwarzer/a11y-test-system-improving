import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import { useEffect, useState } from "react";

interface Props {
  pageTitle: string;
}

export const LangOfPage = (props: Props) => {
  const [lang, setLang] = useState(document.documentElement.lang);
  useEffect(() => {
    if (lang !== "") setLang("");
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"empty lang attribute"}
          successCriterionInWords={"Language of Page"}
          level={Level.A}
          successCriterionNumber={"3.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-page"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/html/H57.html"
          }
          id={"3.1.1_1"}
          explanation={"This html element has an empty lang attribute."}
        >
          <p>This page has an empty lang attribute: "html lang".</p>
        </TestCase>
      </Frame>
    </>
  );
};
