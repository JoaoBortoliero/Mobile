import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import Estilo from "../components/Estilo";


// decompor o objeto props em route e navigation
export default ({route}) => {
    // console.warn(Object.keys(props.route.params));
    const [userParam, setUserParam] = useState(route.params ? route.params : {})
    return (
        <>
            <View>
                <Text>Nome:</Text>
                <TextInput
                    value={userParam.name}         // mantem oque ja tem e altera somente o nome
                    onChangeText={ name => setUserParam({...userParam, name})}
                />
            </View>
        </>
    )
}