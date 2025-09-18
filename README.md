# 🚀 Portfolio Hub

**Live Site:** [gabriel-baptista.dev](https://gabriel-baptista.dev)

A modern, minimalist portfolio hub showcasing my journey as a **Full Stack Engineer** and **AI Engineer**. This serves as the central landing page for my project showcase, where visitors can explore my work and navigate to individual project demonstrations.

## ✨ Overview

This portfolio hub is designed to be a clean, professional gateway to my project ecosystem. Built with performance and user experience in mind, it features a focused card-based design that highlights my current technical focus while providing easy access to my professional profiles.

### 🎯 Vision

The ultimate goal is to transform this hub into a comprehensive **project showcase platform** where visitors can:

- 🔍 **Browse** interactive project cards with previews, GIFs, and live demos
- 🛠️ **Explore** detailed project breakdowns including tech stacks and implementation details
- 🎮 **Test** live implementations directly in the browser
- 📚 **Learn** from comprehensive project documentation and case studies

Each project will be presented as an interactive tile featuring:

- **Visual Preview**: Screenshots or animated GIFs demonstrating functionality
- **Tech Stack**: Clear technology badges and icons
- **Concise Description**: Brief, impactful project summary
- **Live Demo**: Direct links to functional implementations

## 🛠️ Tech Stack

### **Frontend Framework**

- **Next.js 15.3.5** - React-based framework with SSG capabilities
- **React 19** - Latest React with improved performance features
- **TypeScript 5** - Type-safe development environment

### **Styling & Design**

- **Tailwind CSS 4** - Utility-first CSS framework with custom theming
- **Poppins Font** - Modern, clean typography via Google Fonts
- **FontAwesome** - Professional icon library for social links

### **Infrastructure & Deployment**

- **AWS S3** - Static site hosting with high availability
- **CloudFront CDN** - Global content delivery and caching
- **GitHub Actions** - Automated CI/CD pipeline
- **Custom Domain** - Professional branding with SSL/TLS

## 🎨 Design System

### **Color Palette**

```css
Background: #111827 (Dark Gray)
Card: #1f2937 (Darker Gray)
Primary Text: #f9fafb (Off-white)
Secondary Text: #9ca3af (Light Gray)
Accent: #38bdf8 (Sky Blue)
```

### **Typography**

- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)
- **Hierarchy**: Clean, readable type scale with proper contrast

### **Visual Elements**

- **Emojis**: Strategic use for visual interest (🚀, 🔥, etc.)
- **Icons**: FontAwesome for consistent social media branding
- **Spacing**: Generous whitespace for clean, modern feel
- **Borders**: Subtle gray borders with rounded corners

## 🚀 Deployment Pipeline

### **Automated CI/CD with GitHub Actions**

The portfolio uses a sophisticated deployment pipeline that ensures reliability and performance:

```yaml
Trigger: Push to master branch
Environment: Ubuntu Latest
Node Version: 18 LTS
Build Process: Next.js static export
Deployment: AWS S3 sync with --delete flag
CDN: CloudFront cache invalidation
Region: South America East (São Paulo)
```

### **Pipeline Steps**

1. **Code Checkout** - Repository cloning with latest changes
2. **Environment Setup** - Node.js 18 with npm cache optimization
3. **Dependency Installation** - Fast, cached npm install
4. **Static Build** - Next.js build with static export optimization
5. **AWS Deployment** - S3 sync with automatic cleanup
6. **CDN Refresh** - CloudFront cache invalidation for instant updates

### **Infrastructure Benefits**

- ⚡ **Lightning Fast**: CDN delivery with global edge locations
- 🔒 **Secure**: HTTPS-only with AWS SSL certificates
- 💰 **Cost Effective**: Pay-per-use with minimal operational overhead
- 🌍 **Global**: Optimized for users worldwide
- 🔄 **Automated**: Zero-downtime deployments on every commit

## 📱 Features

### **Current Implementation**

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Professional Card Layout**: Focused, clean presentation
- **Social Integration**: Direct links to LinkedIn and GitHub profiles
- **Custom Branding**: Personal logo and consistent visual identity
- **Performance Optimized**: Static generation for maximum speed

### **Upcoming Features**

- **Project Gallery**: Interactive grid of project showcases
- **Live Demos**: Embedded or linked project demonstrations
- **Filtering System**: Sort projects by technology or category
- **Detailed Pages**: Individual project case studies
- **Contact Integration**: Professional contact form
- **Blog Section**: Technical articles and project insights

## 🎯 Current Focus

As highlighted on the landing page, my current technical focus includes:

- **Building end-to-end AI solutions** at the intersection of software and machine learning
- **Mastering MLOps** and scalable AI architectures
- **Creating optimized, production-grade solutions**

This portfolio hub will serve as a living showcase of projects that demonstrate these capabilities, from machine learning implementations to full-stack applications with AI integration.
