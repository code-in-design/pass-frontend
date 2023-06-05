import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addTokenToHeader, fetchAccessToken } from '../../../app/api';
import { urls } from '@/constants/url';
import { ScoresModel } from '@/models/ScoresModel';

const scoresModel = new ScoresModel();

export const scoresApi = createApi({
  reducerPath: 'score',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}`,
    prepareHeaders: addTokenToHeader,
    responseHandler: fetchAccessToken,
  }),

  endpoints: builder => ({
    //성적 확정 전 성적 입력하기
    setPreScores: builder.mutation({
      query: (data: any) => {
        if (data.inquiry1OptionalSubject.value === '미응시') {
          data.inquiry1RawScore = 0;
        }
        if (data.inquiry2OptionalSubject.value === '미응시') {
          data.inquiry2RawScore = 0;
        }
        const bodyData = scoresModel.formatModelData(data);
        return {
          url: `/pre-scores`,
          method: 'POST',
          body: bodyData,
        };
      },
    }),
    //성적 확정 전 내 성적 확인하기
    fetchPreScores: builder.query<any, void>({
      query: () => '/pre-scores/me',
      transformResponse: (res: any) => {
        const data = JSON.parse(res);
        const transData = scoresModel.setModelData(data);
        return transData;
      },
    }),

    //성적 확정 후 성적 입력하기
    setScores: builder.mutation({
      query: data => {
        if (data.inquiry1OptionalSubject.value === '미응시') {
          data.inquiry1StandardScore = 0;
          data.inquiry1Percentile = 0;
          data.inquiry1Grade = 9;
        }
        if (data.inquiry2OptionalSubject.value === '미응시') {
          data.inquiry2StandardScore = 0;
          data.inquiry2Percentile = 0;
          data.inquiry2Grade = 9;
        }
        const bodyData = scoresModel.formatModelConfirmData();
        return {
          url: `/scores`,
          method: 'POST',
          body: bodyData,
        };
      },
    }),
    //성적 확정 후 내 성적 확인하기
    fetchScores: builder.query<any, void>({
      query: () => '/scores/me',
      transformResponse: (res: any) => {
        const data = JSON.parse(res);
        const transData = scoresModel.setModelData(data);
        return transData;
      },
    }),
  }),
});

export const { useFetchPreScoresQuery, useFetchScoresQuery, useSetPreScoresMutation, useSetScoresMutation } = scoresApi;
