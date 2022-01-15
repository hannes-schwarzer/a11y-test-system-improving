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
  id: string;
};

export const TestCase: FC<TestCaseProps> = ({
  title,
  successCriterionInWords,
  successCriterionNumber,
  linkToSuccessCriterion,
  linkToExplanation,
  explanation,
  level,
  id,
  children,
}) => {
  let nameOfLinkToExplanation: string = "";
  if (linkToExplanation) {
    nameOfLinkToExplanation = linkToExplanation.substring(
      linkToExplanation.length,
      linkToExplanation.length - 10
    );
  }
  return (
    <article className="testCase">
      <h2 className={"testCase__title"}>{title}</h2>
      <section className={"testCase__overview"}>
        <span>ID: {id}</span>
        <span>Level: {level}</span>
        <a
          className={"overview__link-to-success-criteria"}
          href={linkToSuccessCriterion}
          target={"_parent"}
        >
          Quickref.: {successCriterionNumber} {successCriterionInWords}
        </a>
      </section>
      <section className="testCase__description">
        {explanation && (
          <p className={"description__explanation"}>
            Explanation: {explanation}
          </p>
        )}
        {linkToExplanation && (
          <a href={linkToExplanation}>
            More infos: ..{nameOfLinkToExplanation}
          </a>
        )}
      </section>
      <section className="testCase__content">{children}</section>
    </article>
  );
};
