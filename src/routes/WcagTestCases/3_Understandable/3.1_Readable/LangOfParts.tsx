import { TestCase, Level } from "../../../../components/TestCase/TestCase";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LangOfParts = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Text language changed without required change in direction"}
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p lang={"ar"}>الإعفاء الإلكتروني من التأشيرة</p>
        </TestCase>
        <TestCase
          title={"lang attribute not used to identify change of language"}
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p>
            Mother, he's asking you to go. He's saying, "Allons, Madame
            plaisante!"
          </p>
        </TestCase>
        <TestCase
          title={"Text language is in the wrong direction"}
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p dir={"rtl"} lang={"en"}>
            Electronic visa waiver
          </p>
        </TestCase>

        <TestCase
          title={"html element has an invalid value in the lang attribute"}
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p lang={"foobar"}>
            This paragraph has a lang attribute set to an invalid value
          </p>
        </TestCase>

        <TestCase
          title={
            "lang attribute used to identify change of language, but with invalid value"
          }
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p>
            Mother, he's asking you to go. He's saying,{" "}
            <span lang={"frrr"}>""Allons, Madame plaisante!""</span>
          </p>
        </TestCase>

        <TestCase
          title={"html element has lang attribute set to wrong language"}
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p lang={"fr"}>
            This is in english but the lang is nominally french.
          </p>
        </TestCase>

        <TestCase
          title={
            "lang attribute used to identify change of language, but with wrong language"
          }
          successCriterionInWords={"Language of Parts"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p>
            Mother, he's asking you to go. He's saying,{" "}
            <span lang={"es"}>""Allons, Madame plaisante!""</span>
          </p>
        </TestCase>
      </Frame>
    </>
  );
};
