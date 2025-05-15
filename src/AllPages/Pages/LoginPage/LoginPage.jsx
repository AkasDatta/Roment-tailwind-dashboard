import { AiFillAlipayCircle } from "react-icons/ai";
import companyLogo from "../../../assets/CompanyLogo.png";
import loginImage from "../../../assets/LoginImage.png";
import { MdOutlineEmail } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";


const LoginPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto py-10">
        <div className="px-6 lg:px-10">
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label
                        htmlFor="Email"
                        className="block mb-2 text-md font-medium text-white"
                        >
                        Email
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-400">
                            <MdOutlineEmail />
                        </span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="pl-10 bg-[#222742] border border-gray-700 text-gray-200 rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-gray-200"
                            placeholder="E-mail"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="Heslo"
                        className="block mb-2 text-md font-medium text-white"
                        >
                        Heslo
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-400">
                            <PiLockKeyLight />
                        </span>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="pl-10 bg-[#222742] border border-gray-700 text-gray-200 rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-gray-200"
                            placeholder="Heslo"
                            required
                        />
                    </div>
                        <p className="text-sm font-light text-gray-200 py-3 text-end underline">
                            Zabudnuté heslo?
                        </p>
                </div>
            <button
                type="submit"
                className="cursor-pointer w-full text-white bg-[#D13D37] hover:bg-red-800 duration-500 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
                Prihlásiť sa
            </button>
          
            </form>
        </div>
        <div>
            <img src={loginImage} alt="" />
        </div>
        </div>
    );
};

export default LoginPage;