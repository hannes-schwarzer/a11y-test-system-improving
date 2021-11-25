import "./TestCase.css";
import { FC } from "react";

type TestCaseProps = {
  testCaseTitle: string;
  testCategory: string;
  testCaseNumber: number;
};
export const TestCase: FC<TestCaseProps> = ({
  testCaseTitle,
  testCategory,
  testCaseNumber,
  children,
}) => {
  return (
    <div className="testCase" id={`test_${testCaseNumber}_${testCategory}`}>
      <h3 className="testCase__Title">{testCaseTitle}</h3>
      <div className="testCase__Content">{children}</div>
    </div>
  );
};
