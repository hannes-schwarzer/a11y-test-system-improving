import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import BBC from "../../../../assets/bbc-blocks-dark.png";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const AudioOnlyVideoOnlyPrerecorded = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'empty placeholder "": empty placeholder "" that is put into the \'text alternative\' location on images or pictures.'
          }
        >
          <img src={BBC} alt={""} />
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'placeholder text such as "spacer": placeholder text such as "spacer" or "image" or "picture" etc that are put into the \'text alternative\' location on images or pictures.'
          }
        >
          <img src={BBC} alt={"spacer"} />
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'programming references: programming references that do not convey the information or function of the non-text content such as "picture 1", "picture 2" or "0001", "0002" or "Intro#1", "Intro#2".'
          }
        >
          <img src={BBC} alt={"picture 1"} />
        </GuidelineError>

        <GuidelineError
          title={
            "F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)"
          }
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          serial={1}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
          successCriterionNumber={"1.2.1"}
          level={Level.A}
          explanation={
            'filenames: filenames that are not valid text alternatives in their own right such as "Oct.jpg" or "Chart.jpg" or "sales\\\\oct\\\\top3.jpg"'
          }
        >
          <img src={BBC} alt={"Oct.jpg"} />
        </GuidelineError>

        <GuidelineError
          title={"Embedded video file is missing text alternative"}
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          serial={2}
          level={Level.A}
          successCriterionNumber={"1.2.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
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
        </GuidelineError>

        <GuidelineError
          title={"Embedded audio file is missing text alternative"}
          successCriterionInWords={"Audio-only and Video-only (Prerecorded)"}
          serial={3}
          level={Level.A}
          successCriterionNumber={"1.2.1"}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
          }
        >
          <audio
            controls={true}
            src={
              "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
            }
          ></audio>
        </GuidelineError>
      </Frame>
    </>
  );
};
