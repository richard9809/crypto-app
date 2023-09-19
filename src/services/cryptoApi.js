import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "4077a54599msh32f20d19bd2d2d9p10d0f0jsn8ce5e93b1366",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  prepareHeaders: (headers) => {
    return {
      ...headers,
      ...cryptoApiHeaders,
    };
  },
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => "/coins",
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
