import { CiLocationOn, CiMail, CiClock2, CiCalendarDate } from 'react-icons/ci';
import { LuPhone } from 'react-icons/lu';
import { MdArrowRightAlt } from 'react-icons/md';

function ContactForm() {
    return (
        <section className="page-wrapper">
            <div className="flex lg:flex-row flex-col gap-5">
                <div className="lg:w-1/2 w-full">
                    <h3 className="text-[28px] text-text font-semibold mb-[10px]">Contact Information</h3>
                    <p className="mb-[30px] text-sm text-[#777] font-light">
                        Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
                        ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                    <div className="flex justify-between gap-5">
                        <div>
                            <h4 className="mt-[5px] mb-[15px] text-text text-[18px]">The Office</h4>
                            <div className="flex items-center gap-2 mb-[14px] text-sm font-light">
                                <CiLocationOn className="text-primary w-4 h-4" /> Vu Ban, Nam Dinh
                            </div>
                            <div className="flex items-center gap-2 mb-[14px] text-sm font-light">
                                <LuPhone className="text-primary w-4 h-4" /> 098 197 2202
                            </div>
                            <div className="flex items-center gap-2 mb-[14px] text-sm font-light">
                                <CiMail className="text-primary w-4 h-4" /> dinhphong.work@gmail.com
                            </div>
                        </div>
                        <div>
                            <h4 className="mt-[5px] mb-[15px] text-text text-[18px]">The Office</h4>
                            <div className="flex items-center gap-2 mb-[14px] text-sm font-light">
                                <CiClock2 className="text-primary w-4 h-4" /> Monday-Saturday 11am-7pm ET
                            </div>
                            <div className="flex items-center gap-2 mb-[14px] text-sm font-light">
                                <CiCalendarDate className="text-primary w-4 h-4" /> Sunday 11am-6pm ET
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full mb-[30px]">
                    <h3 className="text-[28px] text-text font-semibold mb-[10px]">Got Any Questions?</h3>
                    <p className="mb-[30px] text-sm text-[#777] font-light">
                        Use the form below to get in touch with the sales team
                    </p>
                    <div>
                        <div className="flex gap-5 items-center">
                            <input
                                placeholder="Name*"
                                type="text"
                                className="font-light bg-[#f9f9f9] mb-[28px] w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                            <input
                                placeholder="Email*"
                                type="text"
                                className="font-light bg-[#f9f9f9] mb-[28px] w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                        </div>
                        <div className="flex gap-5 items-center">
                            <input
                                placeholder="Phone*"
                                type="text"
                                className="font-light bg-[#f9f9f9] mb-[28px] w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                            <input
                                placeholder="Subject*"
                                type="text"
                                className="font-light bg-[#f9f9f9] mb-[28px] w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm text-[#777]"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message *"
                                rows="7"
                                className="bg-[#f9f9f9] mb-3 w-full focus:border-primary focus:bg-white transition-colors outline-none border border-gray py-[8.5px] px-3 text-sm font-light text-[#777]"
                            ></textarea>
                        </div>
                        <button className="flex items-center gap-2 border border-primary py-[8.5px] px-[15px] text-primary transition-colors hover:bg-primary hover:text-white">
                            Submit <MdArrowRightAlt />
                        </button>
                    </div>
                </div>
            </div>
            <hr className="mt-10 mb-[50px] border-gray" />
        </section>
    );
}

export default ContactForm;
