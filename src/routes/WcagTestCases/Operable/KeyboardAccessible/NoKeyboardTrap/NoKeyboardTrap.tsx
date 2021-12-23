import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

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
            "If keyboard focus can be moved to a component of the page using a keyboard interface, " +
            "then focus can be moved away from that component using only a keyboard interface, and, if it " +
            "requires more than unmodified arrow or tab keys or other standard exit methods, the user is " +
            "advised of the method for moving focus away."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G21.html"
          }
        >
          <p>
            There are 2 links on this page. If you are using a keyboard you
            won't be able to get to the second link. The keydown event has been
            used to open a new window. When a person using a keyboard attempts
            to move focus away from the first link, the keydown event will be
            triggered and the resulting function will be executed.
          </p>
          <ul>
            <li>
              <a
                onKeyDown={(event) => {
                  event.preventDefault();
                  window.open("https://en.wikipedia.org/wiki/Booby_trap");
                }}
                href={"https://en.wikipedia.org/wiki/Booby_trap"}
              >
                trap
              </a>
            </li>
            <li>
              <a href={"https://en.wikipedia.org/wiki/Honey"}>honey</a>
            </li>
          </ul>
        </TestCase>
      </Frame>
    </>
  );
};
