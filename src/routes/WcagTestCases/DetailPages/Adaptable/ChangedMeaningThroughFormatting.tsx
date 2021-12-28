import "./ChangedMeaningThroughFormatting.css";
import { Helmet } from "react-helmet";
export const ChangedMeaningThroughFormatting = () => {
  return (
    <>
      <Helmet>
        <title>Changed meaning through formatting</title>
      </Helmet>
      <main className="cmtf__box">
        <span className="cmtf__menu1">Products</span>
        <span className="cmtf__menu2">Locations</span>
        <span className="cmtf__item1">Telephones</span>
        <span className="cmtf__item2">Computers</span>
        <span className="cmtf__item3">Portable MP3 Players</span>
        <span className="cmtf__item5">Wisconsin</span>
        <span className="cmtf__item4">Idaho</span>
      </main>
    </>
  );
};
