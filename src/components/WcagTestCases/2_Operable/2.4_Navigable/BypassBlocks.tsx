import {
  GuidelineError,
  Level,
} from "../../../structural/GuidelineError/GuidelineError";

export const BypassBlocks = () => {
  return (
    <>
      <GuidelineError
        title={"iframe is missing a title attribute"}
        successCriterion={"2.4.1 Bypass Blocks"}
        serial={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"
        }
        linkToExplanation={
          "https://equalizedigital.com/accessibility-checker/iframe-missing-title/"
        }
        guideline={"2.4.1"}
        level={Level.A}
      >
        <iframe height={100} src={"/demo-page"} width={300}></iframe>
      </GuidelineError>
    </>
  );
};
