const API_URL = process.env.REACT_APP_API_URL;

export async function register(username,password)
{
    let response = await fetch(API_URL + "/user/register", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password})

    });

    return response.json()
}

export async function login(username, password)
{
    let response = await fetch(API_URL + "/user/login", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username,password})
    })

    return response.json()
}