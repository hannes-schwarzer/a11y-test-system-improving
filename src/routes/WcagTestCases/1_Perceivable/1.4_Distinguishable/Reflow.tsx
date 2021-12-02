import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import "./Reflow.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const Reflow = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"Wide page forces users to scroll horizontally"}
          serial={1}
          successCriterionInWords={"Reflow"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#reflow"
          }
          successCriterionNumber={"1.4.10"}
          level={Level.AA}
          explanation={
            "@@ Using fixed sized containers and fixed position content (CSS)"
          }
        >
          <div className={"constrained-box"}>
            <p className={"constrained"}>
              When sites are constructed to require horizontal scrolling in
              order to navigate or read content at a normal size of 100% using
              standard screen sizes, additional problems can arise for users
              with low vision or mobility impairments.
            </p>
            <p className={"constrained-extra"}>
              This is some text you have to horizontally scroll to read.
            </p>
          </div>
        </GuidelineError>
      </Frame>
    </>
  );
};
