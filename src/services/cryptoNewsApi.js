import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd82377e59dmshbf49d3b12ac7a01p1095cbjsn94ae9838894e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url,headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cyptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })  
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
