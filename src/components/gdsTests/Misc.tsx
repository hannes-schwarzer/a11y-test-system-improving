import { GuidelineError, Level } from "../GuidelineError";
import { Link } from "react-router-dom";

export const Misc = () => {
  return (
    <>
      <GuidelineError
        title={"First instance of abbreviation not expanded"}
        serial={1}
        category={"3.1.4 Abbreviations"}
        guideline={"3.1.4"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#abbreviations"
        }
        level={Level.AAA}
        explanation={
          "No mechanism for identifying the expanded form or meaning of abbreviations is available."
        }
      >
        <abbr>GDS</abbr> is part of the Cabinet Office. Our job is digital
        transformation of government.
      </GuidelineError>
      {/*2.4.10?*/}
      <GuidelineError
        title={"Content is not in correct reading order in source code"}
        serial={3}
        category={"content"}
      >
        <h4>3-Step Skin Care</h4>
        <div style={{ float: "right", width: "33%" }}>Moisturise</div>
        <div style={{ float: "right", width: "33%" }}>Exfoliate</div>
        <div style={{ float: "right", width: "33%" }}>Cleanse</div>
      </GuidelineError>
      <GuidelineError
        title={
          "Unorganised content: Content is not organised into well-defined groups or chunks, using headings, lists, and other visual mechanisms"
        }
        serial={4}
        category={"content"}
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
      </GuidelineError>
      <GuidelineError
        title={"Marquee element found"}
        category={"typography"}
        serial={17}
      >
        {" "}
      </GuidelineError>
      <GuidelineError
        title={"Long lines of text"}
        category={"typography"}
        serial={18}
      >
        <p>
          For people with some reading or vision disabilities, long lines of
          text can become a significant barrier. They have trouble keeping their
          place and following the flow of text. Having a narrow block of text
          makes it easier for them to continue on to the next line in a block.
          Lines should not exceed 80 characters
        </p>
      </GuidelineError>

      {/*1.3.1 || 2.4.6 || 2.4.10*/}
      <GuidelineError title={"Missing h1"} category={"headings"} serial={36}>
        <Link to={"/headings/missingh1"}>Example page with no H1</Link>
      </GuidelineError>

      {/*1.3.1 || No Error?*/}
      <GuidelineError
        title={"Table with some empty cells"}
        category={"tables"}
        serial={53}
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
      </GuidelineError>
    </>
  );
};
