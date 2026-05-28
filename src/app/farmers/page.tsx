import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import TeamV3 from "@/components/team/TeamV3";

export const metadata = {
    title: "Pancore - Farmers"
};

const FarmersPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Farm Members" breadCrumb="Farmers" />
                <TeamV3 />
            </LayoutV1>
        </>
    );
};

export default FarmersPage;