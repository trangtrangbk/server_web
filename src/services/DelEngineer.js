export default async function DelEngineer(id){
    return new Promise((resolve, reject) =>{
    fetch('https://si-enclave.herokuapp.com/api/v1/engineers' + '/' +id, {
        method: 'DELETE',
        body: JSON.stringify(id)
    })
        .then((response) => response.json())
        .then((responseJson) => {
            
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        });
    });
  }
  
  