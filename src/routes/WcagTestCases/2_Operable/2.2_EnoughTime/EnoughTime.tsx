import { Frame } from "../../../../components/Frame/Frame";

interface Props {
  pageTitle: string;
}

export const EnoughTime = (props: Props) => {
  return (
    <>
      <Frame pageTitle={props.pageTitle}>
        <p>TODO: Overview over number of test cases</p>
      </Frame>
    </>
  );
};
