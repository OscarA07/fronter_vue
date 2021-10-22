const url = 'https://randomuser.me/api/';

//con promesas
function getUsersPromise(){
    return fetch(url+'?results=50')
    .then(res => res.json())
    .then(res => res.results) //retorna los valorer
    .catch(err => console.log(err));
}

// peticion asincrona
const getUsersAsync = async ()=>{
    try{
        const res = await fetch(url+'?results=50');
        const data = await res.json();
        return data.results;
    }catch(err){
        console.log(err);
    }
}
const getUserData = async(id)=>{
    try{
        //const res = await fetch('${url}?id=${id}');
        const res = await fetch(url+'?id='+id); //--Diferentes forma de concatenar
        const data = await res.json();
        return data.results[0];
    }catch(err){
        console.log(err)
    }
}

export default{
    getUsersPromise,
    getUsersAsync,
    getUserData
}