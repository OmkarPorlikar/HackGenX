import axios from  'axios'
const API_BASE_URL = "https://hackgenxbackend.onrender.com"; // Update with your backend URL

export const registerUser = async (formData) => {
  try {
    // Map the frontend field names to what the backend expects
    console.log("in try bolcl")
    const mappedData = {
      fullName: formData.fullName,
      mobileNumber: formData.mobile,  // This was the issue - field name mismatch
      email: formData.email,
      teamName: formData.teamName,
      teamSize: formData.teamSize,
      collegeName: formData.college,  // Field name mismatch
      branch: formData.branch,
      city: formData.city,
      problemStatement: formData.problemStatement,
      reasonForParticipation: formData.whyParticipate  // Field name mismatch
    };
    
    console.log("Sending data to backend:", mappedData);
    const response = await axios.post(`${API_BASE_URL}/register`, mappedData); 
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};