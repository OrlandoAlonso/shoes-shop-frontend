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

const Menu = ({ showCatMenu, setShowCatMenu }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-primary">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? (
                            <li className="cursor-pointer flex items-center gap-2 relative"
                                onMouseEnter={() => setShowCatMenu(true)}
                                onMouseLeave={() => setShowCatMenu(false)}
                            >
                                {item.name}
                                <MdKeyboardArrowDown size={14} />

                                {showCatMenu && (
                                    <ul className="bg-bgbody absolute top-6 left-0 min-w-[250px] px-1 py-1 text-primary shadow-lg shadow-shadowbox rounded-md">
                                        {subMenuData.map((submenuItem) => {
                                            return (
                                                <Link key={submenuItem.id} href="/" onClick={() => setShowCatMenu(false)}>
                                                    <li className="h-12 flex items-center justify-between px-3 hover:bg-primary/[0.03] rounded-md text-sm">
                                                        {submenuItem.name}
                                                        <span className="opacity-50 text-xs">
                                                            ({submenuItem.doc_count})
                                                        </span>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li className="cursor-pointer">
                                <Link href={item.url}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    );
};

export default Menu;
