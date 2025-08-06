# Hari Nair Suresh Chandran - Portfolio

A modern, responsive portfolio website showcasing my experience as a Software Engineer and Computer Science Graduate Student at the University of Florida. Features a clean design, smooth animations, and mobile-friendly layout.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **SEO Friendly**: Proper HTML structure and meta tags

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Portfolio Sections

This portfolio includes the following sections:

### 1. Hero Section
- Personal introduction with name and title
- Brief description of current role and aspirations
- Call-to-action buttons

### 2. About Section
- Professional summary and background
- Key statistics (experience, GPA, achievements)
- Personal branding elements

### 3. Experience Section
- Timeline-based professional experience
- Detailed work history with responsibilities
- Technology stacks used at each role

### 4. Projects Section
- Featured projects with descriptions
- GitHub links and technologies used
- Notable achievements and awards

### 5. Skills Section
- Categorized technical skills
- Programming languages, frameworks, and tools
- Machine learning and cloud technologies

### 6. Contact Section
- Contact information and social links
- Functional contact form
- Professional networking links

## 🚀 Quick Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `harinair97.github.io` (replace with your GitHub username)
3. Make it public

### Step 2: Upload Files
1. Clone the repository to your local machine
2. Copy all portfolio files to the repository folder
3. Commit and push the changes

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll down to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

Your portfolio will be live at: `https://harinair97.github.io`

## 🎨 Customization

### Updating Content
- Edit `index.html` to modify text content
- Update contact information and social links
- Add or modify projects and experience

### Styling
The main color scheme is defined in `styles.css`:
- Primary color: `#2563eb` (blue)
- Secondary color: `#7c3aed` (purple)
- Accent color: `#fbbf24` (yellow)
- Background colors: `#f8fafc` (light gray)

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your portfolio folder
3. Your site will be deployed instantly
4. You can set up a custom domain later

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your portfolio repository
4. Deploy with one click

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## 📝 Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **EmailJS**: Use EmailJS service
2. **Formspree**: Use Formspree for form handling
3. **Netlify Forms**: If deploying on Netlify
4. **Custom Backend**: Build your own backend API

### Example with EmailJS:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Add this script to your HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

3. Update the form submission in `script.js`:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message
});
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minify CSS/JS**: Use tools like UglifyJS and CSSNano
3. **Enable Gzip**: Compress files on your server
4. **Use CDN**: Load external libraries from CDN
5. **Lazy Loading**: Implement lazy loading for images

## 🔧 Customization Tips

### Adding a Blog Section

1. Create a new section in HTML
2. Add corresponding CSS styles
3. Update navigation menu
4. Add blog post cards or links

### Adding a Resume Download

1. Add a download button in the hero section
2. Upload your resume PDF to the project
3. Link the button to the PDF file

### Adding Dark Mode

1. Create CSS variables for colors
2. Add a theme toggle button
3. Use JavaScript to switch between themes
4. Store preference in localStorage

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions, please open an issue.

## 📞 Support

If you need help customizing your portfolio, feel free to:

1. Check the code comments for guidance
2. Open an issue on GitHub
3. Contact me through the portfolio contact form

---

**Happy coding! 🎉** 