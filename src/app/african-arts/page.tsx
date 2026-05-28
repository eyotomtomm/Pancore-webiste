import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreArts from "@/components/pancore/PancoreArts";

const AfricanArtsPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="African Arts Initiative"
                subtitle="Celebrating and supporting contemporary African creativity through our arts programme."
                bgImage="/assets/img/pancore/arts-hero.jpg"
            />
            <PancoreArts />
        </LayoutV5>
    );
};

export default AfricanArtsPage;
