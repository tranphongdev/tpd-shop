import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { MdArrowRightAlt, MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { doLogin } from '~/redux/features/authSlice';

function Modal({ toggleModal }) {
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.authenSlice.isLogin);
    const [currentTab, setCurrentTab] = useState('SignIn');
    const [formLogin, setFormLogin] = useState({ username: '', password: '' });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleTabChange = (tab) => {
        setCurrentTab(tab);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    };

    useEffect(() => {
        if (isLogin) {
            setIsSuccess(true);
        }
    }, [isLogin]);

    const handleSubmit = () => {
        dispatch(doLogin(formLogin));
    };

    const handleRegister = () => {
        toast.warning('Chức năng đang hoàn thiện');
    };

    return (
        !isSuccess &&
        ReactDOM.createPortal(
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
                                        Username or email address*(Test: tranphongdev)
                                    </label>
                                    <input
                                        name="username"
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full font-light py-[8.5px] px-3 border outline-none h-10 bg-[#fafafa] border-gray text-[#777]"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="block text-sm text-[#666] font-light mb-1" htmlFor="">
                                        Password*(Test: 123456)
                                    </label>
                                    <input
                                        name="password"
                                        onChange={handleChange}
                                        type="password"
                                        className="w-full font-light py-[8.5px] px-3 border outline-none h-10 bg-[#fafafa] border-gray text-[#777]"
                                    />
                                </div>
                                <div className="pt-[6px] pb-[30px] border-b border-gray">
                                    <button
                                        onClick={handleSubmit}
                                        className="border flex items-center gap-2 font-light hover:bg-primary hover:text-white transition-colors text-primary min-w-[115px] justify-center text-sm border-primary uppercase py-[8.5px] px-[15px]"
                                    >
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
                                    <button
                                        onClick={() => handleRegister()}
                                        className="border flex items-center gap-2 font-light hover:bg-primary hover:text-white transition-colors text-primary min-w-[115px] justify-center text-sm border-primary uppercase py-[8.5px] px-[15px]"
                                    >
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
        )
    );
}

export default Modal;
