import React from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

const data = [
    { id: 1, name: "Inicio", url: "/" },
    { id: 2, name: "Acerca de", url: "/about" },
    { id: 3, name: "Categorias", subMenu: true },
    { id: 4, name: "Contacto", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Zapatos deportivos", doc_count: 8 },
    { id: 3, name: "Zapatos para correr", doc_count: 64 },
    { id: 4, name: "Zapatos de fútbol", doc_count: 107 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
    return (
        <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] bg-bgbody border-t text-primary">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li
                                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className="flex items-center justify-between">
                                    {item.name}
                                    <MdKeyboardArrowDown size={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className="bg-primary/[0.05] -mx-5 mt-4 -mb-4">
                                        {subMenuData.map((submenuItem) => {
                                            return (
                                                <Link
                                                    key={submenuItem.id}
                                                    href="/"
                                                    onClick={() => {
                                                        setShowCatMenu(false);
                                                        setMobileMenu(false);
                                                    }}
                                                >
                                                    <li className="py-4 px-8 border-t flex justify-between">
                                                        {submenuItem.name}
                                                        <span className="opacity-50 text-xs">
                                                            ({ submenuItem.doc_count })
                                                        </span>
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="py-4 px-5 border-b">
                                <Link
                                    href={item?.url}
                                    onClick={() => setMobileMenu(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default MenuMobile;
