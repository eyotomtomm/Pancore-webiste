import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreAbout from "@/components/pancore/PancoreAbout";
import PancoreValues from "@/components/pancore/PancoreValues";

const PancoreAboutPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="About Us"
                subtitle="Who we are, what drives us, and the values that shape everything we do."
                bgImage="/assets/img/pancore/about-hero.jpg"
            />
            <PancoreAbout />
            <PancoreValues />
        </LayoutV5>
    );
};

export default PancoreAboutPage;
