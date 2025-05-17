import { FaAngleRight } from "react-icons/fa";

const RightAdmin = () => {
    return (
        <div className="bg-white w-full h-screen rounded-xl p-5">
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
                    <FaAngleRight />
                </div>
            </div>
        </div>
    );
};

export default RightAdmin;