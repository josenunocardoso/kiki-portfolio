import { create } from 'zustand';
import { MediaItem } from '../types/media';
import { MOCK_MEDIA } from '../data/mockData';

interface GalleryState {
  items: MediaItem[];
  filter: string | null;
  setFilter: (category: string | null) => void;
  selectedMedia: MediaItem | null;
  setSelectedMedia: (item: MediaItem | null) => void;
}

export const useGalleryStore = create<GalleryState>((set) => ({
  items: MOCK_MEDIA,
  filter: null,
  setFilter: (category) => set({ filter: category }),
  selectedMedia: null,
  setSelectedMedia: (item) => set({ selectedMedia: item }),
}));
