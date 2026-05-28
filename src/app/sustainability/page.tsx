import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreSustainability from "@/components/pancore/PancoreSustainability";

const SustainabilityPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Sustainability"
                subtitle="Our commitment to building a food system that is good for people, planet, and profit."
                bgImage="/assets/img/pancore/sustainability-hero.jpg"
            />
            <PancoreSustainability />
        </LayoutV5>
    );
};

export default SustainabilityPage;
