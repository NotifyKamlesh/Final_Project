import { useState } from "react";
import { auth, provider } from "./../pages/config";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "../context/AuthContext.jsx";
import { Navigate } from "react-router-dom";

const Loginn = () => {

  const { updateUser } = useAuth();
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("email", data.user.email);
      updateUser(data.user.email);
      setRedirect(true);
    });
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <main className="w-full flex">
      
      <div className=" flex-1 hidden  justify-center h-screen bg-[#605BFF] lg:flex [clip-path:polygon(0%_0%,100%_0%,85%_100%,0%_100%)]">
      <svg className="w-[81px] h-[81px] ml-[-150px] mt-[54px]"  viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF"/>
        </svg>    
        <svg className="ml-[-84px] mt-[80px] stroke-[6px]" width="86" height="30" viewBox="0 0 87 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646" stroke="#605BFF"   />
        </svg> 


        <div>
          <div className="z-10 w-full mt-80 max-w-md justify-center">
          <h1 className="text-[72px] font-bold font- text-white ml-[100px]">BASE</h1>
          </div>
          <div className="flex mt-[280px] ml-[60px] gap-8">
            <a href="https://github.com/notifykamlesh" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="42px"
                color="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </a>
            <a href="https://twitter.com/notifykamlesh" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="41px"
                color="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/notifykamlesh/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="41px"
                viewBox="0 0 24 24"
                color="white"
              >
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
            <a href="https://discord.com/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="41px"
                color="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
     
      <div className="flex-1 flex items-center justify-center h-screen bg-[#F8FAFF]">
        <div className="w-full max-w-md space-y-8 px-4  text-gray-600 sm:px-0">
          <div className="">
          <div className="sm  lg:hidden bg-[#605BFF]  h-[80px] flex items-center">
          <svg width="360" height="81" viewBox="0 0 360 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M45.9902 40.1291L39.7848 36.9468C39.4943 36.235 38.7951 35.7334 37.9787 35.7334C37.1081 35.7334 36.3707 36.3039 36.1202 37.0915L29.991 42.1481C29.6755 41.9286 29.2921 41.8 28.8787 41.8C28.3681 41.8 27.9033 41.9963 27.5557 42.3175L20.1214 38.6829C21.0052 32.3634 26.4323 27.5 32.9954 27.5C40.051 27.5 45.7938 33.1209 45.9902 40.1291ZM26.9993 44.2717L20 40.8498C20.1854 47.8678 25.9327 53.5 32.9954 53.5C39.6871 53.5 45.1979 48.444 45.9161 41.9437L45.7557 42.2565L39.4134 39.004C39.0571 39.391 38.5462 39.6334 37.9787 39.6334C37.5037 39.6334 37.0683 39.4635 36.73 39.1812L30.8023 44.0715C30.649 44.9955 29.8462 45.7 28.8787 45.7C27.9825 45.7 27.2274 45.0953 26.9993 44.2717Z" fill="#605BFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M45.9902 40.1291L39.7848 36.9468C39.4943 36.235 38.7951 35.7334 37.9787 35.7334C37.1081 35.7334 36.3707 36.3039 36.1202 37.0915L29.991 42.1481C29.6755 41.9286 29.2921 41.8 28.8787 41.8C28.3681 41.8 27.9033 41.9963 27.5557 42.3175L20.1214 38.6829C21.0052 32.3634 26.4323 27.5 32.9954 27.5C40.051 27.5 45.7938 33.1209 45.9902 40.1291ZM26.9993 44.2717L20 40.8498C20.1854 47.8678 25.9327 53.5 32.9954 53.5C39.6871 53.5 45.1979 48.444 45.9161 41.9437L45.7557 42.2565L39.4134 39.004C39.0571 39.391 38.5462 39.6334 37.9787 39.6334C37.5037 39.6334 37.0683 39.4635 36.73 39.1812L30.8023 44.0715C30.649 44.9955 29.8462 45.7 28.8787 45.7C27.9825 45.7 27.2274 45.0953 26.9993 44.2717Z" fill="#FAFAFB"/>
            <path d="M59.76 47.5C59.4 47.5 59.12 47.4067 58.92 47.22C58.7333 47.02 58.64 46.74 58.64 46.38V34.52C58.64 34.16 58.7333 33.8867 58.92 33.7C59.12 33.5 59.4 33.4 59.76 33.4H64.52C65.4933 33.4 66.32 33.5467 67 33.84C67.6933 34.1333 68.22 34.5533 68.58 35.1C68.9533 35.6467 69.14 36.3067 69.14 37.08C69.14 37.9333 68.8867 38.6533 68.38 39.24C67.8733 39.8267 67.1867 40.22 66.32 40.42V40.12C67.3067 40.2533 68.08 40.6267 68.64 41.24C69.2 41.84 69.48 42.6267 69.48 43.6C69.48 44.8533 69.0667 45.82 68.24 46.5C67.4133 47.1667 66.2533 47.5 64.76 47.5H59.76ZM60.64 45.9H64.52C65.52 45.9 66.26 45.7067 66.74 45.32C67.22 44.92 67.46 44.32 67.46 43.52C67.46 42.72 67.22 42.1267 66.74 41.74C66.26 41.3533 65.52 41.16 64.52 41.16H60.64V45.9ZM60.64 39.56H64.2C65.16 39.56 65.8867 39.3667 66.38 38.98C66.8733 38.5933 67.12 38.0267 67.12 37.28C67.12 36.5333 66.8733 35.9667 66.38 35.58C65.8867 35.1933 65.16 35 64.2 35H60.64V39.56ZM75.1728 47.68C74.4928 47.68 73.8795 47.5467 73.3328 47.28C72.7995 47.0133 72.3795 46.6533 72.0728 46.2C71.7661 45.7467 71.6128 45.2333 71.6128 44.66C71.6128 43.94 71.7928 43.3733 72.1528 42.96C72.5261 42.5333 73.1328 42.2333 73.9728 42.06C74.8261 41.8733 75.9728 41.78 77.4128 41.78H78.3528V43.02H77.4328C76.4728 43.02 75.7128 43.0667 75.1528 43.16C74.5928 43.2533 74.1928 43.4133 73.9528 43.64C73.7261 43.8533 73.6128 44.1533 73.6128 44.54C73.6128 45.0467 73.7861 45.46 74.1328 45.78C74.4795 46.0867 74.9595 46.24 75.5728 46.24C76.0661 46.24 76.4995 46.1267 76.8728 45.9C77.2461 45.66 77.5395 45.34 77.7528 44.94C77.9795 44.54 78.0928 44.08 78.0928 43.56V41.26C78.0928 40.5 77.9328 39.9533 77.6128 39.62C77.2928 39.2867 76.7661 39.12 76.0328 39.12C75.6061 39.12 75.1595 39.1733 74.6928 39.28C74.2395 39.3867 73.7661 39.5667 73.2728 39.82C73.0461 39.9267 72.8528 39.96 72.6928 39.92C72.5328 39.88 72.4061 39.7933 72.3128 39.66C72.2195 39.5133 72.1661 39.36 72.1528 39.2C72.1528 39.0267 72.1928 38.86 72.2728 38.7C72.3661 38.54 72.5195 38.42 72.7328 38.34C73.3195 38.06 73.8995 37.86 74.4728 37.74C75.0461 37.62 75.5861 37.56 76.0928 37.56C76.9861 37.56 77.7195 37.7 78.2928 37.98C78.8795 38.26 79.3128 38.6867 79.5928 39.26C79.8728 39.8333 80.0128 40.5733 80.0128 41.48V46.62C80.0128 46.94 79.9328 47.1933 79.7728 47.38C79.6128 47.5533 79.3795 47.64 79.0728 47.64C78.7795 47.64 78.5461 47.5533 78.3728 47.38C78.1995 47.1933 78.1128 46.94 78.1128 46.62V45.32H78.2928C78.1861 45.8133 77.9861 46.24 77.6928 46.6C77.4128 46.9467 77.0595 47.2133 76.6328 47.4C76.2061 47.5867 75.7195 47.68 75.1728 47.68ZM86.215 47.68C85.6283 47.68 85.0217 47.6133 84.395 47.48C83.7817 47.3467 83.215 47.12 82.695 46.8C82.5217 46.68 82.4017 46.5467 82.335 46.4C82.2683 46.2533 82.2417 46.1067 82.255 45.96C82.2817 45.8 82.3417 45.6667 82.435 45.56C82.5417 45.44 82.6683 45.3667 82.815 45.34C82.975 45.3133 83.1417 45.3467 83.315 45.44C83.835 45.7333 84.335 45.94 84.815 46.06C85.295 46.1667 85.7683 46.22 86.235 46.22C86.9417 46.22 87.475 46.0933 87.835 45.84C88.195 45.5867 88.375 45.2467 88.375 44.82C88.375 44.4733 88.255 44.2067 88.015 44.02C87.775 43.82 87.415 43.6667 86.935 43.56L85.035 43.18C84.2083 43.0067 83.5817 42.7 83.155 42.26C82.7283 41.82 82.515 41.26 82.515 40.58C82.515 39.9667 82.6817 39.4333 83.015 38.98C83.3483 38.5267 83.815 38.18 84.415 37.94C85.015 37.6867 85.7083 37.56 86.495 37.56C87.0817 37.56 87.635 37.6333 88.155 37.78C88.675 37.9267 89.155 38.1467 89.595 38.44C89.7683 38.5333 89.8817 38.66 89.935 38.82C89.9883 38.9667 89.995 39.1133 89.955 39.26C89.9283 39.4067 89.8617 39.54 89.755 39.66C89.6483 39.7667 89.515 39.8333 89.355 39.86C89.2083 39.8733 89.0417 39.8333 88.855 39.74C88.455 39.4867 88.055 39.3067 87.655 39.2C87.2683 39.0933 86.8817 39.04 86.495 39.04C85.7883 39.04 85.255 39.1733 84.895 39.44C84.5483 39.6933 84.375 40.04 84.375 40.48C84.375 40.8133 84.4817 41.0867 84.695 41.3C84.9083 41.5133 85.2417 41.6667 85.695 41.76L87.595 42.14C88.4617 42.3133 89.115 42.6067 89.555 43.02C90.0083 43.4333 90.235 43.9933 90.235 44.7C90.235 45.62 89.8683 46.3467 89.135 46.88C88.4017 47.4133 87.4283 47.68 86.215 47.68ZM97.0625 47.68C95.9958 47.68 95.0758 47.48 94.3025 47.08C93.5425 46.6667 92.9492 46.0867 92.5225 45.34C92.1092 44.58 91.9025 43.68 91.9025 42.64C91.9025 41.6267 92.1092 40.74 92.5225 39.98C92.9358 39.22 93.5025 38.6267 94.2225 38.2C94.9425 37.7733 95.7625 37.56 96.6825 37.56C97.3625 37.56 97.9692 37.6733 98.5025 37.9C99.0358 38.1133 99.4892 38.4333 99.8625 38.86C100.249 39.2733 100.536 39.78 100.723 40.38C100.923 40.98 101.023 41.6533 101.023 42.4C101.023 42.6267 100.956 42.8 100.823 42.92C100.689 43.0267 100.489 43.08 100.223 43.08H93.5025V41.84H99.6625L99.3225 42.12C99.3225 41.4533 99.2225 40.8867 99.0225 40.42C98.8358 39.9533 98.5492 39.6 98.1625 39.36C97.7892 39.1067 97.3225 38.98 96.7625 38.98C96.1358 38.98 95.6025 39.1267 95.1625 39.42C94.7358 39.7133 94.4092 40.12 94.1825 40.64C93.9558 41.16 93.8425 41.7667 93.8425 42.46V42.58C93.8425 43.7533 94.1158 44.64 94.6625 45.24C95.2225 45.8267 96.0292 46.12 97.0825 46.12C97.4825 46.12 97.9025 46.0667 98.3425 45.96C98.7958 45.8533 99.2225 45.6733 99.6225 45.42C99.8492 45.2867 100.049 45.2267 100.223 45.24C100.409 45.2533 100.556 45.3133 100.663 45.42C100.783 45.5267 100.856 45.66 100.883 45.82C100.909 45.98 100.883 46.1467 100.803 46.32C100.723 46.48 100.583 46.6267 100.383 46.76C99.9292 47.0667 99.4025 47.3 98.8025 47.46C98.2025 47.6067 97.6225 47.68 97.0625 47.68Z" fill="#FAFAFB"/>
          </svg>


          </div>
         
            <div className="mt-5 space-y-2">
              <h3 className="text-[#000000] text-2xl font-bold text-[36px]">
                Sign in
              </h3>
              <p className="text-[16px] py-[10px] text-black">
                Sign in to your account{" "}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            <button
              onClick={handleClick}
              className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100 h-[32.93px] w-[197.6px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                />
              </svg>
              <h1 className="text-xs pl-4 items-center text-[#858585]">
                Sign in with Google
              </h1>
            </button>
            <button className="flex items-center justify-center py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100  h-[32.93px] w-[197.6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.82em"
                height="1em"
                viewBox="0 0 256 315"
              >
                <path
                  d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"
                  fill="grey"
                />
              </svg>
              <h1 className="text-xs pl-4 text-[#858585]">
                Sign in with Apple
              </h1>
            </button>
          </div>
          <div className="bg-red">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="bg-[white] rounded-[10px] w-[422.64px] h-[347.99px]">
                <div className="p-6">
                  <div>
                    <label className="text-base text-black">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg bg-[#EAEAEA]"
                      placeholder="johndoe@gmail.com"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="text-base text-black ">Password</label>
                    <input
                      type="password"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg bg-[#EAEAEA]"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="mt-6">
                    <a className="text-[#346BD4] text-base " href="">
                      Forget Password?
                    </a>
                  </div>
                  <div className="mt-4">
                    <button className="w-full px-4 py-2 text-base text-white font-bold bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center my-8">
              <p className="text-[#858585]  ">
                Do not have an account?
                <a href="" className="text-[#346BD4]">
                  {" "}
                  Register here
                </a>
              </p>
            </div>
            <div className=" flex gap-8  justify-center  sm lg:hidden">
            <a href="https://github.com/notifykamlesh" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="42px"
                color="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#605bff"
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                />
              </svg>
            </a>
            <a href="https://twitter.com/notifykamlesh" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="41px"
                color="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#605bff"
                  d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/notifykamlesh/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="41px"
                viewBox="0 0 24 24"
                color="white"
              >
                <path
                  fill="#605bff"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                />
              </svg>
            </a>
            <a href="https://discord.com/" target="blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42px"
                height="41px"
                color="white"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#605bff"
                  d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loginn;