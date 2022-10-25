import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submitLogin = async () => {
    const requestOptions: any = {
      method: "POST",

      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    const response = await fetch(
      "http://localhost:3000/api/login/",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      alert("Invalid Login Details");
    } else {
      localStorage.setItem("access_token", data.access_token);
      router.push("/messages");
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    submitLogin();
  };
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div className="bg-white-100 h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-black lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <h1 className="flex items-center justify-center">
            Login Below to See The Messages
          </h1>

          <form className="p-12 md:p-24">
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <input
                type="text"
                id="username"
                className="bg-black-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <input
                type="password"
                id="password"
                className="bg-black-200 pl-12 py-2 md:py-4 focus:outline-none w-full "
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
