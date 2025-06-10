import { useEffect } from "react";

function PropsEffectHandler({ data, count }) {
  const getcounter = () => {
    console.log("calls only once");
  };

  function dataFunction() {
    console.log("data get");
  }

  function sayHi() {
    console.log("hii");
  }
  useEffect(() => {
    getcounter();
  }, []); //run only once which ever props passes

  useEffect(() => {
    dataFunction();
  }, [data]); //run only when data props pass

  useEffect(() => {
    sayHi();
  }, [data, count]); // runs on both

  return <div></div>;
}

export default PropsEffectHandler;
