import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const NoKeyboardTrap = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Keyboard trap"}
          successCriterionInWords={"No Keyboard Trap"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap"
          }
          successCriterionNumber={"2.1.2"}
          level={Level.A}
          id={"2.1.2_1"}
          explanation={
            "If keyboard focus can be moved to a component of the page using a keyboard interface, then focus can be moved away from that component using only a keyboard interface, and, if it requires more than unmodified arrow or tab keys or other standard exit methods, the user is advised of the method for moving focus away."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G21.html"
          }
        >
          <Link to={"/wcag/operable/keyboard-accessible/no-keyboard-trap/trap"}>
            Example page that contains a keyboard trap
          </Link>
        </TestCase>
      </Frame>
    </>
  );
};
