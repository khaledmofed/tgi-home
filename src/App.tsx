import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { CookieConsent } from "./components/layout/CookieConsent";
import { Seo } from "./components/ui/Seo";
import { AppRouter } from "./routes/AppRouter";
import { ScrollToTop } from "./routes/ScrollToTop";

function App() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <a href="#main-content" className="sr-only">
        Skip to content
      </a>
      <div className="page-top">
        <Header />
        <main id="main-content">
          <AppRouter />
        </main>
      </div>
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;