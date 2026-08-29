import React from 'react';
import { useGalleryStore } from '../store/useGalleryStore';
import MediaCard from '../components/MediaCard';
import Lightbox from '../components/Lightbox';

const GalleryPage: React.FC = () => {
  const items = useGalleryStore((state) => state.items);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 tracking-tighter uppercase">Gallery</h1>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
      <Lightbox />
    </div>
  );
};

export default GalleryPage;
