import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <section>
        <h1>Choose test suite</h1>
        <ul>
          <li>
            <p>All GDS listed error cases.</p>
            <Link to={"/gds"}>GDS Test Suite</Link>
          </li>
          <li>
            <p>All WCAG error cases combined.</p>
            <Link to={"/wcag"}>WCAG Test Suite</Link>
          </li>
          <li>
            <p>Error cases in conflict with guideline 1. Perceivable</p>
            <Link to={"/wcag/perceivable"}>WCAG - Perceivable</Link>
          </li>
          <li>
            <p>Error cases in conflict with guideline 2. Operable</p>
            <Link to={"/wcag/operable"}>WCAG - Operable</Link>
          </li>
          <li>
            <p>Error cases in conflict with guideline 3. Understandable</p>
            <Link to={"/wcag/understandable"}>WCAG - Understandable</Link>
          </li>
          <li>
            <p>Error cases in conflict with guideline 4. Robust</p>
            <Link to={"/wcag/robust"}>WCAG - Robust</Link>
          </li>
        </ul>
      </section>
    </>
  );
};
