import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FormLogin from "./pages/FormLogin";
import UserList from "./pages/UserList";
import UserForm from "./pages/UserForm";
import {Button, Icon} from '@rneui/base'


const Stack = createNativeStackNavigator();

export default props => (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="FormLogin"          // tela inicial
            // screenOptions={{headerShown: false}}  // não mostrar o cabeçalho
            screenOptions={myScreenOptions}
        >
            <Stack.Screen
                name="FormLogin"
                component={FormLogin}
            />
            <Stack.Screen
                name="UserList"
                component={UserList}
                options={
                    ({navigation}) => {
                        return {
                            title: 'Lista de Usuários',
                            headerRight: () => (
                                <Button
                                    type='clear'
                                    icon={<Icon name="add" size={25} color="#fff" />}
                                    onPress={ () => navigation.navigate("UserForm")}
                                />
                            )
                        }
                    }
                }
            />
            <Stack.Screen
                name="UserForm"
                component={UserForm}
                options={{title: 'Cadastro de Usuários'}}

           />
        </Stack.Navigator>
    </NavigationContainer>
)

const myScreenOptions = {
    headerStyle: {
        backgroundColor: '#003f5c',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerBackTitleVisible: false,
}