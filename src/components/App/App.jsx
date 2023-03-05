import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Loader from '../../common/Loader/Loader';
import { Suspense } from 'react';

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <Main />
      <Footer />
    </Suspense>
  );
}
