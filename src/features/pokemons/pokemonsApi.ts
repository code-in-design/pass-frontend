import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// base URL과 엔드포인트들로 서비스 정의
export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi', // "pokemonsApi"이라는 이름으로 reducer가 등록됨 -> store/index.ts 참고
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: builder => ({
    getAllPokemon: builder.query({ query: () => ({ url: '' }) }),
    getMoreDetails: builder.query({ query: url => ({ url: url }) }),
    getRangeData: builder.query({ query: offset => ({ url: `?offset=${offset}&limit=20` }) }),
    getPokemonByName: builder.query({ query: name => `/${name}` }), // 'https://pokeapi.co/api/v2/pokemon/${name}' 으로 API 호출됨 ${name}부분은 useGetPokemonByNameQuery을 호출할때 넣어줌
  }),
});
