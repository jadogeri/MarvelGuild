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

const updateGameStatus = (dispatch) => {
    return  (game_status) => {
        dispatch({ type: 'update_game_status', payload: {game_status : game_status} });
    
    }
}

const updateGameMode = (dispatch) => {
    return  (game_status) => {
        dispatch({ type: 'update_game_mode', payload: {game_mode : game_mode} });
    
    }
}

const editTotalGold = (dispatch) => {
    return  (total_gold) => {
        dispatch({ type: 'edit_total_gold', payload: {total_gold : total_gold} });    
    }
}

const editTotalPower = (dispatch) => {
    return  (total_power) => {
        dispatch({ type: 'edit_total_power', payload: {total_power : total_power} });    
    }
}

const editRounds = (dispatch) => {
    return  (rounds) => {
        dispatch({ type: 'edit_total_rounds', payload: {total_rounds : rounds} });    
    }
}
export default [addHero,editHero,deleteHero,getHero,updateGameStatus,updateGameMode,editTotalGold,editTotalPower,editRounds]