import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreCommodities from "@/components/pancore/PancoreCommodities";

const OurCommoditiesPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Our Commodities"
                subtitle="A diverse portfolio of agricultural commodities sourced, processed, and traded across Africa."
                bgImage="/assets/img/pancore/commodities-hero.jpg"
            />
            <PancoreCommodities />
        </LayoutV5>
    );
};

export default OurCommoditiesPage;
