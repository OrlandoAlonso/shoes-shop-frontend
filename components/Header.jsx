import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import Link from "next/link";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("-translate-y-[80px]");
            } else {
                setShow("shadow-sm");
            }
        } else {
            setShow("translate-y-0");
        }

        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`w-full h-[50px] md:h-20 bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
        >
            <Wrapper className="h-[60px] flex items-center justify-between">
                <div className="w-8 md:w-12 h-8 md:h-12 rounded-full hover:bg-primary/[0.05] flex md:hidden justify-center items-center cursor-pointer -mr-2">
                    {mobileMenu ? (
                        <VscChromeClose
                            className="text-lg"
                            onClick={() => setMobileMenu(false)}
                        />
                    ) : (
                        <BiMenuAltLeft
                            className="text-2xl"
                            onClick={() => setMobileMenu(true)}
                        />
                    )}
                </div>

                <Link href="/">
                    <img
                        src="/logo.PNG"
                        alt="Logo h store"
                        className="w-32 md:w-36"
                    />
                </Link>

                <Menu
                    showCatMenu={showCatMenu}
                    setShowCatMenu={setShowCatMenu}
                />

                {mobileMenu && (
                    <MenuMobile
                        showCatMenu={showCatMenu}
                        setShowCatMenu={setShowCatMenu}
                        setMobileMenu={setMobileMenu}
                    />
                )}

                <div className="flex items-center gap-2 text-primary">
                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-primary/[0.05] cursor-pointer relative">
                        <IoMdHeartEmpty className="text-[25px] md:text-[30px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-error absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            10
                        </div>
                    </div>

                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-primary/[0.05] cursor-pointer relative">
                        <BsCart className="text-[25px] md:text-[30px]" />
                        <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-error absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                            10
                        </div>
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Header;
