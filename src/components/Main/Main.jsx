import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import s from './Main.module.css';
// const Home = lazy(() => import('../../pages/Home/Home'));
const AboutUs = lazy(() => import('../../pages/AboutUs/AboutUs'));
const Classes = lazy(() => import('../../pages/Classes/Classes'));
const Contacts = lazy(() => import('../../pages/Contacts/Contacts'));
const News = lazy(() => import('../../pages/News/News'));
const Prices = lazy(() => import('../../pages/Prices/Prices'));
const SpecialEvents = lazy(() =>
  import('../../pages/SpecialEvents/SpecialEvents'),
);

export default function Main() {
  return (
    <main className={s.main}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/classes" element={<Classes />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/prices" element={<Prices />}></Route>
          <Route path="/events" element={<SpecialEvents />}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
