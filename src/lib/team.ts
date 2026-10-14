// Team roster for the About page and the /about/:slug bio pages. Roles and
// bios come from the owners' team bios. People without a photo get an
// initials badge; people with a bio get their own page, linked from the card
// by a one-line teaser. Each bio page also needs an entry in
// src/lib/route-meta.json and public/sitemap.xml so it gets prerendered.
export interface Person {
  slug: string;
  name: string;
  credentials?: string;
  role: string;
  img?: string;
  imgAlt?: string;
  teaser?: string;
  bio?: string[];
}

export const LEADERSHIP: Person[] = [
  {
    slug: "inae-kim",
    name: "Inae Kim",
    credentials: "M.A. Ed.",
    role: "Co-founder & Program Director",
    img: "team-inae-kim.webp",
    teaser: "An educator for more than 20 years, Inae dreamed of a community where learning feels joyful, meaningful, and lifelong.",
    bio: [
      "With more than 20 years of experience as an educator in the school system, I have always dreamed of creating a community where learning feels joyful, meaningful, and lifelong.",
      "I wanted to build a place where students can come not only to take a class, but also to learn, connect, spend time together, and truly feel that they belong.",
      "A place where they can watch a movie with friends, share a snack, try something new, discover talents they may not have known they had, and develop practical skills that help them become more confident and independent in everyday life.",
      "To me, education does not end when the school day ends or when someone reaches a certain age. Learning is lifelong. It happens through experiences, relationships, creativity, and being part of a community.",
      "My vision is to create a welcoming space where every individual has opportunities to learn, belong, discover, and grow at their own pace and throughout every stage of life.",
      "That is the community I hope to build: a place to learn, a place to connect, and a place to belong.",
    ],
  },
  {
    slug: "cynthia-martinez",
    name: "Cynthia Martinez",
    credentials: "M.S. Ed., M.S., SBL",
    role: "Co-founder & Admin Director",
    img: "team-cynthia-martinez.webp",
    teaser: "With more than two decades in education, Cynthia believes learning should prepare us not only for school, but for life.",
    bio: [
      "Education has been at the center of my career for more than two decades. Throughout that time, I have worked in classrooms, programs, and schools, and have had the opportunity to see firsthand how much people can learn when they are given meaningful opportunities to participate, practice, and discover their strengths.",
      "I have always believed that education should prepare us not only for school, but for life. Learning how to cook a meal, manage responsibilities, try something unfamiliar, work with others, develop a new interest, or simply become more confident are all important parts of becoming independent and living a fulfilling life.",
      "That philosophy is what inspired us to create TEMPO Community Academy. I wanted to build a place where learning is practical, social, creative, and relevant: a place where people can take classes, explore new interests, develop skills, and connect with others in a welcoming community.",
      "My goal is simple: to create opportunities for people to keep learning, keep growing, and keep discovering what they are capable of at every stage of life.",
    ],
  },
  {
    slug: "cesia-maldonado",
    name: "Cesia Maldonado",
    role: "Office Manager and Computer Science, Beginner",
    img: "team-cesia-maldonado.webp",
    teaser: "Cesia keeps daily operations organized and teaches the basics of computers in a fun, simple, and engaging way.",
    bio: [
      "I'm Cesia Maldonado, and I am the Office Manager and Beginner Computer Class Instructor. I love being part of a welcoming and supportive environment where everyone feels comfortable learning and growing.",
      "I help keep our daily operations organized while teaching students the basics of computers and technology in a fun, simple, and engaging way. I enjoy connecting with students and celebrating their progress along the way!",
    ],
  },
];

export const INSTRUCTORS: Person[] = [
  {
    slug: "pognee-kim",
    name: "Pognee Kim",
    role: "Art & Design and Computer Science, Advanced. Licensed NYS teacher",
    img: "team-pognee-kim.webp",
    teaser: "A special education teacher for more than 10 years, Mr. Kim teaches Computer Animation and T-Shirt Making.",
    bio: [
      "Mr. Kim is a special education teacher with more than 10 years of experience, specializing in teaching students with autism.",
      "He teaches Computer Animation and T-Shirt Making classes where students build on their creativity and work on daily living skills.",
    ],
  },
  {
    slug: "jin-bok",
    name: "Jin Bok",
    role: "Cooking & Baking",
    img: "team-jin-bok.webp",
    imgAlt: "Cartoon illustration of a smiling chef",
    teaser: "Chef Jin holds professional certifications in Korean and Japanese cuisine from her culinary career in South Korea.",
    bio: [
      "Chef Jin holds professional certifications in both Korean and Japanese cuisine, earned during her culinary career in South Korea.",
      "She brings a passion for cooking and enjoys working with individuals from diverse cultural backgrounds. She is dedicated to creating a welcoming, inclusive, and engaging culinary experience for everyone.",
    ],
  },
  {
    slug: "jasmine-rodriguez",
    name: "Jasmine Rodriguez",
    role: "Cooking & Baking",
    img: "team-jasmine-rodriguez.webp",
    teaser: "Jasmine leads hands-on baking classes for people of all ages and abilities.",
    bio: [
      "I lead hands-on baking classes where I get to share my love of baking with people of all ages and abilities. Each class gives individuals the opportunity to learn new recipes they can make at home and try new foods.",
      "My goal is to create a fun and welcoming environment where everyone can participate, have fun and enjoy things they can make on their own.",
    ],
  },
  {
    slug: "halle-kim",
    name: "Halle Kim",
    role: "Dance & Body Form. Certified Pilates instructor, registered nurse",
    img: "team-halle-kim.webp",
    teaser: "A BASI Pilates–certified instructor and registered nurse who believes everyone can benefit from movement.",
    bio: [
      "I'm a BASI Pilates–certified instructor and registered nurse who believes everyone can benefit from movement.",
      "My goal is to create a welcoming and supportive environment where each person can build strength, confidence, and body awareness at their own pace.",
    ],
  },
];

export const TEAM = [...LEADERSHIP, ...INSTRUCTORS];

export const firstName = (p: Person) => p.name.split(" ")[0];
export const initials = (p: Person) => p.name.split(" ").map((w) => w[0]).join("");
