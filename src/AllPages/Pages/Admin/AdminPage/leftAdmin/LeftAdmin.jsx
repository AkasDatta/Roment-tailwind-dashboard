import companyLogo from "../../../../../assets/CompanyLogo.png";
import icon1 from "../../../../../assets/adminPage/Icon.png";
import icon2 from "../../../../../assets/adminPage/Icon (1).png";
import icon3 from "../../../../../assets/adminPage/Icon (2).png";

import { FaAngleRight, FaSignOutAlt } from "react-icons/fa";
import { TbLayoutGridAdd } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

const LeftAdmin = () => {
    return (
        <div className="w-64 h-screen text-white flex flex-col justify-between">
            {/* Top Section */}
            <div>
                <div className="px-6 pb-12">
                    <img src={companyLogo} alt="Company Logo" className="w-full h-auto" />
                </div>

                <div className="px-4 space-y-3">
                    <button className="w-full flex items-center gap-3 bg-[#E84242] text-white py-2 px-4 rounded-full">
                        <TbLayoutGridAdd />
                        Prehľad
                    </button>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <img src={icon1} alt="" />
                        Zamestnanci
                    </div>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <img src={icon2} alt="" />
                        Mesačný súhrn
                    </div>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <img src={icon3} alt="" />
                        Výplaty
                    </div>

                    <hr className="my-4 border-gray-600" />

                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <IoSettingsOutline />
                        Nastavenia
                    </div>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <FaSignOutAlt />
                        Odhlásiť sa
                    </div>
                </div>
            </div>

            {/* Bottom Profile Section */}
            <div className="px-4 py-4 border-t border-gray-600 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm text-gray-300">Vítaj späť 👋</p>
                        <p className="text-lg">Ján</p>
                    </div>
                </div>
                <FaAngleRight />
            </div>
        </div>
    );
};

export default LeftAdmin;
