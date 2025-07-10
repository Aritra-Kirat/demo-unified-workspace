import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Gsuite = ({ onClose }) => {
  const [selectedFileName, setSelectedFileName] = useState("");
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const instructions = [
    {
      title: "Step 1: Go to Google Cloud Console",
      description: "Open: <a href='https://console.cloud.google.com/' target='_blank' rel='noopener noreferrer' style='color: blue;'>Google Cloud Console</a>"
    },
    {
      title: "Step 2: Create a New Project",
      description: "Click the project dropdown (top left) → 'New Project'. Name it (e.g., Gmail API Project). Click Create."
    },
    {
      title: "Step 3: Enable Gmail API",
      description: "Select your project. Navigate to 'APIs & Services' > 'Library'. Search for 'Gmail API'. Click it and then click Enable."
    },
    {
      title: "Step 4: Enable Other APIs",
      description: "In the same way, enable the following APIs: Google Calendar API, Google Drive API, Google Docs API, Google Sheets API, Google Slides API."
    },
    {
      title: "Step 5: Create OAuth 2.0 Credentials (Part 1)",
      description: "Go to 'APIs & Services' > 'Credentials'. Click '+ Create Credentials' → Choose 'OAuth client ID'."
    },
    {
      title: "Step 6: Configure OAuth Consent Screen",
      description: "If prompted, configure the OAuth Consent Screen: User Type: External. Add App Name, User Support Email, and Developer Info. Scopes: Add https://www.googleapis.com/auth/gmail.modify. Add test users (your Google email). Save and Continue."
    },
    {
      title: "Step 7: Create OAuth Credentials (Part 2)",
      description: "Application Type: Desktop App. Name: e.g., Gmail Desktop. Click Create. Click Download JSON and save it as credentials.json in your project folder."
    },
    {
      title: "Step 8: Add Scopes and Users",
      description: "Head to Data Access → Click Add or Remove Scopes → Search Gmail API and Enable All The Scopes From Top → Do the same for all the other APIs → Click on Update → Now Save. Click on Audience tab → Click on Add Users → Enter your Gmail → Click on Add."
    },
    {
      title: "Step 9: Create Client",
      description: "Go to Clients tab → Click on Create Client → Choose Web Application → Enter Your Name → Add Authorized Redirect URLs: https://api2.unified.kiratitsolutions.net/auth/callback → Click on Create."
    },
    {
      title: "Step 10: Download credentials.json",
      description: "Download the JSON file (This is your credentials.json)."
    }
  ];

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFileName(file.name);
    } else {
      setSelectedFileName("");
    }
  };

  const handleCloseInstructions = () => {
    setShowInstructionsModal(false);
  };

  const goToNextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % instructions.length);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) =>
      prevStep === 0 ? instructions.length - 1 : prevStep - 1
    );
  };

  const handleShowVideo = () => setShowVideoModal(true);
  const handleCloseVideo = () => setShowVideoModal(false);

  return (
    <>
      <div className="fixed inset-0 z-[998]" style={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(255,255,255,0.1)" }} onClick={onClose}></div>
      <div className="fixed inset-0 z-[999] flex items-center justify-center">
        <div className="relative p-6 rounded-xl shadow-2xl backdrop-blur-md bg-white/80 w-[420px]" onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl" onClick={onClose}>&times;</button>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <FcGoogle className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800">G-Suite</h3>
            </div>
          </div>
          <div className="mt-6 text-base">
            <p className="text-gray-700 mb-3 leading-relaxed">
              Please upload your <span className="font-mono bg-blue-50 text-blue-800 px-2 py-1 rounded-md text-sm">credentials.json</span> file to connect your G Suite account.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-5">
              <input type="file" id="credentialsUpload" className="hidden" accept=".json" onChange={handleFileChange} />
              <label htmlFor="credentialsUpload" className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg text-center text-base text-[14px] whitespace-nowrap">
                Upload file
              </label>
              <span id="fileName" className="text-gray-500 text-sm italic break-all overflow-hidden text-ellipsis w-full">
                {selectedFileName ? `File selected: ${selectedFileName}` : "No file chosen"}
              </span>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer text-left font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md hover:underline" onClick={() => setShowInstructionsModal(true)}>
              How to create credentials.json to proceed further?
            </button>
            <div className="mt-4 flex justify-between items-center">
              <button className="p-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg cursor-pointer hover:bg-gray-300 transition-all text-center hover:scale-105 hover:shadow-lg" onClick={handleShowVideo}>
                Watch a tutorial
              </button>
              <button className="p-2.5 border border-blue-600 text-blue-600 font-medium rounded-lg cursor-pointer hover:bg-gray-300 transition-all text-center hover:scale-105 hover:shadow-lg" onClick={onClose}>
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {showInstructionsModal && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-30 backdrop-blur-sm z-[998]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[999]">
            <div className="bg-white rounded-xl p-8 shadow-2xl w-[600px] h-[400px] flex flex-col transform transition-all duration-300 ease-in-out scale-100 opacity-100 animate-fade-in-scale">
              <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h4 className="text-base font-bold text-gray-800">Instructions for Creating Credentials</h4>
                <button onClick={handleCloseInstructions} className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100" aria-label="Close instructions">
                  <IoClose className="w-7 h-7" />
                </button>
              </div>
              <div className="text-gray-700 text-xs leading-relaxed space-y-4 flex-grow flex flex-col">
                <p>To create your <span className="font-mono bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded-md text-xs">credentials.json</span> file, follow these steps:</p>
                <div className="relative flex-grow flex flex-col justify-between overflow-hidden">
                  <div className="flex-grow pr-4 custom-scrollbar h-[170px] overflow-y-auto">
                    <h5 className="text-xs font-semibold text-gray-900 mb-3">{instructions[currentStep].title}</h5>
                    <div dangerouslySetInnerHTML={{ __html: instructions[currentStep].description }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-6 pt-4 border-t flex-shrink-0">
                    <button onClick={goToPreviousStep} className={`p-2 rounded-full bg-blue-500 text-white transition-colors shadow-md ${currentStep === 0 ? 'opacity-50 cursor-not-allowed bg-gray-300' : 'hover:bg-blue-600'}`} aria-label="Previous step" disabled={currentStep === 0}>
                      <BsArrowLeftCircleFill className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-medium text-gray-600">{currentStep + 1} / {instructions.length}</span>
                    <button onClick={goToNextStep} className={`p-2 rounded-full bg-blue-500 text-white transition-colors shadow-md ${currentStep === instructions.length - 1 ? 'opacity-50 cursor-not-allowed bg-gray-300' : 'hover:bg-blue-600'}`} aria-label="Next step" disabled={currentStep === instructions.length - 1}>
                      <BsArrowRightCircleFill className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showVideoModal && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-30 backdrop-blur-sm z-[998]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[999]">
            <div className="bg-white rounded-xl p-6 shadow-2xl w-[600px] h-[400px] flex flex-col transform transition-all duration-300 ease-in-out scale-100 opacity-100 animate-fade-in-scale">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-base font-bold text-gray-800">How to create credentials.json?</h4>
                <button onClick={handleCloseVideo} className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100" aria-label="Close video">
                  <IoClose className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-grow">
                <video width="100%" height="100%" controls className="rounded-lg w-full h-full object-contain">
                  <source src="/gsuite_credentials_json_tutorial.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Gsuite;
