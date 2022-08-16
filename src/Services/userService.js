export async function register(username,password)
{
    let response = await fetch(process.env.REACT_APP_API_URL + "/api/user/register",{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
                },
            body: {username,password}

    });

    return response.json()
}