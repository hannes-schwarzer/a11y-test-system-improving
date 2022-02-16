import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import LINK from "../../../../../assets/link.png";
import GO from "../../../../../assets/go.png";
import NEXTPAGE from "../../../../../assets/Next-Page-PNG-Image.png";
import "./Keyboard.css";
import classNames from "classnames";
import { useState } from "react";
import { Frame } from "../../../../../components/Frame/Frame";
import { Link } from "react-router-dom";

interface Props {
  pageTitle: string;
}

export const Keyboard = (props: Props) => {
  const nextPage = () => {
    alert("Next Page would be opened.");
  };

  /*Lightbox - close button doesn't receive focus*/
  const hiddenDiv = classNames("lightbox", "close-button", "keyboard__hidden");
  const visibleDiv = classNames("lightbox", "close-button");
  const [visibility, setVisibility] = useState(hiddenDiv);

  /*Concertina items don't get keyboard focus*/
  const [visibilityElemOne, setVisibilityElemOne] =
    useState("keyboard__hidden");
  const [visibilityElemTwo, setVisibilityElemTwo] =
    useState("keyboard__hidden");
  const [visibilityElemThree, setVisibilityElemThree] =
    useState("keyboard__hidden");

  const toggleElemOne = () => {
    if (visibilityElemOne === "keyboard__hidden") {
      setVisibilityElemOne("expanded");
    } else setVisibilityElemOne("keyboard__hidden");
  };
  const toggleElemTwo = () => {
    if (visibilityElemTwo === "keyboard__hidden") {
      setVisibilityElemTwo("expanded");
    } else setVisibilityElemTwo("keyboard__hidden");
  };
  const toggleElemThree = () => {
    if (visibilityElemThree === "keyboard__hidden") {
      setVisibilityElemThree("expanded");
    } else setVisibilityElemThree("keyboard__hidden");
  };

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event " +
            "handlers (including gesture) for a function"
          }
          successCriterionInWords={"Keyboard"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F54.html"
          }
          explanation={
            "The following example is of an image that responds to a mouse click to go to another page. " +
            "This is a failure because the keyboard cannot be used to move to the next page."
          }
          id={"2.1.1_1"}
        >
          <p>
            <img
              onMouseDown={() => {
                nextPage();
              }}
              src={NEXTPAGE}
              alt="Go to next page"
            />
          </p>
        </TestCase>

        <TestCase
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when " +
            "focus is received"
          }
          successCriterionInWords={"Keyboard"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "Content that normally receives focus when the content is accessed by keyboard may have this " +
            "focus removed by scripting. This is sometimes done when designer considers the system focus indicator to be " +
            "unsightly. However, the system focus indicator is an important part of accessibility for keyboard users. " +
            "In addition, this practice removes focus from the content entirely, which means that the content can only be " +
            "operated by a pointing device such as a mouse."
          }
          id={"2.1.1_2"}
        >
          <input
            id={"keyboard__blur-error-first"}
            type="submit"
            onFocus={() => {
              if (document.getElementById("keyboard__blur-error-first")) {
                document.getElementById("keyboard__blur-error-first")!.blur();
              }
            }}
            onClick={() => {
              alert("Clicked");
            }}
          />
        </TestCase>

        <TestCase
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when " +
            "focus is received"
          }
          successCriterionInWords={"Keyboard"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "Image button: Content that normally receives focus when the content is accessed by keyboard may have this " +
            "focus removed by scripting. This is sometimes done when designer considers the system focus indicator to be " +
            "unsightly. However, the system focus indicator is an important part of accessibility for keyboard users. " +
            "In addition, this practice removes focus from the content entirely, which means that the content can only be " +
            "operated by a pointing device such as a mouse."
          }
          id={"2.1.1_3"}
        >
          <Link
            id={"keyboard__blur-error-second"}
            onFocus={() => {
              document!.getElementById("keyboard__blur-error-second")!.blur();
            }}
            to="/some-page"
          >
            <img src={LINK} alt={"button without focus when focused"} />
          </Link>
        </TestCase>

        <TestCase
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterionInWords={"Keyboard"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          explanation={
            "Scripting a span element: Scripted event handling is added to a span element so that it functions " +
            "as a link when clicked with a mouse. Assistive technology does not recognize this element as a link."
          }
          id={"2.1.1_4"}
        >
          <span
            onClick={() => {
              document.location.href = "/some-page";
            }}
          >
            Fake link
          </span>
        </TestCase>

        <TestCase
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterionInWords={"Keyboard"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          explanation={
            "Scripting an img element: Scripted event handling is added to an img element so that it functions as a link when clicked " +
            "with a mouse. Assistive technology does not recognize this element as a link."
          }
          id={"2.1.1_5"}
        >
          <img
            src={GO}
            alt="go to the new page"
            onClick={() => {
              document.location.href = "/some-page";
            }}
          />
        </TestCase>

        <TestCase
          title={"Keyboard focus is not indicated visually"}
          successCriterionInWords={"keyboard"}
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
          explanation={
            "CSS style sets outline and background to none on focus."
          }
          id={"2.1.1_6"}
        >
          <a className={"keyboard__no-outline"} href={"/some-page"}>
            Link with no focus style
          </a>
        </TestCase>

        <TestCase
          title={"Dropdown navigation - only the top level items receive focus"}
          successCriterionInWords={"Keyboard"}
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          id={"2.1.1_7"}
        >
          <nav className={"keyboard__dropdown-nav"}>
            <ul>
              <li>
                <a href={"https://www.gov.uk/browse/benefits"}>Benefits</a>
                <ul>
                  <li>
                    <a href={"/some-page"}>Benefits entitlement</a>
                  </li>
                  <li>
                    <a href={"/some-page"}>Benefits for families</a>
                  </li>
                  <li>
                    <a href={"/some-page"}>Carers and disability benefits</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </TestCase>

        <TestCase
          title={"Link with a role=button does not work with space bar"}
          successCriterionInWords={"Keyboard"}
          level={Level.A}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          explanation={"Only reacts on enter."}
          id={"2.1.1_8"}
        >
          <a className={"keyboard__button"} href={"/some-page"} role={"button"}>
            Continue
          </a>
        </TestCase>

        <TestCase
          title={"Fake button is not keyboard accessible"}
          successCriterionInWords={"Keyboard"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          successCriterionNumber={"2.1.1"}
          level={Level.A}
          explanation={
            "The following is no button but a div that is styled like a button."
          }
          id={"2.1.1_9"}
        >
          <div
            className={"button"}
            id={"webchat"}
            onClick={() => {
              alert("Clicked!");
            }}
          >
            launch webchat
          </div>
        </TestCase>

        <TestCase
          title={"Lightbox - close button doesn't receive focus"}
          successCriterionInWords={"Keyboard"}
          successCriterionNumber={"2.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          level={Level.A}
          id={"2.1.1_10"}
        >
          <a
            href={"#"}
            onClick={(event) => {
              event.preventDefault();
              setVisibility(visibleDiv);
            }}
          >
            Open lightbox
          </a>
          <div className={visibility} id={"lightbox-hidden-div"}>
            <span
              title={"Close lightbox"}
              className={"close-button"}
              onClick={(event) => {
                event.preventDefault();
                setVisibility(hiddenDiv);
              }}
            >
              X
            </span>
            <p>
              This lightbox's close button isn't a link so you can't focus on
              it. The Ministry of Justice website has{" "}
              <a
                href={
                  "http://www.justice.gov.uk/protecting-the-vulnerable/mental-capacity-act"
                }
                target={"_parent"}
              >
                information about mental capacity
              </a>
              .
            </p>
          </div>
        </TestCase>

        <TestCase
          title={"Concertina items don't get keyboard focus"}
          successCriterionInWords={"keyboard"}
          successCriterionNumber={"2.1.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#keyboard"
          }
          level={Level.A}
          explanation={
            "There is a lot of information hidden from users who only access this section with their keyboard because this concertina only expands on mouse click."
          }
          id={"2.1.1_11"}
        >
          <dl className={"keyboard__concertina"}>
            <dt
              onClick={() => {
                toggleElemOne();
              }}
            >
              Understanding user research
            </dt>
            <dd className={visibilityElemOne}>
              <ul>
                <li>How user research improves service design</li>
                <li>Start by learning user needs</li>
                <li>Understanding users who don't use digital services</li>
              </ul>
            </dd>
            <dt
              onClick={() => {
                toggleElemTwo();
              }}
            >
              Preparing for user research
            </dt>
            <dd className={visibilityElemTwo}>
              <ul>
                <li>Plan user research for your service</li>
                <li>Plan a round of user research</li>
                <li>Find user research participants</li>
                <li>Choose a location for user research</li>
                <li>Write a recruitment brief</li>
                <li>Getting users' consent for research</li>
              </ul>
            </dd>

            <dt
              onClick={() => {
                toggleElemThree();
              }}
            >
              Analysing and sharing findings
            </dt>
            <dd className={visibilityElemThree}>
              <ul>
                <li>Sharing user research findings</li>
                <li>Analyse a research session</li>
              </ul>
            </dd>
          </dl>
        </TestCase>
      </Frame>
    </>
  );
};
