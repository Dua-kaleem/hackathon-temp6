import { FilterBar } from "@/components/fiterby";
import { HeroHeader } from "@/components/hero-header";
import Products from "@/components/ProductsSection"; // Importing Products component
import React from "react";
import Image from "next/image";

const ShopPage = () => {
  return (
    <div>
      {/* Hero Header */}
      <HeroHeader
        backgroundImage="/assets/backgroundimage1.png" // Updated the path
        breadcrumbItems={[
          { href: "/", label: "home" },
          { href: "/shop", label: "Shop" },
        ]}
        title="Shop"
      />

      {/* Filter Bar */}
      <FilterBar />

      {/* Products Section */}
      <div className="px-[30px] md:px-[60px] pb-[48px]">
       
        <Products /> {/* Using the Products component here */}
      </div>
      <div className="w-full mt-7">
            <Image
              src="/assets/fr.png"
              alt="Promo"
              width={1440}
              height={270}
              className=" w-full shadow-lg"
            />
          </div>
    </div>
  );
};

export default ShopPage;

