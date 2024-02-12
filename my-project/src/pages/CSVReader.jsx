import  { useState } from 'react';

import * as XLSX from 'xlsx';
import  Upload from "./../assets/Upload.svg";
import  Excel from "./../assets/excel.svg";

const FileUploader = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null); 

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'text/csv'];
    
    if (file) {
      if (fileTypes.includes(file.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError("Please select only Excel file");
        setExcelFile(null);
      }
    } else {
      console.log("Please select an Excel file");
    }
  };

  // Submit Event
  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 15));
    }
  };

  return (
    <div className=" h-svh  sm:px-6 md:px-8 lg:ps-72 grid place-items-center ">
      <div className=" bg-white grid place-items-center rounded-lg ">

      <label htmlFor='files' className=" flex flex-col justify-center border-dotted  border-4 rounded-lg sm:px-6 md:px-20  ">
         <img src={Excel} className="mt-[100px]  mb-4 h-8" />
         <label className=" text-center">Drop your excel sheet here or </label>
            <label htmlFor="files" className="btn text-[#605BFF] mt-[25px] cursor-pointer text-center ">
              Browse
            </label>
      </label> 
        <form className='form-group custom-form' onSubmit={handleFileSubmit}>
          {/* <input type="file" className='form-control' required onChange={handleFileChange} /> */}
          <input
            id="files"
            className='form-control' 
            style={{ visibility: 'hidden' }}
            type="file"
            onChange={handleFileChange}
          />
          {/* <button type='submit' className='btn btn-success btn-md'>UPLOAD</button> */}
          <div className="flex justify-center  rounded-lg bg-[#605BFF] text-[white] w-full mt-2 mb-[16px]">
              <img src={Upload} className="h-[59px] w-[24px] " />
              <button className="ml-[2px]"  type='submit'>Upload</button>
          </div>
          
          {typeError && (
            <div className='alert alert-danger' role='alert'>{typeError}</div>
          )}
        </form>
      

        <div className='viewer'>
          {excelData ? (
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    {Object.keys(excelData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {excelData.map((individualExcelData, index) => (
                    <tr key={index}>
                      {Object.keys(individualExcelData).map((key) => (
                        <td key={key}>{individualExcelData[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <div className="text-center mt-20">
      <FileUploader />
    </div>
  );
};

export default App;
