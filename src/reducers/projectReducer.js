//Reducerit: Fullstackopen osa 5 (Redux)
//https://fullstackopen.github.io/osa5/

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const projectReducer = (state = [], action) => {

    //Actioneilla on aina pakko olla type
    //Muuten sisältö vapaamuotoinen
    switch (action.type) {
        case 'NEW_PROJECT':
            // return state.concat(action.data)
            //tai
            return [...state, action.data]
        default:
            return state;
    }

    //Jos action.type on tuntematonta tyyppiä, palautetaan parametrina saatu tila
    return state
}

//ES6 ominaisuus: moduuli
export default projectReducer;

export const createNew = (content) => {
    const newProject = {
        name: content,
        id: generateId()
    }
    return (dispatch) => {
        dispatch({
            type: 'NEW_PROJECT',
            data: newProject
        })
    }
};