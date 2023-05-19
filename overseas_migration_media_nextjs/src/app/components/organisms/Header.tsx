import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCrown, faLocationDot, faShoePrints, faBookOpen} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return(
        <header>
            <div className="bg-cyan-100">
                <div className="container mx-auto px-8 md:px-14 lg:px-24　">
                    <div className="flex justify-between items-center py-5">
                        <div className="text-3xl">KAIJU.com</div>
                        <div>
                            <ul className="flex space-x-12">
                                <li className="flex">
                                    <div className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faCrown} className="text-blue-600" />
                                    </div>
                                    <a href="/">海外移住ランキング</a>
                                </li>
                                <li className="flex">
                                    <div className="w-4 h-4 mr-1">
                                        <FontAwesomeIcon icon={faLocationDot} className="text-blue-600" />
                                    </div>
                                    <a href="/">地図検索</a>
                                </li>
                                <li className="flex">
                                    <div className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faShoePrints} className="text-blue-600" />
                                    </div>
                                    <a href="/">海外移住の始め方</a>
                                </li>
                                <li className="flex">
                                    <div className="w-5 h-5 mr-1">
                                        <FontAwesomeIcon icon={faBookOpen} className="text-blue-600" />
                                    </div>
                                    <a href="/">移住の基礎知識</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}