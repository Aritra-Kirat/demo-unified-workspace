import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Simulate a login process
    setTimeout(() => {
      setLoading(false);
      // Do not navigate, just add a #
    }, 1000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // Simulate a password change process
    setTimeout(() => {
      setLoading(false);
      setMessage("Password changed successfully!");
    }, 1000);
  };

  const toggleScreen = () => {
    setIsLoginScreen(!isLoginScreen);
    setMessage("");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center p-4">
      <div className="flex items-center self-start lg:px-[35px] md:px-[35px] sm:px-[0px] w-full">
        <img src="/images/Logo.png" alt="Logo" className="w-[40px] h-[25px]" />
        <div className="text-white text-[25px] ml-2">Corpus</div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center flex-grow">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <p className="text-[16px] text-white mb-4">{isLoginScreen ? "WELCOME BACK" : ""}</p>
          <h2 className="text-[24px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] text-white leading-[28px] sm:leading-[28px] md:leading-[36px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px] pb-1">
            {isLoginScreen ? "Login to your account" : "Change your password"}
          </h2>
          <p className="text-white text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
            {isLoginScreen ? "Please enter your credentials to login." : "Please enter your details to change your password."}
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <div className="bg-[#004851] rounded-lg p-4 md:p-6 shadow-[0_0_20px_rgba(255,255,255,0.7)] w-full max-w-md">
            {loading ? (
              <div>Loading...</div>
            ) : isLoginScreen ? (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="shadow appearance-none border-0 w-full py-2 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline rounded-full"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="shadow appearance-none border-0 rounded-full w-full py-2 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    style={{ cursor: 'pointer' }}
                    className="bg-[#80b2c7] hover:bg-[#78a6b9] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full rounded-full"
                    type="submit"
                    disabled={loading}
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); toggleScreen(); }}
                    className="text-white text-sm font-bold mx-auto"
                    style={{ cursor: 'pointer' }}
                  >
                    Change Password
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={() => navigate("/registration")}
                    className="text-white text-sm font-bold mx-auto"
                    style={{ cursor: 'pointer' }}
                  >
                    Back to Registration
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={goToHome}
                    className="text-white text-sm font-bold mx-auto"
                    style={{ cursor: 'pointer' }}
                  >
                    Back to Home
                  </button>
                </div>
                {message && <p className="mt-4 text-center text-white text-xs italic">{message}</p>}
              </form>
            ) : (
              <form onSubmit={handleChangePassword}>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="shadow appearance-none border-0 rounded-full w-full py-2 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="currentPassword">
                    Current Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="currentPassword"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Enter your current password"
                      className="shadow appearance-none border-0 rounded-full w-full py-2 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="newPassword">
                    New Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
                      className="shadow appearance-none border-0 rounded-full w-full py-2 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </button>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmNewPassword">
                    Confirm New Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmNewPassword"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      placeholder="Confirm your new password"
                      className="shadow appearance-none border-0 rounded-full w-full py-2 px-3 text-black bg-[#cababa] leading-tight focus:outline-none focus:shadow-outline pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
                      style={{ cursor: 'pointer' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    style={{ cursor: 'pointer' }}
                    className="bg-[#80b2c7] hover:bg-[#78a6b9] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full rounded-full"
                    type="submit"
                    disabled={loading}
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    {loading ? "Changing password..." : "Change Password"}
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={(e) => { e.preventDefault(); toggleScreen(); }}
                    className="text-white text-sm font-bold mx-auto"
                    style={{ cursor: 'pointer' }}
                  >
                    Back to Login
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={goToHome}
                    className="text-white text-sm font-bold mx-auto"
                    style={{ cursor: 'pointer' }}
                  >
                    Back to Home
                  </button>
                </div>
                {message && <p className="mt-4 text-center text-white text-xs italic">{message}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
