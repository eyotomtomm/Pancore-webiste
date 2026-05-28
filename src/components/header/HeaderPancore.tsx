"use client";
import Image from "next/image";
import Link from "next/link";
import PancoreMenu from "./PancoreMenu";
import useSubMenuToggle from "@/hooks/useSubMenuToggle";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";

const HeaderPancore = () => {
    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const isMenuSticky = useStickyMenu();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-default validnavs header-pancore-nav ${isMenuSticky ? "sticked" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                                onClick={openMenu}
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <Link className="navbar-brand" href="/">
                                <Image
                                    src="/assets/img/pancore-logo.png"
                                    className="logo"
                                    alt="Logo"
                                    width={790}
                                    height={240}
                                />
                            </Link>
                        </div>

                        <div
                            className={`collapse navbar-collapse ${isOpen ? "show collapse-mobile" : "collapse-mobile"}`}
                            id="navbar-menu"
                        >
                            <Image src="/assets/img/pancore-logo.png" alt="Logo" width={790} height={240} />
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                                onClick={closeMenu}
                            >
                                <i className="fa fa-times" />
                            </button>
                            <PancoreMenu navbarPlacement="navbar-right" toggleSubMenu={toggleSubMenu} />
                        </div>

                        <div className="pancore-attr-right">
                            <button className="pancore-search-btn" aria-label="Search">
                                <i className="fa fa-search" />
                            </button>
                            <Link href="/pancore-contact" className="pancore-cta-btn">
                                Contact Us <i className="fa fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                    <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu} />
                </nav>
            </header>
        </>
    );
};

export default HeaderPancore;
