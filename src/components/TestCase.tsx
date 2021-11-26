import "./TestCase.css";
import { FC } from "react";

type TestCaseProps = {
  testCaseTitle: string;
  testCategory: string;
  testCaseNumber: number;
  guideline?: string;
  linkToGuideline?: string;
  linkToMoreDetails?: string;
};
export const TestCase: FC<TestCaseProps> = ({
  testCaseTitle,
  testCategory,
  testCaseNumber,
  guideline,
  linkToGuideline,
  linkToMoreDetails,
  children,
}) => {
  return (
    <article className="testCase" id={`test_${testCaseNumber}_${testCategory}`}>
      <div className="testCase__title">
        <h3>{testCaseTitle}</h3>
        {linkToGuideline && guideline && (
          <a
            href={linkToGuideline}
            target={"_parent"}
            className={"testCase__link"}
          >
            Guideline violation: {guideline}
          </a>
        )}
      </div>
      <div className="testCase__content">{children}</div>
    </article>
  );
};
