This is a Job Board application built using [Next.js](https://nextjs.org) and React. The app allows users to view job listings and filter them based on keywords such as job roles, tools, and languages. The job data is fetched from a data.json file and can be filtered using dynamically generated keywords (badges).

## Getting Started

Follow these steps to get the application up and running locally.

1. Install Dependencies
   First, install the necessary dependencies using:

bash
Copy code
npm install 2. Run the Development Server
After installing the dependencies, you can run the development server:

bash
Copy code
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev

3. View the Application
   Once the development server is running, open http://localhost:3000 in your browser to see the application.

The page will auto-update as you make changes to the source code.

4. Modify Pages
   To start customizing the page, you can modify the app/page.tsx file. The page will auto-refresh as you make edits.

Features
Job Listing: Displays a list of job cards with details such as company, position, contract type, and location.
Dynamic Filtering: Users can filter job listings by selecting keywords (e.g., languages, tools, roles) displayed as badges.
Sorting: Jobs are sorted by the posting date, showing the most recent jobs first.
Clear Filter: Users can clear all selected keywords (filters) to view all available jobs.
Customizing the Application
The job data is fetched from a data.json file. You can modify the data file to add or remove job listings.

Each job listing includes information like company, position, location, skills, and posting date.
Keywords are selected dynamically based on job attributes like languages and tools, and can be used to filter the job list.
Learn More
To learn more about the technologies used in this project, check out the following resources:

Next.js Documentation - Learn more about Next.js features and API.
React Documentation - Learn more about React features and API.
Deploy on Vercel
To deploy the application, you can use the Vercel Platform, which is built by the creators of Next.js. It offers seamless deployment and hosting for Next.js apps.

For more deployment details, refer to the Next.js Deployment Documentation.

Contributing
Feel free to fork and contribute to this project. Pull requests and issues are welcome!
