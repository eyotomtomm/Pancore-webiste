import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancorePartnerships from "@/components/pancore/PancorePartnerships";

const PartnershipsPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Partnerships"
                subtitle="Collaborating with a diverse range of stakeholders to create shared value across the agricultural value chain."
                bgImage="/assets/img/pancore/partnerships-hero.jpg"
            />
            <PancorePartnerships />
        </LayoutV5>
    );
};

export default PartnershipsPage;
