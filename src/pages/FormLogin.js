import { Button, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import estilo from "../components/Estilo"
import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

//props permite receber parametro de quem esta chamando a tela

export default props => {
// variavel de estado, função para alterar o estado
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");

    const {state} = useContext(UserContext) //usuário contexto para o form
    
    return (
        <KeyboardAvoidingView style={estilo.loginContainer}>
            <View style={estilo.loginContainer}>
                <Image source={require('../assets/bird.png')} style={estilo.loginImageLogo}/>
                <TextInput
                    style={estilo.loginTextInputs}
                    placeholder="Digite o login"    
                    onChangeText={ (valorLogin) => setValorLogin(valorLogin) }
                />
                <TextInput
                    style={estilo.loginTextInputs}
                    placeholder="Digite a senha"    
                    value={valorSenha}
                    onChangeText={ (valorSenha) => setValorSenha(valorSenha) }
                    secureTextEntry={true}
                />
                <Text style={estilo.loginForgotPassword}>Esqueceu a senha?</Text>
                <TouchableOpacity 
                    style={estilo.loginButton}  
                    onPress={ () => {
                        // const userLogado = state.user.filter( user => user.login === valorLogin)[0]
                        // if (userLogado) {
                        //     userLogado.password == valorSenha ? props.navigation.navigate("UserList") 
                        //     : console.warn("Senha incorreta")
                        // } else {
                        //     console.warn("Usuário e/ou Senha incorretos")
                        // }
                        // if (valorLogin === "joao") {
                            props.navigation.navigate("ExemploAPI")
                        // }    
                    }}
                >
                    <Text style={estilo.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={estilo.loginForgotPassword}>Criar conta</Text>
            </View>
        </KeyboardAvoidingView>
        


    )
}