import { brands } from '~/constants';

function Brands() {
    return (
        <section className="page-wrapper">
            <div className="py-[50px] flex justify-between gap-3 flex-wrap items-center border-b border-[#ebebeb]">
                {brands?.map((brand) => (
                    <div key={brand?.id}>
                        <img src={brand?.image} alt={brand?.title} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Brands;
