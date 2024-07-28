
async function requester(method, url, data){
    const options = {};

    if(method !=='GET'){
        options.method= method;
    }

    if(data){
        options.headers = {

        };

        options.body = JSON.stringify(data);
    }

   
    const respone =  await fetch(url,options)
    const result = respone.json();


    return result;

}


const get = requester.bind(null, 'GET')
 const post = requester.bind(null, 'POST')
 const put = requester.bind(null, 'PUT')
 const del = requester.bind(null, 'DELETE')

 export default{
    get,
    post,
    put,
    del
 }