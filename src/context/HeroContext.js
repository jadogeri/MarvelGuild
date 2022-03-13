import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const heroReducer = (state, action) => {
    switch (action.type) {
        case 'get_Hero':
            return action.payload;
        case 'add_Hero':
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                name: action.payload.name,
                currentHealth: action.payload.currentHealth,
                maxHealth: action.payload.maxHealth,
                gold: action.payload.gold,
                level: action.payload.level,
                power: action.payload.power
            }
            ]
        case 'delete_Hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'edit_Hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else {
                    return hero;
                }
            })
        default:
            return state;
    }
}

const getHero = dispatch => {
    return async () => {
        console.log("about to make network request...?")
        try {
            const response = await jsonServer.get("/blogposts");
            console.log("network request completed!!!");
            //response.data === [{}, {}, {}]
            console.log(response.data);
            dispatch({ type: 'get_blogposts', payload: response.data })
        }
        catch (e) {
            console.log("something went wrong...")
            console.log(e);
        }
    }
}

const addHero = (dispatch) => {
    return (name, level, power, maxHealth, currentHealth, gold, callback) => {
        dispatch({
            type: 'add_Hero',
            payload: { name, level, power, maxHealth, currentHealth, gold, callback }
        })

        if (callback) {
            callback();
        }
    }
}


const deleteHero = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_Hero', payload: id })
    }
}

const editHero = (dispatch) => {
    return  (id,name, level, power, maxHealth, currentHealth, gold, callback) => {
        dispatch({ type: 'edit_Hero', payload: {id:id, name: name,level: level,
                                                     power: power, maxHealth: maxHealth, 
                                                    currentHealth: currentHealth, gold: gold} })
       if(callback)
         callback();
    }
}

export const { Context, Provider } = createDataContext(heroReducer,
    { addHero: addHero, deleteHero: deleteHero, editHero: editHero, getHero: getHero },
    []
);