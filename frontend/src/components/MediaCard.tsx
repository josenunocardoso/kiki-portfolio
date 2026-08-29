import React, { useState } from 'react';
import { MediaItem } from '../types/media';
import { useGalleryStore } from '../store/useGalleryStore';
import { useLazyLoad } from '../hooks/useLazyLoad';

interface MediaCardProps {
  item: MediaItem;
}

const MediaCard: React.FC<MediaCardProps> = React.memo(({ item }) => {
  const setSelectedMedia = useGalleryStore((state) => state.setSelectedMedia);
  const { isVisible, elementRef } = useLazyLoad();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div ref={elementRef} className="break-inside-avoid mb-4">
      {isVisible ? (
        <div
          className="relative overflow-hidden cursor-pointer rounded-sm bg-gray-100 aspect-square"
          onClick={() => setSelectedMedia(item)}
        >
          <img
            src={item.thumbnailUrl}
            alt={item.title}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'blur-0 opacity-100' : 'blur-lg opacity-50'
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      ) : (
        <div className="bg-gray-100 aspect-square rounded-sm" />
      )}
    </div>
  );
});

export default MediaCard;
