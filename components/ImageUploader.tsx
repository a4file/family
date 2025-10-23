
import React, { useRef } from 'react';
import { UploadIcon } from './icons';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  previewUrl: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, previewUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      onImageUpload(event.target.files[0]);
    }
  };

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <label htmlFor="story-image" className="block text-lg font-semibold text-gray-700 mb-2">
        1. 아이의 그림을 올려주세요
      </label>
      <div
        onClick={handleDropzoneClick}
        className="w-full h-64 border-2 border-dashed border-amber-400 rounded-xl flex flex-col justify-center items-center text-center text-amber-600 cursor-pointer hover:bg-amber-100/50 transition-colors bg-amber-50/50"
      >
        <input
          id="story-image-input"
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {previewUrl ? (
          <img src={previewUrl} alt="아이 그림 미리보기" className="max-h-full max-w-full object-contain rounded-lg p-2" />
        ) : (
          <div className="flex flex-col items-center">
            <UploadIcon className="w-12 h-12 text-amber-500 mb-2" />
            <p className="font-semibold">클릭하거나 파일을 끌어오세요</p>
            <p className="text-sm">멋진 그림을 기다리고 있어요!</p>
          </div>
        )}
      </div>
    </div>
  );
};
