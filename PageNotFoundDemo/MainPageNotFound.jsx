import { Navigate, Route, Routes } from "react-router";
import PageNotFound from "./PageNotFound";
function MainPageNotFound() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/about" element={<h2>About</h2>} />

        {/* <Route path="/*" element={<PageNotFound />} /> */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default MainPageNotFound;
