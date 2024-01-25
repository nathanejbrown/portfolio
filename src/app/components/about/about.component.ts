import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  jobs = [
    {
      timePeriod: 'September 2023 - Present',
      title: 'Full Stack Software Engineer',
      company: 'Freelance',
      description: [
        'Developed scalable and efficient web applications using modern technologies, such as React, Node.js, PostgreSQL, Python, and Django.',
        'Collaborated with cross-functional teams to design and deploy RESTful APIs, ensuring seamless integration of frontend and backend systems.',
        'Conducted thorough code reviews and implemented best practices, enhancing code quality and maintainability across the development team.'
      ],
      technology: [
        'JavaScript/TypeScript',
        'Node.js',
        'React',
        'Python',
        'Django',
        'PostgreSQL',
        'Docker',
        'AWS'
      ]
    },
    {
      timePeriod: 'April 2022 - September 2023',
      title: 'Senior Front End Engineer',
      company: 'Adia',
      description: [
        'Worked as the lone front end engineer at the company to successfully deliver a complex web application and design library, meeting strict deadlines and exceeding client expectations.',
        'Optimized legacy application performance by implementing innovative solutions, enhancing user experience on all devices.',
        'Collaborated with product managers and UX designers to create responsive and intuitive user interfaces.'
      ],
      technology: [
        'JavaScript/TypeScript',
        'Angular',
        'Azure'
      ]
    },
    {
      timePeriod: 'November 2020 - April 2022',
      title: 'Software Engineer II',
      company: 'SonderMind',
      description: [
        'Developed efficient software solutions, improving performance and enhancing overall user experience.',
        'Conducted rigorous code reviews and implemented robust testing strategies, ensuring high-quality and bug-free software releases.'
      ],
      technology: [
        'JavaScript/TypeScript',
        'Angular',
        'Docker'
      ]
    },
    {
      timePeriod: 'August 2019 - November 2020',
      title: 'Software Developer',
      company: 'Charles Schwab',
      description: [
        'Developed and implemented scalable software solutions utilizing agile development methodologies, and contributing to increased efficiency and productivity.',
        'Executed full stack work within the Salesforce environment, building UI components as well as writing the back end code to supply those components with data.',
        'Mentored and coached junior developers, providing guidance on best practices, code reviews, and technical problem-solving, fostering team growth and enhancing overall development capabilities.'
      ],
      technology: [
        'JavaScript',
        'Salesforce',
        'Apex',
        'Bitbucket'
      ]
    },
    {
      timePeriod: 'February 2019 - July 2019',
      title: 'Part Time Contract Software Engineer',
      company: 'Particle41',
      description: [
        'Developed and implemented responsive web designs using HTML, CSS, JavaScript, and React to create visually appealing user interfaces.',
        'Collaborated with cross-functional teams to design and enhance user experiences.',
        'Optimized website performance by analyzing and refactoring code, resulting in improved load times and decreased bounce rates.'
      ],
      technology: [
        'JavaScript',
        'React',
        'AWS'
      ]
    },
    {
      timePeriod: 'July 2017 - January 2018',
      title: 'Part Time Contract Software Engineer',
      company: 'Lifesparq',
      description: [
        'Developed and implemented responsive website designs using AngularJS and Node.js to enhance user experience and optimize performance.',
        'Collaborated with cross-functional teams to design and develop user-friendly interfaces for web applications, ensuring seamless integration and functionality across different browsers and devices.',
        'Conducted thorough testing and debugging to identify and resolve technical issues, improving website functionality and ensuring optimal performance.'
      ],
      technology: [
        'JavaScript',
        'AngularJS',
        'Node.js',
        'PostgreSQL'
      ]
    }
  ]
}
