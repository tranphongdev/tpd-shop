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

const vietnamProvinces = [
    {
        name: 'An Giang',
        population: 2178530,
        area: 3536.7,
        capital: 'Long Xuyên',
    },
    {
        name: 'Bà Rịa - Vũng Tàu',
        population: 1121000,
        area: 1989.2,
        capital: 'Vũng Tàu',
    },
    {
        name: 'Bắc Giang',
        population: 1948100,
        area: 3848.9,
        capital: 'Bắc Giang',
    },
    {
        name: 'Bắc Kạn',
        population: 300069,
        area: 4860.3,
        capital: 'Bắc Kạn',
    },
    {
        name: 'Bạc Liêu',
        population: 874700,
        area: 2359.4,
        capital: 'Bạc Liêu',
    },
    {
        name: 'Bắc Ninh',
        population: 1103100,
        area: 822.7,
        capital: 'Bắc Ninh',
    },
    {
        name: 'Bến Tre',
        population: 1258700,
        area: 2301.6,
        capital: 'Bến Tre',
    },
    {
        name: 'Biên Hòa',
        population: 1053500,
        area: 2694.7,
        capital: 'Biên Hòa',
    },
    {
        name: 'Bình Định',
        population: 1519300,
        area: 6050.6,
        capital: 'Quy Nhơn',
    },
    {
        name: 'Bình Dương',
        population: 2481700,
        area: 2695.0,
        capital: 'Thủ Dầu Một',
    },
    {
        name: 'Bình Phước',
        population: 965800,
        area: 6870.9,
        capital: 'Đồng Xoài',
    },
    {
        name: 'Bình Thuận',
        population: 1242300,
        area: 7828.4,
        capital: 'Phan Thiết',
    },
    {
        name: 'Cà Mau',
        population: 1238800,
        area: 5294.1,
        capital: 'Cà Mau',
    },
    {
        name: 'Cao Bằng',
        population: 516600,
        area: 6707.1,
        capital: 'Cao Bằng',
    },
    {
        name: 'Đà Nẵng',
        population: 1134800,
        area: 1283.4,
        capital: 'Đà Nẵng',
    },
    {
        name: 'Đắk Lắk',
        population: 1935600,
        area: 13125.4,
        capital: 'Buôn Ma Thuột',
    },
    {
        name: 'Đắk Nông',
        population: 543900,
        area: 6515.8,
        capital: 'Gia Nghĩa',
    },
    {
        name: 'Điện Biên',
        population: 590200,
        area: 9562.9,
        capital: 'Điện Biên Phủ',
    },
    {
        name: 'Đồng Nai',
        population: 2966100,
        area: 5863.4,
        capital: 'Biên Hòa',
    },
    {
        name: 'Đồng Tháp',
        population: 1678800,
        area: 3377.0,
        capital: 'Cao Lãnh',
    },
    {
        name: 'Gia Lai',
        population: 1455300,
        area: 15536.7,
        capital: 'Pleiku',
    },
    {
        name: 'Hà Giang',
        population: 809200,
        area: 7914.9,
        capital: 'Hà Giang',
    },
    {
        name: 'Hà Nam',
        population: 800700,
        area: 863.9,
        capital: 'Phủ Lý',
    },
    {
        name: 'Hà Nội',
        population: 8053800,
        area: 3358.9,
        capital: 'Hà Nội',
    },
    {
        name: 'Hà Tĩnh',
        population: 1242800,
        area: 5974.0,
        capital: 'Hà Tĩnh',
    },
    {
        name: 'Hải Dương',
        population: 1758400,
        area: 1656.6,
        capital: 'Hải Dương',
    },
    {
        name: 'Hải Phòng',
        population: 2014400,
        area: 1540.6,
        capital: 'Hải Phòng',
    },
    {
        name: 'Hậu Giang',
        population: 787100,
        area: 1602.6,
        capital: 'Vị Thanh',
    },
    {
        name: 'Hoà Bình',
        population: 848100,
        area: 4604.6,
        capital: 'Hoà Bình',
    },
    {
        name: 'Hưng Yên',
        population: 1169400,
        area: 929.2,
        capital: 'Hưng Yên',
    },
    {
        name: 'Khánh Hòa',
        population: 1226200,
        area: 5217.0,
        capital: 'Nha Trang',
    },
    {
        name: 'Kiên Giang',
        population: 1730800,
        area: 6348.5,
        capital: 'Rạch Giá',
    },
    {
        name: 'Kon Tum',
        population: 526900,
        area: 9668.8,
        capital: 'Kon Tum',
    },
    {
        name: 'Lai Châu',
        population: 415400,
        area: 9068.3,
        capital: 'Lai Châu',
    },
    {
        name: 'Lâm Đồng',
        population: 1379100,
        area: 9801.1,
        capital: 'Đà Lạt',
    },
    {
        name: 'Lạng Sơn',
        population: 760400,
        area: 8320.1,
        capital: 'Lạng Sơn',
    },
    {
        name: 'Lào Cai',
        population: 693700,
        area: 6383.9,
        capital: 'Lào Cai',
    },
    {
        name: 'Long An',
        population: 1591900,
        area: 4492.7,
        capital: 'Tân An',
    },
    {
        name: 'Nam Định',
        population: 1836000,
        area: 1652.6,
        capital: 'Nam Định',
    },
    {
        name: 'Nghệ An',
        population: 2951600,
        area: 16490,
        capital: 'Nam Định',
    },
];

const districts = [
    {
        province: 'An Giang',
        districts: [
            'Châu Phú',
            'Châu Thành',
            'Chợ Mới',
            'Phú Tân',
            'Tân Châu',
            'Thoại Sơn',
            'Tri Tôn',
            'Tịnh Biên',
            'Tân Phú Đông',
        ],
    },
    {
        province: 'Bà Rịa - Vũng Tàu',
        districts: ['Bà Rịa', 'Côn Đảo', 'Châu Đức', 'Đất Đỏ', 'Long Điền', 'Tân Thành', 'Vũng Tàu'],
    },
    {
        province: 'Bắc Giang',
        districts: ['Bắc Giang', 'Yên Dũng', 'Việt Yên', 'Lục Nam', 'Lục Ngạn', 'Sơn Động', 'Lạng Giang', 'Hiệp Hòa'],
    },
    {
        province: 'Bắc Kạn',
        districts: ['Bắc Kạn', 'Pác Nặm', 'Ba Bể', 'Ngân Sơn', 'Chợ Đồn', 'Chợ Mới', 'Na Rì'],
    },
    {
        province: 'Bạc Liêu',
        districts: ['Bạc Liêu', 'Hòa Bình', 'Phước Long', 'Vĩnh Lợi', 'Giá Rai', 'Đông Hải', 'Hoàng Hóa'],
    },
    {
        province: 'Bắc Ninh',
        districts: ['Bắc Ninh', 'Yên Phong', 'Quế Võ', 'Tiên Du', 'Từ Sơn', 'Gia Bình', 'Lương Tài'],
    },
    {
        province: 'Bến Tre',
        districts: ['Bến Tre', 'Châu Thành', 'Chợ Lách', 'Giồng Trôm', 'Mỏ Cày Bắc', 'Mỏ Cày Nam', 'Thạnh Phú'],
    },
    {
        province: 'Biên Hòa',
        districts: ['Biên Hòa', 'Long Khánh', 'Tân Phú', 'Thống Nhất', 'Vĩnh Cửu', 'Xuân Lộc'],
    },
    {
        province: 'Bình Định',
        districts: [
            'Quy Nhơn',
            'An Lão',
            'Hoài Ân',
            'Hoài Nhơn',
            'Phù Mỹ',
            'Phù Cát',
            'Tuy Phước',
            'Vân Canh',
            'Vĩnh Thạnh',
        ],
    },
    {
        province: 'Bình Dương',
        districts: [
            'Thủ Dầu Một',
            'Bắc Tân Uyên',
            'Bến Cát',
            'Dầu Tiếng',
            'Dĩ An',
            'Phú Giáo',
            'Tân Uyên',
            'Thạnh Phú',
        ],
    },
];

export { navLinks, sliders, banners, brands, blogs, vietnamProvinces, districts };
