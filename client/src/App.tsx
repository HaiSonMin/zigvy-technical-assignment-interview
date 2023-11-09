import { Routes, Route, useLocation } from 'react-router-dom';
import { PublicLayout } from './layouts';
import { PATH_CONSTANT } from './constants';
import HomePageLayout from './layouts/pages/HomePageLayout';
import PostDetailPage from './pages/PostDetailPage';
import { useEffect } from 'react';

export default function App() {
  const pathName = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, [pathName]);

  return (
    <Routes>
      <Route path={'/'} element={<PublicLayout />}>
        <Route path={PATH_CONSTANT.home} element={<HomePageLayout />} />
        <Route
          path={`${PATH_CONSTANT.postDetail}/:postId`}
          element={<PostDetailPage />}
        />
      </Route>
    </Routes>
  );
}
