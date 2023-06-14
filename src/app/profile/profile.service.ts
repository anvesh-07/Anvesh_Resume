import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  // acc: any=[
  //   {
  //     id: 1,
  //     title: 'Solar water Irrigation',
  //     desc: 'Solar water irrigation system utilizes solar energy to power an intelligent irrigation system that adjusts water flow according to soil moisture levels, ensuring optimal water usage and efficient agricultural irrigation practices.',
  //     // livedemo: 'https://mehulk05.github.io/MyShop/#/',
  //     // githurl: 'https://github.com/mehulk05/MyShop',
  //     // mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
  //     imgUrl: 'assets/images/solar-energy-irrigation-model.jpg',
  //     tech: 'Internet of Things , Aurdino'
  //   },

  //   {
  //     id: 2,
  //     title: 'Fire Sensor Using Transistor',
  //     desc: 'Fire Sensor using Transistor is an innovative project designed to detect fire hazards through a transistor-based sensor, which instantly activates a loud buzzer to alert individuals and prompt immediate action.',
  //     // livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
  //     // githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
  //     // mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
  //     imgUrl: 'assets/images/fire.jpeg',
  //     tech: 'Digital logic design'
  //   },


  //   {
  //     id: 3,
  //     title: 'Just Smart Power Box',
  //     desc: 'The smart power box, with the JustPic app, efficiently regulates electric current. Users scan and pay for electricity usage based on predefined intervals, ensuring accurate billing and efficient energy management.',
  //     // livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
  //     // githurl: 'https://github.com/mehulk05/Blog-using-mean',
  //     // mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
  //     imgUrl: 'assets/images/WhatsApp Image 2023-05-31 at 16.21.48.jpg',
  //     tech: 'Aurdino, Internet of Things'
  //   },

  // ]
  projects: any = [
    {
      id: 1,
      title: 'Solar water Irrigation',
      desc: 'Solar water irrigation system utilizes solar energy to power an intelligent irrigation system that adjusts water flow according to soil moisture levels, ensuring optimal water usage and efficient agricultural irrigation practices.',
      // livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://drive.google.com/file/d/1wafv2mGQSIc-HXsPZMMy-5D4Arp4TDXc/view?usp=sharing',
      // mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/solar-energy-irrigation-model.jpg',
      tech: 'Internet of Things , Aurdino'
    },

    {
      id: 2,
      title: 'Fire Sensor Using Transistor',
      desc: 'Fire Sensor using Transistor is an innovative project designed to detect fire hazards through a transistor-based sensor, which instantly activates a loud buzzer to alert individuals and prompt immediate action.',
      // livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://docs.google.com/document/d/1hZMhvlJqSKh8sIPUbiZpZfF9RKGCKhgX/edit?usp=sharing&ouid=104581405272775545794&rtpof=true&sd=true',
      // mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/fire.jpeg',
      tech: 'Digital logic design'
    },


    {
      id: 3,
      title: 'Just Smart Power Box',
      desc: 'The smart power box, with the JustPic app, efficiently regulates electric current. Users scan and pay for electricity usage based on predefined intervals, ensuring accurate billing and efficient energy management.',
      // livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: '',
      // mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/WhatsApp Image 2023-05-31 at 16.21.48.jpg',
      tech: 'Aurdino, Internet of Things'
    },
    {
      id: 4,
      title: 'Resume',
      desc: 'Developed a visually appealing portfolio using Angular, showcasing my projects and skills. Implemented responsive design with HTML, CSS, and JavaScript to create a user-friendly experience and highlight my development expertise.',
      // livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://settipallianveshreddy.web.app/',
      // mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/WhatsApp Image 2023-05-31 at 16.21.48.jpg',
      tech: 'Angular'
    }

  ]
  // about2 = `Software Developer with 2.5+ years of experience .
  // Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  // Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  // Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  // about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1Q2doMiVRYom_KTyauqyGQdiEvBOodZ2I/view?usp=share_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR ',
      'progress': '85%'
    },
    // {
    //   'id': '2',
    //   'skill': 'NODE JS',
    //   'progress': '80%'
    // },
    {
      'id': '2',
      'skill': 'JAVA',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'PostgreSQL',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'python',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'c',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'verilog',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'iot',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'VLSI',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'Digital Logic Design',
      'progress': '90%'
    },
    {
      'id': '6',
      'skill': 'Data Structures and Algorithms',
      'progress': '80%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'JustPic',
      location: 'bagalore',
      timeline: 'May 2023 ',
      role: 'Full-Stack Software Engineer (Development)',
      work: `Technologies : Angular , Node JS `
    },
    {

      id: 4,
      company: 'Oasis Infobyte',
      // location: 'Ahmedabad',
      timeline: 'Jan 2023 - feb 2023',
      role: 'web developer intern',
      work: ` Technologies : html`,
    },
    // {
    //     id: 1,
    //     company: 'oasis infobyte',
    //     // location: 'Gandhinagar and Pune',
    //     timeline: 'Jan 2023 - feb 2023',
    //     role: 'web developer intern',
    //     work: `Technologies : html,
    // }







    //   {
    //     id: 2,
    //     company: 'Growth99',
    //     location: 'Remote',
    //     timeline: '',
    //     role: 'Frontend  Developer',
    //     work: `Technologies : Angular , Node JS , MongoDB .
    // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
    // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
    // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
    // `
    //   },




  ]

  extraCircularInfo: any = [
    {
      id: 1,
      title: 'IEEE Membership',
      description: 'I am an IEEE member, benefiting from a global network of professionals in electrical engineering and related fields. With access to valuable resources, conferences, and collaborative opportunities, my IEEE membership enables me to stay updated, expand my professional network, and contribute to the fields advancement',
      img: 'https://firebasestorage.googleapis.com/v0/b/settipallianveshreddy.appspot.com/o/logoieee.jpeg?alt=media&token=f44c2d23-4750-4780-935d-8755a628e9cc',
      // url: 'https://justpic.app/'
    },
    {
      id: 2,
      title: 'Cricket',
      description: 'I am a skilled bowler who excelled in college cricket, reaching the finals and becoming a runner-up. I am a passionate fan of Virat Kohli and thoroughly enjoy watching cricket matches.',
      img: 'https://firebasestorage.googleapis.com/v0/b/settipallianveshreddy.appspot.com/o/cricket.jpeg?alt=media&token=bd3f18d0-985f-400e-9eb3-05e215971185',
      // url: 'https://github.com/anvesh-07'
    },
    {
      id: 3,
      title: 'Science Day',
      description: 'Participated in Science Day event during B.Tech program, showcasing expertise in nanotechnology. Received a participation certificate for exceptional performance. Committed to pushing scientific boundaries and making meaningful contributions. Continuously advancing knowledge in nanotechnology for a brighter future.',
      img: 'https://firebasestorage.googleapis.com/v0/b/settipallianveshreddy.appspot.com/o/IMG_20230607_201608.jpg?alt=media&token=af9ba99a-d9de-4f21-8548-dd0b687bcd6d',
      // url: 'https://www.linkedin.com/in/settipalli-anvesh-reddy-122917238/'
    },
    {
      id: 4,
      title: 'INTSO',
      description: 'I participated in the INTSO Maths Search Olympiad during my 9th grade. I successfully cleared the first round and was awarded a participation certificate for my achievement. It was an enriching experience that showcased my mathematical skills and problem-solving abilities. I am proud of this accomplishment and will continue to pursue my passion for mathematics in the future.',
      img: 'https://firebasestorage.googleapis.com/v0/b/settipallianveshreddy.appspot.com/o/IMG_20230607_201722.jpg?alt=media&token=392cbf05-aee7-49e5-82b9-a987bdc8eacd',
      // url: 'https://www.linkedin.com/in/settipalli-anvesh-reddy-122917238/'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  // getaccomplishments(): Observable<any> {
  //    // return this.http.get(this.baseUrl + 'skills');
  //   return this.acc;
  // }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
