import { TestCase } from "../../TestCase";

export const MultimediaTestCases = () => {
  return (
    <>
      <TestCase
        testCaseTitle={"Embedded video file is missing text alternative"}
        testCategory={"multimedia"}
        testCaseNumber={65}
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
        testCaseTitle={"Flashing content doesn't have warning"}
        testCategory={"multimedia"}
        testCaseNumber={66}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4LQLvgXLguk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </TestCase>
      <TestCase
        testCaseTitle={"Embedded audio file is missing text alternative"}
        testCategory={"multimedia"}
        testCaseNumber={67}
      >
        <audio
          controls={true}
          src={
            "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-OGG-File.ogg"
          }
        ></audio>
      </TestCase>
    </>
  );
};
