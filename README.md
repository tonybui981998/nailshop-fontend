# NailShop Customer Website

This repository contains the frontend source code for the **NailShop Customer Website**, which allows customers to book appointments, purchase vouchers, and interact with the salon services online. The application is built using **React** and **Vite** for fast and modern user experiences.

## 🛠 Tech Stack
- **React** with **Vite**
- **JavaScript**
- **SCSS** for styling
- **Axios** for API calls
- **React Router** for page navigation

## 📦 Features
- Online booking for nail services
- Purchase gift vouchers
- Contact form and feedback submission
- Responsive user interface

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/tonybui981998/nailshop-fontend.git
cd nailshop-fontend

# Install dependencies
npm install
```

### Running the Development Server
```bash
npm run dev
```
The app will run on: `http://localhost:5173`

## 🔗 API Configuration
Create a `.env` file in the root directory with the following content:
```env
VITE_API_URL=http://localhost:5000/api
```

## 📁 Project Structure
```
src/
├── components/         # UI components like booking forms and cards
├── pages/              # Home, Booking, Voucher, Contact pages
├── services/           # API service functions
├── assets/             # Images and SCSS styles
├── App.jsx             # Main layout and router
└──main.jsx             # Vite entry
```

## 🐞 Troubleshooting
If the website doesn't load or connect to the API:
- Make sure the backend is running on the correct port
- Check `.env` file settings
- Open browser console for detailed error logs

## 📄 License
This codebase is for educational and academic use only.

---
To view other components of the project such as the admin dashboard and backend API, visit the related repositories on GitHub.
