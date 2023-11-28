import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import { heroReducer } from "../reducers/heroReducer";
import heroActions from "../actions/heroActions";

const [addHero, editHero, deleteHero, getHero] = heroActions

export const { Context, Provider } = createDataContext(heroReducer,
    { addHero: addHero, deleteHero: deleteHero, editHero: editHero, getHero: getHero },
    []
);