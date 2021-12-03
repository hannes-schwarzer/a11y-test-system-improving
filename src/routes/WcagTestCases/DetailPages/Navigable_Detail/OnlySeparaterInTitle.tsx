import { useEffect } from "react";

export const OnlySeparaterInTitle = () => {
  useEffect(() => {
    document.title = " ";
  }, []);
  return (
    <>
      <p>This page only has a separater as page title</p>
    </>
  );
};
