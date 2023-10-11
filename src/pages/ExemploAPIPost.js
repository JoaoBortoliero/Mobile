import { Button } from "react-native"
import { Text, View } from "react-native"



export default props => {

    const doPost = () => {
        URL = "http://   ip  /api/movies"
        const dadosPAraEnviar = {
            id: 99,
            title: "Teste",
            realeseYear: 2021
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosPAraEnviar)
        }

        fetch(URL, options) 
            .then ( 
                (response) => {
                    if (!response.ok) {
                        throw new Error('A solicitação via POST falhou!')
                    }
                    return response.json()
                }
            ).then (
                (dadosRecebidos) => {
                    console.log('dadosRecebidos: ', dadosRecebidos)
                }
            ).catch (
                (error) => {
                    console.error('error: ', error)
                }
            )
    }

    return (
        <View>
            <Text>Exemplo POST</Text>
            <Button title="Fazer POST" onPress={() => doPost()}/>
        </View>
    ) 
}