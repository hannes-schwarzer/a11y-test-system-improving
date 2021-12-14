import { Frame } from "../../../../../components/Frame/Frame";
import { Level, TestCase } from "../../../../../components/TestCase/TestCase";
import "./ImagesOfText.css";
import BANNERIMAGE from "../../../../../assets/banner-as-image.png";

interface Props {
  pageTitle: string;
}

export const ImagesOfText = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "Failure of Success Criterium 1.4.5 due to not using CSS background-image to layer text and images"
          }
          level={Level.AA}
          successCriterionInWords={"Images of Text"}
          successCriterionNumber={"1.4.5"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#images-of-text"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html"
          }
          explanation={
            "The following banners look identical, but one is made by using CSS and the other is an image file. If possible the first type should be used."
          }
          id={"1.4.5_1"}
        >
          <p>This banner is composed with CSS</p>
          <div id="banner">
            <span id="bannerstyle1">Welcome</span>
            <span id="bannerstyle2">to your local city council</span>
          </div>
          <p>This banner is an image</p>
          <img
            alt={"Banner withthe slogan: Welcome to your local city council"}
            src={BANNERIMAGE}
          />
        </TestCase>
      </Frame>
    </>
  );
};
