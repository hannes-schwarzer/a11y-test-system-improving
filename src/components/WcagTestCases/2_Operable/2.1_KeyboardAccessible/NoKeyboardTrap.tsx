import {
  GuidelineError,
  Level,
} from "../../../structural/GuidelineError/GuidelineError";

export const NoKeyboardTrap = () => {
  return (
    <>
      <GuidelineError
        title={"Keyboard trap"}
        successCriterion={"keyboard"}
        serial={1}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap"
        }
        guideline={"2.1.2"}
        level={Level.A}
      >
        <a href={"/keyboard/trap"}>
          Example page that contains a keyboard trap
        </a>
      </GuidelineError>
    </>
  );
};
