import { useState } from 'react';
import  Upload from "./../assets/Upload.svg";
import  Excel from "./../assets/excel.svg";

const Dashboard = () => {
  const [filename, setFilename] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFilename(file.name);
    console.log(filename);
  };

  return (



      <div className=" h-svh  sm:px-6 md:px-8 lg:ps-72 grid items-center ">
      
        <div className='ml-[150px] mb-[80px] sm:items-center sm:shrink-0'>
        <p ><span className='text-[Green]'>Note :</span> Just click on upload button which is in the left side, after clicking the upload button click on <br />
          browse and select your CSV file than click on upload button, after that you will see a tbale of CSV data.
         </p>
        </div>     
      </div>
  ); 
};
export default Dashboard;





