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
        >
          <Link to={"/wcag/operable/keyboard-accessible/no-keyboard-trap/trap"}>
            Example page that contains a keyboard trap
          </Link>
        </TestCase>
      </Frame>
    </>
  );
};
