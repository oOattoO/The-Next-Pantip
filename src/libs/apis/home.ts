import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '@/libs/apis/base-query';
import type {
  GetHighlightResponse,
  GetRoomRecommendResponse,
} from '@/types/apis/pantip';

const formData = new FormData();
formData.append('type', 'social');
formData.append('limit', '1');
// formData.append('ignore_list[0]', 'social');
// formData.append('ignore_list[1]', 'ratchada');
// formData.append('ignore_list[2]', 'sinthorn');
// formData.append('ignore_list[3]', 'lumpini');
// formData.append('ignore_list[4]', 'siliconvalley');
// formData.append('ignore_list[5]', 'silom');
// formData.append('ignore_list[6]', 'home');

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
      suggestTopic: build.query({
        query: () => ({
          url: '/api/forum-service/home/get_suggest_topic_popular',
          method: 'POST',
          data: formData,
        }),
      }),
    };
  },
});

export const {
  useGetRoomRecommendQuery,
  useGetHighlightQuery,
  useSuggestTopicQuery,
} = home;
export default home;
