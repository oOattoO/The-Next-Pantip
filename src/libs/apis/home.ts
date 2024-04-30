import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/libs/apis/base-query';
import type {
  GetHighlightResponse,
  GetRoomRecommendResponse,
} from '@/types/apis/pantip';

const home = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints(build) {
    return {
      getRoomRecommend: build.query({
        query: () => ({
          url: '/api/forum-service/home/get_room_recommend',
          method: 'GET',
          params: { tracking_code: '\\{s9mg4kventBx3vnITTkV\\}' },
        }),
        transformResponse: (response: GetRoomRecommendResponse) => {
          return response.data;
        },
        transformErrorResponse: (err) => {
          return err;
        },
      }),
      getHighlight: build.query({
        query: () => ({
          url: '/api/forum-service/home/get_highlight',
          method: 'GET',
          params: { tracking_code: '\\{s9mg4kventBx3vnITTkV\\}' },
        }),
        transformResponse: (response: GetHighlightResponse) => {
          const { data } = response;
          return data.map((item) => ({
            name: item.name,
            id: item.weight,
            image: item.image_url[0],
          }));
        },
        transformErrorResponse: (err) => {
          return err;
        },
      }),
    };
  },
});

export const { useGetRoomRecommendQuery, useGetHighlightQuery } = home;
export default home;
