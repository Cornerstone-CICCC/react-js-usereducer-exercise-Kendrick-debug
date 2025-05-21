type Change = {
    isDark: boolean
    fSize: number
}

type ChangeAction = {
    type: "toggle" | "increment" | "decrement"

}


export const toggleReducer = (state: Change, action: ChangeAction): Change  => {
    switch (action.type) {
       case "toggle": 
       return {
        ...state,
        isDark: !state.isDark
       }
       case "increment" :
        return {
            ...state,
            fSize: state.fSize + 1
        }
        case "decrement":
            return {
                ...state,
                fSize: state.fSize - 1
            }
            default :
            return state

        }
    }
