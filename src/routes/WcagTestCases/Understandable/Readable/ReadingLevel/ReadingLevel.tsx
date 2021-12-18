import { TestCase, Level } from "../../../../../components/TestCase/TestCase";
import { Frame } from "../../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const ReadingLevel = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <TestCase
          title={"Plain language is not used"}
          successCriterionInWords={"Reading Level"}
          successCriterionNumber={"3.1.5"}
          level={Level.AAA}
          linkToSuccessCriterion={
            "https://www.w3.org/WAI/WCAG21/quickref/#reading-level"
          }
          linkToExplanation={
            "https://www.w3.org/WAI/WCAG21/quickref/#reading-level"
          }
          explanation={
            "When text requires reading ability more advanced than the lower secondary education level after removal of proper names and titles, supplemental content, or a version that does not require reading ability more advanced than the lower secondary education level, is available."
          }
          id={"3.1.5_1"}
        >
          Title I of the CARE Act creates a program of formula and supplemental
          competitive grants to help metropolitan areas with 2,000 or more
          reported AIDS cases meet emergency care needs of low-income HIV
          patients. Title II of the Ryan White Act provides formula grants to
          States and territories for operation of HIV service consortia in the
          localities most affected by the epidemic, provision of home and
          community -based care, continuation of insurance coverage for persons
          with HIV infection, and treatments that prolong life and prevent
          serious deterioration of health. Up to 10 percent of the funds for
          this program can be used to support Special Projects of National
          Significance.
        </TestCase>
      </Frame>
    </>
  );
};
