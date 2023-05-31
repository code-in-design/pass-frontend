import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addTokenToHeader, fetchAccessToken } from '../../../app/api';
import { devBaseUrl } from '@/constants/url';

export const scoresApi = createApi({
  reducerPath: 'score',
  baseQuery: fetchBaseQuery({
    baseUrl: `${devBaseUrl}`,
    prepareHeaders: addTokenToHeader,
    responseHandler: fetchAccessToken,
  }),

  endpoints: builder => ({
    //성적 확정 전 성적 입력하기
    setPreScores: builder.mutation({
      query: data => {
        return {
          url: `/pre-scores`,
          method: 'POST',
          body: {
            korean_type: data.koreanType,
            korean_score: Number(data.koreanScore),
            english_grade: Number(data.englishGrade),
            math_type: data.mathType,
            math_score: Number(data.mathScore),
            inquiry1_type: data.inquiry1Type.value,
            inquiry1_score: Number(data.inquiry1Score),
            inquiry2_type: data.inquiry2Type.value,
            inquiry2_score: Number(data.inquiry2Score),
            kor_history_grade: Number(data.historyGrade),
            naesin_grade: parseFloat(data.naesinGrade),
          },
        };
      },
    }),
    //성적 확정 전 내 성적 확인하기
    fetchPreScores: builder.query<any, void>({
      query: () => '/pre-scores/me',
    }),

    //성적 확정 후 성적 입력하기
    setScores: builder.mutation({
      query: data => {
        return {
          url: `/scores`,
          method: 'POST',
          body: {
            korean_type: data.koreanType,
            korean_std_score: data.koreanScore,
            korean_percentile: data.koreanPercentile,
            korean_grade: data.koreanGrade,
            english_grade: data.englishGrade,
            math_type: data.mathType,
            math_std_score: data.mathScore,
            math_percentile: data.mathPercentile,
            math_grade: data.mathGrade,
            inquiry1_type: data.inquiry1Type,
            inquiry1_std_score: data.inquiry1Score,
            inquiry1_percentile: data.inquiry1Percentile,
            inquiry1_grade: data.inquiry1Grade,
            inquiry2_type: data.inquiry2Type,
            inquiry2_std_score: data.inquiry2Score,
            inquiry2_percentile: data.inquiry2Percentile,
            inquiry2_grade: data.inquiry2Grade,
            kor_history_grade: data.historyGrade,
            naesin_grade: data.naesinGrade,
          },
        };
      },
    }),
    //성적 확정 전 내 성적 확인하기
    fetchScores: builder.query<any, void>({
      query: () => '/scores/me',
    }),
  }),
});

export const { useFetchPreScoresQuery, useFetchScoresQuery, useSetPreScoresMutation, useSetScoresMutation } = scoresApi;
