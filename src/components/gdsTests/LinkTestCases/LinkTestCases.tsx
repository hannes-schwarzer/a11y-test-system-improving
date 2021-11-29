import { GuidelineError } from "../../GuidelineError";
import BBC from "../../../assets/bbc-blocks-dark.png";
import REDPANDA from "../../../assets/220px-RedPandaFullBody.jpeg";
import BAT from "../../../assets/bat.jpeg";
import "./LinkTestCases.css";

export const LinkTestCases = () => {
  return (
    <>
      <GuidelineError
        title={"Image link with no alternative text"}
        category={"links"}
        serial={68}
      >
        <a href={"http://www.bbc.co.uk/"}>
          <img alt={""} src={BBC} />
        </a>
      </GuidelineError>
      <GuidelineError
        title={"Link to javascript, invalid hypertext reference"}
        category={"links"}
        serial={69}
      >
        <a href={"javascript:alert('Hello World!')"}>Press me!</a>
      </GuidelineError>
      <GuidelineError
        title={"Uninformative link text"}
        category={"links"}
        serial={70}
      >
        <h4>Polar bear</h4>
        <p>
          The polar bear is a carnivorous bear whose native range lies largely
          within the Arctic Circle, encompassing the Arctic Ocean, its
          surrounding seas and surrounding land masses.
        </p>
        <a href={"https://en.wikipedia.org/wiki/Polar_bear"}>Read more</a>
      </GuidelineError>
      <GuidelineError
        title={"Link launches new window with no warning"}
        category={"links"}
        serial={71}
      >
        <a href={"https://twitter.com/"} target={"_blank"}>
          Twitter
        </a>
      </GuidelineError>
      <GuidelineError
        title={"Links not separated by printable characters"}
        category={"links"}
        serial={72}
      >
        <a href={"a.html"}>Page A</a>
        <a href={"b.html"}>Page B</a>
        <a href={"c.html"}>Page C</a>
      </GuidelineError>
      <GuidelineError
        title={"Link text with identical title"}
        category={"links"}
        serial={73}
      >
        <a href={"http://www.google.com/"} title={"Google"}>
          Google
        </a>
      </GuidelineError>
      {/*This one is still to be implemented*/}
      <GuidelineError
        title={"Links to a sound file, no transcript"}
        category={"links"}
        serial={74}
      ></GuidelineError>
      <GuidelineError
        title={"Identifying links by colour alone"}
        category={"links"}
        serial={75}
      >
        <p>
          <a href={"#"}>A normal Link</a>
          <br />
          Some text
          <br />
          <a className={"color-alone-link"} href={"#"}>
            Link only identifiable by color alone
          </a>
        </p>
      </GuidelineError>
      <GuidelineError
        title={
          "Link to PDF does not include information on file format and file size"
        }
        category={"links"}
        serial={76}
      >
        <a
          href={
            "https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/Dyslexia_Style_Guide_2018-final-1.pdf"
          }
        >
          Dyslexia style guide
        </a>
      </GuidelineError>
      <GuidelineError
        title={"Link to #, invalid hypertext reference"}
        category={"links"}
        serial={77}
      >
        <a href={"#"}>Do something</a>
      </GuidelineError>
      <GuidelineError title={"Blank link text"} category={"links"} serial={78}>
        <a href={"http://www.google.com"}></a>
      </GuidelineError>
      <GuidelineError
        title={"Links with the same text go to different pages"}
        category={"links"}
        serial={79}
      >
        <a href={"https://en.wikipedia.org/wiki/Lion"}>Lions</a> are the only
        truly social cats, with related females living together in prides
        overseen by male coalition that compete for possession in fierce and
        often fatal battles.
        <a
          href={
            "http://animals.nationalgeographic.com/animals/mammals/african-lion/"
          }
        >
          {" "}
          Lions
        </a>{" "}
        are predatory carnivores and it's the females that perform most of the
        hunting at night; the majority of the prey being antelope, zebra and
        wildebeest.
      </GuidelineError>
      <GuidelineError
        title={"Link text does not make sense out of context"}
        category={"links"}
        serial={80}
      >
        <p>
          To know more about me, visit my <a href={"page.html"}>page</a>.
        </p>
      </GuidelineError>
      <GuidelineError
        title={"Adjacent links going to the same destination"}
        category={"links"}
        serial={81}
      >
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
          <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} />
        </a>
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>Red Panda</a>
      </GuidelineError>
      <GuidelineError
        title={"Link contains only a full stop"}
        category={"links"}
        serial={82}
      >
        <p>
          Visit the GOV.UK website <a href={"https://www.gov.uk/"}>.</a>
        </p>
      </GuidelineError>
      <GuidelineError
        title={"Image link alt text repeats text in the link"}
        category={"links"}
        serial={83}
      >
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
          <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} /> Red
          Panda
        </a>
      </GuidelineError>
      <GuidelineError
        title={
          "Link not clearly identifiable and distinguishable from surrounding text"
        }
        category={"links"}
        serial={84}
      >
        <p className={"unobvious-link"}>
          Find out more about{" "}
          <a href={"https://www.bbc.co.uk/programmes/b006q2x0"}>Doctor Who</a>
        </p>
      </GuidelineError>
      <GuidelineError
        title={"Link to a multimedia file, no transcript"}
        category={"links"}
        serial={85}
      >
        <a href={"interview.mov"}>Watch the interview</a>
      </GuidelineError>
      <GuidelineError
        title={"Non-specific link text"}
        category={"links"}
        serial={86}
      >
        <a href={"rockies.html"}>Click here</a> for more information on the
        Rocky Mountains.
      </GuidelineError>
      <GuidelineError
        title={"Link to an image, no text alternative"}
        category={"links"}
        serial={87}
      >
        My favourite <a href={BAT}>bat</a>.
      </GuidelineError>
    </>
  );
};
