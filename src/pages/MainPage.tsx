import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Contacts from "./Contacts";
import Privacy from "./Privacy";
import Terms from "./Terms";
import spainData from "../content/spain.json";
import { CookieBanner } from "../components/CookieBanner";

export type PageContent = typeof spainData.pages;

const MainPage: React.FC = () => {
  const pages = spainData.pages;

  return (
  <div className="flex flex-col min-h-screen w-full"> 
    <Header /> <main className="flex-1 w-full pt-16 px-4 sm:px-6 lg:px-20 bg-amber-50 flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Home data={pages.home} />} />
        <Route path="/about" element={<About data={pages.about} />} />
        <Route path="/gallery" element={<Gallery data={pages.gallery} />} />
        <Route path="/blog" element={<Blog data={pages.blog} />} />
        <Route path="/contacts" element={<Contacts data={pages.contacts} />} />
        <Route path="/privacy" element={<Privacy data={pages.privacy} />} />
        <Route path="/terms" element={<Terms data={pages.terms} />} />
      </Routes>
    </main>

    <CookieBanner />
    <Footer />
  </div>
  );
};

export default MainPage;
