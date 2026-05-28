import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreApproach from "@/components/pancore/PancoreApproach";

const OurApproachPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Our Approach"
                subtitle="Four strategic pillars that guide how we create value across the agricultural value chain."
                bgImage="/assets/img/pancore/approach-hero.jpg"
            />
            <PancoreApproach />
        </LayoutV5>
    );
};

export default OurApproachPage;
