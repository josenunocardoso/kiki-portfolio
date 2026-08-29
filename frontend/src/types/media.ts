export type MediaType = 'photo' | 'video';

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  assetUrl: string;
  thumbnailUrl: string;
  category: string;
  type: MediaType;
}
