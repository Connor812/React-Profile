import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as PiIcons from 'react-icons/pi';

export const SideBarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Projects",
        path: '/projects',
        icon: <PiIcons.PiShareNetwork />,
        cName: "nav-text"
    },
    {
        title: "Resume",
        path: '/resume',
        icon: <HiIcons.HiOutlineNewspaper />,
        cName: "nav-text"
    },
    {
        title: "Contact Me",
        path: '/contact_me',
        icon: <MdIcons.MdOutlineContactSupport />,
        cName: "nav-text"
    }
]