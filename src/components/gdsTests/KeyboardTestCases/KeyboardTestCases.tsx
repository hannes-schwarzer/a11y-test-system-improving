import { TestCase } from "../../TestCase";
import classNames from "classnames";
import "./KeyboardTestCases.css";

export const KeyboardTestCases = () => {
  const keyboardClassHundredNine = classNames("disappearing-alert", "hidden");
  const keyboardClassHundredTen = classNames(
    "lightbox",
    "close-button",
    "hidden"
  );
  const keyboardClassHundredeighteen = classNames(
    "lightbox",
    "unescapable",
    "hidden"
  );
  const keyboardClassHundredTwentyTwo = classNames("lightbox focus-far hidden");
  const keyboardClassHundredTwentyThree = classNames(
    "lightbox",
    "not-focused",
    "hidden"
  );

  return (
    <>
      <h2>Keyboard Access</h2>
      <TestCase
        testCaseTitle={"Alert shows for a short time"}
        testCategory={"keyboard"}
        testCaseNumber={109}
      >
        <p className={keyboardClassHundredNine}>
          You should complete this form in 20 minutes
        </p>
        <label>
          Name <input type={"text"} />
        </label>
      </TestCase>
      <TestCase
        testCaseTitle={"Lightbox - close button doesn't receive focus"}
        testCategory={"keyboard"}
        testCaseNumber={110}
      >
        <a className={"open-lightbox-close-button"} href={"#"}>
          Open lightbox
        </a>
        <div className={keyboardClassHundredTen}>
          <span title={"Close lightbox"} className={"close-button"}>
            X
          </span>
          <p>
            This lightbox's close button isn't a link so you can't focus on it.
            The Ministry of Justice website has{" "}
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
      </TestCase>
      <TestCase
        testCaseTitle={"Focus order in wrong order"}
        testCategory={"keyboard"}
        testCaseNumber={111}
      >
        <div className={"focus-order-broken"}>
          <a className={"first"} href={"#"}>
            First link
          </a>
          <a className={"second"} href={"#"}>
            Second link
          </a>
          <a className={"third"} href={"#"}>
            Third link
          </a>
        </div>
      </TestCase>
      <TestCase
        testCaseTitle={"Link with tabindex greater than 0"}
        testCategory={"keyboard"}
        testCaseNumber={112}
      >
        <a href={"page.html"} tabIndex={5}>
          A link with a tabindex greater than 0
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Keyboard focus is not indicated visually"}
        testCategory={"keyboard"}
        testCaseNumber={113}
      >
        <a className={"no-outline"} href={"link.html"}>
          Link with no focus style
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Keyboard focus assigned to a non focusable element using tabindex=0"
        }
        testCategory={"keyboard"}
        testCaseNumber={114}
      >
        <p tabIndex={0}>Some random text</p>
      </TestCase>
      {/*Concertina doesn't function*/}
      <TestCase
        testCaseTitle={"Concertina items don't get keyboard focus"}
        testCategory={"keyboard"}
        testCaseNumber={115}
      >
        <dl className={"concertina"}>
          <dt className={""}>Understanding user research</dt>
          <dd className={"hidden"}>
            <ul>
              <li>How user research improves service design</li>
              <li>Start by learning user needs</li>
              <li>Understanding users who don't use digital services</li>
            </ul>
          </dd>
          <dt className={""}>Preparing for user research</dt>
          <dd className={"hidden"}>
            <ul>
              <li>Plan user research for your service</li>
              <li>Plan a round of user research</li>
              <li>Find user research participants</li>
              <li>Choose a location for user research</li>
              <li>Write a recruitment brief</li>
              <li>Getting users' consent for research</li>
            </ul>
          </dd>
          <dt>Analysing and sharing findings</dt>
          <dd className={"hidden"}>
            <ul>
              <li>Sharing user research findings</li>
              <li>Analyse a research session</li>
            </ul>
          </dd>
        </dl>
      </TestCase>
      <TestCase
        testCaseTitle={"Keyboard trap"}
        testCategory={"keyboard"}
        testCaseNumber={116}
      >
        <a href={"/keyboard/trap"}>
          Example page that contains a keyboard trap
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Dropdown navigation - only the top level items receive focus"
        }
        testCategory={"keyboard"}
        testCaseNumber={117}
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
      </TestCase>
      {/*Lightbox doesn't function*/}
      <TestCase
        testCaseTitle={"Lightbox - ESC key doesn't close the lightbox"}
        testCategory={"keyboard"}
        testCaseNumber={118}
      >
        <a className={"open-lightbox-unescapable"} href={"#"}>
          Open lightbox
        </a>
        <div className={keyboardClassHundredeighteen}>
          <a title={"Close lightbox"} className={"close-button"} href={"#"}>
            X
          </a>
          <p>
            This lightbox can't be closed with an escape key. The Ministry of
            Justice website has{" "}
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
      </TestCase>
      <TestCase
        testCaseTitle={"Link with a role=button does not work with space bar"}
        testCategory={"keyboard"}
        testCaseNumber={119}
      >
        <a className={"button"} href={"next.html"} role={"button"}>
          Continue
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Tooltips don't receive keyboard focus"}
        testCategory={"keyboard"}
        testCaseNumber={120}
      >
        <label
          className={"tooltips-not-focusable"}
          htmlFor={"drivers-licence-no"}
        >
          Your driving licence number <span className={"tooltip-icon"}>?</span>{" "}
          <span className={"tooltip-information"}>
            Your driving licence number can be found in section 5 of your
            driving licence photocard
          </span>
        </label>
        <input id={"drivers-licence-no"} type={"text"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Accesskey attribute used for link"}
        testCategory={"keyboard"}
        testCaseNumber={121}
      >
        <a accessKey={"A"} href={"page.html"}>
          A link with an accesskey attribute
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Lightbox - focus is not moved immediately to lightbox"}
        testCategory={"keyboard"}
        testCaseNumber={122}
      >
        <a className={"open-lightbox-focus-far"} href={"#"}>
          Open lightbox
        </a>
        <div className={keyboardClassHundredTwentyTwo}>
          <span title={"Close lightbox"} className={"close-button"}>
            X
          </span>
          <p>
            This lightbox is placed at the end of the DOM so you'll have to tab
            through other links to reach it. The Ministry of Justice website has{" "}
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
      </TestCase>
      <TestCase
        testCaseTitle={"Lightbox - focus is not retained within the lightbox"}
        testCategory={"keyboard"}
        testCaseNumber={123}
      >
        <a className={"open-lightbox-not-focused"} href={"#"}>
          Open lightbox
        </a>
        <div className={keyboardClassHundredTwentyThree}>
          <span title={"Close lightbox"} className={"close-button"}>
            X
          </span>
          <p>
            This lightbox doesn't retain the focus within itself. The Ministry
            of Justice website has{" "}
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
      </TestCase>
      <TestCase
        testCaseTitle={"Fake button is not keyboard accessible"}
        testCategory={"keyboard"}
        testCaseNumber={124}
      >
        <div className={"button"} id={"webchat"}>
          launch webchat
        </div>
      </TestCase>
    </>
  );
};
