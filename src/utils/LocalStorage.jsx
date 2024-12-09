
const employees = [
    {
        id: 1,
        email: "e@e.com",
        password: "123",
        firstName: "Amit",
        tasks: [
          {
            title: "Frontend Layout Design",
            description: "Complete the layout for the web application's frontend, ensuring all UI elements are functional and visually appealing.",
            date: "2024-12-05",
            category: "Development",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          },
          {
            title: "API Documentation Preparation",
            description: "Draft and finalize the documentation for the API endpoints, including details about inputs, outputs, and example usage.",
            date: "2024-12-07",
            category: "Documentation",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Client Meeting",
            description: "Participate in the scheduled client meeting to discuss project updates, gather feedback, and address concerns.",
            date: "2024-12-08",
            category: "Meeting",
            active: false,
            newTask: false,
            completed: true,
            failed: false
          },
          {
            title: "Database Migration Planning",
            description: "Plan and document the steps for migrating the database to a new server without downtime.",
            date: "2024-12-09",
            category: "Research",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "Mobile Responsiveness Testing",
            description: "Test and fix layout issues for mobile responsiveness across different screen sizes.",
            date: "2024-12-10",
            category: "Testing",
            active: false,
            newTask: true,
            completed: false,
            failed: true
          }
        ],
        taskNumbers: {
          active: 2,
          newTask: 2,
          completed: 1,
          failed: 1
        }
      },
      {
        id: 2,
        email: "e2@.com",
        password: "123",
        firstName: "Priya",
        tasks: [
          {
            title: "Login Module Testing",
            description: "Develop and execute comprehensive test cases for the login module to ensure security and functionality.",
            date: "2024-12-06",
            category: "Testing",
            active: true,
            newTask: false,
            completed: false,
            failed: false
          },
          {
            title: "Cloud Deployment Research",
            description: "Analyze and document various cloud deployment strategies to identify the best solution for scalability and reliability.",
            date: "2024-12-10",
            category: "Research",
            active: false,
            newTask: true,
            completed: false,
            failed: true
          },
          {
            title: "Error Logging System Implementation",
            description: "Develop and integrate a centralized error logging system to track and resolve production issues.",
            date: "2024-12-11",
            category: "Development",
            active: true,
            newTask: true,
            completed: false,
            failed: false
          },
          {
            title: "User Feedback Analysis",
            description: "Compile and analyze feedback from users to propose feature enhancements and bug fixes.",
            date: "2024-12-12",
            category: "Research",
            active: false,
            newTask: true,
            completed: false,
            failed: true
          }
        ],
        taskNumbers: {
          active: 1,
          newTask: 2,
          completed: 0,
          failed: 2
        }
      },
    {
      id: 3,
      email: "e3@e.com",
      password: "123",
      firstName: "Aditya",
      tasks: [
        {
          title: "Bug Fix: Payment Gateway",
          description: "Identify and resolve critical bugs affecting the payment gateway to ensure seamless transactions for users.",
          date: "2024-12-05",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Feature Demo Preparation",
          description: "Create a detailed and visually engaging demo showcasing the functionalities of the newly developed feature.",
          date: "2024-12-12",
          category: "Meeting",
          active: false,
          newTask: true,
          completed: false,
          failed: true
        },
        {
          title: "User Manual Update",
          description: "Revise and update the user manual to reflect the latest software changes and additions.",
          date: "2024-12-15",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1
      }
    },
    {
      id: 4,
      email: "e4@.com",
      password: "123",
      firstName: "Saaru",
      tasks: [
        {
          title: "Security Audit",
          description: "Perform a comprehensive security audit to identify vulnerabilities and recommend actionable solutions.",
          date: "2024-12-09",
          category: "Testing",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Database Optimization",
          description: "Analyze and optimize complex database queries to improve system performance and efficiency.",
          date: "2024-12-11",
          category: "Research",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      id: 5,
      email: "e5@e.com",
      password: "123",
      firstName: "Sneha",
      tasks: [
        {
          title: "Wireframe Design",
          description: "Create detailed wireframes for the new module, focusing on user experience and design aesthetics.",
          date: "2024-12-06",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Marketing Team Coordination",
          description: "Collaborate with the marketing team to align on goals, strategies, and key deliverables for upcoming campaigns.",
          date: "2024-12-13",
          category: "Meeting",
          active: false,
          newTask: true,
          completed: false,
          failed: true
        }
      ],
      taskNumbers: {
        active: 1,
        newTask: 1,
        completed: 0,
        failed: 1
      }
    }
  ];
  

  const admin = [
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  ];
  
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin')) 
    
    return {employees,admin}
}
