import bgContact from '~/assets/images/bg-contact.png';

function Banner() {
    return (
        <section className="page-wrapper">
            <div className="w-full relative mb-[50px]">
                <img src={bgContact} alt="" className="w-full" />
                <div className="absolute text-white top-1/2 text-center -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <h3 className="text-[40px]">Contact us</h3>
                    <p>keep in touch with us</p>
                </div>
            </div>
        </section>
    );
}

export default Banner;
