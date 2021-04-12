import React, { lazy, Suspense } from "react";
import "./styles/index.scss";

const Footer = lazy(() => import("./components/Footer/Footer"))
const Header = lazy(() => import("./components/Header/Header"))
const Content = lazy(() => import("./containers/Content/Content"))

const App = () => {
  return (
    <Suspense fallback={() => <p>Loading...</p>}>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </Suspense>
  );
};

export default App;
