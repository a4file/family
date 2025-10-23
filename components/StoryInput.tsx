
import React from 'react';

interface StoryInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const StoryInput: React.FC<StoryInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <label htmlFor="parent-story" className="block text-lg font-semibold text-gray-700 mb-2">
        2. 그림을 보고 떠오른 이야기를 들려주세요
      </label>
      <textarea
        id="parent-story"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="예) 커다란 공룡이 나타나서 친구들과 신나게 놀았어요..."
        rows={6}
        className="w-full p-3 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow shadow-inner bg-white"
      />
    </div>
  );
};
