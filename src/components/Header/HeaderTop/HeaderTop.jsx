import { FiUser, FiPhone } from 'react-icons/fi';

function HeaderTop() {
    return (
        <div className="border-b bg-white border-[#EBEBEB] py-2 text-[#777] text-[15px] leading-6 z-50">
            <div className="page-wrapper flex justify-between items-center">
                <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                    <FiPhone />
                    <span>Hotline: 098 197 2202</span>
                </div>
                <div className="flex items-center gap-1">
                    <button className="flex items-center gap-1">
                        <FiUser /> Login
                    </button>
                    <button> | Resgister</button>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
