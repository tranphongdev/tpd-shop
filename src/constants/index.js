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

const blogs = [
    {
        id: '6489d282de52a05c3466c8d3',
        name: 'Aenean dignissim pellente squefelis viverra, tortor libero sodales leo',
        slug: 'aenean-dignissim-pellente-squefelis-viverra-tortor-libero-sodales-leo-1701079023366',
        author: 'Tran Phong Dev',
        category: 'Fashion',
        createdAt: '2024-06-14',
        updatedAt: '2023-11-27T09:57:03.367Z',
        image: 'https://cfdshop.hn.ss.bfcplatform.vn/images/blog/twWE1fUxtMTZbVnmRXCKy-fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg',
    },
    {
        id: '6489d282de52a05c3466c8d4',
        name: ' Vestibulum volutpat, lacus a ultrices sagittis utaliquam sollicitudin leo.',
        slug: 'vestibulum-volutpat-lacus-a-ultrices-sagittis-utaliquam-sollicitudin-leo-1701079104035',
        author: 'Tran Phong Dev',
        category: 'Shopping',
        createdAt: '2024-06-14',
        updatedAt: '2023-11-27T09:57:03.367Z',
        image: 'https://cfdshop.hn.ss.bfcplatform.vn/images/blog/i1hC6_3aspDxuriq2Y5A1-carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg',
    },
    {
        id: '6489d282de52a05c3466c8d5',
        name: 'Suspendisse potenti aed egestas, ante et vulputate',
        slug: 'suspendisse-potenti-aed-egestas-ante-et-vulputate-1701081016109',
        author: 'Tran Phong Dev',
        category: 'Travel',
        createdAt: '2024-06-14',
        updatedAt: '2023-11-27T09:57:03.367Z',
        image: 'https://cfdshop.hn.ss.bfcplatform.vn/images/blog/EHV03GR2MjxPf78sA7qZt-luke-chesser-A5-Xr7WyktQ-unsplash.jpg',
    },
    {
        id: '64888a53ef6cc923b03f39c2',
        name: 'Tristique elit cras ornare raesent elementum tortor',
        slug: 'suspendisse-potenti-aed-egestas-ante-et-vulputate-1701081016109',
        author: 'Tran Phong Dev',
        category: 'Hobbies',
        createdAt: '2024-06-14',
        updatedAt: '2023-11-27T09:57:03.367Z',
        image: 'https://cfdshop.hn.ss.bfcplatform.vn/images/blog/ZIdshLhRy0nMSXVwWSn40-christina-wocintechchat-com-glRqyWJgUeY-unsplash.jpg',
    },
];

export { navLinks, sliders, banners, brands, blogs };
