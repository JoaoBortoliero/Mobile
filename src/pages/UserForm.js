import { useContext, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Estilo from "../components/Estilo";
import UserContext from "../context/UserContext";

// decompor o objeto props em route e navigation
export default ({route, navigation}) => {
    // console.warn(Object.keys(props.route.params));
    const {dispatch} = useContext(UserContext) //usuário contexto para o form 
    const [userParam, setUserParam] = useState(route.params ? route.params : {}) // se tiver parametros, pega, senão, vazio
    return (
        <>
            <View style={Estilo.formContainer}>
                <Text style={Estilo.formInputDescription}>Nome:</Text>
                <TextInput
                    style={Estilo.formInput}
                    value={userParam.name}     // mantem oque ja tem e altera somente o nome
                    onChangeText={ name => setUserParam({...userParam, name})}
                />
                <Text style={Estilo.formInputDescription}>E-mail:</Text>
                <TextInput
                    style={Estilo.formInput}
                    value={userParam.email}    // mantem oque ja tem e altera somente o email
                    onChangeText={ email => setUserParam({...userParam, email})}
                />
                <Text style={Estilo.formInputDescription}>AvatarURL:</Text>
                <TextInput
                    style={Estilo.formInput}
                    value={userParam.avatarURL}  // mantem oque ja tem e altera somente o avatarURL
                    onChangeText={ avatarURL => setUserParam({...userParam, avatarURL})}
                />
                <Button
                    style={Estilo.formButtonSubmit}
                    title="Salvar"
                    onPress={() => {
                        dispatch({
                            type: userParam.id ? 'updateUser' : 'createUser',
                            payload: userParam 
                        })
                        navigation.goBack()
                    }}
                />
            </View>
        </>
    )
}   