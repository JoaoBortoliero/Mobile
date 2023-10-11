import React, { createContext, useReducer, useState } from "react";
// import users from "../data/users";

const URL = ...

const [users, setUSers] = useState()
const initialState = { users }
const UserContext = createContext({})

const getUsers = async () => {
    try {
        const response = await fetch()
        const json = await response.json()
    }
}

const actions = {

    loginUser(state, action) {
        const loginReceive = action.payload
        return {
            ...state,
            users: state.users.map( 
                user => user.email === loginReceive.email 
                && user.password === loginReceive.password
                ? loginReceive
                : user
            )
        }
    },

    createUser(state, action) {
        const newUser = action.payload // dados do usuário
        users.id = Math.random() // gerando um id aleatório
        return {
            ...state, // oque não for alterar, repete
            users: [...state.users, newUser] // retornando os usuários que já existem e adicionando o novo usuário
        }
    },

    updateUser(state, action) {
        const updatedUser = action.payload
        return {
            ...state,
            // map aplica a função para cada posição do array
            users: state.users.map( user => user.id === updatedUser.id ? updatedUser : user)
        }
    },

    deleteUser(state, action){
        const userReceive = action.payload
        return {
            ...state,
            users: state.users.filter( user => user.id !== userReceive.id)
        }
    }
}

export const UserProvider = props => {
    function reducer(state, action) {
        const fn =  actions[action.type] //pegando o tipo da ação
                    //parametros da função
        return fn ? fn(state, action) : state //se tiver algo a arterar, altera, senão retorna o estado 
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UserContext.Provider  //todos que forem filhos serão exibidos
            value={{
                state,
                dispatch
            }}
        >  
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext