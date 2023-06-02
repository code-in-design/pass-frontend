import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addTokenToHeader, fetchAccessToken } from '../../../app/api';
import { urls } from '@/constants/url';

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
        if (data.inquiry1Type.value === '미응시') {
          data.inquiry1Score = 0;
          data.inquiry1Percentile = 0;
          data.inquiry1Grade = 9;
        }
        if (data.inquiry2Type.value === '미응시') {
          data.inquiry2Score = 0;
          data.inquiry2Percentile = 0;
          data.inquiry2Grade = 9;
        }
        // if (data.naesinGrade === "") {
        //   data.naesinGrade = 9;
        // }
        return {
          url: `/scores`,
          method: 'POST',
          body: {
            korean_type: data.koreanType,
            korean_std_score: Number(data.koreanScore),
            korean_percentile: Number(data.koreanPercentile),
            korean_grade: Number(data.koreanGrade),
            english_grade: Number(data.englishGrade),
            math_type: data.mathType,
            math_std_score: Number(data.mathScore),
            math_percentile: Number(data.mathPercentile),
            math_grade: Number(data.mathGrade),
            inquiry1_type: data.inquiry1Type.value,
            inquiry1_std_score: Number(data.inquiry1Score),
            inquiry1_percentile: Number(data.inquiry1Percentile),
            inquiry1_grade: Number(data.inquiry1Grade),
            inquiry2_type: data.inquiry2Type.value,
            inquiry2_std_score: Number(data.inquiry2Score),
            inquiry2_percentile: Number(data.inquiry2Percentile),
            inquiry2_grade: Number(data.inquiry2Grade),
            kor_history_grade: Number(data.historyGrade),
            naesin_grade: Number(data.naesinGrade),
          },
        };
      },
    }),
    //성적 확정 후 내 성적 확인하기
    fetchScores: builder.query<any, void>({
      query: () => '/scores/me',
    }),
  }),
});

export const { useFetchPreScoresQuery, useFetchScoresQuery, useSetPreScoresMutation, useSetScoresMutation } = scoresApi;
