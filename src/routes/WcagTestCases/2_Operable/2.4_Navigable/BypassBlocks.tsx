import {
  GuidelineError,
  Level,
} from "../../../../components/GuidelineError/GuidelineError";
import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const BypassBlocks = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <GuidelineError
          title={"iframe is missing a title attribute"}
          successCriterion={"2.4.1 Bypass Blocks"}
          serial={1}
          linkToGuideline={
            "https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks"
          }
          linkToExplanation={
            "https://equalizedigital.com/accessibility-checker/iframe-missing-title/"
          }
          guideline={"2.4.1"}
          level={Level.A}
        >
          <iframe height={100} src={"/demo-page"} width={300}></iframe>
        </GuidelineError>
      </Frame>
    </>
  );
};
