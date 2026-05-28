import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreHero from "@/components/pancore/PancoreHero";
import PancoreOverview from "@/components/pancore/PancoreOverview";
import PancoreBusinessDivisions from "@/components/pancore/PancoreBusinessDivisions";
import PancorePurpose from "@/components/pancore/PancorePurpose";
import PancoreNews from "@/components/pancore/PancoreNews";

const Home5 = () => {
    return (
        <LayoutV5>
            <PancoreHero />
            <PancoreOverview />
            <PancoreBusinessDivisions />
            <PancorePurpose />
            <PancoreNews />
        </LayoutV5>
    );
};

export default Home5;
