
import React, { useState, useCallback } from 'react';
import { generateStory } from './services/geminiService';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { StoryInput } from './components/StoryInput';
import { StorybookPage } from './components/StorybookPage';
import { Loader } from './components/Loader';
import { SparklesIcon } from './components/icons';

const App: React.FC = () => {
  const [drawingUrl, setDrawingUrl] = useState<string | null>(null);
  const [parentStory, setParentStory] = useState<string>('');
  const [finalStory, setFinalStory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (typeof result === 'string') {
        setDrawingUrl(result);
        setFinalStory(null); // Reset story when new image is uploaded
      }
    };
    reader.readAsDataURL(file);
  };

  const handleGenerateStory = useCallback(async () => {
    if (!parentStory.trim() || !drawingUrl) {
      setError('그림을 올리고, 이야기를 들려주세요!');
      return;
    }

    setIsLoading(true);
    setError(null);
    setFinalStory(null);

    try {
      const refinedStory = await generateStory(parentStory);
      setFinalStory(refinedStory);
    } catch (err) {
      console.error(err);
      setError('이야기를 만드는 데 실패했어요. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  }, [parentStory, drawingUrl]);

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800 flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header />
        <main className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200 flex flex-col space-y-6">
            <ImageUploader onImageUpload={handleImageChange} previewUrl={drawingUrl} />
            <StoryInput value={parentStory} onChange={setParentStory} />
            
            <button
              onClick={handleGenerateStory}
              disabled={!drawingUrl || !parentStory.trim() || isLoading}
              className="w-full flex items-center justify-center gap-2 bg-rose-500 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-rose-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
            >
              {isLoading ? (
                <>
                  <Loader />
                  <span>동화책 만드는 중...</span>
                </>
              ) : (
                <>
                  <SparklesIcon className="w-6 h-6" />
                  <span>세상에 하나뿐인 동화책 만들기</span>
                </>
              )}
            </button>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200 min-h-[400px] flex flex-col justify-center items-center">
            {isLoading && (
              <div className="text-center">
                <p className="text-lg text-amber-700">두근두근... <br/> 어떤 이야기가 탄생할까요?</p>
              </div>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {!isLoading && finalStory && drawingUrl && (
              <StorybookPage imageUrl={drawingUrl} story={finalStory} />
            )}
            {!isLoading && !finalStory && !error && (
              <div className="text-center text-amber-600/80 p-8">
                <p className="text-xl font-semibold">완성된 동화책 페이지가</p>
                <p className="mt-2">이곳에 나타날 거예요!</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
