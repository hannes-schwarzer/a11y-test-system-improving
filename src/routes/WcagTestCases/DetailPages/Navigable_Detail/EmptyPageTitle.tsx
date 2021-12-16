import { useEffect } from "react";

export const EmptyPageTitle = () => {
  useEffect(() => {
    //INFO: empty <Helmet><title></title></Helmet> does not work. It fixes the Problem by itself.
    document.title = "";
  }, []);
  return (
    <>
      <h1>Empty Page Title</h1>
      <p>This page has an inappropriate page title: i.e. empty page title.</p>
    </>
  );
};
