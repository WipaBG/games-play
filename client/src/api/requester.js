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

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const del = requester.bind(null, 'DELETE')