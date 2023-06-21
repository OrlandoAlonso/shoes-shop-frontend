import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaServer } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full h-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between bg-primary text-white">
            <section className="w-full lg:w-3/5 h-1/2 lg:h-full px-10 py-10 lg:px-5 lg:py-5">
                <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-start font-semibold">
                    <p className="text-xl lg:text-base">Copyright &copy; 2023 H Store.</p>
                    <p className="ml-2 text-xl lg:text-base">Todos los derechos reservados</p>
                </div>
            </section>
            <section className="w-full lg:w-2/5 h-1/2 lg:h-full px-4 py-4">
                <div className="w-full h-full flex items-center justify-center lg:justify-end gap-4 pb-3 lg:pb-0 lg:pr-3">
                    <Link href={"https://www.facebook.com/henrymiguel.vegamena"} target="_blank">
                        <BsFacebook size={30} />
                    </Link>
                    <Link href={"https://www.instagram.com/henryvm01/"} target="_blank">
                        <AiFillInstagram size={35} />
                    </Link>
                    <Link href={"https://github.com/OrlandoAlonso/shoes-shop-frontend"} target="_blank">
                        <MdDesignServices size={30} title="Frontend Github" />
                    </Link>
                    <Link href={"/"} target="_blank">
                        <FaServer size={30} title="Backend Github" />
                    </Link>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
