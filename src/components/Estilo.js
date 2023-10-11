import { StyleSheet } from "react-native";



export default StyleSheet.create({
    containerCentralized: {
        flex: 1,
        justifyContent: "center",   // eixo principal
        alignItems: "center",       // eixo secundário
    },
    textMedium: {
        fontSize: 35,
        fontWeight: "bold",
    },
    textFlatList: {
        fontSize: 20,
    },
    loginContainer:{
        flex: 1,
        justifyContent: "center",   
        alignItems: "center",
        backgroundColor: "#003f5c",
     
    },
    loginTextInputs:{
        backgroundColor: "#465881",
        width: 300,
        height: 55,
        marginTop: 30,
        fontSize: 15,
        borderRadius: 30,
        padding: 10,
        color: "#084160",
    },
    loginForgotPassword:{
        color: "#fff",
        marginTop: 25,
        marginBottom: 45,
    },
    loginButton:{
        width: 300,
        height: 55,
        backgroundColor: "#3cb371",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButtonText:{
        color: "#fff",
        fontSize: 15,
    },
    loginImageLogo:{
        width: 300,
        height: 300,
    },
    formInputDescription:{
        fontSize: 22,
    },
    formInput:{
        fontSize: 22,
        backgroundColor: "gray",
    },
    formContainer:{
        marginLeft: 20,
        marginTop: 5,
        marginRight: 22
    },
    formButtonSubmit:{
        marginTop: 20,
    }
})