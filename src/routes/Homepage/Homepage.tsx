import { Backbone } from "../../components/Backbone/Backbone";

interface Props {
  pageTitle: string;
}

export const Homepage = (homepageProps: Props) => {
  return (
    <>
      <Backbone pageTitle={"A11Y TEST SYSTEM"}>
        <p>TBD: System description...</p>
      </Backbone>
    </>
  );
};
