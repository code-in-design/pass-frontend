import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addTokenToHeader, fetchAccessToken } from '../../../app/api';
import { urls } from '@/constants/url';
import { ScoreModel } from '@/models/ScoreModel';
import { scoresActions } from '../slices/scoresSlice';

const scoreModel = new ScoreModel();

export const scoresApi = createApi({
  reducerPath: 'scoresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${urls.baseUrl}`,
    prepareHeaders: addTokenToHeader,
    responseHandler: fetchAccessToken,
  }),
  endpoints: builder => ({
    //성적 확정 전 성적 입력하기
    setPreScores: builder.mutation({
      query: (data: any) => {
        if (data.inquiry1OptionalSubject === '미응시') {
          data.inquiry1RawScore = 0;
        }
        if (data.inquiry2OptionalSubject === '미응시') {
          data.inquiry2RawScore = 0;
        }
        if (!data.mathOptionalSubject) {
          data.mathOptionalSubject = '';
          data.mathStandardScore = 0;
        }
        const bodyData = scoreModel.formatModelData(data);
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
        try {
          const data = JSON.parse(res);
          const transData = scoreModel.setModelData(data);
          return transData;
        } catch {}
      },
    }),
    //성적 확정 후 성적 입력하기
    setScores: builder.mutation({
      query: data => {
        if (data.inquiry1OptionalSubject === '미응시') {
          data.inquiry1StandardScore = 0;
          data.inquiry1Percentile = 0;
          data.inquiry1Grade = 9;
        }
        if (data.inquiry2OptionalSubject === '미응시') {
          data.inquiry2StandardScore = 0;
          data.inquiry2Percentile = 0;
          data.inquiry2Grade = 9;
        }
        const bodyData = scoreModel.formatModelConfirmData(data);
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
      transformResponse: (res: any, meta) => {
        try {
          const data = JSON.parse(res);
          const transData = scoreModel.setModelData(data);
          return transData;
        } catch {}
      },
    }),
  }),
});

export const { useFetchPreScoresQuery, useFetchScoresQuery, useSetPreScoresMutation, useSetScoresMutation } = scoresApi;
function dispatch(arg0: { payload: any; type: 'scores/setTranscript' }) {
  throw new Error('Function not implemented.');
}
