# 🚀 Rodrigo de Sarasqueta - Backend & ML Engineer

> Elegant, minimalist landing page showcasing backend development, machine learning, and AI agent expertise.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://rodrigo-landing.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/rodrigo-ds4/mylanding)

## ✨ Features

### 🎨 **Design & UX**
- **Ultra-minimalist aesthetic** - Clean black, white, and gray palette with subtle rainbow accents
- **Physics-based animations** - Interactive bouncing balls with collision detection
- **Responsive design** - Optimized for all devices with improved mobile margins and spacing
- **Smooth scrolling** - Fluid navigation between sections with active state indicators
- **Rainbow interactions** - Elements energize with rainbow effects on hover/interaction

### 🌐 **Internationalization**
- **Bilingual support** - English and Spanish with seamless toggle
- **Dynamic content translation** - All sections, projects, and forms adapt to selected language
- **Persistent language preference** - Remembers user's language choice

### 🔧 **Interactive Elements**
- **Animated skill bars** - Progressive filling on scroll with rainbow shimmer effects
- **Stacking HR separators** - Dynamic horizontal rules that accumulate on scroll
- **Typing code effect** - Animated JSON-style developer introduction
- **Contact form** - Functional email integration with loading states and success feedback
- **CV download** - Direct link to downloadable PDF resume

### 📱 **Technical Implementation**
- **Vanilla JavaScript** - No frameworks, pure ES6+ with modern APIs
- **CSS Grid & Flexbox** - Advanced layouts with responsive breakpoints
- **Intersection Observer API** - Efficient scroll-triggered animations
- **Canvas animations** - Hardware-accelerated particle physics
- **Serverless backend** - Vercel functions for contact form processing

## 🛠️ Tech Stack

### **Frontend**
```
HTML5 • CSS3 • Vanilla JavaScript
CSS Grid • Flexbox • Canvas API
Intersection Observer • Local Storage
```

### **Backend & Deployment**
```
Vercel Serverless Functions • Node.js
Nodemailer • Environment Variables
Git • GitHub Actions
```

## 🚀 Projects Showcased

### **[IndieHoy Community](https://github.com/rodrigo-ds4/IndieHoyCommunity)**
Community platform for independent artists with real-time features and content management.
- **Tech**: React, Node.js, WebSocket, MongoDB
- **Focus**: Full-stack development, real-time communication

### **[SoundGraph](https://github.com/rodrigo-ds4/soundgraph)**
Audio visualization and DJ mixing tools with advanced signal processing.
- **Tech**: Python, NumPy, WebAudio API, FFT algorithms
- **Focus**: Digital signal processing, data visualization

### **[Insurance AI Bot](https://github.com/rodrigo-ds4/InsuranceAIBot)**
Intelligent chatbot for financial risk assessment with ML-powered decision making.
- **Tech**: Python, LangChain, NLP, Risk Modeling
- **Focus**: AI agents, financial analysis, conversational AI

## 💼 Skills & Expertise

### **Backend & Architecture**
- **Microservices** - Python, Node.js, API design
- **Database Design** - SQL, NoSQL, optimization
- **System Integration** - RESTful APIs, webhooks, third-party services

### **Machine Learning & AI**
- **Data Science** - Statistical modeling, predictive analytics
- **AI Agents** - LangChain, conversational AI, automation
- **MLOps** - Model deployment, monitoring, scalability

### **DevOps & Deployment**
- **Cloud Platforms** - Vercel, AWS, containerization
- **Version Control** - Git workflows, CI/CD pipelines
- **Performance** - Optimization, caching, scalability

## 🏃‍♂️ Quick Start

### **Local Development**
```bash
# Clone repository
git clone https://github.com/rodrigo-ds4/mylanding.git
cd mylanding

# Start local server
python -m http.server 3000
# or
npx serve . -p 3000

# Open in browser
open http://localhost:3000
```

### **Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables for contact form
vercel env add SMTP_HOST
vercel env add SMTP_PORT  
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add TO_EMAIL
vercel env add FROM_EMAIL
```

## 📧 Contact Form Setup

The contact form requires email configuration through environment variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=your-email@gmail.com
FROM_EMAIL=your-email@gmail.com
```

## 📁 Project Structure

```
mylanding/
├── index.html              # Main HTML structure
├── styles.css             # Responsive CSS with animations
├── script.js              # Interactive JavaScript
├── api/contact.js         # Serverless contact form handler
├── vercel.json           # Deployment configuration
├── Rodrigo de Sarasqueta - CV 2025.pdf
└── README.md
```

## 🎯 Key Features Breakdown

### **Animation System**
- **Ball Physics**: Collision detection with elastic responses
- **Skill Progression**: Scroll-triggered percentage animations
- **Rainbow Effects**: CSS-based color cycling with hardware acceleration
- **Intersection Observers**: Efficient viewport-based animations

### **Responsive Design**
- **Mobile-first approach** with improved margins and spacing
- **Fluid typography** that scales across all screen sizes  
- **Touch-optimized** interactive elements for mobile devices
- **Performance-optimized** animations with `transform` properties

### **Accessibility**
- **Semantic HTML** structure for screen readers
- **Keyboard navigation** support throughout the interface
- **High contrast** text for optimal readability
- **Reduced motion** respect for user preferences

## 🔗 Connect

- **Email**: rod.desarasqueta@gmail.com
- **LinkedIn**: [rodrigo-dev](https://www.linkedin.com/in/rodrigo-dev/)
- **GitHub**: [rodrigo-ds4](https://github.com/rodrigo-ds4/)

---

**Built with ❤️ for showcasing technical expertise and securing new opportunities in backend development, ML engineering, and AI agent implementation.** 