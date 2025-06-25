import { lazy, Suspense, useState } from "react";
import LazyLoadUser from "./LazyLoadUser";
//const User = lazy(() => import("./LazyLoadUser"));

function LazyLoad() {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <h4>Lazy loading demo</h4>
      {/* {load ? (
        <Suspense fallback={<h2> Loading... </h2>}>
          <LazyLoadUser />
        </Suspense>
      ) : null} */}
      {load ? <LazyLoadUser /> : null}
      <button onClick={() => setLoad(true)}>Load User</button>
    </div>
  );
}

export default LazyLoad;
