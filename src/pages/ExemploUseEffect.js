import { useEffect, useState } from "react"
import { Button, Text, View } from "react-native"
import Estilo from "../components/Estilo"



export default props => {
    [titulo, setTitulo] = useState("Titulo inicial")
    [titulo2, setTitulo2] = useState("Titulo inicial 2")

    useEffect(() => {
        console.warn(`Alterado o titulo ${titulo}`)
        setTitulo2("Titulo 2 alterado em cascata")
    }, [titulo])

    return (
        <>
            <View>
                <Text>Exemplo UseEffect</Text>
                <Text style={Estilo.textMedium}>{titulo}</Text>
                <Button title="Alterar titulo" onPress={ () => setTitulo("Titulo alterado!") } />
                <Text style={Estilo.textMedium}>{titulo2}</Text>
            </View>
        </>
    )
}