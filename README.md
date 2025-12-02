# 🛡️ Main Gate Tracker App  
A web + mobile-responsive MERN application to automate and digitize the entry/exit process for students, staff, and visitors using **QR codes**, **role-based system**, and **real-time tracking**.

---

## 🚀 Features

### 🔐 Authentication & Security
- JWT-based login (Student, Guard, Admin)
- Refresh token + Access token flow
- Hashed passwords (bcrypt)
- Role-based access middleware
- Device-friendly responsive UI

### 🎫 QR-Based Gate Pass
- Student generates QR code for entry/exit
- Guard scans QR at the gate  
- QR contains encrypted token + user ID  
- Auto-expiry QR codes for security

### 👮 Guard Dashboard
- Scan QR (web-cam supported)
- Show student profile instantly  
- Approve entry or exit
- Auto-log time with location

### 🧑‍🎓 Student Dashboard
- Generate gate pass QR  
- View previous entries/exits  
- Track current status (Inside / Outside)

### 🛠️ Admin Panel
- Manage students & guards  
- Live dashboard: who is inside campus  
- Logs with filters (date, student, status)
- Export logs (CSV / Excel)

### 📡 Real-Time Tracking
- WebSocket or Polling support  
- Live status updates

---

## 🏗️ System Architecture

```
                 ┌──────────────────────────────┐
                 │          Client UI            │
                 │  React (Web + Mobile View)    │
                 └──────────────────────────────┘
                              ▲
                              │ REST / WebSocket
                              ▼
                 ┌──────────────────────────────┐
                 │        Backend API            │
                 │   Node.js + Express.js        │
                 ├──────────────────────────────┤
                 │  Auth, QR, Logs, Guards       │
                 └──────────────────────────────┘
                              ▲
                              │
                              ▼
                 ┌──────────────────────────────┐
                 │           Database            │
                 │           MongoDB             │
                 │   Students / Guards / Logs    │
                 └──────────────────────────────┘

```

---

## 📁 Folder Structure (Recommended MERN Setup)

```
/main-gate-tracker
│
├── backend
│   ├── src
│   │   ├── config/        # DB, JWT, environment config
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Auth, roles
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   ├── utils/         # QR Generator, Validators
│   │   └── server.js
│   └── package.json
│
└── frontend
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   ├── context/
    │   └── App.jsx
    └── package.json
```

---



## ⚙️ Installation Steps

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/main-gate-tracker.git
cd main-gate-tracker
```

### 2️⃣ Install Backend
```bash
cd backend
npm install
```

### 3️⃣ Install Frontend
```bash
cd ../frontend
npm install
```

---

## 📱 Responsive Mobile View

UI adjusts for:
- Gate guard scanning on mobile  
- Students generating QR from phone  
- Admin viewing dashboard on tablet  

---

## 🧪 Tech Stack

- **Frontend:** React (Vite), TailwindCSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** JWT + bcrypt  
- **Real-time:** WebSockets / Polling  
- **QR:** `qrcode` npm library  

---

## 📤 Deployment

### **Backend**
- Render / Railway / AWS EC2

### **Frontend**
- Netlify / Vercel

### **Database**
- MongoDB Atlas

---

## 🤝 Contribution

Feel free to contribute by submitting issues or PRs.

---

## 🙌 Author
Developed by **Kartikey Upadhyay**  
(ABES Engineering College)


