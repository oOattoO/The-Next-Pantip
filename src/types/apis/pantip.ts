type DataItemGetHighlight = {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
};

export type GetHighlightResponse = {
  success: boolean;
  data: DataItemGetHighlight[];
};

type DataItemGetRoomRecommend = {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
};

export type GetRoomRecommendResponse = {
  success: boolean;
  data: DataItemGetRoomRecommend[];
};
