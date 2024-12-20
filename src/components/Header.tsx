"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Header Container */}
      <div className="w-full h-[70px] md:h-[100px] flex items-center bg-[#FFFFFF] px-4 md:px-20">
        <div className="w-full flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src="/assets/logo1.png" alt="logo" width={50} height={32} />
            <h2 className="font-montserrat text-xl md:text-2xl font-bold">Furniro</h2>
          </div>

          {/* Links for All Screens */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-poppins text-[16px] font-medium">
              <Link href="/">
                <li className="transition-all duration-500 hover:border-b-2 hover:border-[#7D8184] cursor-pointer">Home</li>
              </Link>
              <Link href="/Shop">
                <li className="transition-all duration-500 hover:border-b-2 hover:border-[#686d70] cursor-pointer">Shop</li>
              </Link>
              <Link href="/blog">
                <li className="transition-all duration-500 hover:border-b-2 hover:border-[#585b5d] cursor-pointer">Blog</li>
              </Link>
              <Link href="/contact">
                <li className="transition-all duration-500 hover:border-b-2 hover:border-[#7D8184] cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>

          {/* Icons for All Screens */}
          <div className="flex items-center space-x-6">
            <Link href="/profile">
              <span className="text-2xl text-gray-700 hover:text-gray-500 cursor-pointer"><FaRegUser  /></span>
            </Link>
            <Link href="/search">
            <span className="text-2xl text-gray-700 hover:text-gray-500 cursor-pointer"> <AiOutlineSearch  /></span>
             
            </Link>
            <Link href="/wishlist">
            <span className="text-2xl text-gray-700 hover:text-gray-500 cursor-pointer"> <FaRegHeart  /></span>
             
            </Link>
            <Link href="/cart">
            <span className="text-2xl text-gray-700 hover:text-gray-500 cursor-pointer"><AiOutlineShoppingCart  /></span>
              
            </Link>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 hover:text-gray-500"
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-[250px] h-full bg-white shadow-lg z-50 p-4 flex flex-col">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-700 hover:text-gray-500 mb-6 self-end"
          >
            ✕
          </button>
          <ul className="space-y-4 font-poppins text-[16px] font-medium">
            <Link href="/">
              <li
                className="transition-all duration-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </li>
            </Link>
            <Link href="/Shop">
              <li
                className="transition-all duration-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </li>
            </Link>
            <Link href="/blog">
              <li
                className="transition-all duration-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </li>
            </Link>
            <Link href="/Contact">
              <li
                className="transition-all duration-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
