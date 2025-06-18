import { useState } from "react";

const useToggleHook = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  function toggleValue(val) {
    if (typeof val != "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }
  return [value, toggleValue];
};

export default useToggleHook;
