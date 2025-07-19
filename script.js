// Get element from dom

const projectCardContainer = document.querySelector('.project-card-container');

// Function to display the current UTC time
function updateUTC() {
    const utcTime = new Date().toUTCString();
    document.getElementById('utc-time').textContent = utcTime;
  }
  
// fetch profile from github
async () => {
    const profileImage = await fetch()
}
  // Update the time on page load and every second
  window.onload = updateUTC;
  setInterval(updateUTC, 1000);


  const projects = [
    {
      projectName: "Figma Store Clone",
      projectImage: "/assets/figma clone.png",
      techStack: "React • TypeScript • Tailwind • Vite • Vercel",
      overview: "A pixel-perfect Figma Store clone with product grid, filters, and responsive design",
      link: "https://figma-store-clone-v0.vercel.app/"
    },
    {
      projectName: "Easy Care Losk",
      projectImage: "/assets/easy.png",
      techStack: "React • Tailwind • Vercel",
      overview: "A clean, responsive platform that connects users with trusted health professionals.",
      link: "https://easy-care-losk.vercel.app/"
  },
  {
    projectName: "Stellar SaaS",
    projectImage: "/assets/stellar.png",
    techStack: "Webflow",
    overview: "A vibrant Webflow SaaS template with dynamic animations, responsive layout, and feature-rich sections.",
    link: "https://stellar-saas.webflow.io/"
  },
  {
    projectName: "Just Home by Giditals",
    projectImage: "/assets/just home.png",
    techStack: "Webflow",
    overview: "A modern real estate platform for browsing homes across U.S. cities",
    link: "https://just-home-by-giditals.webflow.io/"
  }
  ]

  // loop through projects and display them
projectCardContainer.innerHTML = projects.map(project => {
  return `
    <div class="project-card">
      <img class="project-image" src="${project.projectImage}" alt="${project.projectName}">
      <h3 class="project-name">${project.projectName}</h3>
      <p class="project-description">${project.overview}</p>
      <a href="${project.link}" class="project-link" target="_blank">View Project</a>
    </div>
  `;
}).join('');    