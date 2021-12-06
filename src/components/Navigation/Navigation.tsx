import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <>
      <aside className={"sidebar"}>
        <nav className="nav">
          <ul className="nav__item-wrapper">
            <li>
              <Link className="nav__link" to="/">
                Home
              </Link>
            </li>
            <li>
              Perceivable
              <ul>
                <li>
                  Text Alternatives
                  <ul>
                    <li>
                      <Link
                        className="nav__link"
                        to={
                          "/wcag/perceivable/text-alternatives/non-text-content"
                        }
                      >
                        Non-text Content
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Time-based Media
                  <ul>
                    <li>
                      <Link
                        className="nav__link"
                        to={
                          "/wcag/perceivable/time-based-media/audio-only-and-video-only-prerecorded"
                        }
                      >
                        Audio-only and Video-only (Prerecorded)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav__link"
                        to={
                          "/wcag/perceivable/time-based-media/media-alternative-prerecorded"
                        }
                      >
                        Media Alternative (Prerecorded)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Adaptable
                  <ul>
                    <li>
                      <Link
                        className="nav__link"
                        to={
                          "/wcag/perceivable/adaptable/info-and-relationships"
                        }
                      >
                        Info and Relationships
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav__link"
                        to={"/wcag/perceivable/adaptable/meaningful-sequence"}
                      >
                        Meaningful Sequence
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nav__link"
                        to={
                          "/wcag/perceivable/adaptable/sensory-characteristics"
                        }
                      >
                        Sensory Characteristics
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Distinguishable
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/perceivable/distinguishable/use-of-color"}
                      >
                        Use of Color
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/perceivable/distinguishable/audio-control"}
                      >
                        Audio Control
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/perceivable/distinguishable/contrast-minimum"
                        }
                      >
                        Contrast (Minimum)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/perceivable/distinguishable/resize-text"}
                      >
                        Resize Text
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/perceivable/distinguishable/contrast-enhanced"
                        }
                      >
                        Contrast (Enhanced)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/perceivable/distinguishable/visual-presentation"
                        }
                      >
                        Visual Presentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/perceivable/distinguishable/reflow"}
                      >
                        Reflow
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/perceivable/distinguishable/non-text-contrast"
                        }
                      >
                        Non-text Contrast
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/perceivable/distinguishable/text-spacing"}
                      >
                        Text Spacing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/perceivable/distinguishable/content-on-hover-or-focus"
                        }
                      >
                        Content on Hover or Focus
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Operable
              <ul>
                <li>
                  Keyboard Accessible
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/keyboard-accessible/keyboard"}
                      >
                        Keyboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/operable/keyboard-accessible/no-keyboard-trap"
                        }
                      >
                        No Keyboard Trap
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/operable/keyboard-accessible/character-key-shortcuts"
                        }
                      >
                        Character Key Shortcuts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Enough Time
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/enough-time/timing-adjustable"}
                      >
                        Timing Adjustable
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/enough-time/pause-stop-hide"}
                      >
                        Pause, Stop, Hide
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/enough-time/interruptions"}
                      >
                        Interruptions
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Seizures and Physical Reactions
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/operable/seizures-and-physical-reactions/three-flashes-or-below-threshold"
                        }
                      >
                        Three Flashes or Below Threshold
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Navigable
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/bypass-blocks"}
                      >
                        Bypass Blocks
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/page-titled"}
                      >
                        Page Titled
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/focus-order"}
                      >
                        Focus Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/link-purpose-in-context"}
                      >
                        Link Purpose (In Context)
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/headings-and-labels"}
                      >
                        Headings and Labels
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/focus-visible"}
                      >
                        Focus Visible
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/navigable/link-purpose-link-only"}
                      >
                        Link Purpose (Link Only)
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Input Modalities
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/input-modalities/label-in-name"}
                      >
                        Label in Name
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/operable/input-modalities/target-size"}
                      >
                        Target Size
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Understandable
              <ul>
                <li>
                  Readable
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/understandable/readable/language-of-page"}
                      >
                        Language of Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/understandable/readable/language-of-parts"}
                      >
                        Language of Parts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/understandable/readable/reading-level"}
                      >
                        Reading Level
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Predictable
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/understandable/predictable/on-focus"}
                      >
                        On Focus
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/understandable/predictable/on-input"}
                      >
                        On Input
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/understandable/predictable/consistent-navigation"
                        }
                      >
                        Consistent Navigation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/understandable/predictable/consistent-identification"
                        }
                      >
                        Consistent Identification
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/understandable/predictable/change-on-request"
                        }
                      >
                        Change on Request
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  Input Assistance
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/understandable/input-assistance/error-identification"
                        }
                      >
                        Error Identification
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/understandable/input-assistance/labels-or-instructions"
                        }
                      >
                        Labels or Instructions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={
                          "/wcag/understandable/input-assistance/error-suggestion"
                        }
                      >
                        Error Suggestion
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Robust
              <ul>
                <li>
                  Compatible
                  <ul>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/robust/compatible/parsing"}
                      >
                        Parsing
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={"nav__link"}
                        to={"/wcag/robust/compatible/name-role-value"}
                      >
                        Name, Role, Value
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
