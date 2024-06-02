import React, { Suspense } from 'react';
import Breadcrumb from '~/components/Breadcrumb/Breadcrumb';

const Banner = React.lazy(() => import('./Banner/Banner'));
const ContactForm = React.lazy(() => import('./ContactForm/ContactForm'));
const OurStore = React.lazy(() => import('./OurStore/OurStore'));
const Map = React.lazy(() => import('./Map/Map'));

function Contact() {
    return (
        <main>
            <Breadcrumb>Contact</Breadcrumb>
            <Suspense
                fallback={
                    <div className="loading-spinner text-center">
                        <span className="loader block mt-20"></span>
                    </div>
                }
            >
                <Banner />
                <ContactForm />
                <OurStore />
                <Map />
            </Suspense>
        </main>
    );
}

export default Contact;
