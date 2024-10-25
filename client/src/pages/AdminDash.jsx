import React, { useEffect } from 'react'
import axiosInstance from '../helpers/axios/axiosInstance';


const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
    const year = date.getFullYear();
  
    const formattedDate = `${day} ${month} ${year}`;
  
    // console.log(formattedDate);
    return formattedDate;
  };
  
function AdminDash() {

    const [error, setError] = React.useState("");
    const [interviews, setInterviews] = React.useState([]);
    const  getInterviews = async()=>{
        try {
            const response = await axiosInstance.post("http://localhost:6969/api/company/", {
                user_id: localStorage.getItem("user_id"), });
        
            console.log("Response:", response);
            if (response.data.success) {
        console.log("Response:", response.data.data);
                setInterviews(response.data.data);
            
            } else {
              setError("Login failed. Please check your credentials.");
            }
            
          } catch (error) {
            console.error("Login error:", error);
           
          }
    }
    
    
    useEffect(() => {  
        getInterviews();
         }, []);
  return (
    <div>AdminDash
        <div className='flex w-screen h-screen'>
           {interviews.map((interview) => (
            <div key={interview.interview_id} className='flex flex-col '>
                <div className='flex flex-col text-white bg-black text-left rounded-md px-2 py-1'>
                    <p>{interview.interview_id}</p>
                    <p>{formatDate(interview.interview_date)}</p>
                    <p>{interview.interview_details}</p>
                </div>
            </div>
            ))
                }
        </div>
    </div>
  )
}

export default AdminDash