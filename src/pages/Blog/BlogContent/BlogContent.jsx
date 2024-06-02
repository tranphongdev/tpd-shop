import React, { Suspense } from 'react';

const BoxLeft = React.lazy(() => import('./BoxLeft/BoxLeft'));
const BoxRight = React.lazy(() => import('./BoxRight/BoxRight'));

function BlogContent() {
    return (
        <section className="page-wrapper flex gap-5 lg:flex-row flex-col">
            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <BoxLeft />
                <BoxRight />
            </Suspense>
        </section>
    );
}

export default BlogContent;
