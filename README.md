<h1>🖥️ BBT Blog Platform – Frontend</h1>

<p>A modern, responsive blog frontend application built with <strong>Next.js</strong> that consumes a REST API developed with Spring Boot, providing a clean and user-friendly interface for browsing and managing blog posts.</p>

<h2>🚀 Live Demo</h2>
<p><a href="https://bbt-blog.vercel.app">Live Demo</a></p>

<h2>✨ Features</h2>

<h3>🔐 Authentication UI</h3>
<ul>
    <li><strong>Login & Register Pages</strong>: Intuitive interfaces for user authentication.</li>
    <li><strong>JWT Token Handling</strong>: Securely stored in LocalStorage.</li>
    <li><strong>Persistent User Session</strong>: Keep users logged in across sessions.</li>
    <li><strong>Role Detection</strong>: Dynamic UI adjustments based on USER / ADMIN roles.</li>
</ul>

<h3>📰 Blog Interface</h3>
<ul>
    <li><strong>Blog Listing Page</strong>: View all blog posts at a glance.</li>
    <li><strong>Featured Latest Post Section</strong>: Highlight trending content.</li>
    <li><strong>Blog Detail Pages</strong>: Read full articles seamlessly.</li>
    <li><strong>Dynamic Routing with App Router</strong>: Smooth navigation experience.</li>
    <li><strong>Admin-Only Create Blog Page</strong>: Simple interface for content creation.</li>
</ul>

<h3>🧭 Navigation</h3>
<ul>
    <li><strong>Responsive Navbar</strong>: Easily accessible navigation.</li>
    <li><strong>Mobile Menu</strong>: Adaptable layout for mobile users.</li>
    <li><strong>User Avatar & Dropdown Menu</strong>: Personalized experience.</li>
    <li><strong>Conditional Menu Items</strong>: Display options based on user role.</li>
</ul>

<h3>🎨 UI / UX</h3>
<ul>
    <li><strong>Fully Responsive Design</strong>: Optimal viewing on all devices.</li>
    <li><strong>Modern Card-Based Layout</strong>: Clean and organized presentation.</li>
    <li><strong>Dark Theme Styling</strong>: Aesthetic appeal and user preference.</li>
    <li><strong>Loading & Empty States</strong>: Clear feedback during data fetching.</li>
    <li><strong>Smooth Hover Animations</strong>: Enhanced interactivity.</li>
</ul>

<h2>🧰 Tech Stack</h2>
<ul>
    <li>Next.js 14 (App Router)</li>
    <li>React</li>
    <li>Axios</li>
    <li>Tailwind CSS</li>
    <li>shadcn/ui</li>
    <li>Context API (for global user state)</li>
    <li>Moment.js</li>
    <li>React Icons</li>
</ul>

<h2>📁 Project Structure</h2>
<pre class="project-structure">
app/
│
├── blog/
├── create-blog/
├── login/
└── register/

components/
│
├── Navbar
├── BlogClient
├── FirstBlog
└── OtherBlogs

services/
├── axios.js
└── postService.js

context/
└── UserContext.js
</pre>

<h2>🔄 State Management</h2>
<ul>
    <li><strong>Global User State</strong>: Managed with React Context API.</li>
    <li><strong>LocalStorage for Authentication Data</strong>: Ensures session persistence.</li>
    <li><strong>Custom Event System</strong>: Facilitates cross-component session updates.</li>
</ul>

<h2>🌐 API Integration</h2>
<p>All API requests are handled via Axios:</p>
<pre>
baseURL: https://bbt-blog-project-production.up.railway.app/api
Features:
  • Automatic JWT Token Injection via Axios Interceptor
  • Centralized API Service Layer
  • Comprehensive Error Handling & Async Data Fetching
</pre>

<h3>🔧 Local Development</h3>
<p>To get started locally:</p>
<pre>
npm install
npm run dev
</pre>

<h3>📦 Build for Production</h3>
<p>To build your application for production:</p>
<pre>
npm run build
npm start
</pre>

<h2>🎯 Skills Demonstrated</h2>
<ul>
    <li>Modern React & Next.js architecture</li>
    <li>API consumption & async state handling</li>
    <li>Robust authentication flows</li>
    <li>Role-based UI rendering</li>
    <li>Responsive UI design principles</li>
    <li>Component-driven development</li>
    <li>Effective production deployment (Vercel)</li>
    <li>Clean project structuring</li>
</ul>

<h2>👨‍💻 Developer</h2>
<p><strong>Baran Kara</strong><br>Computer Programming Student<br>Frontend & Full-Stack Developer</p>

<h2>📄 License</h2>
<p>For educational and portfolio use only.</p>
