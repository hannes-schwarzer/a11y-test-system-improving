import "../Home.css";
import { KeyboardTestCases } from "./KeyboardTestCases/KeyboardTestCases";

function GDSTestSuite() {
  return (
    <>
      <header id={"globalHeader"}>GDS TEST SUITE</header>
      <main id={"main"}>
        {/*TODO Concertina doesn't function*/}
        {/*TODO Lightbox doesn't function*/}
        <KeyboardTestCases />
      </main>
    </>
  );
}

export default GDSTestSuite;
