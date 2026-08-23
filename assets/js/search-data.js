// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A brief run-through of the major projects I have worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Some info about my GitHub profile and the projects I&#39;ve worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "This page showcases my academic journey, work experience, and research interests. For collaborations or inquiries, feel free to connect with me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-in-mechanical-engineering-from-iit-goa",
          title: 'Graduated in Mechanical Engineering from IIT Goa',
          description: "",
          section: "News",},{id: "news-joined-thermax-limited-as-a-graduate-engineer-trainee",
          title: 'Joined Thermax Limited as a Graduate Engineer Trainee',
          description: "",
          section: "News",},{id: "news-moved-to-innovation-function-of-heating-department-thermax-limited",
          title: 'Moved to Innovation function of Heating department, Thermax Limited',
          description: "",
          section: "News",},{id: "news-moved-to-innovation-function-of-enviro-department-thermax-limited",
          title: 'Moved to Innovation function of Enviro department, Thermax Limited',
          description: "",
          section: "News",},{id: "news-joined-tu-munich-for-ms-computational-science-and-engineering",
          title: 'Joined TU Munich for MS Computational Science and Engineering',
          description: "",
          section: "News",},{id: "projects-turbulent-combustion-modeling-using-deep-learning",
          title: 'Turbulent Combustion Modeling Using Deep Learning',
          description: "Artificial Neural Network to model CH₄/H₂ bluff-body turbulent combustion",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-fmae-fkdc-2021",
          title: 'FMAE-FKDC 2021',
          description: "Go-Kart Design Challenge",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-minicea",
          title: 'MiniCEA',
          description: "Thermochemical calculator to calculate Adiabatic Flame Temperature and Heat of Reaction for various fuels",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-smart-boiler-control",
          title: 'Smart Boiler Control',
          description: "Using Machine Learning and Predictive Modeling for pressure and water-level control",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%6D%6F%6C%64%65%65%70%31%32%36%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anmoldeepsingh04", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anmoldeepsingh04", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
