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
        'Working as a freelancer, finding clients whose needs align with my skills and creating value for them quickly and efficiently. ',
        'Some of the projects that I\'ve worked on have included refactoring the authentication flow in a Python and Django application, utilizing third party APIs to implement two-factor authentication and improve application security. ',
        'I\'ve also built custom solutions in Node, including an application that connects with a front end that I built to track minute by minute viewer counts on live streams, storing that data in a PostgreSQL database, and giving admin users the ability to visualize that data in another front end I built using GraphQL.',
        'For multiple projects, I\'ve implemented pipelines using YAML and GitHub Actions to connect to AWS instances, allowing code to be immediately deployed from a repository directly to the relevant AWS service.'
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
        'I worked as the sole front end developer on the team, building out Adia\'s staffing software to connect employers with people looking for work. ',
        'When I started, the Angular applications that existed were riddled with bugs and had entire pages that didn\'t work at all. My first priority was fixing those bugs, which I did over the first few months that I worked there. This led to greatly improved feedback from both our clients, and the users of our internal software. ',
        'Early on I refactored the chat functionality of the client facing app, as it had stopped working due to enormous requests being made on the back end. I added pagination to break up these requests, and got chat back to a place in which all clients were able to quickly and easily connect with the people they were trying to hire.',
        'Alongside my efforts in repairing the existing applications, I was tasked with building a new internal application for our employees to see lists of clients, help them get their accounts set up, and process the documents that were needed for those clients to bring on employees in their respective states. Thanks to that work, our customer success department was able to greatly increase the speed with which they connected with clients, which created a strong increase in client satisfaction.',
        'While working on those projects, I also created an Angular component library for use across Adia\'s suite of applications. This included many UI elements from buttons and input fields to tables and modals that followed a consistent visual style and were quick and easy to implement in any application.'
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
        'I was a front end engineer working on SonderMind\'s software to help connect therapists with clients, and facilitate the processes of scheduling and billing for therapy services. ',
        'I worked on two client applications -- one for therapists, one for clients -- built in Angular, and my focus was largely in building and maintaining a scheduling workflow. When I started, the only method that a client had to schedule with their therapist was by calling them and finding a time that worked. Within a couple months of me starting, my team had deployed a scheduling solution that allowed clients to view their therapists availability and directly put time on their calendar.',
        'Once the scheduling flow was implemented, I began to work on improving therapists ability to determine when their working hours were. This meant building functionality that allowed them to create a standard weekly schedule, as well as allowed them to block out portions of individual days in case they had an appointment or something else that prevented them from working their usual hours that day.',
        'By the time that these features were implemented, feedback from our therapist network had greatly improved, and we saw a strong increase in the number of appointments that were being scheduled.',
        'I also took on an effort to create a chat implementation, allowing clients to directly message therapists within our application. This was accomplished using the PubNub library, and led to increased time spent on our pages for both clients and therapists, as my work drove us toward the goal of being able to accomplish any therapy-related task without having to leave our applications.'
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
        'I worked on building out Schwabs retail application, which is in use at every Schwab branch around the world.',
        'I started working at Schwab right as they were beginning to integrate with USAA, and a large portion of my work was spent ensuring that the appropriate data for a USAA customer who\'d been migrated to Schwab was displayed and actionable for our financial advisors. ',
        'Those efforts meant integrating with a lot of different APIs, and working with the teams behind those APIs to ensure that we were getting the data we needed. I created services using Apex to interact with our internal services, retrieve data, and get it displayed on the front end. I was also responsible for building the front end components that displayed the retrieved data.',
        'Some of the projects that my team took on included building components that would inform a financial advisor that a client had come over from USAA and give them immediate insight as to what accounts had been transferred. I also built a lot of components that were used for all clients to display personal and financial information directly to the advisors.',
        'I focused on reusability, creating components that were ultimately reused in multiple applications throughout Schwab. The best example of one of these was a table component that I built that would take in any data and break it down into columns and rows, following Schwabs design patterns, and saving large amounts of developer time.',
        'I was also responsible for mentoring juniors on the team, ensuring that they understood the work that was assigned to them, and I filled in as lead on the team anytime our usual lead was unavailable. This led to conversations with many levels of leadership in which I was expected to quickly diagnose and fix bugs and outages in production with minimal assistance.'
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
        'I worked on the front end of an application called We Work DevOps, which was an initiative by Particle41 to create a job board focused specifically on DevOps positions. ',
        'My contributions included refactoring the React application to utilize state management through Redux, building an auth flow from the ground up, and creating a rich text editor from scratch to allow employers to create job posts that had formatting options.',
        'I worked with one other developer, who focused primarily on a back end built in AWS, and connected the front end with many endpoints that he\'d created, leveraging Lambda functions to manipulate, retrieve, and return data.'
      ],
      technology: [
        'JavaScript',
        'React',
        'AWS',
        'Redux'
      ]
    },
    {
      timePeriod: 'July 2017 - January 2018',
      title: 'Part Time Contract Software Engineer',
      company: 'Lifesparq',
      description: [
        'At Lifesparq, I was the first developer brought on to help create the first phase of their software, which was designed to optimize athletic training, specifically in team sports.',
        'I built the first implementation of their software, utilizing AngularJS to build the front end while also building a Node backend and a PostgreSQL database.',
        'I was responsible for all aspects of software development from idea to implementation, including planning and design. I worked directly with the founder to understand his vision and distill his ideas into code.',
        'I built a fully functioning application with the ability for a coach to create a team, including individual records for athletes on the team, and save information about workouts and other training that the team was accomplishing, which led to Lifesparq being able to start marketing the product to investors and programs including Tech Stars and 1 Million Cups.'
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
