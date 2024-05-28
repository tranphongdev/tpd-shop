import { HiOutlineChevronRight } from 'react-icons/hi';

function Breadcrumb({ children, name }) {
    return (
        <div className="border-b border-gray py-[14px] mb-10">
            <p className="page-wrapper flex items-center gap-2 text-[#777] text-sm font-light">
                Home <HiOutlineChevronRight />{' '}
                <span className="text-[#1a1a1a] hover:text-primary transition-colors cursor-pointer">{children}</span>
                {name ? (
                    <span className="text-[#1a1a1a] flex items-center gap-2">
                        <HiOutlineChevronRight />
                        {name}
                    </span>
                ) : (
                    ''
                )}
            </p>
        </div>
    );
}

export default Breadcrumb;
