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

export default [addHero,editHero,deleteHero,getHero]