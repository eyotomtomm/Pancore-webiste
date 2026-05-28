import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreCareers from "@/components/pancore/PancoreCareers";

const PancoreCareersPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Careers"
                subtitle="Join our team of ambitious, purpose-driven professionals making a real difference in African agriculture."
                bgImage="/assets/img/pancore/careers-hero.jpg"
            />
            <PancoreCareers />
        </LayoutV5>
    );
};

export default PancoreCareersPage;
