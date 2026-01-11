// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-apple-siri-and-buying-your-way-back-into-ai-ml",
        
          title: 'Apple, Siri, and Buying Your Way Back Into AI/ML <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@profio/apple-siri-and-buying-your-way-back-into-ai-ml-99f1caf4e749?source=rss-a3a58e969249------2", "_blank");
          
        },
      },{id: "post-it-s-tempting-and-often-illuminating-to-think-of-tech-history-as-a-series-of-titanic-duels",
        
          title: 'It’s tempting, and often illuminating, to think of tech history as a series... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@profio/its-tempting-and-often-illuminating-to-think-of-tech-history-as-a-series-of-titanic-duels-395274500fe9?source=rss-a3a58e969249------2", "_blank");
          
        },
      },{id: "books-elon-musk",
          title: 'Elon Musk',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Elon%20Musk/";
            },},{id: "books-how-to-build-a-brain-a-neural-architecture-for-biological-cognition",
          title: 'How to Build a Brain - A Neural Architecture for Biological Cognition',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/How%20to%20Build%20a%20Brain/";
            },},{id: "books-on-intelligence",
          title: 'On Intelligence',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/On%20Intelligence/";
            },},{id: "books-principles-of-neural-science",
          title: 'Principles of Neural Science',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Principles%20of%20Neural%20Science/";
            },},{id: "books-rhythms-of-the-brain",
          title: 'Rhythms of the Brain',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Rhythms%20of%20the%20Brain/";
            },},{id: "books-steve-jobs",
          title: 'Steve Jobs',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Steve%20Jobs/";
            },},{id: "books-the-five-dysfunctions-of-a-team",
          title: 'The Five Dysfunctions of a Team',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The%20Five%20Dysfunctions%20of%20a%20Team/";
            },},{id: "books-the-mountain-is-you",
          title: 'The Mountain is You',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The%20Mountain%20Is%20You/";
            },},{id: "books-the-nvidia-way-jensen-huang-and-the-making-of-a-tech-giant",
          title: 'The Nvidia Way - Jensen Huang and the Making of a Tech Giant...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/The%20Nvidia%20Way/";
            },},{id: "books-theoretical-neuroscience",
          title: 'Theoretical Neuroscience',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Theoretical%20Neuroscience/";
            },},{id: "news-graduated-from-carnegie-mellon-university",
          title: 'Graduated from Carnegie Mellon University',
          description: "",
          section: "News",},{id: "news-published-a-survey-paper-on-the-intersection-of-biomedical-informatics-and-cybersecurity",
          title: 'Published a survey paper on the intersection of biomedical informatics and cybersecurity',
          description: "",
          section: "News",},{id: "projects-jasci-software",
          title: 'JASCI Software',
          description: "An organizational analysis and assessment toward improved operations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/JASCI%20Software/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/led7283981", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%64%77%61%72%64@%70%72%6F%66%69%6F.%75%73", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/profio1997", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/ledprofio", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/lp12468", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/profio", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@Profio", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Edward-Profio/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=xQ1hxBoAAAAJ&", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/EdProfio1", "_blank");
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
