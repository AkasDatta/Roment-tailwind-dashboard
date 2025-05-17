import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { PiBagSimple, PiBagSimpleFill } from "react-icons/pi";
import { RxCaretDown, RxCaretRight } from "react-icons/rx";

const RightAdmin = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Replace with your actual API URL
    fetch("../../../../../../public/user.json")
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error("Error fetching activities:", err));
  }, []);

  return (
    <div className="bg-[#F5F7FB] w-full rounded-xl p-5">
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
            <RxCaretDown className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
        <div className="col-span-1 lg:col-span-4">
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {/* Card 1: Počet hodín */}
                    <div className="bg-white rounded-2xl p-4 w-full">
                        <div className=" mb-3">
                            <FaClock className="text-white text-5xl bg-[#D13D37] p-3 rounded-full"/>
                        </div>
                        <div className="text-sm text-black">Počet hodín</div>
                        <div className="text-3xl font-semibold text-black pb-2">120 <span className="text-gray-400">h</span></div>
                    </div>

                    {/* Card 2: Celkové mzdy */}
                    <div className="bg-white rounded-2xl p-4 w-full">
                        <div className=" mb-3">
                            <FaSackDollar className="text-white text-5xl bg-[#D13D37] p-3 rounded-full"/>
                        </div>
                        <div className="text-sm text-black">Celkové mzdy</div>
                        <div className="text-3xl pb-2 font-semibold text-black">3,000 €</div>
                    </div>

                    {/* Card 3: Dokončené zákazky */}
                    <div className="bg-white rounded-2xl p-4 w-full">
                        <div className=" mb-3">
                            <PiBagSimpleFill className="text-white text-5xl bg-[#D13D37] p-3 rounded-full"/>
                        </div>
                        <div className="text-sm text-black">Dokončené zákazky</div>
                        <div className="text-3xl pb-2  font-semibold text-black">25</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-1 lg:col-span-2 bg-white p-5 rounded-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Najnovšia aktivita</h2>
            <div className="border p-1 border-white rounded-full bg-[#E84242] text-white">
              <RxCaretRight className="text-2xl" />
            </div>
          </div>

          {activities.length === 0 ? (
            <p className="text-gray-500 mt-4">Načítava sa aktivita...</p>
          ) : (
            activities.map((activity, index) => (
              <div
                key={index}
                className="border-b py-5 border-gray-300 flex items-center flex-wrap gap-2 justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={activity.image || "https://randomuser.me/api/portraits/lego/1.jpg"}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-lg font-semibold">{activity.employeeName}</p>
                    <p className="text-sm text-gray-500">{activity.task}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#1A932E] font-semibold text-lg">{activity.status}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default RightAdmin;
