import { GuidelineError, Level } from "../../../GuidelineError";

export const TextSpacing = () => {
  return (
    <>
      <GuidelineError
        title={"Inadequate line height used"}
        category={"1.4.12 Text Spacing"}
        serial={1}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#text-spacing"}
        guideline={"1.4.12"}
        level={Level.AA}
      >
        <p className={"line-height"}>
          Many people with cognitive disabilities have trouble tracking lines of
          text when a block of text is single spaced. Providing spacing between
          1.5 to 2 allows them to start a new line more easily once they have
          finished the previous one.
        </p>
      </GuidelineError>
    </>
  );
};
