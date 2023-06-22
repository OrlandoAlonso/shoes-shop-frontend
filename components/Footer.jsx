import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaServer } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full h-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-primary text-white static bottom-0">
            <section className="w-full lg:w-[70%] h-1/2 lg:h-full px-10 py-10 lg:px-5 lg:py-5">
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start font-semibold">
                    <p className="text-base sm:text-xl lg:text-xl 4xl:text-4xl">Copyright &copy; 2023 H Store.</p>
                    <p className="ml-2 text-base sm:text-xl lg:text-xl 4xl:text-4xl">Todos los derechos reservados</p>
                </div>
            </section>
            <section className="w-full lg:w-[30%] h-1/2 lg:h-full px-4 py-4">
                <div className="w-full h-full flex items-center justify-center lg:justify-end gap-4 pb-3 lg:pb-0 lg:pr-3">
                    <Link href={"https://www.facebook.com/henrymiguel.vegamena"} target="_blank">
                        <BsFacebook className="text-3xl 2xl:text-[30px] 4xl:text-[50px]" />
                    </Link>
                    <Link href={"https://www.instagram.com/henryvm01/"} target="_blank">
                        <AiFillInstagram className="text-[35px] 2xl:text-[40px] 4xl:text-[55px]" />
                    </Link>
                    <Link href={"https://github.com/OrlandoAlonso/shoes-shop-frontend"} target="_blank">
                        <MdDesignServices className="text-[35px] 2xl:text-[40px] 4xl:text-[55px]" title="Frontend Github" />
                    </Link>
                    <Link href={"/"} target="_blank">
                        <FaServer className="text-3xl 2xl:text-[30px] 4xl:text-[50px]" title="Backend Github" />
                    </Link>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
