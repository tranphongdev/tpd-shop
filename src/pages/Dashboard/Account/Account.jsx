import { MdOutlineArrowRightAlt } from 'react-icons/md';

function Account() {
    return (
        <div>
            <div className="flex gap-5 items-center">
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Full Name*
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Email address*
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
            </div>
            <div className="flex gap-5 items-center">
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Phone number*
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Date*
                    </label>
                    <input
                        type="date"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
            </div>
            <div className="flex justify-between lg:flex-row flex-col items-center gap-5 mb-5">
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Province/City *
                    </label>
                    <select
                        name=""
                        id=""
                        className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    >
                        <option value="">Hà Nội</option>
                        <option value="">Nam Định</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        District/Town *
                    </label>
                    <select
                        name=""
                        className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    >
                        <option value="">Hà Nội</option>
                        <option value="">Nam Định</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        District/Town *
                    </label>
                    <select
                        name=""
                        id=""
                        className="outline-none w-full bg-[#f9f9f9] border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    >
                        <option value="">Hà Nội</option>
                        <option value="">Nam Định</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Street address*
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
            </div>
            <div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Password
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
            </div>
            <div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        New password (leave blank to leave unchanged)
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
            </div>
            <div>
                <div className="w-full">
                    <label htmlFor="" className="block text-sm text-[#666] mb-1">
                        Confirm new password
                    </label>
                    <input
                        type="text"
                        className="bg-[#f9f9f9] mb-5 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                    />
                </div>
            </div>
            <div>
                <button className="hover:text-white hover:bg-primary transition-colors flex items-center gap-2 py-[9px] px-[15px] min-w-[170px] border border-primary text-primary text-sm uppercase">
                    Save Changes <MdOutlineArrowRightAlt />
                </button>
            </div>
        </div>
    );
}

export default Account;
