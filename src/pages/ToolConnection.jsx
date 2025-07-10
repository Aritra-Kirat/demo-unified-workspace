import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiSlack, SiNotion } from "react-icons/si";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaDoorOpen, FaPlane } from "react-icons/fa";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Gsuite from "../Gsuite";

const ToolConnection = ({ showButtons = true }) => {
  const navigate = useNavigate();
  const [showGsuiteModal, setShowGsuiteModal] = useState(false);
  const [showSlackModal, setShowSlackModal] = useState(false);
  const [showNotionModal, setShowNotionModal] = useState(false);
  const [slackSecret, setSlackSecret] = useState("");
  const [notionSecret, setNotionSecret] = useState("");
  const [slackConnected, setSlackConnected] = useState(false);
  const [notionConnected, setNotionConnected] = useState(true);
  const [gsuiteConnected, setGsuiteConnected] = useState(false);
  const [showRegenModal, setShowRegenModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showSlackInstructions, setShowSlackInstructions] = useState(false);
  const [showNotionInstructions, setShowNotionInstructions] = useState(false);
  const [currentSlackStep, setCurrentSlackStep] = useState(0);
  const [currentNotionStep, setCurrentNotionStep] = useState(0);
  const [shouldShowEnterButton, setShouldShowEnterButton] = useState(true);
  const [connectionDates, setConnectionDates] = useState({
    gsuite: null,
    slack: null,
    notion: new Date().toLocaleDateString()
  });

  const showPopupMessage = (msg) => {
    setPopupMessage(msg);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleSlackConnect = () => {
    setSlackConnected(true);
    setConnectionDates(prev => ({ ...prev, slack: new Date().toLocaleDateString() }));
    showPopupMessage("Slack connected successfully!");
    setShowSlackModal(false);
  };

  const handleNotionConnect = () => {
    setNotionConnected(true);
    setConnectionDates(prev => ({ ...prev, notion: new Date().toLocaleDateString() }));
    showPopupMessage("Notion connected successfully!");
    setShowNotionModal(false);
  };

  const handleGsuiteConnect = () => {
    setGsuiteConnected(true);
    setConnectionDates(prev => ({ ...prev, gsuite: new Date().toLocaleDateString() }));
    showPopupMessage("GSuite connected successfully!");
    setShowGsuiteModal(false);
  };

  const handleDisconnect = (toolName) => {
    if (toolName === "Notion") {
      showPopupMessage("Notion disconnect clicked! But nothing will happen.");
    } else if (toolName === "Slack") {
      setSlackConnected(false);
      setConnectionDates(prev => ({ ...prev, slack: null }));
    } else if (toolName === "GSuite") {
      setGsuiteConnected(false);
      setConnectionDates(prev => ({ ...prev, gsuite: null }));
    }
  };

  const handleEnterDashboard = () => {
    showPopupMessage("Navigating to dashboard...");
  };

  const handleTakeTour = () => {
    showPopupMessage("Starting the tour...");
  };

  const goToHome = () => {
    navigate("/");
  };

  const slackInstructions = [
    {
      title: "Step 1: Sign Up for Slack",
      description: "Visit <a href='https://slack.com' target='_blank' rel='noopener noreferrer' style='color: blue;'>slack.com</a>, click Sign Up, enter email/password, and create a workspace."
    },
    {
      title: "Step 2: Create a Slack App",
      description: "Go to <a href='https://api.slack.com/apps' target='_blank' rel='noopener noreferrer' style='color: blue;'>api.slack.com/apps</a>, click Create New App → From scratch, name your app, and select your workspace."
    },
    {
      title: "Step 3: Add Permissions",
      description: "In OAuth & Permissions tab, scroll to User Token Scopes, click Add an OAuth Scope, and add the following scopes: channels:history, channels:read, chat:write, im:history, im:read, im:write, mpim:history, mpim:read, mpim:write, pins:write, reactions:read, reactions:write, search:read, users.profile:read, users:read."
    },
    {
      title: "Step 4: Install the App",
      description: "Click Install to Workspace (top of OAuth & Permissions), then Allow to generate a User OAuth Token."
    },
    {
      title: "Step 5: Get the Secret Key",
      description: "Copy the User OAuth Token (starts with xoxp-) from OAuth Tokens for Your Workspace and store it securely."
    },
    {
      title: "Step 6: Refresh the Token",
      description: "To refresh the token, go to <a href='https://api.slack.com/apps' target='_blank' rel='noopener noreferrer' style='color: blue;'>api.slack.com/apps</a>, select your app, click OAuth & Permissions, and click Reinstall to Workspace to generate a new token."
    }
  ];

  const notionInstructions = [
    {
      title: "Step 1: Sign Up for Notion",
      description: "Visit <a href='https://notion.so' target='_blank' rel='noopener noreferrer' style='color: blue;'>notion.so</a>, click Sign up, enter email/password, and create an account."
    },
    {
      title: "Step 2: Access Connections",
      description: "Log in, click Settings (gear icon) in the sidebar, then select Connections."
    },
    {
      title: "Step 3: Develop or Manage Integrations",
      description: "Click on Develop or manage integrations."
    },
    {
      title: "Step 4: Create a New Integration",
      description: "Click + New integration, give it a name (e.g., 'My API'), choose your workspace, select Internal, and click Save."
    },
    {
      title: "Step 5: Configure Integration Settings",
      description: "Click on Configure Integration Settings."
    },
    {
      title: "Step 6: Set Capabilities",
      description: "In Capabilities, check permissions needed (e.g., read, insert, update content)."
    },
    {
      title: "Step 7: Get the Internal Integration Secret",
      description: "Click Show on Internal Integration Secret, copy the API key, then click Save changes."
    },
    {
      title: "Step 8: Share a Database",
      description: "Open your Notion page/database, click on the Three Dots (•••) (top-right), hover on Connections, choose your integration, and click Confirm."
    },
    {
      title: "Step 9: Refresh the Token",
      description: "To refresh the token, go to <a href='https://notion.so/my-integrations' target='_blank' rel='noopener noreferrer' style='color: blue;'>notion.so/my-integrations</a>, select your integration, click Secrets, and hit Refresh."
    }
  ];

  const goToNextSlackStep = () => {
    setCurrentSlackStep((prevStep) => (prevStep + 1) % slackInstructions.length);
  };

  const goToPreviousSlackStep = () => {
    setCurrentSlackStep((prevStep) => (prevStep === 0 ? slackInstructions.length - 1 : prevStep - 1));
  };

  const goToNextNotionStep = () => {
    setCurrentNotionStep((prevStep) => (prevStep + 1) % notionInstructions.length);
  };

  const goToPreviousNotionStep = () => {
    setCurrentNotionStep((prevStep) => (prevStep === 0 ? notionInstructions.length - 1 : prevStep - 1));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat -z-10"></div>
      <div className="absolute inset-0 backdrop-blur-md -z-10"></div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[9999]">
          <div className="bg-white p-4 rounded shadow-lg text-center flex flex-col items-center space-y-3 animate-fade-in-down">
            {popupMessage.toLowerCase().includes("success") ? (
              <FiCheckCircle className="text-green-500 text-5xl animate-pulse" />
            ) : (
              <FiAlertCircle className="text-red-500 text-5xl animate-pulse" />
            )}
            <p className="text-gray-800 font-semibold">{popupMessage}</p>
          </div>
        </div>
      )}

      {showButtons && (
        <div className="w-full max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Connect Your Apps
          </h1>
          <p className="text-white">Integrate your favorite tools to enhance your experience</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-200 transition-colors">
              <FcGoogle className="text-2xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">GSuite</h3>
            <p className="text-xs text-gray-600 mb-2">
              Email & Calendar Integrations
            </p>
            <div className="flex flex-col space-y-1">
              {!gsuiteConnected ? (
                <button
                  onClick={() => setShowGsuiteModal(true)}
                  className="px-3 py-1 rounded text-xs font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600"
                >
                  Connect
                </button>
              ) : (
                <button
                  className="px-3 py-1 rounded text-xs font-medium transition-colors bg-blue-500 text-white cursor-not-allowed"
                  disabled
                >
                  Connected
                </button>
              )}
            </div>
            {gsuiteConnected && (
              <div className="mt-2 text-xs text-gray-500">
                Connected on: {connectionDates.gsuite}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
              <SiSlack className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">Slack</h3>
            <p className="text-xs text-gray-600 mb-2">
              Team messages & updates
            </p>
            <div className="flex flex-col space-y-1">
              {!slackConnected ? (
                <button
                  onClick={() => setShowSlackModal(true)}
                  className="px-3 py-1 rounded text-xs font-medium transition-colors bg-blue-500 text-white hover:bg-blue-600"
                >
                  Connect
                </button>
              ) : (
                <button
                  className="px-3 py-1 rounded text-xs font-medium transition-colors bg-blue-500 text-white cursor-not-allowed"
                  disabled
                >
                  Connected
                </button>
              )}
            </div>
            {slackConnected && (
              <div className="mt-2 text-xs text-gray-500">
                Connected on: {connectionDates.slack}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-black rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
              <SiNotion className="text-white text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2 text-lg">Notion</h3>
            <p className="text-xs text-gray-600 mb-2">
              Docs, wikis & project notes
            </p>
            <div className="flex flex-col space-y-1">
              <button
                className="px-3 py-1 rounded text-xs font-medium transition-colors bg-green-500 text-white cursor-not-allowed"
                disabled
              >
                Connected
              </button>
              <button
                onClick={() => handleDisconnect("Notion")}
                className="px-3 py-1 rounded text-xs font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Disconnect
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Connected on: {connectionDates.notion}
            </div>
          </div>
        </div>
      </div>

      {showButtons && shouldShowEnterButton && (
        <button
          onClick={handleEnterDashboard}
          className="fixed bottom-6 left-6 z-50 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 hover:shadow-xl ml-[350px]"
          title="Enter Executive Dashboard"
        >
          <FaDoorOpen className="mr-2" />
          Enter Dashboard
        </button>
      )}

      {showButtons && (
        <button
          onClick={handleTakeTour}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 hover:shadow-xl mr-[350px]"
          title="Take a Tour"
        >
          <FaPlane className="mr-2" />
          Take a Tour
        </button>
      )}

      <button
        onClick={goToHome}
        className="fixed bottom-6 z-50 flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 hover:shadow-xl"
        title="Back to Home"
      >
        Back to Home
      </button>

      {showSlackModal && (
        <>
          <div className="fixed inset-0 bg-opacity-50 z-998" style={{ backdropFilter: "blur(5px)" }}></div>
          <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
              <button
                onClick={() => {
                  setShowSlackModal(false);
                  setSlackSecret("");
                }}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <IoClose className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-bold mb-4">Connect Slack</h2>
              <input
                type="text"
                placeholder="Enter Slack Secret Key"
                value={slackSecret}
                onChange={(e) => setSlackSecret(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <button
                onClick={handleSlackConnect}
                className={`w-full py-2 rounded text-white ${slackSecret ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
                disabled={!slackSecret}
              >
                Connect
              </button>
              <button
                onClick={() => setShowSlackInstructions(true)}
                className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer text-left font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md hover:underline mt-4"
              >
                How to get Slack Secret Key?
              </button>
            </div>
          </div>

          {showSlackInstructions && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-opacity-30 backdrop-blur-sm z-[998]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[999]">
                <div className="bg-white rounded-xl p-8 shadow-2xl w-[600px] h-[400px] flex flex-col transform transition-all duration-300 ease-in-out scale-100 opacity-100 animate-fade-in-scale">
                  <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h4 className="text-base font-bold text-gray-800">
                      Instructions for Getting Slack Secret Key
                    </h4>
                    <button
                      onClick={() => setShowSlackInstructions(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                      aria-label="Close instructions"
                    >
                      <IoClose className="w-7 h-7" />
                    </button>
                  </div>
                  <div className="text-gray-700 text-xs leading-relaxed space-y-4 flex-grow flex flex-col">
                    <div className="relative flex-grow flex flex-col justify-between overflow-hidden">
                      <div className="flex-grow pr-4 custom-scrollbar h-[170px] overflow-y-auto">
                        <h5 className="text-xs font-semibold text-gray-900 mb-3">
                          {slackInstructions[currentSlackStep].title}
                        </h5>
                        <div dangerouslySetInnerHTML={{ __html: slackInstructions[currentSlackStep].description }} />
                      </div>
                      <div className="flex justify-between items-center mt-6 pt-4 border-t flex-shrink-0">
                        <button
                          onClick={goToPreviousSlackStep}
                          className={`p-2 rounded-full bg-blue-500 text-white transition-colors shadow-md ${
                            currentSlackStep === 0 ? 'opacity-50 cursor-not-allowed bg-gray-300' : 'hover:bg-blue-600'
                          }`}
                          aria-label="Previous step"
                          disabled={currentSlackStep === 0}
                        >
                          <BsArrowLeftCircleFill className="w-5 h-5" />
                        </button>
                        <span className="text-xs font-medium text-gray-600">
                          {currentSlackStep + 1} / {slackInstructions.length}
                        </span>
                        <button
                          onClick={goToNextSlackStep}
                          className={`p-2 rounded-full bg-blue-500 text-white transition-colors shadow-md ${
                            currentSlackStep === slackInstructions.length - 1 ? 'opacity-50 cursor-not-allowed bg-gray-300' : 'hover:bg-blue-600'
                          }`}
                          aria-label="Next step"
                          disabled={currentSlackStep === slackInstructions.length - 1}
                        >
                          <BsArrowRightCircleFill className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {showNotionModal && (
        <>
          <div className="fixed inset-0 bg-opacity-50 z-998" style={{ backdropFilter: "blur(5px)" }}></div>
          <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-96 relative">
              <button
                onClick={() => {
                  setShowNotionModal(false);
                  setNotionSecret("");
                }}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <IoClose className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-bold mb-4">Connect Notion</h2>
              <input
                type="text"
                placeholder="Enter Notion Secret Key"
                value={notionSecret}
                onChange={(e) => setNotionSecret(e.target.value)}
                className="w-full p-2 border rounded mb-4"
              />
              <button
                onClick={handleNotionConnect}
                className={`w-full py-2 rounded text-white ${notionSecret ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-300 cursor-not-allowed'}`}
                disabled={!notionSecret}
              >
                Connect
              </button>
              <button
                onClick={() => setShowNotionInstructions(true)}
                className="text-blue-600 hover:text-blue-800 text-sm cursor-pointer text-left font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-md hover:underline mt-4"
              >
                How to get Notion Secret Key?
              </button>
            </div>
          </div>

          {showNotionInstructions && (
            <>
              <div className="fixed top-0 left-0 w-full h-full bg-opacity-30 backdrop-blur-sm z-[998]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-[999]">
                <div className="bg-white rounded-xl p-8 shadow-2xl w-[600px] h-[400px] flex flex-col transform transition-all duration-300 ease-in-out scale-100 opacity-100 animate-fade-in-scale">
                  <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h4 className="text-base font-bold text-gray-800">
                      Instructions for Getting Notion Secret Key
                    </h4>
                    <button
                      onClick={() => setShowNotionInstructions(false)}
                      className="text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1 rounded-full hover:bg-gray-100"
                      aria-label="Close instructions"
                    >
                      <IoClose className="w-7 h-7" />
                    </button>
                  </div>
                  <div className="text-gray-700 text-xs leading-relaxed space-y-4 flex-grow flex flex-col">
                    <div className="relative flex-grow flex flex-col justify-between overflow-hidden">
                      <div className="flex-grow pr-4 custom-scrollbar h-[170px] overflow-y-auto">
                        <h5 className="text-xs font-semibold text-gray-900 mb-3">
                          {notionInstructions[currentNotionStep].title}
                        </h5>
                        <div dangerouslySetInnerHTML={{ __html: notionInstructions[currentNotionStep].description }} />
                      </div>
                      <div className="flex justify-between items-center mt-6 pt-4 border-t flex-shrink-0">
                        <button
                          onClick={goToPreviousNotionStep}
                          className={`p-2 rounded-full bg-blue-500 text-white transition-colors shadow-md ${
                            currentNotionStep === 0 ? 'opacity-50 cursor-not-allowed bg-gray-300' : 'hover:bg-blue-600'
                          }`}
                          aria-label="Previous step"
                          disabled={currentNotionStep === 0}
                        >
                          <BsArrowLeftCircleFill className="w-5 h-5" />
                        </button>
                        <span className="text-xs font-medium text-gray-600">
                          {currentNotionStep + 1} / {notionInstructions.length}
                        </span>
                        <button
                          onClick={goToNextNotionStep}
                          className={`p-2 rounded-full bg-blue-500 text-white transition-colors shadow-md ${
                            currentNotionStep === notionInstructions.length - 1 ? 'opacity-50 cursor-not-allowed bg-gray-300' : 'hover:bg-blue-600'
                          }`}
                          aria-label="Next step"
                          disabled={currentNotionStep === notionInstructions.length - 1}
                        >
                          <BsArrowRightCircleFill className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}

      {showGsuiteModal && (
        <Gsuite onClose={() => setShowGsuiteModal(false)} />
      )}

      {showRegenModal && (
        <>
          <div
            className="fixed inset-0 z-998"
            style={{
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          ></div>
          <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <div>
              <h2 className="text-lg font-bold mb-4">Regenerate GSuite Token</h2>
              <p>Regenerate GSuite token logic goes here.</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ToolConnection;
