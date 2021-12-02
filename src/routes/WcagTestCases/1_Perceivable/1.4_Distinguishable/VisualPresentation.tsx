import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import "./VisualPresentation.css";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const VisualPresentation = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          level={Level.AAA}
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterion={"1.4.8 Visual Presentation"}
          serial={1}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying only background color with CSS: In the example below the background color is defined on the " +
            "CSS stylesheet, however the foreground color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
        >
          <p className={"whiteBackground"}>My background is white.</p>
        </GuidelineError>
        <GuidelineError
          level={Level.AAA}
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterion={"1.4.8 Visual Presentation"}
          serial={2}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying only foreground color with CSS: In the example below the foreground color is defined" +
            " on the CSS stylesheet, however the background color is not defined. Therefore, the example fails the Success " +
            "Criterion."
          }
        >
          <p className={"whiteForeground"}>My foreground is white.</p>
        </GuidelineError>

        <GuidelineError
          level={Level.AAA}
          title={
            "F24: Failure of Success Criterion 1.4.3, 1.4.6 and 1.4.8 due to specifying foreground colors without " +
            "specifying background colors or vice versa"
          }
          successCriterion={"1.4.8 Visual Presentation"}
          serial={3}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F24.html"
          }
          explanation={
            "Specifying foreground color of link text with CSS: In the example below the link text (foreground) color is " +
            "defined. However, the background color is not defined. Therefore, the example fails the " +
            "Success Criterion."
          }
        >
          <p>
            ... document body... <a href="foo.htm">Foo</a>
          </p>
        </GuidelineError>
        <GuidelineError
          title={
            "F88: Failure of Success Criterion 1.4.8 due to using text that is justified (aligned to both the left and the right margins)"
          }
          successCriterion={"1.4.8 Visual Presentation"}
          serial={4}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F88.html"
          }
          level={Level.AAA}
          explanation={
            "In this example of a failure, the CSS text-align property is used to create justified text."
          }
        >
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vestibulum
            sit amet pede. Phasellus nec sem id mauris vehicula tincidunt. Morbi
            ac arcu. Maecenas vehicula velit et orci. Donec ullamcorper
            porttitor velit. Sed arcu lorem, cursus sit amet, auctor eu,
            convallis ut, purus. Vivamus imperdiet accumsan nunc. Maecenas
            pellentesque nunc a libero. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Curabitur pharetra
            commodo justo. Nulla facilisi. Phasellus nulla lacus, tempor quis,
            tincidunt ac, rutrum et, mauris.
          </p>
        </GuidelineError>

        <GuidelineError
          title={"All caps text found"}
          successCriterion={"typography"}
          serial={5}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Capitalization"
          }
        >
          <p className={"all-caps"}>
            Typing sentences or phrases IN ALL CAPITALS is rarely a good idea.
            It may make sense under some circumstances, but only rarely. Lengthy
            segments of capitalized content are more difficult to read. In some
            cases, a screen reader may interpret ALL CAPITAL text as being an
            acronym and may read it as letters rather than words. For example, a
            screen reader may read the uppercase text CONTACT US as "Contact U.
            S." because it interprets the uppercase "US" as being an acronym for
            "United States".
          </p>
        </GuidelineError>
        <GuidelineError
          title={"Italics used on long sections of text"}
          successCriterion={"1.4.8 Visual Presentation"}
          serial={6}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          level={Level.AAA}
          linkToExplanation={
            "https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Capitalization"
          }
        >
          <p className={"italic"}>
            Italics are sometimes used to highlight text. But you shouldn't use
            italicized text because they make letters hard to read. The letters
            have a jagged line compared to non-italic fonts. The letters also
            lean over making it hard for dyslexic users to make out the words.
            When the text size is small, the text is even more illegible.
          </p>
        </GuidelineError>
        <GuidelineError
          title={"Justified text found"}
          successCriterion={"typography"}
          serial={7}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#visual-presentation"
          }
          guideline={"1.4.8"}
          level={Level.AAA}
        >
          <p className={"justify"}>
            When text is justified to both margins it may add additional spaces
            between words which may be difficult for users with visual or
            cognitive impairments to read. Full text justification can also
            cause words to be spaced closely together thus making it difficult
            to determine where a word starts and ends.
          </p>
        </GuidelineError>
      </Frame>
    </>
  );
};
