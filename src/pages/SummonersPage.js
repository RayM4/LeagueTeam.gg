import React from "react";
import Summoner from "./Summoner";
import {useParams} from "react-router-dom";
const axios = require("axios")

// const url = "https://jsonplaceholder.typicode.com/posts"
// const url = "/lol/summoner/v4/summoners/by-name/{summonerName}"

// axios.get(url).then((response) =>{
//     console.log(response)
// })

function SummonersPage(){

    // this is the value from the url
    const { summonerId }  = useParams();

    // printing out the value
    console.log(summonerId);

    return (
        // Passing value in as a props
        <Summoner name={summonerId} />
    )
}

export default SummonersPage