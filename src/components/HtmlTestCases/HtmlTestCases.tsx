import { TestCase } from "../TestCase";
import SPACER from "../../assets/spacer.gif";

export const HtmlTestCases = () => {
  return (
    <>
      <h2>HTML</h2>
      <TestCase
        testCaseTitle={"Duplicate id"}
        testCategory={"html"}
        testCaseNumber={132}
      >
        <div id={"nav"}>global nav</div>
        <div id={"nav"}>page nav</div>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Article element used to mark-up an element that's actually not an article element."
        }
        testCategory={"html"}
        testCaseNumber={133}
      >
        <article className={"not-article-content"}>
          <h2 id={"parent-other"}>Elsewhere on GOV.UK</h2>
          <nav aria-labelledby={"parent-other"} role={"navigation"}>
            <ul>
              <li>
                <a href={"/somewhere"}>Some link somewhere</a>
              </li>
              <li>
                <a href={"/somewhere-else"}>Some link somewhere else</a>
              </li>
            </ul>
          </nav>
        </article>
      </TestCase>
      <TestCase
        testCaseTitle={"Empty paragraph"}
        testCategory={"html"}
        testCaseNumber={134}
      >
        <p></p>
      </TestCase>
      <TestCase
        testCaseTitle={"Deprecated center element"}
        testCategory={"html"}
        testCaseNumber={135}
      >
        <p>
          Here there should be a center element but this is not supported by
          react
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Invalid ARIA role names"}
        testCategory={"html"}
        testCaseNumber={136}
      >
        <div className={"header-context"} id={"global-breadcrumb"}>
          <ol className={"group"} role={"breadcrumb"}>
            <li>
              <a href={"/"}>Home</a>
            </li>
            <li>
              <a href={"/some-page"}>Some page</a>
            </li>
            <li>
              <strong>
                <a href={"/some-other-page"}>Some other page</a>
              </strong>
            </li>
          </ol>
        </div>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Object not embedded accessibly - wmode parameter not set to window"
        }
        testCategory={"html"}
        testCaseNumber={137}
      >
        <object data={"foo"}>
          <param name={"wmode"} value={"transparent"} /> Alternative text
        </object>
      </TestCase>
      <TestCase
        testCaseTitle={"Spacer image found"}
        testCategory={"html"}
        testCaseNumber={138}
      >
        We are here. <img alt={""} height={1} src={SPACER} width={100} /> And
        you are there.
      </TestCase>
      <TestCase
        testCaseTitle={"Inline style adds colour"}
        testCategory={"html"}
        testCaseNumber={139}
      >
        <p style={{ color: "blue" }}>
          The colour of this text is set using inline styles.
        </p>
      </TestCase>
      {/*This is not possible in react typescript. Doesn't compile.*/}
      <TestCase
        testCaseTitle={"Start and close tags don't match"}
        testCategory={"html"}
        testCaseNumber={140}
      >
        <div>This is not possible in react typescript. Doesn't compile.</div>
      </TestCase>
      <TestCase
        testCaseTitle={"PRE element without CODE element inside it"}
        testCategory={"html"}
        testCaseNumber={141}
      >
        <pre>Your /\ (`/`|| _ + /--\,)\,|| (||`| goes here</pre>
      </TestCase>
      {/*font tag ss not supported in react.*/}
      <TestCase
        testCaseTitle={"Deprecated font element"}
        testCategory={"html"}
        testCaseNumber={142}
      >
        <p>font tag is not supported in react.</p>
      </TestCase>
    </>
  );
};
