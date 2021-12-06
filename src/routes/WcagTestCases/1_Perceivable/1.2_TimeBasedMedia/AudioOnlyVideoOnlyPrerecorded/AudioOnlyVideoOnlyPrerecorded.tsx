import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import BBC from "../../../../../assets/bbc-blocks-dark.png";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const AudioOnlyVideoOnlyPrerecorded = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            "empty placeholder \"\" that is put into the 'text alternative' location on images or pictures."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={""} />
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'placeholder text such as "spacer" or "image" or "picture" etc that are put into the \'text alternative\' location on images or pictures.'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={"spacer"} />
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'programming references that do not convey the information or function of the non-text content such as "picture 1", "picture 2" or "0001", "0002" or "Intro#1", "Intro#2".'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={"picture 1"} />
        </TestCase>

        <TestCase
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'filenames that are not valid text alternatives in their own right such as "Oct.jpg" or "Chart.jpg" or "sales\\\\oct\\\\top3.jpg"'
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/failures/F30.html"
          }
        >
          <img src={BBC} alt={"Oct.jpg"} />
        </TestCase>

        <TestCase
          title={"Embedded video file is missing text alternative"}
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          level={Level.A}
          successCriterionNumber={"1.2.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          explanation={
            "In a video-only presentation, information is presented in a variety of ways including animation, text or graphics, the setting and background, the actions and expressions of people, animals, etc. In order to present the same information in accessible form, this technique involves creating a document that tells the same story and presents the same information as the prerecorded video-only content."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G159.html"
          }
        >
          <video controls={true}>
            <source
              src={
                "http://introducinghtml5.com/examples/ch04/leverage-a-synergy.ogv"
              }
              type={'video/ogg; codecs="theora, vorbis"'}
            />
            <source
              src={
                "http://introducinghtml5.com/examples/ch04/leverage-a-synergy.mp4"
              }
              type={'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'}
            />
          </video>
        </TestCase>

        <TestCase
          title={"Embedded audio file is missing text alternative"}
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          level={Level.A}
          successCriterionNumber={"1.2.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          explanation={
            "In an audio-only presentation, information is presented in a variety of ways including dialogue and sounds (both natural and artificial). In order to present the same information in accessible form, this technique involves creating a document that tells the same story and presents the same information as the prerecorded audio-only content."
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/Techniques/general/G158.html"
          }
        >
          <audio
            controls={true}
            src={
              "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
            }
          >
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </TestCase>
      </Frame>
    </>
  );
};
