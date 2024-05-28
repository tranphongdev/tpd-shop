import BannerAbout from '~/assets/images/bg-about.png';

function Banner() {
    return (
        <section className="page-wrapper">
            <div className="mb-[50px]">
                <div className="relative mb-[50px]">
                    <img src={BannerAbout} alt="BannerAbout" className="w-full h-full object-cover cursor-pointer" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h3 className="lg:text-4xl text-2xl opacity-1 cursor-pointer transition-colors hover:text-primary">
                            About us
                        </h3>
                        <span className="text-sm cursor-pointer transition-colors hover:text-primary">Who we are</span>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-5">
                    <div className="flex-1">
                        <h3 className="text-[28px] font-semibold text-[#1a1a1a] mb-[14px]">Our Vision</h3>
                        <p className="text-sm text-[#777] font-light leading-7">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
                            aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                            pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc
                            tortor eu nibh.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-[28px] font-semibold text-[#1a1a1a] mb-[14px]">Our Mission</h3>
                        <p className="text-sm text-[#777] font-light leading-7">
                            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
                            augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
