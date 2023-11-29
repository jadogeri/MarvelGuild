import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import { gameReducer } from "../reducers/gameReducer";
import gameActions from "../actions/gameActions";

const [addHero, editHero, deleteHero, getHero] = gameActions

export const { Context, Provider } = createDataContext(heroReducer,
    { addHero: addHero, deleteHero: deleteHero, editHero: editHero, getHero: getHero },
    {game_status :"",mode:"",total_rounds :0,rounds_completed:0,total_gold:0, total_power:0}
);