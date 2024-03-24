import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'a19974c9acmshe05cdc2c2513bc7p1a03f5jsnf3a9d8715a51',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};
// const baseUrl = 'https://coinranking1.p.rapidapi.com/';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
  
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
  
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
      }),
  
      getExchanges : builder.query({
        query: () => createRequest('/exchanges'),
      }),
    }),
  });
  
  export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
  } = cryptoApi;



// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       limit: '50',
//       offset: '0',
//       orderBy: '24hVolume',
//       orderDirection: 'desc'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'a19974c9acmshe05cdc2c2513bc7p1a03f5jsnf3a9d8715a51',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };
