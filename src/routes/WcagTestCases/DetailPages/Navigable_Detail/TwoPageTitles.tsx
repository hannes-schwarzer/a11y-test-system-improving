import { useEffect } from "react";

export const TwoPageTitles = () => {
  useEffect(() => {
    document.title = "";
  }, []);
  return (
    <>
      <title>Two page titles</title>
      <p>
        This page has an two page titles: in the head section the page title is
        empty. But in the body section it is set.
      </p>
    </>
  );
};
