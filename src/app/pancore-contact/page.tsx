import LayoutV5 from "@/components/layouts/LayoutV5";
import PancoreBreadCrumb from "@/components/pancore/PancoreBreadCrumb";
import PancoreContact from "@/components/pancore/PancoreContact";

const PancoreContactPage = () => {
    return (
        <LayoutV5>
            <PancoreBreadCrumb
                title="Contact Us"
                subtitle="Whether you are a farmer, a partner, or simply interested in what we do — reach out."
                bgImage="/assets/img/pancore/contact-hero.jpg"
            />
            <PancoreContact />
        </LayoutV5>
    );
};

export default PancoreContactPage;
