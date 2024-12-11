import React from "react";
import LogoHeader from "./LogoHeader";
import SpecialOffer from "./Specialoffer";
import Categories from "./Categories";
import TopStreetShops from "./TopStreetfood";
import FavoriteFoods from "./FavoriteFoods";
import FooterNavigation from "./FooterNavigation";

const HomePage = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <LogoHeader />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24"> {/* Add padding to account for the fixed header */}
        <SpecialOffer />
        <Categories />
        <TopStreetShops />
        <FavoriteFoods />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50">
        <FooterNavigation />
      </footer>
    </div>
  );
};

export default HomePage;
