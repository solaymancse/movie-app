import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDA3MGRiZDc5NWUwYWFmOTM2NGVlMzYzYzU5OTNhMSIsInN1YiI6IjY0NmYxN2QxMTdjNDQzMDExOWIwY2I1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGT1PqUazsdSVLetUhKZD9w2ImlEaLd1V2tfvvBNhTo";

const headers = {
    Authorization: "bearer" + TMDB_TOKEN
}

export const fetchDataFromApi = async(url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url + "?api_key=d4070dbd795e0aaf9364ee363c5993a1", {
            headers,
            params
        })

        return data;
    } catch (err) {
        console.log(err);
    }
}