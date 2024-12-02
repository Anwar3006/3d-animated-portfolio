# Portfolio Website

Welcome to my portfolio website! 🚀 This site showcases my skills, projects, and creativity as a developer, with a touch of 3D design and smooth animations. Here's everything you need to know about how this site was built and the tools that power it.

---

## 🛠️ Tools and Technologies

### **Frontend Framework**

- **ReactJS**: A powerful JavaScript library for building user interfaces.  
  [ReactJS Documentation](https://reactjs.org/)

### **3D Rendering**

- **Three.js**: A JavaScript library that brings 3D graphics to the web using WebGL.  
  [Three.js Documentation](https://threejs.org/)
- **Sketchfab**: A platform to find and integrate high-quality 3D models.  
  [Sketchfab Website](https://sketchfab.com/)

### **Animations**

- **Motion**: A library for declarative animations and gestures in React.  
  [Framer Motion Documentation](https://www.framer.com/motion/)

### **Email Service**

- **EmailJS**: EmailJS helps to send emails using client-side technologies only. No server is required – just connect EmailJS to one of the supported email services, create an email template, and use one of our SDK libraries to trigger an email.
  [EmailJS Documentation](https://www.emailjs.com/docs/)

---

## 📦 Noteworthy Dependencies

- **react-type-animation**: For creating dynamic typing animations on the site.  
  [react-type-animation on npm](https://www.npmjs.com/package/react-type-animation)
- **three**: Core Three.js library for rendering 3D objects.  
  [three on npm](https://www.npmjs.com/package/three)
- **@react-three/drei**: Helper components to simplify working with Three.js in React.  
  [@react-three/drei on npm](https://www.npmjs.com/package/@react-three/drei)
- **@react-three/fiber**: React renderer for Three.js, enabling seamless integration of 3D graphics.  
  [@react-three/fiber on npm](https://www.npmjs.com/package/@react-three/fiber)

---

## 🎨 Features

- **Interactive 3D Models**: Explore engaging 3D elements powered by Three.js and Sketchfab.
- **Smooth Animations**: Experience sleek transitions and effects using Motion.
- **Dynamic Content**: Typing animations bring text to life, adding an interactive touch.

---

## 🚧 Work in Progress

This portfolio is continuously evolving! Stay tuned for updates, new projects, and more exciting features.

---

## 💻 Setup

To run this project locally:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start`.

---

## Creating a 3D Model

1. Install [`npm install -g gltf-pipeline`](https://www.npmjs.com/package/gltf-pipeline)
2. Then convert the `.gltf` to a `.glb`, using this command `gltf-pipeline -i model.gltf -o model.glb`
3. Then create a JSX Component from the `.glb` file you just converted using this command [`npx gltfjsx <file>.glb`](https://github.com/pmndrs/gltfjsx)
4. Copy the `.jsx` file and the `.glb` to the component folder in your react app.

---

Thank you for visiting my portfolio! 😊
