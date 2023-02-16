import Logo from "../assets/adidasLogo.png"
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag , BiSearch } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import "../App.css"

const Header = () =>{

    return (<>
    <div className="headerZero">
        <h4>GET A $20 BONUS REWARD</h4>
        <h4>FREE STANDARD SHIPPING & RETURNS</h4>
        <h4>FRESH SALE STYLES: UP TO 50% OFF</h4>
        <RxCaretDown />
    </div>
    <div className="header">
            <div>
                <Link to = {"/"}>
                    <img src={Logo} alt="" className="logo"/>
                </Link>
            </div>
            <div className="mainHeader">
                <div>MEN </div>
                <div>WOMEN </div>
                <div>KIDS </div>
                <div>SALE </div>
                <div>3 SRTRIPE LIFE</div>
            </div>
            <div className="rightHeader">
                <div className="rightHeaderDiv">
                    <div>help</div>
                    <div>exchanges & returns</div>
                    <div>order tracker</div>
                    <div>join adiclub</div>
                </div>
                <div className="rightHeaderDiv">
                    <div style={{ border: '1px solid black', display:'flex', alignItems:'center'}}>
                        <input type="search" name="" id=""  placeholder="Search" style={{ border:'none'}} />
                        <BiSearch />
                    </div>
                    <div>
                     <VscAccount/>
                    </div>
                    <div>
                        <AiOutlineHeart />
                    </div>
                    <div>
                        <BiShoppingBag/>
                    </div>
                </div>
            </div>
       </div>
    </>
       
    )
}
export default Header;