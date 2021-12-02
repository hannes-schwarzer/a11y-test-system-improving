import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";

export const ThreeFlashesOrBelowThroshold = () => {
  return (
    <>
      <GuidelineError
        title={"Flashing content doesn't have warning"}
        successCriterion={"multimedia"}
        serial={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold"
        }
        guideline={"2.3.1"}
        level={Level.A}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4LQLvgXLguk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </GuidelineError>
    </>
  );
};
