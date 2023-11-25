import axios from "axios";
const BASEURL = "/api"

export async function getHistory(){
    const config = {
        url:`${BASEURL}/history`,
        method:'GET',
    }
    const response = await axios(config)
    return response;
}
