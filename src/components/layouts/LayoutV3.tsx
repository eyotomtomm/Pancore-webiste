import FooterV1 from "../footer/FooterV1";
import HeaderPancore from "../header/HeaderPancore";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV3 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderPancore />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV3;
