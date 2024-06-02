import { blogs } from '~/constants';

function BoxLeft() {
    return (
        <div className="lg:w-3/4 w-full grid lg:grid-cols-2 grid-cols-1s gap-5">
            {blogs?.map((blog) => (
                <div key={blog?.id} className="mb-5">
                    <img src={blog?.image} alt="" className="w-full h-auto mb-[24px] cursor-pointer" />
                    <div className="flex items-center gap-2 text-[#777] font-light text-sm mb-[5px]">
                        <p>{blog?.createdAt}</p>
                        <span>|</span>
                        <p>
                            by{' '}
                            <span className="cursor-pointer transition-colors hover:text-primary hover:border-b border-primary">
                                {blog?.author}
                            </span>
                        </p>
                    </div>
                    <h3 className="text-[23px] text-text font-semibold mb-[6px] cursor-pointer tracking-tight transition-colors hover:text-primary">
                        {blog?.name}
                    </h3>
                    <button className="text-primary text-sm hover:border-b border-primary transition-colors">
                        Read More
                    </button>
                </div>
            ))}
        </div>
    );
}

export default BoxLeft;
