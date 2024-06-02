import React, { Suspense, useEffect } from 'react';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';

const BlogContent = React.lazy(() => import('./BlogContent/BlogContent'));

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <section className="page-header">
                <h3 className="text-[#1a1a1a] text-4xl">Blog</h3>
            </section>
            <Breadcrumb>Blog</Breadcrumb>

            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <BlogContent />
            </Suspense>
        </main>
    );
}

export default Blog;
