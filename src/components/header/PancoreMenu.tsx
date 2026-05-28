import Link from 'next/link';

interface DataType {
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    navbarPlacement?: string;
}

const PancoreMenu = ({ toggleSubMenu, navbarPlacement }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} navbar-right`} data-in="fadeInDown" data-out="fadeOutUp">
                <li>
                    <Link href="/home-5">Home</Link>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>About Us</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/pancore-about">Who We Are</Link></li>
                        <li><Link href="/pancore-about">Our Vision</Link></li>
                        <li><Link href="/pancore-about">Our Mission</Link></li>
                        <li><Link href="/pancore-about">Our Values</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Our Business</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/our-business">Sourcing &amp; Origination</Link></li>
                        <li><Link href="/our-business">Processing &amp; Manufacturing</Link></li>
                        <li><Link href="/our-business">Trading &amp; Distribution</Link></li>
                        <li><Link href="/our-business">Branding &amp; Retail</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Products</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/our-commodities">Grains &amp; Staples</Link></li>
                        <li><Link href="/our-commodities">Edible Oils</Link></li>
                        <li><Link href="/our-commodities">Feed &amp; Ingredients</Link></li>
                        <li><Link href="/our-commodities">Soft Commodities</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Sustainability</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/sustainability">Our Commitment</Link></li>
                        <li><Link href="/sustainability">Empowering Smallholder Farmers</Link></li>
                        <li><Link href="/sustainability">Climate-Smart Agriculture</Link></li>
                        <li><Link href="/sustainability">Impact Vision</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/partnerships">Investors</Link>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Careers</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/pancore-careers">Join Pancore</Link></li>
                        <li><Link href="/pancore-careers">What We Offer</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/blog-standard">News &amp; Insights</Link>
                </li>
            </ul>
        </>
    );
};

export default PancoreMenu;
