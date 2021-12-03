import { TestCase, Level } from "../../components/TestCase/TestCase";
// import { Link } from "react-router-dom";
// import SPACER from "../../assets/spacer.gif";
// import classNames from "classnames";
// import { useState } from "react";

export const Misc = () => {
  // const keyboardClassHundredNine = classNames("disappearing-alert", "hidden");
  //
  // /*Unescapable lightbox*/
  // const lightboxUnescapableHidden = classNames(
  //   "lightbox",
  //   "unescapable",
  //   "hidden"
  // );
  // const lightboxUnescapable = classNames("lightbox", "unescapable");
  // const [visibilityUnescapable, setVisibilityUnescapable] = useState(
  //   lightboxUnescapableHidden
  // );
  //
  // /*last two lightboxes*/
  // const keyboardClassHundredTwentyTwo = classNames("lightbox focus-far hidden");
  // const keyboardClassHundredTwentyThree = classNames(
  //   "lightbox",
  //   "not-focused",
  //   "hidden"
  // );

  return (
    <>
      <TestCase
        title={"First instance of abbreviation not expanded"}
        successCriterionInWords={"3.1.4 Abbreviations"}
        successCriterionNumber={"3.1.4"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#abbreviations"
        }
        level={Level.AAA}
        explanation={
          "No mechanism for identifying the expanded form or meaning of abbreviations is available."
        }
      >
        <abbr>GDS</abbr> is part of the Cabinet Office. Our job is digital
        transformation of government.
      </TestCase>
      {/*2.4.10?*/}
      {/*    <TestCase
        title={"Content is not in correct reading order in source code"}
        
        successCriterion={"content"}
      >
        <h4>3-Step Skin Care</h4>
        <div style={{ float: "right", width: "33%" }}>Moisturise</div>
        <div style={{ float: "right", width: "33%" }}>Exfoliate</div>
        <div style={{ float: "right", width: "33%" }}>Cleanse</div>
      </TestCase>
      <TestCase
        title={
          "Unorganised content: Content is not organised into well-defined groups or chunks, using headings, lists, and other visual mechanisms"
        }
        
        successCriterion={"content"}
      >
        <p>
          A key principle of the British Constitution is that the government is
          responsible to Parliament. This is called responsible government.
        </p>
        <p>
          Britain is a constitutional monarchy in which the reigning monarch
          (that is, the King or Queen who is the Head of State at any given
          time) does not make any open political decisions. All political
          decisions are taken by the government and Parliament. This
          constitutional state of affairs is the result of a long history of
          constraining and reducing the political power of the monarch,
          beginning with the Magna Carta in 1215.
        </p>
        <p>
          Parliament is split into two houses: the House of Lords and the House
          of Commons. The House of Commons is the lower house and is the more
          powerful. The House of Lords is the upper house and although it can
          vote to amend proposed laws, the House of Commons can usually vote to
          overrule its amendments. Although the House of Lords can introduce
          bills, most important laws are introduced in the House of Commons –
          and most of those are introduced by the government, which schedules
          the vast majority of parliamentary time in the Commons. Parliamentary
          time is essential for bills to be passed into law, because they must
          pass through a number of readings before becoming law. Prior to
          introducing a bill, the government may run a public consultation to
          solicit feedback from the public and businesses, and often may have
          already introduced and discussed the policy in the Queen's Speech, or
          in an election manifesto or party platform.
        </p>
        <p>
          Ministers of the Crown are responsible to the House in which they sit;
          they make statements in that House and take questions from members of
          that House. For most senior ministers this is usually the elected
          House of Commons rather than the House of Lords. There have been some
          recent exceptions to this: for example, cabinet ministers Lord
          Mandelson (First Secretary of State) and Lord Adonis (Secretary of
          State for Transport) sat in the Lords and were responsible to that
          House during the government of Gordon Brown.
        </p>
        <p>
          Since the start of Edward VII's reign, in 1901, the prime minister has
          always been an elected member of Parliament (MP) and therefore
          directly accountable to the House of Commons. A similar convention
          applies to the Chancellor of the Exchequer: it would likely be
          politically unacceptable for the budget speech to be given in the
          Lords, with MPs unable to directly question the Chancellor, especially
          now that the Lords have very limited powers in relation to money
          bills; the last Chancellor of the Exchequer to be a member of the
          House of Lords was Lord Denman, who served as interim Chancellor of
          the Exchequer for one month in 1834.[6]
        </p>
        <p>
          Under the British system the government is required by convention and
          for practical reasons to maintain the confidence of the House of
          Commons. It requires the support of the House of Commons for the
          maintenance of supply (by voting through the government's budgets) and
          to pass primary legislation. By convention if a government loses the
          confidence of the House of Commons it must either resign or a General
          Election is held. The support of the Lords, while useful to the
          government in getting its legislation passed without delay, is not
          vital. A government is not required to resign even if it loses the
          confidence of the Lords and is defeated in key votes in that House.
          The House of Commons is thus the Responsible house.
        </p>
        <p>
          The prime minister is held to account during Prime Minister's Question
          Time (PMQs) which provides an opportunity for MPs from all parties to
          question the PM on any subject. There are also departmental questions
          when ministers answer questions relating to their specific
          departmental brief. Unlike PMQs both the cabinet ministers for the
          department and junior ministers within the department may answer on
          behalf of the government, depending on the topic of the question.
        </p>
        <p>
          During debates on legislation proposed by the government,
          ministers—usually with departmental responsibility for the bill—will
          lead the debate for the government and respond to points made by MPs
          or Lords.
        </p>
        <p>
          Committees[7] of both the House of Commons and House of Lords hold the
          government to account, scrutinise its work and examine in detail
          proposals for legislation. Ministers appear before committees to give
          evidence and answer questions.
        </p>
        <p>
          Government ministers are also required by convention and the
          Ministerial Code,[8] when Parliament is sitting, to make major
          statements regarding government policy or issues of national
          importance to Parliament. This allows MPs or Lords to question the
          government on the statement. When the government instead chooses to
          make announcements first outside Parliament, it is often the subject
          of significant criticism from MPs and the Speaker of the House of
          Commons.[9]
        </p>
      </TestCase>
      <TestCase
        title={"Marquee element found"}
        successCriterion={"typography"}
        
      >
        {" "}
      </TestCase>
      <TestCase
        title={"Long lines of text"}
        successCriterion={"typography"}
        
      >
        <p>
          For people with some reading or vision disabilities, long lines of
          text can become a significant barrier. They have trouble keeping their
          place and following the flow of text. Having a narrow block of text
          makes it easier for them to continue on to the next line in a block.
          Lines should not exceed 80 characters
        </p>
      </TestCase>
*/}
      {/*1.3.1 || 2.4.6 || 2.4.10*/}
      {/*      <TestCase
        title={"Missing h1"}
        successCriterion={"headings"}
        
      >
        <Link to={"/headings/missingh1"}>Example page with no H1</Link>
      </TestCase>
*/}
      {/*1.3.1 || No Error?*/}
      {/*      <TestCase
        title={"Table with some empty cells"}
        successCriterion={"tables"}
        
      >
        <table>
          <caption>Bills before Parliament 2016-17</caption>
          <thead>
            <tr>
              <th>Current House</th>
              <th>Bill title</th>
              <th>Last updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&nbsp;</td>
              <td>A</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>Lords</td>
              <td>Abortion (Disability Equality) Bill [HL]</td>
              <td>26.05.2016</td>
            </tr>
            <tr>
              <td>Lords</td>
              <td>Access to Palliative Care Bill [HL]</td>
              <td>10.06.2016</td>
            </tr>
          </tbody>
        </table>
      </TestCase>
*/}
      {/*This one is still to be implemented*/}
      {/*      <TestCase
        title={"Links to a sound file, no transcript"}
        successCriterion={"links"}
        
      ></TestCase>

      <TestCase
        title={"Field hint not associated with input"}
        successCriterion={"forms"}
        
        linkToExplanation={
          "https://www.deque.com/blog/accessible-forms-the-problem-with-placeholders/ https://www.smashingmagazine.com/2018/06/placeholder-attribute/"
        }
      >
        <form>
          <label className={"form-label"} htmlFor={"ni-number"}>
            National Insurance number
          </label>
          <p className={"form-hint"}>
            It'll be on your last payslip. For example, JH 21 90 0A.
          </p>
          <input className={"form-control"} id={"ni-number"} type={"text"} />
        </form>
      </TestCase>

      <TestCase
        title={"Inadequately-sized clickable targets found"}
        successCriterion={"3.1 Readable"}
        
        guideline={"3.1"}
        linkToGuideline={"https://www.w3.org/WAI/WCAG21/quickref/#readable"}
      >
        <a href={"a.html"}>a</a>
        <a href={"b.html"}>b</a>
        <a href={"c.html"}>c</a>
        <a href={"d.html"}>d</a>
        <a href={"e.html"}>e</a>
        <a href={"f.html"}>f</a>
        <a href={"g.html"}>g</a>
        <a href={"h.html"}>h</a>
        <a href={"i.html"}>i</a>
        <a href={"j.html"}>j</a>
        <a href={"k.html"}>k</a>
        <a href={"l.html"}>l</a>
        <a href={"m.html"}>m</a>
        <a href={"n.html"}>n</a>
        <a href={"o.html"}>o</a>
        <a href={"p.html"}>p</a>
        <a href={"q.html"}>q</a>
        <a href={"r.html"}>r</a>
        <a href={"s.html"}>s</a>
        <a href={"t.html"}>t</a>
        <a href={"u.html"}>u</a>
        <a href={"v.html"}>v</a>
        <a href={"w.html"}>w</a>
        <a href={"x.html"}>x</a>
        <a href={"y.html"}>y</a>
        <a href={"z.html"}>z</a>
      </TestCase>

      <TestCase
        title={"EmptyPageTitle paragraph"}
        successCriterion={"html"}
        
      >
        <p></p>
      </TestCase>

      <TestCase
        title={
          "Object not embedded accessibly - wmode parameter not set to window"
        }
        successCriterion={"html"}
        
        linkToExplanation={
          "https://github.com/alphagov/accessibility-tool-audit/issues/41"
        }
      >
        <object data={"foo"}>
          <param name={"wmode"} value={"transparent"} /> Alternative text
        </object>
      </TestCase>
*/}
      {/*Not 1.1.1 Actually this seems to be valid*/}
      {/*      <TestCase
        title={"Spacer image found"}
        successCriterion={"html"}
        
      >
        We are here. <img alt={""} height={1} src={SPACER} width={100} /> And
        you are there.
      </TestCase>
*/}
      {/*This actuually seems valid so far as the usage of pre is concerned*/}
      {/*      <TestCase
        title={"PRE element without CODE element inside it"}
        successCriterion={"html"}
        
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/F48.html"}
      >
        <pre>Your /\ (`/`|| _ + /--\,)\,|| (||`| goes here</pre>
      </TestCase>

      <TestCase
        title={"Inline style adds colour"}
        successCriterion={"html"}
        
        linkToExplanation={
          "https://bcourses.berkeley.edu/courses/1476601/pages/inline-styling"
        }
      >
        <p style={{ color: "blue" }}>
          The colour of this text is set using inline styles.
        </p>
      </TestCase>

      <TestCase
        title={
          "visibility:hidden used to visually hide content when it should be available to screenreader"
        }
        successCriterion={"css"}
        
        linkToExplanation={
          "https://webaim.org/techniques/css/invisiblecontent/"
        }
      >
        <a href={"rugby.html"}>
          Read more <span style={{ visibility: "hidden" }}>about rugby</span>
        </a>
      </TestCase>

      <TestCase
        title={
          "display:none used to visually hide content when it should be available to screenreader"
        }
        successCriterion={"css"}
        
        linkToExplanation={
          "https://webaim.org/techniques/css/invisiblecontent/"
        }
      >
        <a href={"rugby.html"}>
          Read more <span style={{ display: "none" }}>about rugby</span>
        </a>
      </TestCase>

      <TestCase
        title={
          "iframe title attribute does not describe the content or purpose of the iframe"
        }
        successCriterion={"frame"}
        
      >
        <iframe
          height={100}
          src={"/demo-page"}
          title={"Facebook"}
          width={300}
        ></iframe>
      </TestCase>
*/}
      {/*2.2.1*/}
      {/*      <TestCase
        title={"Alert shows for a short time"}
        successCriterion={"keyboard"}
        
      >
        <p className={keyboardClassHundredNine}>
          You should complete this form in 20 minutes
        </p>
        <label>
          Name <input type={"text"} />
        </label>
      </TestCase>
*/}
      {/*2.1.1 && 2.1.3*/}
      {/*      <TestCase
        title={
          "Keyboard focus assigned to a non focusable element using tabindex=0"
        }
        successCriterion={"maybeValid"}
        
        linkToExplanation={"https://www.w3.org/TR/WCAG20-TECHS/SCR29.html"}
      >
        <p tabIndex={0}>Some random text</p>
      </TestCase>
*/}
      {/*Lightbox with not functioning Escape button -
      2.1.3 Keyboard (No Exception) Level AAA ??*/}
      {/*
      <TestCase
        title={"Lightbox - ESC key doesn't close the lightbox"}
        successCriterion={"keyboard"}
        
      >
        <a
          className={"open-lightbox-unescapable"}
          href={"#"}
          onClick={(event) => {
            event.preventDefault();
            setVisibilityUnescapable(lightboxUnescapable);
          }}
        >
          Open lightbox
        </a>
        <div className={visibilityUnescapable}>
          <a
            title={"Close lightbox"}
            className={"close-button"}
            href={"#"}
            onClick={(event) => {
              event.preventDefault();
              setVisibilityUnescapable(lightboxUnescapableHidden);
            }}
          >
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
        title={"Lightbox - focus is not moved immediately to lightbox"}
        successCriterion={"keyboard"}
        
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
        title={"Lightbox - focus is not retained within the lightbox"}
        successCriterion={"keyboard"}
        
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
*/}
      <TestCase
        title={
          "This page does not have a title element. The title element in the content of the iframe does not function as the title for the entire page."
        }
        successCriterionInWords={"Page Titled"}
        successCriterionNumber={"2.4.2"}
        linkToSuccessCriterion={
          "https://www.w3.org/WAI/WCAG21/quickref/#page-titled"
        }
        level={Level.A}
        linkToExplanation={
          "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
        }
      >
        <html>
          <iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
        </html>
      </TestCase>
    </>
  );
};
