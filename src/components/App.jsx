import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../redux/selectors.js";
import Loader from "./Loader/Loader";
import Error from "./Error/Error";

import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const Catalog = lazy(() => import("../pages/Catalog.jsx"));
const Favorites = lazy(() => import("../pages/Favorites.jsx"));
import SharedLayout from "./SharedLayout/SharedLayout";

export default function App() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {loading && <Loader />}
      {error && <Error />}
    </div>
  );
}
