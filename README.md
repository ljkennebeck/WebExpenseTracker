# WebExpenseTracker
Updated and improved version of previously created expense tracker: https://github.com/ljkennebeck/ExpenseTracker.git

This project aims to serve as a digital checkbook. Allowing users to track and categorize their expenses 
by manually entering them as well as scanning reciepts which will be stored for reference if desired


# Current Plan
<b>Frontend:</b> Next.js with Tailwind and TypeScript <br>
<b>Backend:</b> Node.js with Express <br>
<b>Database:</b> PostgreSQL with Prisma ORM (Object-Relational-Mapper) to simplify DB communication <br>
<b>Auth:</b> Review Options: Clerk, NextAuth.js, Auth0, JWT + bcrypt <br>

<b>OCR (Optical Character Recognition):</b> Tesseract.js or consider Google Cloud Vision, AWS Textract <br>
<b>File Storage:</b> AWS S3 <br>

# Configuration
<h3>If the project isn't working:</h3>
  Inside the "server" directory, run: npm install then run: npm install express followed by npx prisma generate and finally run: npm install cors. <br>
  Proced to exit server directory and enter client and run: npm install react react-dom <br>
  

<h3>For database connection:</h3>
  Create a .env file inside the "server" directory <br>
  Add: DATABASE_URL="postgresql://..." <br>
