import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Canvas = () => {
  const navigate = useNavigate();
  const [enlargedImage, setEnlargedImage] = useState(null);

  const goToHome = () => {
    navigate("/");
  };

  const openImage = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeImage = () => {
    setEnlargedImage(null);
  };

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Canvas Gallery</h1>
        <p className="text-white">Explore our canvas images</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
          <img
            src="/images/canvas1.png"
            alt="Canvas 1"
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => openImage("/images/canvas1.png")}
          />
          <p className="text-gray-800 mt-2">Canvas 1</p>
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
          <img
            src="/images/canvas2.png"
            alt="Canvas 2"
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => openImage("/images/canvas2.png")}
          />
          <p className="text-gray-800 mt-2">Canvas 2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
          <img
            src="/images/canvas3.jpeg"
            alt="Canvas 3"
            className="w-full h-auto rounded-lg cursor-pointer"
            onClick={() => openImage("/images/canvas3.jpeg")}
          />
          <p className="text-gray-800 mt-2">Canvas 3</p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={goToHome}
          className="flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 hover:shadow-xl"
          title="Back to Home"
        >
          Back to Home
        </button>
      </div>

      {enlargedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full">
            <button
              onClick={closeImage}
              className="absolute -top-10 right-0 text-white text-4xl hover:text-gray-300"
            >
              &times;
            </button>
            <img src={enlargedImage} alt="Enlarged view" className="max-w-full h-[75vh]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;
