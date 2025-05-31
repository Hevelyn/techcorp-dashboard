# TechCorp Dashboard

This project is a technical challenge built using **Angular** and **Nx** monorepo architecture.

It displays a list of employees retrieved from a public API and allows adding new employees using a modal form. New employees are stored locally and the UI updates dynamically without page reload.

---

## 📁 Project Structure

The project follows Nx's best practices and is organized as:

```
techcorp/
├── apps/
│   └── dashboard/              # Main Angular app
│       └── src/app/
│           ├── components/
│           │   ├── employee-form/
│           │   └── employee-list/
│           ├── modals/
│           │   └── employee-form-modal/
│           └── app.component.ts
├── libs/
│   └── shared/                 # Shared library for logic/models
│       └── src/lib/
│           ├── models/
│           │   └── employee.model.ts
│           └── services/
│               └── employee.service.ts
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Hevelyn/techcorp-dashboard.git
cd techcorp-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npx nx serve dashboard
```

The app will be available at: [http://localhost:4200](http://localhost:4200)

---

## 🧩 Features

✅ Display employees from a public API  
✅ Add new employees through a modal form  
✅ LocalStorage used to persist newly added employees  
✅ Automatically updates list after adding new employee  
✅ Clean and responsive UI with Angular Material  
✅ Organized structure with shared library for services and models  
✅ Uses standalone components + OnPush change detection

---

## 🧪 Tech Stack

- [Nx](https://nx.dev/) (Monorepo management)
- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [RxJS](https://rxjs.dev/)
- TypeScript
- SCSS

---

## 📝 Notes

- ✅ **Authentication** was not required.
- ❌ No unit/integration tests were implemented.
- 🌐 No online deploy was requested.
- ✅ Focus was placed on:
  - Code clarity and maintainability
  - Separation of concerns via libraries
  - UX using Angular Material

---

## 🧠 How It Works

- Data is fetched from the public API:  
  [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

- When a new employee is created:
  - The app simulates a POST request
  - Saves the new employee locally (`localStorage`)
  - Emits an event to update the employee list dynamically

---

## 📸 Screenshots

> Optionally, you can add UI screenshots here.

---

## 👤 Author

Made with 💙 by [Hevelyn Vieira](https://github.com/Hevelyn)

---
