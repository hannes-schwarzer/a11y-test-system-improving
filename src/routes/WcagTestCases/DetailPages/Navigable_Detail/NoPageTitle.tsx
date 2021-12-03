import { useEffect } from "react";

export const NoPageTitle = () => {
  useEffect(() => {
    document.getElementsByTagName("title")[0].remove();
  }, []);
  return (
    <>
      <p>This page has no page title.</p>
      <p>
        Further information to this problem can be found here:{" "}
        <a
          href={
            "https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/"
          }
        >
          Link to WAI explanation
        </a>
      </p>
    </>
  );
};
