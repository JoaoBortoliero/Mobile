import { Button, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native"
import estilo from "../components/Estilo"
import { useState } from "react"

//props permite receber parametro de quem esta chamando a tela

export default props => {
// variavel de estado, função para alterar o estado
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");

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
                    onPress={ () => props.navigation.navigate("UserList")}
                >
                    <Text style={estilo.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={estilo.loginForgotPassword}>Criar conta</Text>
            </View>
        </KeyboardAvoidingView>
        


    )
}
