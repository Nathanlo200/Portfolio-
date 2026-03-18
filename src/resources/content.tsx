import { About, Home,  Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Nathan",
  lastName: "Lomito",
  name: `Nathan Lomito`,
  role: "Software Engineer and Cybersecurity ",
  avatar: "/images/IMG_0089.jpeg", // optional: leave empty if you don't want to display an avatar
  email: "nathanlomito@gmail.com",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Swahili"], // optional: Leave the array empty if you don't want to display languages
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Nathanlo200/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/nathanlomito/",
    essential: true,
  },
  
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@nathanlomito",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `https://mail.google.com/mail/?view=cm&to=${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into powerful web and mobile solutions</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Next Js</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Nathan Lomito, a software engineer with a passion for creating innovative digital solutions,<br /> user experiences, and exploring the intersection of technology and creativity.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Nathan Lomito a OpenWorld-based software engineer with a passion for transforming complex challenges
        into simple, efficiant software solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Orange SA (Orange Digital Academy)",
        timeframe: "2024",
        role: "Intern Mobile Developer",
        achievements: [
          <>
            Voting and assessment application(VotePad) allowing organizations and institutions to run online polls and
exams across multiple devices with focus on accessibility and reliability.
          </>,
          <>
           Web-based platform enabling surveys, evaluations, and exams directly from a browser. Designed
to work in distributed and collaborative environments.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
      {
        company: "Kivy_Mobile App (Independent project)",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a mobile application using Kivy framework, providing users with a seamless experience for managing their tasks and schedules.
          </>,
          <>
            Implemented a user-friendly interface and integrated features such as task categorization, reminders, and synchronization across devices.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Institut supérieur d'informatique programmation et analyse",
        timeframe: "2021 - 2024",
        description: <>Studied computer science concentration in  software engineering.</>,
      },
      {
        name: "Tryhackme",
        timeframe: "2022 - Present",
        description: <>Studied tryhackme  career path  cybersecurity.</>,
      },
      {
        name: "Cisco Network Academy",
        timeframe: "2024 - Present",
        description: <>Studied cisco career path junior cybersecurity.</>,
      },
      {
        name: "Ndg Linux Essentials",
        timeframe: "2022 - 2023",
        description: <>Studied various courses on linux operating systems.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Flutter",
        description: (
          <>Flutter is a framework for building natively compiled applications for mobile, web, and desktop from a single codebase.</>
        ),
        tags: [
          {
            name: "Flutter",
            icon: "flutter",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/flutter-hero-.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/image20.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/next_js.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Django",
        description: (
          <>Experienced in building robust web applications with Django, leveraging its ORM and MTV architecture.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Django",
            icon: "django",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/PC-social-BlogFeatured-1280x720-2x.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  
};



export { person, social, home, about, work  };
