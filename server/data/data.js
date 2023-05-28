export const userData = [
   {
      name: 'Isaias',
      email: 'Isaias@oursite.com',
      password: 'Password1',
      role: 'SuperAdmin',
      position: 'Marketing Consultant',
      department: 'Sales',
      phone: '(516) 301 1234'
   },
   {
      name: 'Justin',
      email: 'Justin@oursite.com',
      password: 'Password2',
      role: 'Admin',
      position: 'UX/UI Developer',
      department: 'Development',
      phone: '(516) 401 2345'
   },
   {
      name: 'Edward',
      email: 'edward@oursite.com',
      password: 'Password3',
      role: 'Admin',
      position: 'Accountant',
      department: 'Accounting',
      phone: '(516) 502 3456'
   },
   {
      name: 'Abby',
      email: 'abby@oursite.com',
      password: 'Password4',
      role: 'User',
      position: 'Business Analyst',
      department: 'Finance',
      phone: '(516) 311 5678'
   },
   {
      name: 'Becky',
      email: 'becky@oursite.com',
      password: 'Password5',
      role: 'User',
      position: 'Financial Manager',
      department: 'Finance',
      phone: '(516) 431 6789'
   },
   {
      name: 'Charlie',
      email: 'charlie@oursite.com',
      password: 'Password6',
      role: 'User',
      position: 'Operations Manager',
      department: 'Operations',
      phone: '(516) 316 7890'
   },
   {
      name: 'David',
      email: 'david@oursite.com',
      password: 'Password7',
      role: 'User',
      position: 'Project Manager',
      department: 'Development',
      phone: '(516) 655 8901'
   },
   {
      name: 'Frank',
      email: 'frank@oursite.com',
      password: 'Password8',
      role: 'User',
      position: 'Team Lead',
      department: 'Development',
      phone: '(516) 898 9012'
   },
   {
      name: 'Gabby',
      email: 'gabby@oursite.com',
      password: 'Password9',
      role: 'User',
      position: 'Receptionist',
      department: 'Clerical',
      phone: '(516) 347 0123'
   },
   {
      name: 'Henry',
      email: 'henry@oursite.com',
      password: 'Password10',
      role: 'User',
      position: 'Account Executive',
      department: 'Sales',
      phone: '(516) 268 2234'
   },
];







export const projectData = [
    {
       projectName: 'Build a Data Set' ,
       completedTasks: '1,2',
       openTasks: '',
       completed: 'Completed',
       dueDate:'2023-04-18',
       description: 'Create a bunch of data so we have some mock information to play with in our database',
       user: 'Isaias'
    },
    {
       projectName: 'Create a MongoDB' ,
       completedTasks: '1',
       openTasks: '2',
       completed: 'Delayed',
       dueDate:'2023-05-23',
       description: 'Our database will be hosted on MongoDB- lets us create our cluster of tables easily',
       user: 'Edward'
    },
    {
       projectName: 'Create a Frontend Application' ,
       completedTasks: '',
       openTasks: '1,2',
       completed: 'New',
       dueDate:'2024-03-21',
       description: 'Create our frontend application using React',
       user: 'Justin'
    },
    {
       projectName: 'Create a Backend using Node, Express, and Mongoose' ,
       completedTasks: '1',
       openTasks: '2',
       completed: 'In Progress',
       dueDate:'2024-04-12',
       description: 'Create the server using Node and Express- Mongoose allows us to communicate easily with out MongoDB',
       user: 'Justin'
    },
    {
       projectName: 'Push data into MongoDB' ,
       completedTasks: '1,2',
       openTasks: '',
       completed: 'Completed',
       dueDate:'2024-01-13',
       description: 'Create Models that allow us to create structured tables and push data into ou MongoDB',
       user: 'Isaias'
    },
    {
       projectName: 'Create our API endpoints' ,
       completedTasks: '',
       openTasks: '1,2',
       completed: 'New',
       dueDate:'2024-05-11',
       description: 'Now that we have our server file, we need to create HTTP requests and API endpoints',
        user: 'Isaias'
    },
    {
       projectName: 'Test our Application' ,
       completedTasks: '1,2',
       openTasks: '',
       completed: 'Completed',
       dueDate:'2023-12-22',
       description: 'Make sure our front end works and can push and pull data from our server',
       user: 'Edward'
    },
    {
       projectName: 'Cleaning' ,
       completedTasks: '1',
       openTasks: '2',
       completed: 'In Progress',
       dueDate:'2023-04-09',
       description: 'Clean our code and utlize best practices',
       user: 'Justin'
    },
    {
       projectName: 'Launch' ,
       completedTasks: '1,2',
       openTasks: '',
       completed: 'Completed',
       dueDate:'2024-02-26',
       description: 'Demo day- hoping it all goes well!',
       user: 'Justin'
    },{
        projectName: 'Maintain' ,
        completedTasks: '1',
        openTasks: '2',
        completed: 'In Progress',
        dueDate:'2023-11-13',
        description: 'End is in sight- we have to do routine maintenance and we are set to go',
        user: 'Edward' 
    },
    
    ]



export const taskData = [
    {
        taskName: 'Task1' ,
        projectName: 'Build a Data Set' ,
        completed: 'true' ,
        dueDate: '2023-06-03',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Build a Data Set' ,
        completed: 'true' ,
        dueDate: '2023-05-01',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Create a MongoDB' ,
        completed: 'true' ,
        dueDate: '2023-03-07',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Create a MongoDB' ,
        completed: 'false' ,
        dueDate: '2023-07-09',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Create a Frontend Application' ,
        completed: 'true' ,
        dueDate: '2023-08-12',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Create a Frontend Application' ,
        completed: 'true' ,
        dueDate: '2023-10-28',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Create a Backend using Node, Express, and Mongoose' ,
        completed: 'true' ,
        dueDate: '2023-10-14',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Create a Backend using Node, Express, and Mongoose' ,
        completed: 'false' ,
        dueDate: '2023-01-07',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Push data into MongoDB' ,
        completed: 'true' ,
        dueDate: '2023-03-20',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Push data into MongoDB' ,
        completed: 'true' ,
        dueDate: '2023-05-04',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Create our API endpoints' ,
        completed: 'true' ,
        dueDate: '2023-07-15',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Create our API endpoints' ,
        completed: 'false' ,
        dueDate: '2023-11-27',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Test our Application' ,
        completed: 'true' ,
        dueDate: '2023-06-23',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Test our Application' ,
        completed: 'true' ,
        dueDate: '2023-08-13',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Cleaning' ,
        completed: 'true' ,
        dueDate: '2023-09-13',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Cleaning' ,
        completed: 'false' ,
        dueDate: '2023-09-19',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Launch' ,
        completed: 'true' ,
        dueDate: '2023-11-02',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Launch' ,
        completed: 'true' ,
        dueDate: '2023-07-05',
        update: '1',
        description: 'this is a description for what this task entails'
    },

    {
        taskName: 'Task1' ,
        projectName: 'Maintain' ,
        completed: 'true' ,
        dueDate: '2023-04-10',
        update: '1',
        description: 'this is a description for what this task entails'
    },
    {
        taskName: 'Task2' ,
        projectName: 'Maintain' ,
        completed: 'false' ,
        dueDate: '2023-05-27',
        update: '1',
        description: 'this is a description for what this task entails'
    },
]







export const updateData = [
    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Build a Data Set' ,
        note: 'this is a note on this task',
        name: 'Justin' ,
        
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Build a Data Set' ,
        note: 'this is a note on this task',
        name: 'Henry' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Create a MongoDB' ,
        note: 'this is a note on this task',
        name: 'Abby' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Create a MongoDB' ,
        note: 'this is a note on this task',
        name: 'Gabby' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Create a Frontend Application' ,
        note: 'this is a note on this task',
        name: 'Frank' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Create a Frontend Application' ,
        note: 'this is a note on this task',
        name: 'David' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Create a Backend using Node, Express, and Mongoose' ,
        note: 'this is a note on this task',
        name: 'Edward' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Create a Backend using Node, Express, and Mongoose' ,
        note: 'this is a note on this task',
        name: 'Charlie' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Push data into MongoDB' ,
        note: 'this is a note on this task',
        name: 'Abby' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Push data into MongoDB' ,
        note: 'this is a note on this task',
        name: 'Isaias' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Create our API endpoints' ,
        note: 'this is a note on this task',
        name: 'Isaias' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Create our API endpoints' ,
        note: 'this is a note on this task',
        name: 'Frank' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Test our Application' ,
        note: 'this is a note on this task',
        name: 'Becky' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Test our Application' ,
        note: 'this is a note on this task',
        name: 'Abby' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Cleaning' ,
        note: 'this is a note on this task',
        name: 'Justin' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Cleaning' ,
        note: 'this is a note on this task',
        name: 'David' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Launch' ,
        note: 'this is a note on this task',
        name: 'Frank' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Launch' ,
        note: 'this is a note on this task',
        name: 'Charlie' ,
    },

    {
        updateName: 'Update' ,
        taskName: 'Task1' ,
        projectName: 'Maintain' ,
        note: 'this is a note on this task',
        name: 'Abby' ,
    },
    {
        updateName: 'Update' ,
        taskName: 'Task2' ,
        projectName: 'Maintain' ,
        note: 'this is a note on this task',
        name: 'Isaias' ,
    },


]