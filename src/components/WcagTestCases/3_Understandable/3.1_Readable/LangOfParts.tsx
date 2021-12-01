import {
  GuidelineError,
  Level,
} from "../../../structural/GuidelineError/GuidelineError";

export const LangOfParts = () => {
  return (
    <>
      <GuidelineError
        title={"Text language changed without required change in direction"}
        successCriterion={"3.1.2 Language of Parts"}
        serial={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
        level={Level.AA}
      >
        <p lang={"ar"}>الإعفاء الإلكتروني من التأشيرة</p>
      </GuidelineError>
      <GuidelineError
        title={"lang attribute not used to identify change of language"}
        successCriterion={"3.1.2 Language of Parts"}
        serial={2}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
        level={Level.AA}
      >
        <p>
          Mother, he's asking you to go. He's saying, "Allons, Madame
          plaisante!"
        </p>
      </GuidelineError>
      <GuidelineError
        title={"Text language is in the wrong direction"}
        successCriterion={"3.1.2 Language of Parts"}
        serial={3}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
        level={Level.AA}
      >
        <p dir={"rtl"} lang={"en"}>
          Electronic visa waiver
        </p>
      </GuidelineError>

      <GuidelineError
        title={"html element has an invalid value in the lang attribute"}
        successCriterion={"language"}
        serial={4}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
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
        successCriterion={"language"}
        serial={5}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
        level={Level.AA}
      >
        <p>
          Mother, he's asking you to go. He's saying,{" "}
          <span lang={"frrr"}>""Allons, Madame plaisante!""</span>
        </p>
      </GuidelineError>

      <GuidelineError
        title={"html element has lang attribute set to wrong language"}
        successCriterion={"language"}
        serial={6}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
        level={Level.AA}
      >
        <p lang={"fr"}>This is in english but the lang is nominally french.</p>
      </GuidelineError>

      <GuidelineError
        title={
          "lang attribute used to identify change of language, but with wrong language"
        }
        successCriterion={"language"}
        serial={7}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#language-of-parts"
        }
        guideline={"3.1.2"}
        level={Level.AA}
      >
        <p>
          Mother, he's asking you to go. He's saying,{" "}
          <span lang={"es"}>""Allons, Madame plaisante!""</span>
        </p>
      </GuidelineError>
    </>
  );
};
