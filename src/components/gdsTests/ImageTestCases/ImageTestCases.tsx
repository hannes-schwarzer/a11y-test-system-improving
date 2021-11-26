import BBC from "../../../assets/bbc-blocks-dark.png";
import DECO from "../../../assets/decoration.png";
import TREE from "../../../assets/animated-tree.gif";
import SALE from "../../../assets/sale.jpeg";
import { TestCase } from "../../TestCase";
import "./ImageTestCases.css";

export const ImageTestCases = () => {
  return (
    <>
      <h2>Images</h2>
      <TestCase
        testCaseTitle={"Image has alt and title that are different"}
        testCategory={"images"}
        testCaseNumber={54}
      >
        <img alt={"BBC"} src={BBC} title={"BBC homepage"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Image with presentation role has non-empty alt"}
        testCategory={"images"}
        testCaseNumber={55}
      >
        <img
          alt={"Decorative line clipart"}
          height={"118"}
          role={"presentation"}
          src={DECO}
          width={"368"}
        />
      </TestCase>
      <TestCase
        testCaseTitle={"Image with no alt attribute"}
        testCategory={"images"}
        testCaseNumber={56}
        guideline={"1.1.1"}
        linkToGuideline={
          "https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
        }
      >
        <img src={BBC} />
      </TestCase>
      <TestCase
        testCaseTitle={
          "Background image that conveys information does not have a text alternative"
        }
        testCategory={"images"}
        testCaseNumber={57}
      >
        <div className={"warning-icon"}>
          Taking too much of your pension money in early retirement could mean
          you don't have enough for later.
        </div>
      </TestCase>
      <TestCase
        testCaseTitle={"Image has empty alt and non-empty title"}
        testCategory={"images"}
        testCaseNumber={58}
      >
        <img src={BBC} alt={""} title={"BBC"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Image has no alt and non-empty title"}
        testCategory={"images"}
        testCaseNumber={59}
      >
        <img src={BBC} title={"BBC"} />
      </TestCase>
      <TestCase
        testCaseTitle={"A distraction is present, an animated gif"}
        testCategory={"images"}
        testCaseNumber={60}
      >
        <img
          alt={
            "Animated gif of a Christmas tree with a toy train round and round the base of the tree"
          }
          height={193}
          src={TREE}
          width={157}
        />
      </TestCase>
      <TestCase
        testCaseTitle={
          "Image that conveys information has an empty alt attribute"
        }
        testCategory={"images"}
        testCaseNumber={61}
      >
        <img src={BBC} alt={""} />
      </TestCase>
      <TestCase
        testCaseTitle={
          "Image that conveys information has inappropriate alt text"
        }
        testCategory={"images"}
        testCaseNumber={62}
      >
        <img src={BBC} alt={"Twitter"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Image alt attribute contains image file name"}
        testCategory={"images"}
        testCaseNumber={63}
      >
        <img src={BBC} alt={"bbc-blocks-dark.png"} />
      </TestCase>
      <TestCase
        testCaseTitle={"Image with partial text alternative"}
        testCategory={"images"}
        testCaseNumber={64}
      >
        <p>
          The image below contains a lot of information, such as which
          departments the sale is on. The text alternative in the alt attribute
          does not include this information, only a partial "25% off sale"
        </p>
        <img alt={"25% off sale"} src={SALE} />
      </TestCase>
    </>
  );
};
