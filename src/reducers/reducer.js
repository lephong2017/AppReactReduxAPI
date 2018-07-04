export let devsReducer = (state={isFetching : false, devsArray : []},action) => {
    switch(action.type){
        case 'Start_Dev_Search':
            return {
                isFetching : true,
                devsArray : action.devsArray
            }

        case 'End_Dev_Search':
            return{
                isFetching : false,
                devsArray : action.devsArray
            }
        default:   
            return state;
    }
}