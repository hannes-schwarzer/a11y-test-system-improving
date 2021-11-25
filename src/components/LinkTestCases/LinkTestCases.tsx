import { TestCase } from "../TestCase";
import BBC from "../../assets/bbc-blocks-dark.png";
import REDPANDA from "../../assets/220px-RedPandaFullBody.jpeg";
import BAT from "../../assets/bat.jpeg";
import "./LinkTestCases.css";

export const LinkTestCases = () => {
  return (
    <>
      <TestCase
        testCaseTitle={"Image link with no alternative text"}
        testCategory={"links"}
        testCaseNumber={68}
      >
        <a href={"http://www.bbc.co.uk/"}>
          <img alt={""} src={BBC} />
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Link to javascript, invalid hypertext reference"}
        testCategory={"links"}
        testCaseNumber={69}
      >
        <a href={"javascript:alert('Hello World!')"}>Press me!</a>
      </TestCase>
      <TestCase
        testCaseTitle={"Uninformative link text"}
        testCategory={"links"}
        testCaseNumber={70}
      >
        <h4>Polar bear</h4>
        <p>
          The polar bear is a carnivorous bear whose native range lies largely
          within the Arctic Circle, encompassing the Arctic Ocean, its
          surrounding seas and surrounding land masses.
        </p>
        <a href={"https://en.wikipedia.org/wiki/Polar_bear"}>Read more</a>
      </TestCase>
      <TestCase
        testCaseTitle={"Link launches new window with no warning"}
        testCategory={"links"}
        testCaseNumber={71}
      >
        <a href={"https://twitter.com/"} target={"_blank"}>
          Twitter
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Links not separated by printable characters"}
        testCategory={"links"}
        testCaseNumber={72}
      >
        <a href={"a.html"}>Page A</a>
        <a href={"b.html"}>Page B</a>
        <a href={"c.html"}>Page C</a>
      </TestCase>
      <TestCase
        testCaseTitle={"Link text with identical title"}
        testCategory={"links"}
        testCaseNumber={73}
      >
        <a href={"http://www.google.com/"} title={"Google"}>
          Google
        </a>
      </TestCase>
      {/*This one is still to be implemented*/}
      <TestCase
        testCaseTitle={"Links to a sound file, no transcript"}
        testCategory={"links"}
        testCaseNumber={74}
      ></TestCase>
      <TestCase
        testCaseTitle={"Identifying links by colour alone"}
        testCategory={"links"}
        testCaseNumber={75}
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
      </TestCase>
      <TestCase
        testCaseTitle={
          "Link to PDF does not include information on file format and file size"
        }
        testCategory={"links"}
        testCaseNumber={76}
      >
        <a
          href={
            "https://cdn.bdadyslexia.org.uk/uploads/documents/Advice/style-guide/Dyslexia_Style_Guide_2018-final-1.pdf"
          }
        >
          Dyslexia style guide
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={"Link to #, invalid hypertext reference"}
        testCategory={"links"}
        testCaseNumber={77}
      >
        <a href={"#"}>Do something</a>
      </TestCase>
      <TestCase
        testCaseTitle={"Blank link text"}
        testCategory={"links"}
        testCaseNumber={78}
      >
        <a href={"http://www.google.com"}></a>
      </TestCase>
      <TestCase
        testCaseTitle={"Links with the same text go to different pages"}
        testCategory={"links"}
        testCaseNumber={79}
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
      </TestCase>
      <TestCase
        testCaseTitle={"Link text does not make sense out of context"}
        testCategory={"links"}
        testCaseNumber={80}
      >
        <p>
          To know more about me, visit my <a href={"page.html"}>page</a>.
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Adjacent links going to the same destination"}
        testCategory={"links"}
        testCaseNumber={81}
      >
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
          <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} />
        </a>
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>Red Panda</a>
      </TestCase>
      <TestCase
        testCaseTitle={"Link contains only a full stop"}
        testCategory={"links"}
        testCaseNumber={82}
      >
        <p>
          Visit the GOV.UK website <a href={"https://www.gov.uk/"}>.</a>
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Image link alt text repeats text in the link"}
        testCategory={"links"}
        testCaseNumber={83}
      >
        <a href={"https://en.wikipedia.org/wiki/Red_panda"}>
          <img alt={"Red Panda"} height={165} src={REDPANDA} width={220} /> Red
          Panda
        </a>
      </TestCase>
      <TestCase
        testCaseTitle={
          "Link not clearly identifiable and distinguishable from surrounding text"
        }
        testCategory={"links"}
        testCaseNumber={84}
      >
        <p className={"unobvious-link"}>
          Find out more about{" "}
          <a href={"https://www.bbc.co.uk/programmes/b006q2x0"}>Doctor Who</a>
        </p>
      </TestCase>
      <TestCase
        testCaseTitle={"Link to a multimedia file, no transcript"}
        testCategory={"links"}
        testCaseNumber={85}
      >
        <a href={"interview.mov"}>Watch the interview</a>
      </TestCase>
      <TestCase
        testCaseTitle={"Non-specific link text"}
        testCategory={"links"}
        testCaseNumber={86}
      >
        <a href={"rockies.html"}>Click here</a> for more information on the
        Rocky Mountains.
      </TestCase>
      <TestCase
        testCaseTitle={"Link to an image, no text alternative"}
        testCategory={"links"}
        testCaseNumber={87}
      >
        My favourite <a href={BAT}>bat</a>.
      </TestCase>
    </>
  );
};
