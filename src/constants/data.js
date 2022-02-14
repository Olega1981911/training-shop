import search from '../assets/image/icons/search.svg';
import globe from '../assets/image/icons/globe.svg';
import user from '../assets/image/icons/user.svg';
import bag from '../assets/image/icons/shopping-bag.svg';
import women from '../assets/image/womenBanner.png';
import men from '../assets/image/menBanner.png';
import accessories from '../assets/image/2.jpg';
import { v4 as uuidv4 } from "uuid";

export const MENU = [
    {id:uuidv4(), name: 'About Us', path: '/Info'},
    {id:uuidv4(), name: 'Women', path: '/Women'},
    {id:uuidv4(), name: 'Men', path: '/Men'},
    {id:uuidv4(), name: 'Beauty', path: '/Beauty'},
    {id:uuidv4(), name: 'Accessories', path: '/Accessories'},
    {id:uuidv4(), name: 'Blog', path: '/Blog'},
    {id:uuidv4(), name: 'Contact', path: '/Contact'}
]

export const MENU_ITEM = [
    {id: uuidv4(), img: search, path: './'},
    {id: uuidv4(), img: globe, path: './globe'},
    {id: uuidv4(), img: user, path: './user'},
    {id: uuidv4(), img: bag, path: './Cart'}
]



export const dataSlider = [
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
];

export const DATA_BANNER = [
    {
        id: uuidv4(),
        title: 'women',
        img: women
    },
    {
        id: uuidv4(),
        title: 'men',
        img: men
    },
    {
        id: uuidv4,
        title: 'accessories',
        img: accessories
    },
]