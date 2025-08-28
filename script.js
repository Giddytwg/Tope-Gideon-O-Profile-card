
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
    projectName: "Crypton crypto",
    projectImage: "/assets/crypton.png",
    techStack: "Webflow",
    overview: "A modern platform for trading and managing cryptocurrencies.",
    link: "https://crypton-crypt.webflow.io/"
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
  },
  {
      projectName: "Easy Care Losk",
      projectImage: "/assets/easy.png",
      techStack: "React • Tailwind • Vercel",
      overview: "A clean, responsive platform that connects users with trusted health professionals.",
      link: "https://easy-care-losk.vercel.app/"
  },
 
  ]

  // loop through projects and display them
projectCardContainer.innerHTML = projects.map(project => {
  return `
    <div class="project-card">
      <div class="project-image-container">
      <img src="${project.projectImage}" alt="${project.projectName}">
      </div>
      <div>
        <h3 class="project-name">${project.projectName}</h3>
        <p class="project-description">${project.overview}</p>
      </div>
      <a href="${project.link}" class="project-link" target="_blank">View Project</a>
    </div>
  `;
}).join('');    


// Counter
const counterEl = document.getElementById('counter');
const counter2El = document.getElementById('green');
  const target = 30;
  const duration = 3000;

  let start = 0; // For counter 1

  const increment = target / (duration / 16);

  const countUp = () => {
    start += increment;
    if (start < target) {
      counterEl.textContent = Math.floor(start);
      requestAnimationFrame(countUp);
    } else {
      counterEl.textContent = target;
    }
  };
  countUp();


  // adds Shadow on scroll
//   const profileTop = document.querySelector('.profile-card-top');
// const profileDown = document.querySelector('.profile-card-down');
// const portfolioIcon = document.querySelector('.fa-business-time');

// window.addEventListener('scroll', () => {
//   const isStuck = profileTop.classList.contains('is-stuck');

//   const topOffset = profileTop.getBoundingClientRect().top;

//   if (topOffset <= 0) {
//     if (!isStuck) {
//       profileTop.classList.add('is-stuck');
//       profileDown.classList.add('shadow-on-scroll');
//       portfolioIcon.style.color = ' rgb(142, 245, 83)'; // Reset icon color
//       // portfolioIcon.style.scale = '1.1'; // Scale up the icon
//       portfolioIcon.style.rotate = '15deg '; // Scale up the icon
//     }
//   } else {
//     if (isStuck) {
//       profileTop.classList.remove('is-stuck');
//       profileDown.classList.remove('shadow-on-scroll');
//       portfolioIcon.style.color = ' white'; // Reset icon color
//       // portfolioIcon.style.scale = '1'; // Scale up the icon
//       portfolioIcon.style.rotate = '0deg '; // Scale up the icon
//     }
//   }
// });

// Changing words in the short bio
const words = ["Cooperates", "Individuals", "Businesses"];
  const container = document.querySelector(".changing-words");

  let index = 0;

  function dropNextWord() {
    // Clear the container and add a new span with animation
    container.innerHTML = "";

    const word = document.createElement("span");
    word.textContent = words[index];
    container.appendChild(word);

    index = (index + 1) % words.length;
  }

  // Start and repeat
  dropNextWord();
  setInterval(dropNextWord, 2500); // Change word every 2.5s