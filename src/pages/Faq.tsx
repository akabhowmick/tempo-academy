import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

// Content from the owners' "TCA Frequently Asked Questions" doc, plus the
// "Visiting and contact" group, which carries the site-specific details
// (walk-ins, languages, address) that the Home teaser used to hold.
const SECTIONS: { id: string; title: string; items: { q: string; a: ReactNode }[] }[] = [
  {
    id: "about",
    title: "About TEMPO Community Academy",
    items: [
      {
        q: "What is TEMPO Community Academy?",
        a: (
          <>
            <p>TEMPO Community Academy is a personalized learning and enrichment academy where individuals can explore interests, develop new skills, build confidence, and discover new possibilities.</p>
            <p>Our programs combine hands-on learning with individualized instruction and meaningful experiences. We believe learning should be engaging, practical, creative, and connected to the interests of each learner.</p>
          </>
        ),
      },
      {
        q: "Who is TEMPO Community Academy for?",
        a: (
          <>
            <p>TEMPO Community Academy welcomes children, teens, young adults, and adults who want to learn something new, develop an existing interest, or build practical and creative skills.</p>
            <p>Our programs are designed for learners with different interests, experience levels, and learning styles.</p>
          </>
        ),
      },
      {
        q: "What types of classes does TEMPO Community Academy offer?",
        a: (
          <>
            <p>Our programs may include:</p>
            <ul>
              <li>Art &amp; Design</li>
              <li>Cooking &amp; Baking</li>
              <li>Computer Science</li>
              <li>Dance &amp; Movement</li>
              <li>Makeup &amp; Beauty</li>
              <li>Café &amp; Barista Skills</li>
              <li>Creative Arts &amp; Crafts</li>
              <li>Life and practical skill-building</li>
              <li>Other specialty workshops and enrichment opportunities</li>
            </ul>
            <p>Our offerings may change and expand as new programs and community interests develop. See <Link to="/courses">our current courses</Link>.</p>
          </>
        ),
      },
    ],
  },
  {
    id: "classes",
    title: "Classes and learning",
    items: [
      {
        q: "Do I need to have experience before joining a class?",
        a: <p>No. Many of our programs are appropriate for beginners. Our instructors can introduce skills step-by-step and adjust instruction based on the learner&apos;s current experience and goals.</p>,
      },
      {
        q: "Can someone who already has experience take a class?",
        a: <p>Absolutely. Learners who already have experience may be able to participate in more advanced instruction or work toward more challenging skills.</p>,
      },
      {
        q: "Are classes individual or group-based?",
        a: (
          <>
            <p>We offer both group and individualized instruction, depending on the program.</p>
            <p>Group classes provide opportunities to learn alongside others, while individualized instruction allows the instructor to focus more specifically on the learner&apos;s interests, goals, and pace.</p>
          </>
        ),
      },
      {
        q: "Can I request a private lesson?",
        a: (
          <>
            <p>Yes. Individualized instruction may be available for selected programs.</p>
            <p>Private lessons can be particularly helpful when someone has a specific skill they want to develop, prefers individualized instruction, or wants to progress at their own pace.</p>
          </>
        ),
      },
      {
        q: "Can I request a class that isn't currently offered?",
        a: (
          <>
            <p>We encourage families and learners to share their interests with us.</p>
            <p>If there is enough interest or an appropriate instructor is available, we may be able to develop a new class, workshop, or individualized learning opportunity.</p>
          </>
        ),
      },
      {
        q: "How are classes structured?",
        a: (
          <>
            <p>Class structure depends on the program.</p>
            <p>Some classes may include demonstrations and guided practice, while others may involve projects, hands-on activities, skill practice, or real-world application. Our goal is for learners to actively participate rather than simply listen to instruction.</p>
          </>
        ),
      },
      {
        q: "How long are classes?",
        a: <p>Class length varies depending on the program and instructional format. Specific class times and durations are provided when registering for each program.</p>,
      },
    ],
  },
  {
    id: "choosing",
    title: "Finding the right program",
    items: [
      {
        q: "How do I know which class is right for me or my child?",
        a: (
          <>
            <p>Start with the learner&apos;s interests.</p>
            <p>Think about what they enjoy, what they are curious about, and what they would like to learn. You can then review <Link to="/courses">our available programs</Link> or <Link to="/contact">contact us</Link> for help choosing an appropriate class.</p>
          </>
        ),
      },
      {
        q: "Can my child try something before committing to a full program?",
        a: (
          <>
            <p>Availability depends on the specific program.</p>
            <p>Some classes or workshops may offer introductory opportunities. <Link to="/contact">Contact us</Link> to ask about options for trying a program before making a longer-term commitment.</p>
          </>
        ),
      },
      {
        q: "Can my child participate in more than one program?",
        a: <p>Yes. Learners may participate in multiple programs when schedules allow. We encourage learners to explore different areas and discover the activities that genuinely interest them.</p>,
      },
      {
        q: "Can interests turn into real-world skills?",
        a: (
          <>
            <p>Absolutely. Many of our programs are designed to connect learning with practical application.</p>
            <p>For example, cooking can involve planning, measuring, following directions, organization, and kitchen safety. Café instruction can introduce food preparation, customer service, organization, and workplace skills.</p>
            <p>Learning becomes more meaningful when learners can see how their skills connect to everyday life and future opportunities.</p>
          </>
        ),
      },
    ],
  },
  {
    id: "enrollment",
    title: "Enrollment and families",
    items: [
      {
        q: "How do I register for a class?",
        a: <p>Call or email us, or send a message through our <Link to="/contact">contact page</Link>, and we will set up a time to talk about the right program and schedule. Each program comes with information about availability, scheduling, pricing, and registration requirements.</p>,
      },
      {
        q: "Can I speak with someone before registering?",
        a: <p>Yes. If you are unsure which program is the best fit, we encourage you to <Link to="/contact">contact us</Link> before registering. We are happy to answer questions and help you explore available options.</p>,
      },
      {
        q: "Can parents stay during class?",
        a: (
          <>
            <p>This depends on the individual program.</p>
            <p>Some classes may encourage parents or caregivers to remain nearby, while others are designed to give learners an opportunity to participate independently. Expectations for parent participation will be communicated before or at registration.</p>
          </>
        ),
      },
      {
        q: "Can siblings participate together?",
        a: <p>In many cases, yes. Whether siblings can participate together depends on the class format, age requirements, and available space. Please contact us if you are interested in registering siblings for the same program.</p>,
      },
      {
        q: "What should I bring to class?",
        a: <p>Required materials vary by program. Any special supplies, equipment, clothing, or other materials that learners need to bring will be communicated before the class.</p>,
      },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling and policies",
    items: [
      {
        q: "What happens if I need to cancel a class?",
        a: <p>Please review the cancellation policy for the specific program, or contact us as soon as possible if you need to cancel. Advance notice is appreciated so that we can manage scheduling and offer the time to other learners.</p>,
      },
      {
        q: "What happens if I miss a class?",
        a: <p>Make-up opportunities depend on the program and the reason for the absence. Please contact us as soon as possible if you know you will be unable to attend.</p>,
      },
      {
        q: "Do you offer weekend classes?",
        a: <p>Yes. Program schedules vary, and some classes and workshops may be offered on weekends. We are open Saturdays from 12:00 PM to 6:00 PM, by appointment.</p>,
      },
      {
        q: "Do you offer summer, school-break, or specialty programs?",
        a: <p>Yes. TEMPO Community Academy may offer seasonal programs, workshops, camps, and specialty experiences throughout the year. New offerings will be announced as they become available.</p>,
      },
    ],
  },
  {
    id: "cost",
    title: "Cost and payment",
    items: [
      {
        q: "How much do classes cost?",
        a: <p>Pricing varies depending on the program, length of the class, materials, and type of instruction. See our <Link to="/pricing">pricing page</Link> for current rates.</p>,
      },
      {
        q: "Are materials included in the cost of the class?",
        a: <p>This depends on the program. If additional materials are required, the program description will identify what is included and what families may need to provide separately.</p>,
      },
      {
        q: "Do you offer gift cards?",
        a: <p>Gift card availability may vary. Please <Link to="/contact">contact us</Link> for current information.</p>,
      },
    ],
  },
  {
    id: "approach",
    title: "Our approach",
    items: [
      {
        q: "What makes TEMPO Community Academy different?",
        a: (
          <>
            <p>We believe learning should be more than completing a lesson. It should be an opportunity to discover interests, develop confidence, practice meaningful skills, and experience the satisfaction of learning something new.</p>
            <p>Our approach is personalized, hands-on, and focused on helping each learner find their own rhythm.</p>
          </>
        ),
      },
      {
        q: "What does \"everyone's unique rhythm\" mean?",
        a: (
          <>
            <p>Everyone learns differently. Some people move quickly through a new skill. Others need more time, practice, or opportunities to explore before they feel comfortable.</p>
            <p>At TEMPO Community Academy, we recognize that there is no single &ldquo;right&rdquo; way to learn. We meet learners where they are and help them move forward from there.</p>
          </>
        ),
      },
      {
        q: "What is the goal of TEMPO Community Academy?",
        a: (
          <>
            <p>Our goal is to create meaningful opportunities for people to learn, create, explore, connect, and grow.</p>
            <p>Whether someone comes to learn how to bake, create art, use technology, dance, make coffee, or develop a new interest, we want them to leave with something valuable: a new skill, a new experience, greater confidence, or perhaps a new idea about what they might be capable of doing.</p>
          </>
        ),
      },
    ],
  },
  {
    id: "visiting",
    title: "Visiting and contact",
    items: [
      {
        q: "Can I walk in?",
        a: <p>We meet by appointment only, no walk-ins. Call or email us, or send a message through our <Link to="/contact">contact page</Link>, and we will set up a time to talk about the right program and schedule.</p>,
      },
      {
        q: "What languages do you speak?",
        a: <p>You can reach us in English, Korean (Inae, <a href="tel:+19175829560">917-582-9560</a>), and Spanish (Cesia, <a href="tel:+19298108648">929-810-8648</a>). Just let us know your preferred language when you get in touch. Classes are offered in English, Korean, and Spanish.</p>,
      },
      {
        q: "Where are classes held?",
        a: <p>At our Bayside location at 214-22 42nd Ave, Bayside, NY 11361, and directly in community settings so learners can grow in familiar, comfortable environments.</p>,
      },
      {
        q: "What if I don't see the program I'm looking for?",
        a: <p>Please reach out to us. We are always interested in hearing what our community wants to learn, and your question or suggestion may help us develop our next class or workshop.</p>,
      },
    ],
  },
];

export default function Faq() {
  useSeo({ path: "/faq", ...routeMeta["/faq"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Frequently asked questions</h1>
          <p>Everything families usually ask about our classes, enrollment, scheduling, and approach.</p>
        </div>
      </div>

      {SECTIONS.map((s, i) => (
        <section className={`section${i % 2 ? " section-alt" : ""}`} key={s.id} aria-labelledby={`faq-${s.id}`}>
          <div className="wrap">
            <div className="section-head">
              <h2 id={`faq-${s.id}`}>{s.title}</h2>
            </div>
            <div className="faq">
              {s.items.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  {item.a}
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Still have questions?</h2>
              <p>Contact us to learn more about current programs, availability, and registration.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
