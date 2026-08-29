import React from 'react';
import { useGalleryStore } from '../store/useGalleryStore';

const Lightbox: React.FC = () => {
  const { selectedMedia, setSelectedMedia } = useGalleryStore();

  if (!selectedMedia) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={() => setSelectedMedia(null)}
    >
      <div className="max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <img 
          src={selectedMedia.assetUrl} 
          alt={selectedMedia.title} 
          className="max-w-full max-h-[80vh] object-contain"
        />
        <div className="text-white mt-4">
          <h2 className="text-xl font-bold">{selectedMedia.title}</h2>
          <p className="text-sm text-gray-300">{selectedMedia.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
