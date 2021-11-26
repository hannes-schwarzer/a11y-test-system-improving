import { BrowserRouter, Route, Routes } from "react-router-dom";
import GDSTestSuite from "./components/gdsTests/GDSTestSuite";
import { Inappropriate } from "./components/gdsTests/TitleTestCases/Inappropriate";
import { Empty } from "./components/gdsTests/TitleTestCases/Empty";
import { Missing } from "./components/gdsTests/TitleTestCases/Missing";
import { MissingHOne } from "./components/gdsTests/HeadingTestCases/MissingHOne";
import { KeyboardTrap } from "./components/gdsTests/KeyboardTestCases/KeyboardTrap";
import { DemoPage } from "./components/gdsTests/DemoPage/DemoPage";
import { TestSuites } from "./components/TestSuites";
import { WCAGTestSuite } from "./components/wcagTests/WCAGTestSuite";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TestSuites />} />
        <Route path={"/gds-test-suite"} element={<GDSTestSuite />} />
        <Route path={"/wcag-test-suite"} element={<WCAGTestSuite />} />
        <Route path={"/page-title/inappropriate"} element={<Inappropriate />} />
        <Route path={"/page-title/empty"} element={<Empty />} />
        <Route path={"/page-title/missing"} element={<Missing />} />
        <Route path={"/headings/missingh1"} element={<MissingHOne />} />
        <Route path={"/keyboard/trap"} element={<KeyboardTrap />} />
        <Route path={"/demo-page"} element={<DemoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
