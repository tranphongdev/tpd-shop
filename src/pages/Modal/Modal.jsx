import { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import ReactDOM from 'react-dom';

function Modal({ toggleModal }) {
    const [currentTab, setCurrentTab] = useState('SignIn');

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
            onClick={toggleModal}
        >
            <div
                className="bg-white relative shadow-lg lg:w-[575px] pt-[37px] px-[60px] pb-[64px]"
                onClick={(e) => e.stopPropagation()}
            >
                <ul className="text-[#1a1a1a] border-b border-gray flex justify-between">
                    <li
                        className={`lg:text-[24px] text-[20px] cursor-pointer capitalize p-[10px] w-1/2 text-center border-b border-gray ${
                            currentTab === 'SignIn' ? 'border-primary border-b-[2px] active' : ''
                        }`}
                        onClick={() => handleTabChange('SignIn')}
                    >
                        Sign In
                    </li>
                    <li
                        className={`lg:text-[24px] text-[20px] cursor-pointer capitalize p-[10px] w-1/2 text-center border-b border-gray ${
                            currentTab === 'Register' ? 'border-primary border-b-[2px] active' : ''
                        }`}
                        onClick={() => handleTabChange('Register')}
                    >
                        Register
                    </li>
                </ul>
                <div className="pt-[20px]">
                    {currentTab === 'SignIn' && (
                        <div>
                            <div className="mb-3">
                                <label className="block text-sm text-[#666] font-light mb-1" htmlFor="">
                                    Username or email address*
                                </label>
                                <input
                                    type="text"
                                    className="w-full font-light py-[8.5px] px-3 border outline-none h-10 bg-[#fafafa] border-gray text-[#777]"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm text-[#666] font-light mb-1" htmlFor="">
                                    Password*
                                </label>
                                <input
                                    type="text"
                                    className="w-full font-light py-[8.5px] px-3 border outline-none h-10 bg-[#fafafa] border-gray text-[#777]"
                                />
                            </div>
                            <div className="pt-[6px] pb-[30px] border-b border-gray">
                                <button className="border flex items-center gap-2 font-light hover:bg-primary hover:text-white transition-colors text-primary min-w-[115px] justify-center text-sm border-primary uppercase py-[8.5px] px-[15px]">
                                    Login <MdArrowRightAlt />
                                </button>
                            </div>
                        </div>
                    )}
                    {currentTab === 'Register' && (
                        <div>
                            <div className="mb-3">
                                <label className="block text-sm text-[#666] font-light mb-1" htmlFor="">
                                    Your email address*
                                </label>
                                <input
                                    type="text"
                                    className="w-full font-light py-[8.5px] px-3 border outline-none h-10 bg-[#fafafa] border-gray text-[#777]"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm text-[#666] font-light mb-1" htmlFor="">
                                    Password*
                                </label>
                                <input
                                    type="text"
                                    className="w-full font-light py-[8.5px] px-3 border outline-none h-10 bg-[#fafafa] border-gray text-[#777]"
                                />
                            </div>
                            <div className="pt-[6px] pb-[30px] border-b border-gray">
                                <button className="border flex items-center gap-2 font-light hover:bg-primary hover:text-white transition-colors text-primary min-w-[115px] justify-center text-sm border-primary uppercase py-[8.5px] px-[15px]">
                                    Sign Up <MdArrowRightAlt />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <button onClick={toggleModal} className="absolute top-4 right-4 hover:text-primary">
                    <MdClose className="w-5 h-5" />
                </button>
            </div>
        </div>,
        document.body,
    );
}

export default Modal;
