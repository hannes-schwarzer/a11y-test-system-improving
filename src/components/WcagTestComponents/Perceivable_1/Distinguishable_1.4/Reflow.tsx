import { GuidelineError, Level } from "../../../GuidelineError";
import "./Reflow.css";
export const Reflow = () => {
  return (
    <>
      <GuidelineError
        title={"Wide page forces users to scroll horizontally"}
        serial={1}
        successCriterion={"1.4.10 Reflow"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#reflow"}
        guideline={"1.4.10"}
        level={Level.AA}
        explanation={
          "@@ Using fixed sized containers and fixed position content (CSS)"
        }
      >
        <div className={"constrained-box"}>
          <p className={"constrained"}>
            When sites are constructed to require horizontal scrolling in order
            to navigate or read content at a normal size of 100% using standard
            screen sizes, additional problems can arise for users with low
            vision or mobility impairments.
          </p>
          <p className={"constrained-extra"}>
            This is some text you have to horizontally scroll to read.
          </p>
        </div>
      </GuidelineError>
    </>
  );
};
