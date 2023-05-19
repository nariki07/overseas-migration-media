import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCrown, faLocationDot, faShoePrints, faBookOpen} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return(
        <header>
            <div className="container flex bg-cyan-100">
                <div>海外移住.com</div><span></span>
                <div>
                    <ul className="flex">
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
                            <FontAwesomeIcon icon={faShoePrints} className="text-blue-600"/>
                            </div>
                            <a href="/">海外移住の始め方</a>
                        </li>
                        <li className="flex">
                            <div className="w-5 h-5 mr-1">
                            <FontAwesomeIcon icon={faBookOpen} className="text-blue-600"/>
                            </div>
                            <a href="/">移住の基礎知識</a>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    )
}