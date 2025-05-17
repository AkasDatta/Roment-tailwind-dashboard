import companyLogo from "../../../../../assets/CompanyLogo.png";
import { FaUser, FaCalendarAlt, FaMoneyBillWave, FaCog, FaSignOutAlt } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";

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
                        <HiViewGrid />
                        Prehľad
                    </button>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <FaUser />
                        Zamestnanci
                    </div>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <FaCalendarAlt />
                        Mesačný súhrn
                    </div>
                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <FaMoneyBillWave />
                        Výplaty
                    </div>

                    <hr className="my-4 border-gray-600" />

                    <div className="flex items-center gap-3 rounded-full duration-500 px-4 py-2 hover:bg-[#E84242] cursor-pointer">
                        <FaCog />
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
                        <p className="text-xs text-gray-300">Vítaj späť 👋</p>
                        <p className="text-sm font-semibold">Ján</p>
                    </div>
                </div>
                <span className="text-gray-400 text-lg">{'>'}</span>
            </div>
        </div>
    );
};

export default LeftAdmin;
