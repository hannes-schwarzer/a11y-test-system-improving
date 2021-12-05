import "./ChangedMeaningThroughFormatting.css";
import { useEffect } from "react";
export const ChangedMeaningThroughFormatting = () => {
  useEffect(() => {
    document.title = "Changed content meaning";
  });

  return (
    <>
      <div className="cmtf__box">
        <span className="cmtf__menu1">Products</span>
        <span className="cmtf__menu2">Locations</span>
        <span className="cmtf__item1">Telephones</span>
        <span className="cmtf__item2">Computers</span>
        <span className="cmtf__item3">Portable MP3 Players</span>
        <span className="cmtf__item5">Wisconsin</span>
        <span className="cmtf__item4">Idaho</span>
      </div>
    </>
  );
};
