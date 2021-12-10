import "./TestCase.css";
import { FC } from "react";

export enum Level {
  A = "A",
  AA = "AA",
  AAA = "AAA",
}

type TestCaseProps = {
  title: string;
  level: Level;
  successCriterionInWords: string;
  successCriterionNumber: string;
  linkToSuccessCriterion: string;
  explanation?: string;
  linkToExplanation?: string;
};
export const TestCase: FC<TestCaseProps> = ({
  title,
  successCriterionInWords,
  successCriterionNumber,
  linkToSuccessCriterion,
  linkToExplanation,
  explanation,
  level,
  children,
}) => {
  let linkToExplanationName;
  if (linkToExplanation) {
    linkToExplanationName = linkToExplanation!.substring(
      linkToExplanation!.length,
      linkToExplanation!.length - 10
    );
  }
  return (
    <article className="testCase">
      <div className="testCase__description">
        <div className={"description__title-line"}>
          <h2 className={"description__title"}>{title}</h2>
          <p className={"description__level"}>Level: {level}</p>
          <a
            className={"testCase__link"}
            href={linkToSuccessCriterion}
            target={"_parent"}
          >
            Quickref.: {successCriterionNumber} {successCriterionInWords}
          </a>
        </div>
        {explanation && (
          <p className={"description__explanation"}>{explanation}</p>
        )}
        {linkToExplanation && (
          <p className={"description__explanation-link"}>
            <a href={linkToExplanation}>
              Further infos on error: ..{linkToExplanationName}
            </a>
          </p>
        )}
      </div>
      <div className="testCase__content">{children}</div>
    </article>
  );
};
