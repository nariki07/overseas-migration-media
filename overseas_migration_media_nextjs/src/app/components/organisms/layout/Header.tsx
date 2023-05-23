"use client"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCrown, faLocationDot, faShoePrints, faBookOpen, faBars} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from "react";
import {Drawer, IconButton, Typography} from "@material-tailwind/react";
import {XMarkIcon} from "@heroicons/react/24/outline";

export const Header = () => {
    const [openTop, setOpenTop] = React.useState(false);
    const openDrawerTop = () => setOpenTop(!openTop);
    const closeDrawerTop = () => setOpenTop(false);

    return (
        <header className="font-notoSans">
            <div className="bg-cyan-100">
                <div className="container mx-auto px-8 md:px-14 lg:px-24　">
                    <div className="flex justify-between items-center py-5">
                        <div className="text-3xl">KAIJU.com</div>
                        <div>
                            <ul className="space-x-12 hidden items-center  md:flex ">
                                <li className="flex">
                                    <div className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faCrown} className="text-blue-600"/>
                                    </div>
                                    <a href="/" className="hover:text-cyan-400">海外移住ランキング</a>
                                </li>
                                <li className="flex">
                                    <div className="w-4 h-4 mr-1">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-600"/>
                                    </div>
                                    <a href="/" className="hover:text-cyan-400">地図検索</a>
                                </li>
                                <li className="flex">
                                    <div className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faShoePrints} className="text-blue-600"/>
                                    </div>
                                    <a href="/" className="hover:text-cyan-400">海外移住の始め方</a>
                                </li>
                                <li className="flex">
                                    <div className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faBookOpen} className="text-blue-600"/>
                                    </div>
                                    <a href="/" className="hover:text-cyan-400">移住の基礎知識</a>
                                </li>
                            </ul>
                            {openTop ? <IconButton variant="text" color="blue-gray" onClick={closeDrawerTop}>
                                {/* eslint-disable-next-line react/jsx-no-undef */}
                                <XMarkIcon strokeWidth={2} className="h-5 w-5 md:hidden"/>
                            </IconButton> : <button className="md:hidden" onClick={openDrawerTop} type="button">
                                <FontAwesomeIcon icon={faBars}/>
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
            {openTop && (
                <React.Fragment>
                    <Drawer
                        placement="top"
                        open={openTop}
                        onClose={closeDrawerTop}
                        className="p-4 bg-cyan-100 md:hidden"
                    >
                        <div className="mb-6 flex items-center justify-center bg-sky-500">
                            <Typography variant="h5" color="blue-gray">
                                <ul>
                                    <li className="flex">
                                    <span className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faCrown} className="text-white"/>
                                    </span>
                                        <a href="/" className="text-white hover:text-cyan-400">海外移住ランキング</a>
                                    </li>
                                    <li className="flex">
                                        <div className="w-4 h-4 mr-1">
                                            <FontAwesomeIcon icon={faLocationDot} className="text-white"/>
                                        </div>
                                        <a href="/" className="text-white hover:text-cyan-400">地図検索</a>
                                    </li>
                                    <li className="flex">
                                        <div className="w-5 h-5 mr-1">
                                            <FontAwesomeIcon icon={faShoePrints} className="text-white"/>
                                        </div>
                                        <a href="/" className="text-white hover:text-cyan-400">海外移住の始め方</a>
                                    </li>
                                    <li className="flex">
                                        <div className="w-5 h-5 mr-1">
                                            <FontAwesomeIcon icon={faBookOpen} className="text-white"/>
                                        </div>
                                        <a href="/" className="text-white hover:text-cyan-400">移住の基礎知識</a>
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </Drawer>
                </React.Fragment>
            )
            }

        </header>
    )
}