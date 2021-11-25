import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestSuite from "./components/TestSuite";
import { Inappropriate } from "./components/TitleTestCases/Inappropriate";
import { Empty } from "./components/TitleTestCases/Empty";
import { Missing } from "./components/TitleTestCases/Missing";
import { MissingHOne } from "./components/HeadingTestCases/MissingHOne";
import { KeyboardTrap } from "./components/KeyboardTestCases/KeyboardTrap";
import { DemoPage } from "./components/DemoPage/DemoPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TestSuite />} />
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
