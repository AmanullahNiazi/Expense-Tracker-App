import {createStore , combineReducers} from 'redux'
function transactionSection(oldData = [],NewData){
        if(NewData.type == 'transaction-create-hoi'){
                oldData.push(NewData.payload)
        }else if(NewData.type == 'transaction-deleted'){
                oldData.splice(NewData.payload,1)
        }
        return [...oldData]
}

let allSections = combineReducers({transactionSection})
let meraStore = createStore(allSections,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default meraStore