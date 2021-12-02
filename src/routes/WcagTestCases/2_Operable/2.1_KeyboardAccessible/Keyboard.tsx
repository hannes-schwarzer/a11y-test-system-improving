import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import LINK from "../../../../assets/link.png";
import GO from "../../../../assets/go.png";
import "./Keyboard.css";
import classNames from "classnames";
import { useState } from "react";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const Keyboard = (props: Props) => {
  const nextPage = () => {
    //dummy shell function
  };

  /*10*/
  const hiddenDiv = classNames("lightbox", "close-button", "hidden");
  const unhiddenDiv = classNames("lightbox", "close-button");
  const [visibility, setVisibility] = useState(hiddenDiv);

  /*11 - concertina*/
  const [visibilityElemOne, setVisibilityElemOne] = useState("hidden");
  const [visibilityElemTwo, setVisibilityElemTwo] = useState("hidden");
  const [visibilityElemThree, setVisibilityElemThree] = useState("hidden");
  const toggleElemOne = () => {
    if (visibilityElemOne === "hidden") {
      setVisibilityElemOne("expanded");
    } else setVisibilityElemOne("hidden");
  };
  const toggleElemTwo = () => {
    if (visibilityElemTwo === "hidden") {
      setVisibilityElemTwo("expanded");
    } else setVisibilityElemTwo("hidden");
  };
  const toggleElemThree = () => {
    if (visibilityElemThree === "hidden") {
      setVisibilityElemThree("expanded");
    } else setVisibilityElemThree("hidden");
  };

  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "F54: Failure of Success Criterion 2.1.1 due to using only pointing-device-specific event " +
            "handlers (including gesture) for a function"
          }
          successCriterion={"2.1.1 Keyboard"}
          serial={1}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          guideline={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F54.html"
          }
          explanation={
            "The following example is of an image that responds to a mouse click to go to another page. " +
            "This is a failure because the keyboard cannot be used to move to the next page."
          }
        >
          <p>
            <img
              onMouseDown={() => {
                nextPage();
              }}
              src="nextarrow.gif"
              alt="Go to next page"
            />
          </p>
        </GuidelineError>

        <GuidelineError
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
          }
          successCriterion={"2.1.1 Keyboard"}
          serial={2}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          guideline={"2.1.1"}
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
        >
          <input
            id={"keayboard__blur-error-first"}
            type="submit"
            onFocus={() => {
              document!.getElementById("keayboard__blur-error-first")!.blur();
            }}
          />
        </GuidelineError>

        <GuidelineError
          title={
            "F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received"
          }
          successCriterion={"2.1.1 Keyboard"}
          serial={3}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          guideline={"2.1.1"}
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
        >
          <a
            id={"keayboard__blur-error-second"}
            onFocus={() => {
              document!.getElementById("keayboard__blur-error-second")!.blur();
            }}
            href="Page.html"
          >
            <img src={LINK} />
          </a>
        </GuidelineError>

        <GuidelineError
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterion={"2.1.1 Keyboard"}
          serial={4}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          guideline={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          explanation={
            "Scripting a span element: Scripted event handling is added to a span element so that it functions " +
            "as a link when clicked with a mouse. Assistive technology does not recognize this element as a link."
          }
        >
          <span
            onClick={() => {
              document.location.href = "newpage.html";
            }}
          >
            Fake link
          </span>
        </GuidelineError>

        <GuidelineError
          title={
            "F42: Failure of Success Criteria 1.3.1, 2.1.1, 2.1.3, or 4.1.2 when emulating links"
          }
          successCriterion={"2.1.1 Keyboard"}
          serial={5}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          guideline={"2.1.1"}
          level={Level.A}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
          explanation={
            "Scripting an img element: Scripted event handling is added to an img element so that it functions as a link when clicked " +
            "with a mouse. Assistive technology does not recognize this element as a link."
          }
        >
          <img
            src={GO}
            alt="go to the new page"
            onClick={() => {
              document.location.href = "newpage.html";
            }}
          />
        </GuidelineError>

        <GuidelineError
          title={"Keyboard focus is not indicated visually"}
          successCriterion={"keyboard"}
          serial={6}
          guideline={"2.1.1"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F55.html"
          }
        >
          <a className={"no-outline"} href={"link.html"}>
            Link with no focus style
          </a>
        </GuidelineError>

        <GuidelineError
          title={"Dropdown navigation - only the top level items receive focus"}
          successCriterion={"2.1.1 Keyboard"}
          serial={7}
          guideline={"2.1.1"}
          level={Level.A}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
        >
          <nav className={"dropdown-nav"} role={"navigation"}>
            <ul>
              <li>
                <a href={"https://www.gov.uk/browse/benefits"}>Benefits</a>
                <ul>
                  <li>
                    <a href={"#"}>Benefits entitlement</a>
                  </li>
                  <li>
                    <a href={"#"}>Benefits for families</a>
                  </li>
                  <li>
                    <a href={"#"}>Carers and disability benefits</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </GuidelineError>

        <GuidelineError
          title={"Link with a role=button does not work with space bar"}
          successCriterion={"2.1.1 Keyboard"}
          serial={8}
          level={Level.A}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          guideline={"2.1.1"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F42.html"
          }
        >
          <a className={"button"} href={"next.html"} role={"button"}>
            Continue
          </a>
        </GuidelineError>

        <GuidelineError
          title={"Fake button is not keyboard accessible"}
          successCriterion={"Keyboard"}
          serial={9}
          guideline={"2.1.1"}
          level={Level.A}
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
        </GuidelineError>

        <GuidelineError
          title={"Lightbox - close button doesn't receive focus"}
          successCriterion={"Keyboard"}
          serial={10}
          guideline={"2.1.1"}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          level={Level.A}
        >
          <a
            className={"open-lightbox-close-button"}
            href={"#"}
            onClick={(event) => {
              event.preventDefault();
              setVisibility(unhiddenDiv);
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
                target={"_blank"}
              >
                information about mental capacity
              </a>
              .
            </p>
          </div>
        </GuidelineError>

        <GuidelineError
          title={"Concertina items don't get keyboard focus"}
          successCriterion={"keyboard"}
          serial={11}
          guideline={"2.1.1"}
          linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#keyboard"}
          level={Level.A}
        >
          <dl className={"concertina"}>
            <dt
              onClick={() => {
                toggleElemOne();
              }}
            >
              Understanding user research
            </dt>
            <dd className={visibilityElemOne} id={"concertina-elem-1"}>
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
            <dd className={visibilityElemTwo} id={"concertina-elem-2"}>
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
            <dd className={visibilityElemThree} id={"concertina-elem-3"}>
              <ul>
                <li>Sharing user research findings</li>
                <li>Analyse a research session</li>
              </ul>
            </dd>
          </dl>
        </GuidelineError>
      </Frame>
    </>
  );
};
