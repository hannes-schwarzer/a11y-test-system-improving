export const MissingHOne = () => {
  document.documentElement.title = "Missing h1";
  document.documentElement.lang = "en";
  return (
    <>
      <h2>This is h2</h2>
      <h3>This is h3</h3>
      <h4>This is h4 and h1 is still missing</h4>
    </>
  );
};
