export function movieList(){
    return{
        type:'MOVIES_LIST',
        payload:[
            {id:1,name:'Death Race'},
            {id:2,name:'Avenger'},
            {id:3,name:'Mad Max'}
        ]
    }
}