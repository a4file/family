
import React from 'react';

interface StorybookPageProps {
  imageUrl: string;
  story: string;
}

export const StorybookPage: React.FC<StorybookPageProps> = ({ imageUrl, story }) => {
  return (
    <div className="w-full h-full bg-white rounded-lg shadow-xl p-6 flex flex-col animate-fade-in">
      <div className="w-full h-56 sm:h-64 mb-4 rounded-md overflow-hidden flex items-center justify-center">
        <img src={imageUrl} alt="아이의 동화 그림" className="max-h-full max-w-full object-contain" />
      </div>
      <div className="flex-grow overflow-y-auto pr-2">
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
          {story}
        </p>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
