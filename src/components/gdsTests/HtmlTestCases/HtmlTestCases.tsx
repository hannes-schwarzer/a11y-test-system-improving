import { GuidelineError } from "../../GuidelineError";
import SPACER from "../../../assets/spacer.gif";

export const HtmlTestCases = () => {
  return (
    <>
      <h2>HTML</h2>
      <GuidelineError title={"Duplicate id"} category={"html"} serial={132}>
        <div id={"nav"}>global nav</div>
        <div id={"nav"}>page nav</div>
      </GuidelineError>
      <GuidelineError
        title={
          "Article element used to mark-up an element that's actually not an article element."
        }
        category={"html"}
        serial={133}
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
      </GuidelineError>
      <GuidelineError title={"Empty paragraph"} category={"html"} serial={134}>
        <p></p>
      </GuidelineError>
      <GuidelineError
        title={"Deprecated center element"}
        category={"html"}
        serial={135}
      >
        <p>
          Here there should be a center element but this is not supported by
          react
        </p>
      </GuidelineError>
      <GuidelineError
        title={"Invalid ARIA role names"}
        category={"html"}
        serial={136}
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
      </GuidelineError>
      <GuidelineError
        title={
          "Object not embedded accessibly - wmode parameter not set to window"
        }
        category={"html"}
        serial={137}
      >
        <object data={"foo"}>
          <param name={"wmode"} value={"transparent"} /> Alternative text
        </object>
      </GuidelineError>
      <GuidelineError
        title={"Spacer image found"}
        category={"html"}
        serial={138}
      >
        We are here. <img alt={""} height={1} src={SPACER} width={100} /> And
        you are there.
      </GuidelineError>
      <GuidelineError
        title={"Inline style adds colour"}
        category={"html"}
        serial={139}
      >
        <p style={{ color: "blue" }}>
          The colour of this text is set using inline styles.
        </p>
      </GuidelineError>
      {/*This is not possible in react typescript. Doesn't compile.*/}
      <GuidelineError
        title={"Start and close tags don't match"}
        category={"html"}
        serial={140}
      >
        <div>This is not possible in react typescript. Doesn't compile.</div>
      </GuidelineError>
      <GuidelineError
        title={"PRE element without CODE element inside it"}
        category={"html"}
        serial={141}
      >
        <pre>Your /\ (`/`|| _ + /--\,)\,|| (||`| goes here</pre>
      </GuidelineError>
      {/*font tag ss not supported in react.*/}
      <GuidelineError
        title={"Deprecated font element"}
        category={"html"}
        serial={142}
      >
        <p>font tag is not supported in react.</p>
      </GuidelineError>
    </>
  );
};
