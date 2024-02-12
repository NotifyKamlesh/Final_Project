import { useState } from "react";
import image from "./../assets/image.svg";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <header className="fixed top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white  text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
          aria-label="Global"
        >
          <div className="me-5 lg:me-0 lg:hidden">
          <svg width="111" height="42" viewBox="0 0 111 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z" fill="#605BFF"/>
            <path d="M68.928 20.288C69.904 20.56 70.656 21.048 71.184 21.752C71.728 22.456 72 23.336 72 24.392C72 25.848 71.496 26.984 70.488 27.8C69.496 28.6 68.104 29 66.312 29H60.192C59.808 29 59.504 28.896 59.28 28.688C59.072 28.464 58.968 28.168 58.968 27.8V13.28C58.968 12.912 59.072 12.624 59.28 12.416C59.504 12.192 59.808 12.08 60.192 12.08H66.048C67.792 12.08 69.152 12.472 70.128 13.256C71.12 14.024 71.616 15.104 71.616 16.496C71.616 17.392 71.376 18.168 70.896 18.824C70.432 19.48 69.776 19.968 68.928 20.288ZM61.392 19.4H65.664C68.032 19.4 69.216 18.504 69.216 16.712C69.216 15.816 68.92 15.152 68.328 14.72C67.752 14.288 66.864 14.072 65.664 14.072H61.392V19.4ZM66.048 27.008C67.28 27.008 68.184 26.784 68.76 26.336C69.336 25.888 69.624 25.192 69.624 24.248C69.624 23.288 69.328 22.576 68.736 22.112C68.16 21.632 67.264 21.392 66.048 21.392H61.392V27.008H66.048ZM79.8656 17C81.4176 17 82.5696 17.392 83.3216 18.176C84.0896 18.96 84.4736 20.152 84.4736 21.752V27.968C84.4736 28.336 84.3696 28.624 84.1616 28.832C83.9536 29.024 83.6656 29.12 83.2976 29.12C82.9456 29.12 82.6656 29.016 82.4576 28.808C82.2496 28.6 82.1456 28.32 82.1456 27.968V27.08C81.8416 27.752 81.3856 28.272 80.7776 28.64C80.1856 28.992 79.4896 29.168 78.6896 29.168C77.9216 29.168 77.2176 29.016 76.5776 28.712C75.9536 28.392 75.4576 27.96 75.0896 27.416C74.7216 26.872 74.5376 26.256 74.5376 25.568C74.5216 24.704 74.7376 24.032 75.1856 23.552C75.6336 23.056 76.3616 22.704 77.3696 22.496C78.3776 22.272 79.7776 22.16 81.5696 22.16H82.1216V21.464C82.1216 20.568 81.9376 19.92 81.5696 19.52C81.2016 19.12 80.6096 18.92 79.7936 18.92C79.2336 18.92 78.7056 18.992 78.2096 19.136C77.7136 19.28 77.1696 19.488 76.5776 19.76C76.1456 20 75.8416 20.12 75.6656 20.12C75.4256 20.12 75.2256 20.032 75.0656 19.856C74.9216 19.68 74.8496 19.456 74.8496 19.184C74.8496 18.944 74.9136 18.736 75.0416 18.56C75.1856 18.368 75.4096 18.184 75.7136 18.008C76.2736 17.704 76.9296 17.464 77.6816 17.288C78.4336 17.096 79.1616 17 79.8656 17ZM79.1216 27.368C80.0016 27.368 80.7216 27.072 81.2816 26.48C81.8416 25.872 82.1216 25.096 82.1216 24.152V23.528H81.6896C80.4416 23.528 79.4816 23.584 78.8096 23.696C78.1376 23.808 77.6576 24 77.3696 24.272C77.0816 24.528 76.9376 24.904 76.9376 25.4C76.9376 25.976 77.1456 26.448 77.5616 26.816C77.9776 27.184 78.4976 27.368 79.1216 27.368ZM91.8694 29.168C90.2374 29.168 88.9014 28.832 87.8614 28.16C87.5734 27.984 87.3654 27.8 87.2374 27.608C87.1254 27.416 87.0694 27.2 87.0694 26.96C87.0694 26.704 87.1414 26.488 87.2854 26.312C87.4294 26.136 87.6134 26.048 87.8374 26.048C88.0454 26.048 88.3734 26.176 88.8214 26.432C89.3014 26.688 89.7654 26.896 90.2134 27.056C90.6774 27.216 91.2534 27.296 91.9414 27.296C92.7094 27.296 93.3094 27.16 93.7414 26.888C94.1734 26.616 94.3894 26.232 94.3894 25.736C94.3894 25.416 94.3014 25.16 94.1254 24.968C93.9654 24.776 93.6774 24.608 93.2614 24.464C92.8454 24.304 92.2294 24.136 91.4134 23.96C90.0054 23.656 88.9894 23.248 88.3654 22.736C87.7574 22.208 87.4534 21.496 87.4534 20.6C87.4534 19.912 87.6534 19.296 88.0534 18.752C88.4534 18.192 89.0054 17.76 89.7094 17.456C90.4134 17.152 91.2134 17 92.1094 17C92.7494 17 93.3734 17.088 93.9814 17.264C94.5894 17.424 95.1254 17.664 95.5894 17.984C96.1174 18.336 96.3814 18.744 96.3814 19.208C96.3814 19.464 96.3014 19.68 96.1414 19.856C95.9974 20.032 95.8214 20.12 95.6134 20.12C95.4694 20.12 95.3254 20.088 95.1814 20.024C95.0374 19.96 94.8454 19.856 94.6054 19.712C94.1734 19.456 93.7654 19.256 93.3814 19.112C93.0134 18.968 92.5494 18.896 91.9894 18.896C91.3174 18.896 90.7734 19.04 90.3574 19.328C89.9574 19.616 89.7574 20.008 89.7574 20.504C89.7574 20.952 89.9414 21.304 90.3094 21.56C90.6934 21.8 91.4054 22.032 92.4454 22.256C93.5174 22.48 94.3574 22.736 94.9654 23.024C95.5734 23.312 96.0054 23.672 96.2614 24.104C96.5334 24.52 96.6694 25.056 96.6694 25.712C96.6694 26.752 96.2294 27.592 95.3494 28.232C94.4854 28.856 93.3254 29.168 91.8694 29.168ZM108.536 26.048C108.76 26.048 108.944 26.136 109.088 26.312C109.232 26.488 109.304 26.712 109.304 26.984C109.304 27.448 109.016 27.84 108.44 28.16C107.88 28.48 107.264 28.728 106.592 28.904C105.936 29.08 105.304 29.168 104.696 29.168C102.84 29.168 101.376 28.632 100.304 27.56C99.2315 26.472 98.6955 24.992 98.6955 23.12C98.6955 21.92 98.9275 20.856 99.3915 19.928C99.8715 19 100.536 18.28 101.384 17.768C102.248 17.256 103.224 17 104.312 17C105.88 17 107.12 17.504 108.032 18.512C108.944 19.52 109.4 20.88 109.4 22.592C109.4 23.232 109.112 23.552 108.536 23.552H101.12C101.28 26.032 102.472 27.272 104.696 27.272C105.288 27.272 105.8 27.192 106.232 27.032C106.664 26.872 107.12 26.664 107.6 26.408C107.648 26.376 107.776 26.312 107.984 26.216C108.208 26.104 108.392 26.048 108.536 26.048ZM104.36 18.776C103.432 18.776 102.688 19.072 102.128 19.664C101.568 20.256 101.232 21.088 101.12 22.16H107.312C107.264 21.072 106.984 20.24 106.472 19.664C105.976 19.072 105.272 18.776 104.36 18.776Z" fill="#030229"/>
          </svg>

          </div>

          <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-2xl font-semibold mt-[49px]">Upload CSV</h1>
            </div>
          
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </button>

              <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                <button
                  id="hs-dropdown-with-header"
                  type="button"
                  className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  onClick={toggleDropdown}
                >
                  <img
                    className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={image}
                  />
                </button>
                {isDropdownOpen && (
                  <div
                    className="hs-dropdown-menu absolute top-[55px] left-[-180px] transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-1 block min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700"
                    aria-labelledby="hs-dropdown-with-header"
                  >
                    <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Signed in as
                      </p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                        {user}
                      </p>
                    </div>
                    <div className="mt-2 py-2 first:pt-0 last:pb-0">
                      <div
                        className="cursor-pointer  flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        onClick={() => logout()}
                      >
                        <svg
                          className="w-[19px] h-[19px] fill-[#8e8e8e]"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"></path>
                        </svg>
                        Logout
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center py-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
