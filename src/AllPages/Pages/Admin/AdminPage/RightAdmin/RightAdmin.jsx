import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const RightAdmin = () => {
    return (
        <div className="bg-[#F5F7FB] w-full h-screen rounded-xl p-5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                <div>
                    <h2 className="text-lg lg:text-2xl">Prehľad - Konateľ / Admin</h2>
                </div>
                <div className="px-4 py-4 flex gap-8 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="Profile"
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <p className="text-lg">Ján</p>
                            <p className="text-lg">Konateľ</p>
                        </div>
                    </div>
                    <div className="border p-1 rounded-full">
                        <FaAngleDown className="text-xl"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="col-span-1 lg:col-span-3">

                </div>
                <div className="col-span-1 lg:col-span-2 bg-white">
                    <div>
                        <h2>Najnovšia aktivita</h2>
                        <div className="border p-1 rounded-full">
                            <FaAngleDown className="text-xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightAdmin;