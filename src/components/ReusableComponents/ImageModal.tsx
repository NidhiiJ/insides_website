// src/components/ImageModal.tsx
import React from 'react';

interface ImageModalProps {
  imageSrc: string;
  imageAlt?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageSrc,
  imageAlt,
  onClose,
  onPrev,
  onNext,
  showPrev,
  showNext,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-light hover:scale-110 transition-transform"
      >
        ×
      </button>

      {/* Prev Button */}
      {showPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev?.();
          }}
          className="absolute left-6 text-white text-4xl font-thin hover:scale-110 transition-transform"
        >
          ‹
        </button>
      )}

      {/* Next Button */}
      {showNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext?.();
          }}
          className="absolute right-6 text-white text-4xl font-thin hover:scale-110 transition-transform"
        >
          ›
        </button>
      )}

      {/* Image */}
      <img
        src={imageSrc}
        alt={imageAlt || 'Gallery image'}
        className="max-w-[90%] max-h-[85%] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      />
    </div>
  );
};

export default ImageModal;
