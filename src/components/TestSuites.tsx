import { Link } from "react-router-dom";
import "./TestCases.css";
export const TestSuites = () => {
  return (
    <>
      <header id={"globalHeader"}>A11Y TEST SYSTEM</header>
      <section>
        <h1>Choose test suite</h1>
        <p>
          <Link to={"/gds-test-suite"}>GDS Test Suite</Link>
        </p>
        <p>
          <Link to={"/wcag-test-suite"}>WCAG Test Suite</Link>
        </p>
      </section>
    </>
  );
};
