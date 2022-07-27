import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineWechat } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav>
      <ul className="top-navbar flex list-none">
        <li className="navbar-list">
          <a className="item" href="">
            <AiFillPhone />
            507 797 83 14
          </a>
        </li>
        <li className="navbar-list">
          <a className="item" href="">
            <AiOutlineMail />
            kirva@gmail.com
          </a>
        </li>
        <li className="navbar-list">
          <a className="item" href="">
            <Image
              src={Logo}
              alt="Picture of the author"
              width={200}
              height={200}
            />
          </a>
        </li>
        <li className="navbar-list">
          <input type="text" placeholder="Arama Yap" />
        </li>
        <li className="navbar-list">
          <a href="">
            <AiOutlineUser />
          </a>
        </li>
        <li className="navbar-list">
          <a href="">
            <AiOutlineShoppingCart />
          </a>
        </li>
        <li className="navbar-list">
          <a href="">
            <AiOutlineHeart />
          </a>
        </li>
        <li className="navbar-list">
          <a href="">
            <AiOutlineWechat />
          </a>
        </li>
        <li className="navbar-list">
          <a href="">
            <AiOutlinePlusCircle />
          </a>
        </li>
      </ul>
      <ul className="navbar flex list-none">
        <li className="menu">
          <a href="">Teknoloji</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Spor Malzemeleri</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Kutu Oyunları</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Giyim</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Enstürman</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Stüdyo Ekipmanları</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Hırdavat</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Outdoor</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Düğün Gelinlik</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="menu">
          <a href="">Emlak</a>
          <div className="open-menu">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
