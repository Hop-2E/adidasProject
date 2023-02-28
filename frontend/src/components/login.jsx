const styles = {
    border:{
        marginTop:"10%",
        marginLeft:"35%",
        border:"1px solid black",
        width:"20%",
        padding:"2%",
    },
    bold:{
        fontSize:"170%"

    },
    input:{
        width:"80%",
        height:"40px",
        fontSize:"120%"
    },
    checkbox:{
        accentColor:"black"
    },
    CONTINUE:{
        width:"82%",
        height:"40px",
        backgroundColor:"black",
        color:"aliceblue",
        display: "flex",
        alignItems: "center",
        gap: "65%",
    },
    img:{
        width: "26px",
        height: "10px",
    },
    x:{
        width:"57px",
        height:"57px",
        marginLeft:"101%",
        fontSize:"190%",
        marginTop:"-100%",
        backgroundColor:"white"
    }
}

const Login = () =>{

    return (            
            <div style={styles.border}>
            <button style={styles.x} >X</button>
                <div>
                    <strong><p style={styles.bold}>YOUR ADICLUB BENEFITS AWAIT!</p></strong><br/>
                    <p>Get free shipping, discount vouchers and members only products when you’re in adiClub</p><br/>
                    <strong><p style={styles.bold}>LOG IN OR SIGN UP (IT'S FREE)</p></strong><br/>
                    <p>Enter your email to access or create your account</p><br/>
                </div>
                
                <br/>

                <input style={styles.input} type="email" placeholder="Email"/><br/>

                <div>
                    <br/>
                    <p><p>Enter your password to access or create your account</p></p>
                </div>
                
                <br/>

                <input style={styles.input} type="password" placeholder="Password"/><br/>

                <div>
                    <br/>
                        <p>  
                            <input type="checkbox" style={styles.checkbox}/> 
                            Keep me logged in - applies to all log in options below.
                        </p>
                </div><br/>

                <button style={styles.CONTINUE} >
                    CONTINUE 
                    <img style={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4Bu7zkswJ03xi1f-S6VpQFvxl-UazPGSzAaOKvQTXTlVCvGTrzfYkAVn-vIgsy06SYI&usqp=CAU"/>
                </button>
                
            </div>

    )
}
export default Login;