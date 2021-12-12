import { createStore } from 'vuex'

export default createStore({
  state: {
    projects: [
      {
        title: 'Portfolio',
        slug: 'portfolio',
        shortRole: 'Vue JS Website Developer',
        img:require('@/assets/images/projects/project-humbertoportfolio1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2021',
        myRole: ['Website Designer', 'VueJS developer'],
        client: 'Myself - Venezuela',
        webpage: 'www.humberto-albarran.com',
        url: 'https://humberto-albarran.com',
        technologies: ['VueJS 3x', 'HTML5 - CSS3 - JS', 'Tailwind CSS', 'Vue Router - Vuex', 'Laragon'],
        longDescription: [
          'Having my own portfolio was one of my personal debts as a website developer. Nowdays having a showcase or portfolio is highly important because is a way you can actually show your works to others. The idea of having a portfolio started several years ago, at first, I decided to built it with Wordpress, but the more I got used to work with frontend technologies, I simply chose that using Vue JS to take the step forward is a better solution, because I can simply do whatever I want in terms of structure, animations, and how the navigation show be done.', 
          'After I chose to develop my site with VueJS, the other things I had to select, was the version of the frontend, and moreover how I wanted to display all the information to the visitors in the webpage. In order to get answers the first thing I did was going to the google search bar to look for "Portfolios and resumes websites design inspiration" then, I went to the Youtube searching for "Portfolios design inspiration" after I dedicated a lot of time getting some ideas, I decided for a mix of features based on my research.',
          'The first thing I decided to have, is that I didn\'t want the conventional sticky navbar at the top of the page. I went on a off-canvas navigation by default, in order to keep the design as minimalist as possible. Just a simple Menu button, and a cool animation to show the pages of my website. I decided at the end, a curtain animation, and a group transition to animate the anchor links showed in the main menu. My second choice about the design was about the organization of the info of my projects and the organization of the structure of the "about me" page, after I had a single piece of paper handwritten of how I wanted my site, I had to decide technologies related to VueJS (version and packages).',
          'Some choices are really simple, because are the default choice in almost every project as for example: Vue-router and Vuex. But deciding over to have a UI framework like Vuesax or BootstrapVue and to managed the styling by myself with the help of css frameworks as Tailwind CSS, the decision went in favor of managing the styles myself, because I need to create some custom animation for entrance and leaving objects in the viewport, and in that case I think that challenging myself with plain css and Tailwind CSS was a good choice and a way to improve my skills instead of simply getting components predefined by the UI frameworks. I developed my entire site on localhost with Laragon.'
        ]
      },
      {
        title: 'Cohen & Aguirre - Videoportal',
        slug: 'cohenyaguirre-videoportal',
        shortRole: 'Vue JS Developer, Laravel & DevOps',
        img:require('@/assets/images/projects/project-cohenyaguirre1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2019-current',
        myRole: ['VueJS Frontend Developer', 'Laravel Backend apprentice', 'DevOps / Cloud Server Manager'],
        webpage: 'www.videoportaldenegocios.es',
        url: 'http://videoportaldenegocios.es',
        client: 'Cohen & Aguirre Lobby Solutions - Spain',
        technologies: ['VueJS 2.6x & Laravel 8', 'HTML5 - CSS3 - JS - PHP - MySQL', 'Vuesax & Tailwind CSS', 'Vue Router - Vuex - Axios', 'Linux Ubuntu 20.04', 'Visual Studio Code', 'Laragon'],
        longDescription: [
          'This is currently the largest development project I have been working on. This challenge started in mid-July 2019 when I had a lot of talks about the specific requirements that the web application should meet, also the client allow me to chose the techonologies that were going to be used in the development process. To carry out the project I contacted and old friend that was already a programmer: Gustavo Escobar. After some conversations of the architecture and knowing that this was my very first proffesional coding challenge, we decided to do it with Laravel and VueJS.',
          'The project was built on top of VueJS 2.6.x (developed by me) and Laravel v8 as the backend Framework (developed by Gustavo). To deploy as many features as possible, we decided to take advantage using Vuesax UI Components Framework and Tailwind CSS. It uses vue-router, vuex, and of course Axios to make API calls to the server.',
          'In the Laravel side, this projects makes use of libraries like Tymon JWT to handled JWT authorization & authentication processes. Also uses Jeremy Kenedy to handle roles and gumlet for image resizings.',
          'The deploy of new features is on a Cloud Server using Linux Ubuntu v20.04. I developed in a Windows 10, IDE Visual Studio Code, and Localhost is provided by Laragon.',
          'I like a lot this project, because not only this is my first big challenge but it\'s very dynamic thanks to the organization\'s nature, were the project needs to deploy as many features as posible to maintain his market, and customers satisfied.'
        ]  
      },
      {
        title: 'Cohen & Aguirre - Intranet',
        slug: 'cohenyaguirre-intranet',
        shortRole: 'Vue JS Developer, Laravel & DevOps',
        img:require('@/assets/images/projects/project-cohenyaguirre1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2021',
        myRole: ['VueJS Frontend Developer', 'Laravel Backend apprentice', 'DevOps / Cloud Server Manager'],
        webpage: 'www.cohenyaguirre.es/intranet',
        url: 'http://cohenyaguirre.es/intranet',
        client: 'Cohen & Aguirre Lobby Solutions - Spain',
        technologies: ['VueJS 2.6x & Laravel 8', 'HTML5 - CSS3 - JS - PHP - MySQL', 'Vuesax & Tailwind CSS', 'Vue Router - Vuex - Axios', 'Linux Ubuntu 20.04', 'Visual Studio Code', 'Laragon'],
        longDescription: [
          'This is currently the largest development project I have been working on. This challenge started in mid-July 2019 when I had a lot of talks about the specific requirements that the web application should meet, also the client allow me to chose the techonologies that were going to be used in the development process. To carry out the project I contacted and old friend that was already a programmer: Gustavo Escobar. After some conversations of the architecture and knowing that this was my very first proffesional coding challenge, we decided to do it with Laravel and VueJS.',
          'The project was built on top of VueJS 2.6.x (developed by me) and Laravel v8 as the backend Framework (developed by Gustavo). To deploy as many features as possible, we decided to take advantage using Vuesax UI Components Framework and Tailwind CSS. It uses vue-router, vuex, and of course Axios to make API calls to the server.',
          'In the Laravel side, this projects makes use of libraries like Tymon JWT to handled JWT authorization & authentication processes. Also uses Jeremy Kenedy to handle roles and gumlet for image resizings.',
          'The deploy of new features is on a Cloud Server using Linux Ubuntu v20.04. I developed in a Windows 10, IDE Visual Studio Code, and Localhost is provided by Laragon.',
          'I like a lot this project, because not only this is my first big challenge but it\'s very dynamic thanks to the organization\'s nature, were the project needs to deploy as many features as posible to maintain his market, and customers satisfied.'
        ]  
      },
      {
        title: 'Offyrus',
        slug: 'offyrus',
        shortRole: 'Ecommerce Prestashop & Graphic Designer',
        img:require('@/assets/images/projects/project-offyrus1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2017-2021',
        myRole: ['Prestashop Developer Remote', 'Branding - Graphic Designer', 'MS Access DB manager'],
        webpage: 'www.offyrus.com',
        url: 'https://offyrus.com',
        client: 'Offyrus - Spain',
        technologies: ['Prestashop / Woocommerce', 'XAMPP & Windows Server 2016', 'HTML5 - CSS3 - PHP - MySQL', 'Microsoft Access', 'Adobe After Effects', 'Adobe Illustrator', 'Adobe Photoshop'],
        longDescription: [
          'This is by far the most difficult Ecommerce project that i\'ve develop using CMS like Prestashop, or Wordpress. For this project I had to create first an ecommerce using Woocommerce, then, because of performance and speed issues, I had to re-design and re-build the site with Prestashop. Taking into account that this store manages more than 43,000 products, and have a great catalog of different characteristics of articles, it was a very big challenge at the time the project started.',
          'The site owner was a very meticulous person who liked to enhance some features in the site that weren\'t by default, pushing sometimes the boundaries of the prestashop template. I had to edit the .tpl files, a lot of CSS, and of course a lot of PHP to achieve the owner requirements.',
          'Also, the owner wanted to connect the MySQL Prestashop Database with the DB of the supplier in Spain. To do that, I had to connect both databases inside MS Access using ODBC connectors, to automatically make procedures like updating the stock, etc.',
          'I developed the ecommerce using XAMPP. The deploy were on a shared Hosting enhanced for prestashop and the Database connections between supplier and my client in MS Access were performed in a Windows Server 2016.',
          'In terms of graphic design, I designed a lot of marketing campaings in Facebook & Instagram for the company, also, I\'ve created several videos of the store using Adobe After Effects. Some of the banners of the website were done in Adobe Illustrator and Adobe Photoshop.'
        ]  
      },
      {
        title: 'Sibarita & Co',
        slug: 'sibaritandco',
        shortRole: 'Wordpress Website Designer',
        img:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2021',
        myRole: ['Wordpress Developer Remote'],
        webpage: 'www.sibaritandco.com',
        url: 'https://sibaritandco.com',
        client: 'Sibarita & Co - Spain',
        technologies: ['Wordpress', 'Laragon', 'HTML5 - CSS3 - PHP', 'Adobe Illustrator'],
        longDescription: [
          'The aim of this project is about supporting the labour of many people outside and inside my Country trying to give happiness and wellness to a lot of venezuelans citizens that doesn\'t have access to health and lived very far from the cities.',
          'At the very beginning that I were told about the project I got inmediately involved in, because somehow I feel I am helping giving to the organization a better way to engage with the public in order to get more donations from them.',
          'After getting the template and the graphic and text resources to begin the job, I thought... this is one of the projects that seems to be done fast and easy, but I couldn\'t have been more worng. The problem was how the template works. Editing with the elementor plugin the pages was not the issue, it was all the predefined css styles and scripts that run in the template by default. I had to edit a lot of the original code of the template in order to achieve quite easy tasks as how the NavBar and footer behaves accordingly when the screen size changes (testing responsiveness of the design) but it seemed to not obeying elementor... At the end, I got the site running good, but I had really hard work "twisting" the template files.',
          'Moreover the webpage design was changed after the project was almost complete, so, that had a significant impact on the time the webpage was finally released.'
        ]  
      },
      {
        title: 'Saporiti Fire',
        slug: 'saporitifire',
        shortRole: 'Wordpress Website Designer',
        img:require('@/assets/images/projects/project-saporitifire1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2021',
        myRole: ['Wordpress Developer Remote'],
        webpage: 'www.saporitifire.com',
        url: 'https://saporitifire.com',
        client: 'Saporiti Water Pump Services C.A. - Venezuela',
        technologies: ['Wordpress', 'Laragon', 'HTML5 - CSS3 - PHP', 'Adobe Illustrator'],
        longDescription: [
          'The aim of this project is about supporting the labour of many people outside and inside my Country trying to give happiness and wellness to a lot of venezuelans citizens that doesn\'t have access to health and lived very far from the cities.',
          'At the very beginning that I were told about the project I got inmediately involved in, because somehow I feel I am helping giving to the organization a better way to engage with the public in order to get more donations from them.',
          'After getting the template and the graphic and text resources to begin the job, I thought... this is one of the projects that seems to be done fast and easy, but I couldn\'t have been more worng. The problem was how the template works. Editing with the elementor plugin the pages was not the issue, it was all the predefined css styles and scripts that run in the template by default. I had to edit a lot of the original code of the template in order to achieve quite easy tasks as how the NavBar and footer behaves accordingly when the screen size changes (testing responsiveness of the design) but it seemed to not obeying elementor... At the end, I got the site running good, but I had really hard work "twisting" the template files.',
          'Moreover the webpage design was changed after the project was almost complete, so, that had a significant impact on the time the webpage was finally released.'
        ]  
      },
      {
        title: 'Ven Da tu Mano',
        slug: 'vendatumano',
        shortRole: 'Wordpress Website Designer',
        img:require('@/assets/images/projects/project-vendatumano1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2021',
        myRole: ['Wordpress Developer Remote'],
        webpage: 'www.vendatumano.es',
        url: 'https://vendatumano.es',
        client: 'Ven Da Tu Mano ONG - Spain',
        technologies: ['Wordpress', 'Stripe & Paypal', 'Laragon', 'HTML5 - CSS3 - PHP', 'Adobe Illustrator'],
        longDescription: [
          'The aim of this project is about supporting the labour of many people outside and inside my Country trying to give happiness and wellness to a lot of venezuelans citizens that doesn\'t have access to health and lived very far from the cities.',
          'At the very beginning that I were told about the project I got inmediately involved in, because somehow I feel I am helping giving to the organization a better way to engage with the public in order to get more donations from them.',
          'After getting the template and the graphic and text resources to begin the job, I thought... this is one of the projects that seems to be done fast and easy, but I couldn\'t have been more worng. The problem was how the template works. Editing with the elementor plugin the pages was not the issue, it was all the predefined css styles and scripts that run in the template by default. I had to edit a lot of the original code of the template in order to achieve quite easy tasks as how the NavBar and footer behaves accordingly when the screen size changes (testing responsiveness of the design) but it seemed to not obeying elementor... At the end, I got the site running good, but I had really hard work "twisting" the template files.',
          'Moreover the webpage design was changed after the project was almost complete, so, that had a significant impact on the time the webpage was finally released.'
        ]  
      },
      {
        title: 'Ultratech Inc.',
        slug: 'ultratech',
        shortRole: 'Wordpress Website Developer',
        img:require('@/assets/images/projects/project-ultratech1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2020-2021',
        myRole: ['Wordpress Developer Remote'],
        webpage: 'www.vendatumano.es',
        url: 'https://ultratech-inc.com/',
        client: 'Ultratech Inc C.A. - Panama',
        technologies: ['Wordpress', 'Laragon', 'HTML5 - CSS3 - PHP'],
        longDescription: [
          'I got this project from a friend of mine, Arturo Agüero. He needed to develop a wordpress site as quick as possible and for that he had no time, so I took the challente to carry out the project rapidly. As with any project, the first thing to do is to know the exact requirements of the project, as well as the information to be displayed. So that\'s what I did. The company already had a webpage but they wanted to enhance the "look & feel" of the site, so the told to wait for new information about the services and solutions the provide.',
          'The information arrived several weeks later, and after that for me the project started. The major issue developing the site was the "in-built" contact form function of the template, after some time struggling with PHP code, I decided to use Contact Form 7 plugin to achieve the same result.',
          'The site was first deployed on a shared hosting, but after several issues regarding to the server itself and the emails, we decided to migrate the project to an instance of Wordpress inside of an AWS S3 server. I develop the wordpress site in a Win 10 laptop and Laragon as my development environment.'
        ]  
      },
      {
        title: 'SJT Language',
        slug: 'sjtlanguage',
        shortRole: 'Wordpress Website Developer',
        img:require('@/assets/images/projects/project-sjtlanguage1.jpg'),
        images: [
          'https://dummyimage.com/500x300',
          'https://dummyimage.com/501x301',
          'https://dummyimage.com/600x360',
          'https://dummyimage.com/601x361',
          'https://dummyimage.com/502x302',
          'https://dummyimage.com/503x303'
        ],
        year: '2018',
        myRole: ['Wordpress Developer Remote'],
        webpage: 'www.sjtlanguage.com',
        url: 'http://www.sjtlanguage.com/',
        client: 'Protos Technology C.A. - Panama',
        technologies: ['Wordpress', 'XAMPP', 'HTML5 - CSS3 - PHP'],
        longDescription: [
          'This was one of those projects when as a developer you don\'t have any guideline to follow, nor any website sample. I felt like when as a Kid the teacher told you to draw whatever you like in a blank paper, kind of weird but kind of fun also.',
          'In this case I spent a lot of time searching the correct template to begin work with, so to do that, I navigate through a lot of sites to get some good ideas. After I had some pre-selected design ideas, I showed it to my client, and after some talk, we decided to shown to the customers just a landing page, the content also was created by me, and of course translatable to spanish and french, because the business of the client are translation services.',
          'I developed this site in my old Win 7 Laptop upgraded to Win 10 at the time of this job, I used as a development environment XAMPP. The deploy was on a simple shared hosting provided by the client.',
          'I liked a lot this project because at the beginning the client had no idea of what to pursue, and at the end the project achieve exactly was the were looking for. Sometimes clients needs more than just a pretty landing page, they need to organize their ideas, structure the content, and I felt very well that I helped the client not just doing what I love in terms of web developing, but also in organizational terms.'
        ]  
      }
    ],
    team: [
      {
        name: 'Jackeline Albarrán',
        occupation: 'Graphic Designer & Marketing Campaign Master',
        description: 'A very creative, innovative and detail-oriented girl, who will spot the slightest mistake in your design. She is also my sister!',
        img:require('@/assets/images/projects/project-humbertoportfolio1.jpg'),
        url: {
          instagram: 'https://www.instagram.com/hj_albarran/',
          linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/',
          github: 'https://github.com/hjalbarran'
        }
      },
      {
        name: 'Mariana Escalante',
        occupation: 'Graphic Designer, Wordpress Dev & Marketing Strategist',
        description: 'Advice from her offers balance to my designs, and even ideas on how to approach certain challenges. She is my beloved wife.',
        img:require('@/assets/images/projects/project-humbertoportfolio1.jpg'),
        url: {
          instagram: 'https://www.instagram.com/hj_albarran/',
          linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/',
          github: 'https://github.com/hjalbarran'
        }
      },
      {
        name: 'Gustavo Escobar',
        occupation: 'Programmer - Fullstack Master',
        description: 'He is the type of person who never says no. In the beginning he used to laugh a lot at my code, now he gives me new perspectives on maintainable and scalable code.',
        img:require('@/assets/images/projects/project-humbertoportfolio1.jpg'),
        url: {
          instagram: 'https://www.instagram.com/hj_albarran/',
          linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/',
          github: 'https://github.com/hjalbarran'
        }
      }
    ],
    testimonials: [
      {
        id: 1,
        name: 'Mariana Escalante',
        avatar:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        testimonial: 'Humberto ha hecho un trabajo espléndido. blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba',
        company: 'Sibarita & Co',
        jobRole: 'Marketing Director',
        logoCompany:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        url: {
          instagram: 'https://www.instagram.com/hj_albarran/',
          linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/'
        }
      }, 
      {
        id: 2,
        name: 'Mariana Escalante',
        avatar:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        testimonial: 'Humberto ha hecho un trabajo espléndido. blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba',
        company: 'Sibarita & Co',
        jobRole: 'Marketing Director',
        logoCompany:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        url: {
          instagram: 'https://www.instagram.com/hj_albarran/',
          linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/'
        }
      }, 
      {
        id: 3,
        name: 'Mariana Escalante',
        avatar:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        testimonial: 'Humberto ha hecho un trabajo espléndido. blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba blablablaba',
        company: 'Sibarita & Co',
        jobRole: 'Marketing Director',
        logoCompany:require('@/assets/images/projects/project-sibaritandco1.jpg'),
        url: {
          instagram: 'https://www.instagram.com/hj_albarran/',
          linkedin: 'https://www.linkedin.com/in/humberto-jose-albarran-ramirez/'
        }
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
