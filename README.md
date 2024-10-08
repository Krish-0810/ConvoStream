
# **CONVO STREAM**

**Real-time Video and Audio Communication Platform**

---

## **Project Overview**
CONVO STREAM is a real-time communication platform developed using React JS, Node JS, WebRTC, and Socket.IO. It allows users to engage in high-quality audio and video conversations. The platform supports multi-user video calls, text chat, screen sharing, and dynamic room creation.

## **Features**
- Real-time audio and video communication.
- Peer-to-peer video calls using WebRTC.
- Text chat integration during video calls.
- Multi-user group video calls.
- Screen sharing for enhanced collaboration.
- Secure room creation and management.
- Smooth connection management using Socket.IO.

## **Tech Stack**
- **Frontend**: React JS
- **Backend**: Node JS
- **Real-Time Communication**: WebRTC, Socket.IO
- **Styling**: CSS, Material-UI

---

## **Getting Started**

### **Prerequisites**
Make sure you have the following installed:
- Node.js (v12 or above)
- npm or yarn

### **Installation Steps**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/convo-stream.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd convo-stream
   ```

3. **Install dependencies for both client and server**:

   - **Install server dependencies**:
     ```bash
     cd server
     npm install
     ```

   - **Install client dependencies**:
     ```bash
     cd ../client
     npm install
     ```

### **Running the Application**

1. **Start the server**:
   ```bash
   cd server
   npm start
   ```

2. **Start the client**:
   ```bash
   cd ../client
   npm start
   ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

---

## **Environment Variables**
Create a `.env` file in the `server` directory and add the following:

```
PORT=8000
NODE_ENV=development
```

---

## **Folder Structure**
```
convo-stream/
│
├── client/               # React Frontend
│   ├── public/
│   └── src/
│       ├── components/   # React Components
│       └── App.js
│
├── server/               # Node Backend
│   ├── config/
│   ├── routes/
│   ├── controllers/

│   └── server.js         # Entry Point
│
└── README.md
```
how It Works**
1. **Room Creation**: Users can create or join a room using a unique room ID.
2. **WebRTC Connection**: WebRTC establishes direct peer-to-peer connections for video and audio streaming.
3. **Socket.IO Signaling**: Manages signaling, message exchange, and connection state between users.
4. **Real-Time Video Calls**: Users can view and interact with each other over real-time video.


