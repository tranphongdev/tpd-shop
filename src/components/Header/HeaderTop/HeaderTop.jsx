import { useState } from 'react';
import { FiUser, FiPhone } from 'react-icons/fi';
import Modal from '~/pages/Modal/Modal';

function HeaderTop() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="border-b bg-white border-[#EBEBEB] py-2 text-[#777] text-[15px] leading-6 z-50">
                <div className="page-wrapper flex justify-between items-center">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
                        <FiPhone />
                        <span>Hotline: 098 197 2202</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button onClick={toggleModal} className="flex items-center gap-1">
                            <FiUser /> Login
                        </button>
                        <button> | Resgister</button>
                    </div>
                </div>
            </div>
            {modal && <Modal toggleModal={toggleModal} />}
        </>
    );
}

export default HeaderTop;
