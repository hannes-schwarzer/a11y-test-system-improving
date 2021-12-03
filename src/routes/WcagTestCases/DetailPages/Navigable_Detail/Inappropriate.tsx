import { useEffect } from "react";

export const Inappropriate = () => {
  useEffect(() => {
    document.title = "tbd: Insert Page Title";
  });
  return (
    <>
      <p>This page has an inappropriate page title.</p>
    </>
  );
};
