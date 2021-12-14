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
  id?: string;
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
  let linkToExplanationName;
  if (linkToExplanation) {
    linkToExplanationName = linkToExplanation!.substring(
      linkToExplanation!.length,
      linkToExplanation!.length - 10
    );
  }
  return (
    <article className="testCase">
      <header className={"title-line"}>
        <h2 className={"title-line__title"}>{title}</h2>
        <p className={"title-line__level"}>Level: {level}</p>
        <a
          className={"title-line__link-to-success-criteria"}
          href={linkToSuccessCriterion}
          target={"_parent"}
        >
          Quickref.: {successCriterionNumber} {successCriterionInWords}
        </a>
      </header>
      <section className="description">
        {explanation && (
          <p className={"description__explanation"}>{explanation}</p>
        )}
        <p className={"description__bottom-line"}>
          {id && <span>ID: {id}</span>}
          {linkToExplanation && (
            <span className={"description__explanation-link"}>
              <a href={linkToExplanation}>
                Further error explanantion: ..{linkToExplanationName}
              </a>
            </span>
          )}
        </p>
      </section>
      <section className="testCase__content">{children}</section>
    </article>
  );
};
