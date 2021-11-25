import "./TestCase.css";
import { FC } from "react";

type TestCaseProps = {
  testCaseTitle: string;
  testCategory: string;
  testCaseNumber: number;
  guidelineViolation?: string;
};
export const TestCase: FC<TestCaseProps> = ({
  testCaseTitle,
  testCategory,
  testCaseNumber,
  guidelineViolation,
  children,
}) => {
  return (
    <div className="testCase" id={`test_${testCaseNumber}_${testCategory}`}>
      <h3 className="testCase__title">{testCaseTitle}</h3>
      {guidelineViolation && (
        <p className="testCase__guideline">{guidelineViolation}</p>
      )}
      <div className="testCase__content">{children}</div>
    </div>
  );
};
