import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreBusinessFull from "@/components/pancore/PancoreBusinessFull";

const OurBusinessPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Our Business"
                subtitle="A fully integrated model from farm to market, across Africa and beyond."
                bgImage="/assets/img/pancore/business-hero.jpg"
            />
            <PancoreBusinessFull />
        </LayoutV5>
    );
};

export default OurBusinessPage;
