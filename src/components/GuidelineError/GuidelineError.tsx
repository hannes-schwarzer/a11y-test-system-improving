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
      <div className="testCase__description">
        <div className={"description__titleLine"}>
          <h3 className={"description__title"}>{title}</h3>
          <p className={"description__level"}>Level: {level}</p>
          <a
            className={"testCase__link"}
            href={linkToGuideline}
            target={"_parent"}
          >
            {guideline} {successCriterion}
          </a>
        </div>
        {explanation && <p>{explanation}</p>}
        {linkToExplanation && (
          <p className={"description__explanationLink"}>
            <a href={linkToExplanation}>Link to explanation</a>
          </p>
        )}
      </div>
      <div className="testCase__content">{children}</div>
    </article>
  );
};
