import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  GetKpisResponse,
  GetProductsResponse,
  GetTransactionsResponse,
} from './types';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: 'main',
  tagTypes: ['Kpis', 'Products', 'Transactions'],
  endpoints: (build) => ({
    getKpis: build.query<Array<GetKpisResponse>, void>({
      //this is for get
      //<res,payload> //typscript specific respone. array of objs
      query: () => 'kpi/kpis/',
      providesTags: ['Kpis'], //key performance indicators
      //invalidatesTags=['Products']    //choice to get the updated list of certain tags when i perfom get pr whatever request
      //redux toolkit query doc CHECK IT OUT THORUGHLY
    }),

    ///////////////////////////////////////////////////////////////
    // postKpis: build.mutation<Array<GetKpisResponse>, void>({
    //   //this is for post //if i wanna do any lateration on the db i do mutation instead of query... check documentation
    //   query: () => 'kpi/kpis/',
    //   providesTags: ['Kpis'], //key performance indicators
    // }),
    ///////////////////////////////////////////////////////////////

    getProducts: build.query<Array<GetProductsResponse>, void>({
      query: () => '/product/products/',
      providesTags: ['Products'],
    }),
    getTransactions: build.query<Array<GetTransactionsResponse>, void>({
      query: () => '/transaction/transactions/',
      providesTags: ['Transactions'],
    }),
  }),
});

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;
