// Weekly classes, events, and closures for the /schedule page. Class times
// are the owners' regular schedule, checked against their October 2026
// calendar. Entries marked `placeholder` show a "Placeholder" tag: replace
// them with real events and closures (or delete them) before launch. An empty
// list shows a "nothing posted" line instead.
export interface ClassSlot {
  name: string;
  time: string;
}

export interface ClassDay {
  day: string;
  classes: ClassSlot[];
}

export interface Notice {
  date: string;
  title: string;
  details?: string;
  placeholder?: boolean;
}

export const WEEKLY: ClassDay[] = [
  {
    day: "Wednesday",
    classes: [
      { name: "Computer Science, Beginner & Advanced", time: "4 to 5 PM" },
      { name: "Art & Design", time: "5 to 6 PM" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { name: "Computer Science, Beginner & Advanced", time: "3:30 to 4:30 PM" },
      { name: "Art: T-shirt Designing & Making", time: "4:30 to 5:30 PM" },
      { name: "Advanced Computer: Animation", time: "5:30 to 6:30 PM" },
    ],
  },
  {
    day: "Friday",
    classes: [{ name: "Dance & Body Form", time: "4 to 5 PM" }],
  },
  {
    day: "Saturday",
    classes: [
      { name: "Computer Science, Beginner & Advanced", time: "2:30 to 3:30 PM" },
      { name: "Dance & Body Form", time: "3:30 to 4:30 PM" },
      { name: "Cooking: Baking & Korean Cuisine", time: "3:30 to 5 PM" },
    ],
  },
];

export const EVENTS: Notice[] = [
  {
    date: "Date to be announced",
    title: "Student art & T-shirt showcase",
    details: "See artwork and custom T-shirts made in our classes.",
    placeholder: true,
  },
];

export const CLOSURES: Notice[] = [
  {
    date: "Dates to be announced",
    title: "Holiday closures",
    details: "Holiday, weather, and other closures will be posted here.",
    placeholder: true,
  },
];
