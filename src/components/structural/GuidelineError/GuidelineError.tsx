import "./GuidelineError.css";
import { FC } from "react";

export enum Level {
  A = "A",
  AA = "AA",
  AAA = "AAA",
}

type TestCaseProps = {
  title: string;
  successCriterion: string;
  serial: number;
  guideline?: string;
  linkToGuideline?: string;
  linkToExplanation?: string;
  explanation?: string;
  level?: Level;
};
export const GuidelineError: FC<TestCaseProps> = ({
  title,
  successCriterion,
  serial,
  guideline,
  linkToGuideline,
  linkToExplanation,
  explanation,
  level,
  children,
}) => {
  return (
    <article className="testCase" id={`test_${serial}_${successCriterion}`}>
      <div className="testCase__title">
        <h3>{title}</h3>
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
