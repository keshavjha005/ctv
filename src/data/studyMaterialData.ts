
// Define the branches
export const branches = [
  { id: "cse", name: "Computer Science (CSE)" },
  { id: "me", name: "Mechanical Engineering" },
  { id: "ece", name: "Electronics & Communication (ECE)" },
  { id: "ee", name: "Electrical Engineering (EE)" },
  { id: "ce", name: "Civil Engineering" }
];

// Define the upload URLs (for admin use)
export const uploadUrls = {
  questionPapers: "https://forms.gle/exampleQuestionPaperUploadForm",
  notes: "https://forms.gle/exampleNotesUploadForm"
};

// Define mock data for question papers
export const questionPapers = {
  cse: [
    { id: 1, title: "Data Structures & Algorithms", year: "2024", fileSize: "2.4 MB", pages: 12 },
    { id: 2, title: "Database Management Systems", year: "2024", fileSize: "1.8 MB", pages: 8 },
    { id: 3, title: "Computer Networks", year: "2023", fileSize: "3.2 MB", pages: 14 },
    { id: 4, title: "Operating Systems", year: "2023", fileSize: "2.1 MB", pages: 10 }
  ],
  me: [
    { id: 1, title: "Thermodynamics", year: "2024", fileSize: "2.2 MB", pages: 10 },
    { id: 2, title: "Fluid Mechanics", year: "2024", fileSize: "1.9 MB", pages: 9 },
    { id: 3, title: "Machine Design", year: "2023", fileSize: "3.5 MB", pages: 15 }
  ],
  ece: [
    { id: 1, title: "Digital Electronics", year: "2024", fileSize: "2.3 MB", pages: 11 },
    { id: 2, title: "Communication Systems", year: "2024", fileSize: "2.0 MB", pages: 9 },
    { id: 3, title: "Signals & Systems", year: "2023", fileSize: "2.8 MB", pages: 12 }
  ],
  ee: [
    { id: 1, title: "Power Systems", year: "2024", fileSize: "2.5 MB", pages: 12 },
    { id: 2, title: "Electrical Machines", year: "2024", fileSize: "2.2 MB", pages: 10 },
    { id: 3, title: "Control Systems", year: "2023", fileSize: "2.7 MB", pages: 12 }
  ],
  ce: [
    { id: 1, title: "Structural Analysis", year: "2024", fileSize: "2.4 MB", pages: 11 },
    { id: 2, title: "Geotechnical Engineering", year: "2024", fileSize: "2.1 MB", pages: 10 },
    { id: 3, title: "Transportation Engineering", year: "2023", fileSize: "2.6 MB", pages: 12 }
  ]
};

// Define mock data for notes
export const notes = {
  cse: [
    { id: 1, title: "Data Structures Complete Notes", author: "Prof. Kumar", fileSize: "4.6 MB", pages: 45 },
    { id: 2, title: "DBMS Concepts and SQL", author: "Prof. Sharma", fileSize: "3.8 MB", pages: 32 },
    { id: 3, title: "Computer Networks Fundamentals", author: "Prof. Gupta", fileSize: "5.2 MB", pages: 50 }
  ],
  me: [
    { id: 1, title: "Thermodynamics Principles", author: "Prof. Singh", fileSize: "4.2 MB", pages: 40 },
    { id: 2, title: "Fluid Mechanics Complete Notes", author: "Prof. Verma", fileSize: "3.9 MB", pages: 35 }
  ],
  ece: [
    { id: 1, title: "Digital Electronics Circuits", author: "Prof. Jha", fileSize: "4.3 MB", pages: 42 },
    { id: 2, title: "Communication Systems Notes", author: "Prof. Mishra", fileSize: "4.0 MB", pages: 38 }
  ],
  ee: [
    { id: 1, title: "Power Systems Analysis", author: "Prof. Roy", fileSize: "4.5 MB", pages: 44 },
    { id: 2, title: "Electrical Machines Complete Notes", author: "Prof. Das", fileSize: "4.2 MB", pages: 40 }
  ],
  ce: [
    { id: 1, title: "Structural Analysis Methods", author: "Prof. Banerjee", fileSize: "4.4 MB", pages: 43 },
    { id: 2, title: "Geotechnical Engineering Notes", author: "Prof. Chatterjee", fileSize: "4.1 MB", pages: 39 }
  ]
};
