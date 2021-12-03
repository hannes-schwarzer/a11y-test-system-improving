import { useEffect } from "react";

export const EmptyPageTitle = () => {
  useEffect(() => {
    document.title = "";
  }, []);
  return (
    <>
      <p>This page has an inappropriate page title: i.e. empty page title.</p>
    </>
  );
};
