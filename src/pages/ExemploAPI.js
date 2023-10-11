import { useEffect, useState } from "react"
import { ActivityIndicator, Button, FlatList, Text, View } from "react-native"
import Estilo from "../components/Estilo"



export default props => {
    const [isLoaging, setIsLoading] = useState(true) 
    const [data, setData] = useState([])
    const URL = "https://reactnative.dev/movies.json"

    const getMovies = async () => {
        try {
            const response = await fetch(URL)
            const json = await response.json()
            setData(json.movies)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect( () => {
        getMovies()
    }, [])

    return (
        <>
            <View>
                <Text>Exemplo API</Text>

                {
                    isLoaging ? (
                        <ActivityIndicator size={60}/>
                    ) : (
                        <FlatList
                            data={data}
                            keyExtractor={({id}) => id}
                            renderItem={ ({item}) => (
                                <Text style={Estilo.textFlatList}>
                                    - {item.title} - {item.releaseYear}
                                </Text>
                            )}
                        />
                    )
                }
                <Button title="Atualizar" onPress={() => getMovies()}/>
            </View>
        </>
    )
}