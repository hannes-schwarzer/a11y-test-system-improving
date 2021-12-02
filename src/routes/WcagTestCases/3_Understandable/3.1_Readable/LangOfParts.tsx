import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const LangOfParts = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Text language changed without required change in direction"}
          successCriterionInWords={"Language of Parts"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p lang={"ar"}>الإعفاء الإلكتروني من التأشيرة</p>
        </GuidelineError>
        <GuidelineError
          title={"lang attribute not used to identify change of language"}
          successCriterionInWords={"Language of Parts"}
          serial={2}
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
        </GuidelineError>
        <GuidelineError
          title={"Text language is in the wrong direction"}
          successCriterionInWords={"Language of Parts"}
          serial={3}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p dir={"rtl"} lang={"en"}>
            Electronic visa waiver
          </p>
        </GuidelineError>

        <GuidelineError
          title={"html element has an invalid value in the lang attribute"}
          successCriterionInWords={"Language of Parts"}
          serial={4}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p lang={"foobar"}>
            This paragraph has a lang attribute set to an invalid value
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "lang attribute used to identify change of language, but with invalid value"
          }
          successCriterionInWords={"Language of Parts"}
          serial={5}
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
        </GuidelineError>

        <GuidelineError
          title={"html element has lang attribute set to wrong language"}
          successCriterionInWords={"Language of Parts"}
          serial={6}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
          }
          successCriterionNumber={"3.1.2"}
          level={Level.AA}
        >
          <p lang={"fr"}>
            This is in english but the lang is nominally french.
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "lang attribute used to identify change of language, but with wrong language"
          }
          successCriterionInWords={"Language of Parts"}
          serial={7}
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
        </GuidelineError>
      </Frame>
    </>
  );
};
