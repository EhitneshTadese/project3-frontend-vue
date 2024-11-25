import http from "../http-common";  // Import the axios instance

class ResumeDataService {
  // Method to get all resumes
  getAll() {
    return http.get("/");  // Sends GET request to http://localhost:3000/api/resumes/
  }

  // Method to create a new resume
  create(data) {
    return http.post("/create", data);  // Sends POST request to http://localhost:3000/api/resumes/create
  }
    
    // Method to fetch all users
  getAllUsers() {
    return http.get("/users");  // Sends GET request to http://localhost:3000/api/resumes/users
  }


  // Fetch resumes for a specific user
  getUserResumes() {
    return http.get("/user_resumes"); 
  }
}

export default new ResumeDataService();  // Exporting an instance of the class