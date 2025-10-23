
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-800">
        우리 가족 동화책 만들기
      </h1>
      <p className="mt-3 text-lg text-amber-700 max-w-2xl mx-auto">
        아이의 그림에 아빠의 이야기를 더해, 세상에 단 하나뿐인 동화책 페이지를 만들어보세요.
      </p>
    </header>
  );
};
