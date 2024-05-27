import slider1 from '~/assets/images/slide-1.jpg';
import slider2 from '~/assets/images/slide-2.jpg';
import banner1 from '~/assets/images/banner-1.jpg';
import banner2 from '~/assets/images/banner-2.jpg';
import banner3 from '~/assets/images/banner-3.jpg';
import brand1 from '~/assets/images/br1.png';
import brand2 from '~/assets/images/br2.png';
import brand3 from '~/assets/images/br3.png';
import brand4 from '~/assets/images/br4.png';
import brand5 from '~/assets/images/br5.png';
import brand6 from '~/assets/images/br6.png';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Product', path: '/product' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact Us', path: '/contact' },
];

const sliders = [
    {
        id: 1,
        image: slider1,
        title: ' AirPods',
        title1: 'Earphones',
        subtitle: 'Daily Deals',
        titlePrice: 'Today:',
        price: '$290',
        priceSub: '.99',
    },
    {
        id: 2,
        image: slider2,
        title: 'Echo Dot',
        title1: '3rd Gen',
        subtitle: 'Deals and Promotions',
        titlePrice: '$49,99:',
        price: '$29',
        priceSub: '.49',
    },
];

const banners = [
    { title: 'Edifier', title1: 'Stereo Bluetooth', image: banner1 },
    { title: 'GoPro', title1: 'Fusion 360', image: banner2 },
    { title: 'Apple Watch 4 ', title1: '', image: banner3 },
];

const brands = [
    { id: 1, image: brand1, title: 'brand1' },
    { id: 2, image: brand2, title: 'brand2' },
    { id: 3, image: brand3, title: 'brand3' },
    { id: 4, image: brand4, title: 'brand4' },
    { id: 5, image: brand5, title: 'brand5' },
    { id: 6, image: brand6, title: 'brand6' },
];

export { navLinks, sliders, banners, brands };
