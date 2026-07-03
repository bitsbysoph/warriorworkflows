export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  detail: string;
  icon: "workflow" | "people" | "calendar";
};

export const services: Service[] = [
  {
    slug: "ai-workflow-consulting",
    title: "AI Workflow Consulting",
    shortDescription:
      "Identifying inefficiencies and designing AI-powered solutions that make your team's day-to-day easier, not more complicated.",
    tagline:
      "Great teams deserve tools that actually work for them, and not the other way around.",
    detail:
      "If you are new to AI or feeling overwhelmed by it, I help build a practical, sustainable path forward — right-sized tools and workflows your team will actually use, without complexity for complexity's sake.",
    icon: "workflow",
  },
  {
    slug: "soft-skills-training",
    title: "Soft Skills Training",
    shortDescription:
      "Helping teams communicate better and navigate conflict, so the people behind the process work as well as the process itself.",
    tagline:
      "The best processes in the world only work if the people running them work well together.",
    detail:
      "Drawing on over a decade of high-pressure team management, I run hands-on training in communication, conflict resolution, and trust-based leadership — practical skills for teams who need to work well together under pressure.",
    icon: "people",
  },
  {
    slug: "project-management-event-operations",
    title: "Project Management & Event Operations",
    shortDescription:
      "Strategic planning and on-the-ground operational support for live events, from advisory work to full onsite execution.",
    tagline:
      "Live events are unforgiving. The margin for error is small, the stakes are high, and the chaos is real.",
    detail:
      "Whether you need an advisor in the planning room or someone on-site keeping everything moving, I bring calm, experienced operational leadership to live events where there's no room for a second take.",
    icon: "calendar",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Right here is a pillar of any organization's success. She is not just good. She is something special.",
    name: "Bashir Ahmad",
    role: "Owner | Tiger Eye MMA",
  },
  {
    quote:
      "Sophia's contribution to MONOPOLY: HIDDEN Singapore was invaluable. Her work provided the essential creative springboard and foundation for the final experience – highly imaginative, incredibly responsive, and a brilliant asset for any team needing fast-paced conceptual thinking. I highly recommend her!",
    name: "Shawn Tan",
    role: "Head of Partnerships and Channels | The HIDDEN Group",
  },
  {
    quote:
      "The work that Sophia does is in a different league. I am so grateful for her invaluable support and top notch refinement that she has done for our course materials. If you are looking for expert guidance in developing training programs, do not hesitate to reach out to Sophia!",
    name: "Pascal Didier Jean-Michel",
    role: "Program Director | Global Cutman Training",
  },
  {
    quote:
      "Without a doubt, Sophia is exceptional. Put a task in front of her and she will get it done, but even more valuable is her ingenuity and drive. On so many occasions, Sophia has implemented new processes and protocols to help improve the team. Any organization would be fortunate to have Sophia on their side.",
    name: "Richard Auty",
    role: "Vice President | ONE Championship",
  },
  {
    quote:
      "Sophia brings structure and clarity to complex operational processes, ensuring that all moving parts of the show run seamlessly. Her ability to coordinate across multiple teams, manage timelines, and anticipate challenges was instrumental in delivering a smooth experience. What truly stood out was Sophia's calm and decisive approach under pressure. No matter the situation, she remained composed, solutions-focused, and highly responsive, which instilled confidence across the entire team. Beyond operational excellence, Sophia fostered a collaborative and positive working environment. She communicated clearly, supported team members, and led by example — earning the respect and trust of everyone involved.",
    name: "Wendy Ng",
    role: "Executive Director | Presplay",
  },
  {
    quote:
      "I have had the pleasure of knowing Sophia for several years and worked with her in a previous role. When I learned that she was launching her own consultancy, I was among the first clients to seek her advice. Her professionalism, innovative approach, and unwavering commitment to resolving issues consistently impress me. Her determination and problem-solving skills are truly admirable.",
    name: "Nasyita Jumari",
    role: "Manager, Sports Business Development and Major Events | Kallang Alive",
  },
  {
    quote:
      "If it wasn't for Sophia, I would probably still be dealing with the aftermath of a disgruntled customer who threatened to post on social media. After getting Sophia's insights and help into drafting the correct recovery message and proper next steps, we saw an immediate 180° change in the customer's attitude. We even received an email of gratitude from the customer!",
    name: "Nadiah L",
    role: "Assistant Manager | Ticket Sales & Distribution Company",
  },
  {
    quote:
      "Sophia is exceptional and relentless at the tasks at hand. I have had the great pleasure of working alongside her through the thick and thin, even through the challenging early days of COVID. Her tireless effort and drive for the athletes, team, and company is second to none.",
    name: "Warren Wang MD",
    role: "Board Member | Ringside ARP",
  },
];

export type Logo = {
  name: string;
  src: string;
};

export const previousClients: Logo[] = [
  { name: "HA10", src: "/HA10-logo.png" },
  { name: "Presplay", src: "/presplay-logo.png" },
  { name: "HIDDEN", src: "/hidden-logo.png" },
  { name: "GCTC", src: "/gctc-logo.png" },
  { name: "Tiger Eye", src: "/tiger-eye-logo.png" },
  { name: "ONE Lumpinee", src: "/one-lumpinee-logo.png" },
];

export const formerEmployers: Logo[] = [
  { name: "Flywire", src: "/flywire-logo.png" },
  { name: "ONE Championship", src: "/one-championship-logo.png" },
  { name: "BCD Travel", src: "/bcd-travel-logo.png" },
  { name: "Skyscanner", src: "/skyscanner-logo.png" },
  { name: "P&G", src: "/proctergamble-logo.png" },
  { name: "Singapore Airlines", src: "/singapore-airlines-logo.png" },
  { name: "Jetstar", src: "/jetstar-logo.png" },
  { name: "Broadcom", src: "/broadcom-logo.png" },
  { name: "Motorola", src: "/motorola-logo.png" },
];

export const site = {
  name: "Warrior Workflows",
  tagline: "Making work life happier, not harder",
  heroIntro:
    "Hi, I'm Sophia. I help teams in events, sports, and tech spend less time fighting their own processes and more time doing the work that matters — through practical AI tools, better team communication, and hands-on operational support.",
  about:
    "My background spans aviation, large-scale event management, and high-pressure live operations. Across every one of those worlds, the pattern was the same: the best results come from practical, user-focused solutions, not the fanciest tool on the market. I bring that same grounded approach to every team I work with. Don't just take my word for it. See what the people I've worked with have to say about me.",
  founderBlurb:
    "With over a decade of experience across sports, events, and tech, I've learned that small changes, when done right, make a big difference. I'm not here to sell you a five-year transformation plan — I'm here to find the one or two things that will actually move the needle for your team.",
  consultationTopics: [
    "Where your current processes and pain points are",
    "Opportunities to improve — through process changes, AI tools, or operational support",
    "A realistic, human-centered plan for what to do next",
  ],
};
