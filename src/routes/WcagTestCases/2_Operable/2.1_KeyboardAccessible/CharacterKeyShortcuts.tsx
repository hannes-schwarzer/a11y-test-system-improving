import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";

export const CharacterKeyShortcuts = () => {
  return (
    <>
      <GuidelineError
        title={"Accesskey attribute used for link"}
        successCriterion={"keyboard"}
        serial={1}
        guideline={"2.1.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#character-key-shortcuts"
        }
        level={Level.A}
      >
        <a accessKey={"A"} href={"page.html"}>
          A link with an accesskey attribute
        </a>
      </GuidelineError>
    </>
  );
};
