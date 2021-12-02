import "./GuidelineError.css";
import { FC } from "react";

export enum Level {
  A = "A",
  AA = "AA",
  AAA = "AAA",
}

type TestCaseProps = {
  title: string;
  serial: number;
  level: Level;
  successCriterionInWords: string;
  successCriterionNumber: string;
  linkToSuccessCriterion: string;
  explanation?: string;
  linkToExplanation?: string;
};
export const GuidelineError: FC<TestCaseProps> = ({
  title,
  successCriterionInWords,
  serial,
  successCriterionNumber,
  linkToSuccessCriterion,
  linkToExplanation,
  explanation,
  level,
  children,
}) => {
  return (
    <article
      className="testCase"
      id={`test_${serial}_${successCriterionInWords}`}
    >
      <div className="testCase__description">
        <div className={"description__titleLine"}>
          <h3 className={"description__title"}>{title}</h3>
          <p className={"description__level"}>Level: {level}</p>
          <a
            className={"testCase__link"}
            href={linkToSuccessCriterion}
            target={"_parent"}
          >
            {successCriterionNumber} {successCriterionInWords}
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
