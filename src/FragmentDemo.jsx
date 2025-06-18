import { Fragment } from "react";

function FragmentDemo() {
  return (
    <>
      <Data />
    </>
  );
}

function Data() {
  return (
    <Fragment>
      <h4>fragment example in js</h4>
      <h4>its a data component</h4>
    </Fragment>
  );
}

export default FragmentDemo;
