import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import TREE from "../../../../../assets/animated-tree.gif";
import { Frame } from "../../../../../components/Frame/Frame";
import Blink from "react-blink-text";
import "./PauseStopHide.css";

interface Props {
  pageTitle: string;
}

export const PauseStopHide = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism " +
            "to stop it in less than five seconds"
          }
          successCriterionInWords={"Pause, Stop, Hide"}
          level={Level.A}
          successCriterionNumber={"2.2.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F4.html"
          }
          explanation={
            "A product list page uses the text-decoration:blink style on an element to draw attention to " +
            "sale prices. This fails the Success Criterion because users cannot control the blink. " +
            "NOTE: text-decoration: blink is deprecated in most browsers."
          }
          id={"2.2.2_1"}
        >
          <p>
            My Great Product{" "}
            <span className={"blinking-sale"}>Sale! $44,95!</span>
          </p>
        </TestCase>

        <TestCase
          title={
            "F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a " +
            "mechanism to stop the blinking at 5 seconds or less"
          }
          successCriterionInWords={"Pause, Stop, Hide"}
          level={Level.A}
          successCriterionNumber={"2.2.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F50.html"
          }
          explanation={
            "The following example uses JavaScript to blink content, but the blink continues indefinitely rather " +
            "than stopping after five seconds."
          }
          id={"2.2.2_2"}
        >
          <Blink color="black" text="Super Sale!!!" fontSize="20" />
        </TestCase>

        <TestCase
          title={"A distraction is present, an animated gif"}
          successCriterionInWords={"Pause, Stop, Hide"}
          successCriterionNumber={"2.2.2"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html"
          }
          level={Level.A}
          explanation={
            "Content that moves or auto-updates can be a barrier to anyone who has trouble reading " +
            "stationary text quickly as well as anyone who has trouble tracking moving objects. " +
            "It can also cause problems for screen readers."
          }
          id={"2.2.2_3"}
        >
          <img
            alt={
              "Animated gif of a Christmas tree with a toy train going round and round the base of the tree"
            }
            height={193}
            src={TREE}
            width={157}
          />
        </TestCase>
      </Frame>
    </>
  );
};
