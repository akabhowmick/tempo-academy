// Weekly classes, events, and closures for the /schedule page. Class times
// are the owners' regular schedule, checked against their October 2026
// calendar. An empty events or closures list shows a "nothing posted" line.
//
// Give an event or closure an `end` date (YYYY-MM-DD) and it drops off the
// page by itself the day after. A closure with `banner: true` also shows in a
// bar at the top of every page until its `end` date.
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
  icon?: string; // decorative emoji shown around the title
  end?: string; // YYYY-MM-DD, last day the notice is relevant
  banner?: boolean; // closures only: also announce in the site-wide bar
}

/** Today's date in the visitor's time zone, as YYYY-MM-DD. */
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** Notices whose `end` date hasn't passed (notices without one always stay). */
export function current(items: Notice[]) {
  const t = today();
  return items.filter((n) => !n.end || n.end >= t);
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

export const EVENTS: Notice[] = [];

export const CLOSURES: Notice[] = [
  {
    date: "November 23–28, 2026",
    title: "Thanksgiving Holiday Break",
    details: "TEMPO Community Academy will be closed November 23–28, 2026, for Thanksgiving break. Wishing all our students and families a wonderful Thanksgiving! 🧡",
    icon: "🍂",
    end: "2026-11-28",
    banner: true,
  },
];
