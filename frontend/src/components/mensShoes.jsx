import Header from "./header"
import "../App.css";
import Arrow from "../assets/arrow.png";
import BottomArrow from "../assets/bottomArrow.png";
import Shoes from "../assets/shoes.png";
 
const styles = {
    back:{
        marginTop:"01%",
        marginLeft:"17%"
    },
    menshoes:{
        fontSize:"150%",
    },
    mainType:{
        display: "flex" ,
        alignItems:"flex-end",
        gap:"2%",
    },
    shoes:{
        marginTop:"3%",
        display: "grid",
        gridTemplateColumns: "21.3% 21.3% 21.3% 21.3%",
        gap:"-10%",
        fontSize:"90%",
        color:"gray"
    },
    cart:{
        border:"1px solid black",
        width:"360px",
        height: "390px",
    },
    men:{
        marginTop:"3%",
        marginLeft:"17%"
    },
    mainShoes:{
        marginTop:"3%",
        marginLeft:"17%"
    },
    head:{
        border:"1px solid gray",
    },
    page:{
        marginLeft:"45%",
        fontSize:"120%",
        display:"flex",
        alignItems:"baseline",
        gap: "10px",
    },
    button:{
        fontSize:"100%",
        backgroundColor: "white",
        marginTop:"3%",
        border: "1px solid rgb(129 129 131)",
        width:" 7%",
        height: "40px",
    },
    NEXT:{
     marginLeft:"800px"
    },
}

const MensShoes = () => {
  return (
    <div>
        <div style={styles.head}>
            <Header/>
        </div>

        <p style={styles.back}>
        <a href="http://localhost:3000/"><img src={Arrow}  width="30" height="10"/> Back</a> <a href="http://localhost:3000/">/Home</a> <a href="http://localhost:3000/">/Men</a> <a href="http://localhost:3000/">/Shoes</a>
        </p>
        <div style={styles.men}>
            <p style={styles.menshoes}>MEN'S SHOES </p>
            <p>Shop adidas for all styles of men's shoes including casual sneakers, high-performance running shoes, and <br/>comfy slides.Browse styles for women and kids here.</p>
        </div>
        <div style={styles.mainShoes}>
            <div style={styles.mainType}>
                <div>All Men's Shoes</div>
                <div>Sneakers</div>
                <div>Soccer</div>
                <div>Sandals & Slides</div>
                <div>Workout & Gym</div>
                <div>Basketball</div>
                <div>Shoes $100 & Under</div>
                <div>Golf</div>
                <div>Baseball</div>
                <div>Football</div>
            </div>
            <div style={styles.shoes}>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
                <div style={styles.cart}><img src={Shoes} width="360" height="300"/> <p>Ultraboost Light Shoes <br/>Men's Running<br/>9 colors • new</p></div>
            </div>
        </div>
        <div>
            <p style={styles.page}>
                <p>Page:</p>
                <button style={styles.button}>
                    1
                    <img src={BottomArrow} width="15" height="15"/>
                </button>
                <p>
                    of 33 
                    <a href="https://www.adidas.com/us/men-shoes" style={styles.NEXT}>NEXT</a>
                </p>
            </p>
        </div>
    </div>
  );
};
export default MensShoes;