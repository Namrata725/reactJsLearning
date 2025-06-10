import { useEffect } from "react";

function LifeCycleDemoHandle({ count, data }) {
  const getCount = () => {
    console.log("call only once");
  };

  function dataFunction() {
    console.log("data get");
  }

  useEffect(() => {
    getCount(); // this code will run mount
  }, []); // black array

  useEffect(() => {
    dataFunction(); // this will update of state props
  }, [data]); // pass state

  useEffect(() => {
    return () => {
      //return will unmount lifecycle
      console.log("unmount phase");
    };
  }, []);
  return (
    <div>
      <h4>{count}</h4>
      <h4>{data}</h4>
    </div>
  );
}

export default LifeCycleDemoHandle;
