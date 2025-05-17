### 💼 **Backend – Career Guidance Engine**  
**Repo:** [Mentorship-server](https://github.com/ujjwaljha1/Mentorship-server.git)


# 🛠️ Career Guidance API – Backend Server

📡 This is the brain behind the career explorer – a Node.js + Express engine, turbocharged with MongoDB, JWTs, and Google's Gemini AI to help confused students and job-seekers find their north star 🌟.

## 🤹 Modules

- 🎯 Career Exploration
- 🧙‍♂️ Mentorship Booking
- 📁 Resource Management
- 🧑‍💼 Job Applications & Tracking
- 🎪 Workshops & Events
- 🧠 AI-Powered Suggestions (Gemini API)

## 🧰 Tech Stack

- **Backend:** Node.js + Express
- **DB:** MongoDB with Mongoose
- **Auth:** JWT (just trust token)
- **AI:** Gemini API (Career advisor with 0 burnout)
- **Emails:** Nodemailer for status updates
- **File Uploads:** Multer

## 📦 Install & Run

```bash
git clone https://github.com/ujjwaljha1/Mentorship-server.git
cd Mentorship-server
npm install
````

Create a `.env` file:

```
PORT=3001
MONGODB_URI=mongodb+srv://your-mongo-connection
JWT_SECRET=secret_sauce_here
GEMINI_API_KEY=your_gemini_key
```

Start the server:

```bash
npm start
```

> Boom! You're running the brain of the operation on [http://localhost:3001](http://localhost:3001)

---

## 🔌 API Playground

* `/api/careers` - Career CRUD + Gemini career suggestions
* `/api/mentors` - Mentor onboarding & appointment system
* `/api/applications` - Job applications and tracking
* `/api/workshops` - All events, talks, and career bootcamps
* `/api/resources` - Paginated PDF listings and downloads

## 🔒 Security Layer

* Hashed passwords via bcrypt
* JWT-protected routes
* Role-based access (users/mentors/admins)

---

## 🎉 Fun Facts

* Mentors can *actually* be booked. Like a career Uber.
* AI can judge your aptitude without judging you.
* You’ll never lose your job tracking ID again.

---

👨‍💻 **Frontend Buddy:** [MentorShip-FrontEnd](https://github.com/ujjwaljha1/MentorShip-FrontEnd)
🌐 **Live System:** [mentorshipsih.netlify.app](https://mentorshipsih.netlify.app/)

---

📢 Feel free to fork, clone, break, fix, and contribute! Careers don’t build themselves. Code does.
