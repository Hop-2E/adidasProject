import Logo from "../assets/adidasLogo.png"
import "../App.css"

const Header = () =>{

    return (
       <div className="header">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <div className="mainHeader">
                <div>men </div>
                <div>women </div>
                <div>kids </div>
                <div>sale </div>
                <div>3 stripe life</div>
            </div>
            <div className="rightHeader">
                <div className="rightHeaderDiv">
                    <div>help</div>
                    <div>Exchanges & Returns</div>
                    <div>Order Tracker</div>
                    <div>join adiClub</div>
                </div>
                <div className="rightHeaderDiv">
                    <div>search</div>
                    <div>pro</div>
                    <div>like</div>
                    <div>shop</div>
                </div>
            </div>
       </div>
    )
}
export default Header;