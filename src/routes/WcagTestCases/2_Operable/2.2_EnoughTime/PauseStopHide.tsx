import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import TREE from "../../../../assets/animated-tree.gif";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const PauseStopHide = (props: Props) => {
  const show = () => {
    if (document.getElementById) {
      document.getElementById("blink1")!.style.visibility = "visible";
    }
    setTimeout(hide, 450);
  };

  function hide() {
    if (document.getElementById)
      document.getElementById("blink1")!.style.visibility = "hidden";
    setTimeout(show, 450);
  }

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "F4: Failure of Success Criterion 2.2.2 due to using text-decoration:blink without a mechanism to stop it in less than five seconds"
          }
          successCriterion={"2.2.2 Pause, Stop, Hide"}
          serial={1}
          level={Level.A}
          guideline={"2.2.2"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F4.html"
          }
          explanation={
            "A product list page uses the text-decoration:blink style on an element to draw attention to sale prices. " +
            "This fails the Success Criterion because users cannot control the blink."
          }
        >
          <p>
            My Great Product{" "}
            <span style={{ textDecoration: "blink" }}>Sale! $44,995!</span>
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "F50: Failure of Success Criterion 2.2.2 due to a script that causes a blink effect without a mechanism to stop the blinking at 5 seconds or less"
          }
          successCriterion={"2.2.2 Pause, Stop, Hide"}
          serial={2}
          level={Level.A}
          guideline={"2.2.2"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F50.html"
          }
          explanation={
            "The following example uses script to blink content, but the blink continues indefinitely rather than stopping after five seconds."
          }
        >
          <script type="text/javascript">show();</script>
          <span id="blink1">This content will blink</span>
        </GuidelineError>

        <GuidelineError
          title={"A distraction is present, an animated gif"}
          successCriterion={"2.2.2 Pause, Stop, Hide"}
          serial={3}
          guideline={"2.2.2"}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html"
          }
          level={Level.A}
        >
          <img
            alt={
              "Animated gif of a Christmas tree with a toy train going round and round the base of the tree"
            }
            height={193}
            src={TREE}
            width={157}
          />
        </GuidelineError>
      </Frame>
    </>
  );
};
