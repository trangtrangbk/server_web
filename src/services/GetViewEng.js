export default async function getData(){
    let response = await fetch('https://serverapp-api.herokuapp.com/api/v1/engineers'); 
    let data = await response.json()
    return data;
    
}
