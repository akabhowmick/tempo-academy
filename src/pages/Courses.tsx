import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useSeo } from "@/lib/useSeo";
import routeMeta from "@/lib/route-meta.json";

export default function Courses() {
  useSeo({ path: "/courses", ...routeMeta["/courses"] });

  return (
    <Layout>
      <div className="page-hero">
        <div className="wrap">
          <h1>Courses</h1>
          <p>Hands-on programs taught by experienced instructors, with small group and 1:1 options. Every learner gets a plan built around their strengths and interests.</p>
        </div>
      </div>

      <section className="section" id="art" aria-labelledby="art-h">
        <div className="wrap grid-2">
          <img src="/assets/program-art.webp" width={1200} height={900} loading="lazy" alt="A student painting a bright red and yellow flower still life on canvas" style={{ borderRadius: 24 }} />
          <div>
            <h2 id="art-h">Art &amp; Design</h2>
            <p><strong>Beginner:</strong> Eunice Lee, a licensed NYS teacher. <strong>Advanced:</strong> Pognee Kim, a licensed NYS teacher.</p>
            <p>Drawing, painting, sculpture, and hands-on crafting with pencils, charcoal, watercolor, acrylic, clay, and recycled materials. Students learn shading, color mixing, composition, perspective, and design. Projects range from small sculptures and card making to soap making and custom T-shirt design with a Cricut machine.</p>
            <p>Beginner 1:1 art instruction offers step-by-step demonstrations, guided practice, and individualized feedback so learners build skills, independence, and confidence at their own pace.</p>
            <Link className="btn btn-ghost" to="/pricing">See art pricing</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="cooking" aria-labelledby="cooking-h">
        <div className="wrap grid-2">
          <div>
            <h2 id="cooking-h">Cooking &amp; Baking</h2>
            <p><strong>Instructors:</strong> Jin Park and Jasmine Rodriguez. Variety cuisine and baking.</p>
            <p>Learn to make delicious meals and baked goods from scratch. Students build core kitchen skills like chopping, measuring, mixing, and safely using the oven and other equipment. From pasta and soup to cookies and cake, the goal is comfort and confidence in the kitchen.</p>
            <Link className="btn btn-ghost" to="/pricing">See cooking pricing</Link>
          </div>
          <img src="/assets/program-cooking.webp" width={1200} height={900} loading="lazy" alt="An instructor guiding students as they shape songpyeon rice cakes from bowls of dough" style={{ borderRadius: 24 }} />
        </div>
      </section>

      <section className="section" id="dance" aria-labelledby="dance-h">
        <div className="wrap grid-2">
          <img src="/assets/program-dance.webp" width={1200} height={900} loading="lazy" alt="An instructor on stage leading two students through a squat in the dance studio" style={{ borderRadius: 24 }} />
          <div>
            <h2 id="dance-h">Dance &amp; Body Form</h2>
            <p><strong>Instructor:</strong> Halle Kim, a certified Pilates instructor and registered nurse. Zumba, K-Pop dance, and yoga.</p>
            <p>Fun dance routines that build strength, posture, flexibility, and balance. A great way to stay active, express yourself through movement, and feel more confident. No dance experience needed.</p>
            <Link className="btn btn-ghost" to="/pricing">See dance pricing</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="cs" aria-labelledby="cs-h">
        <div className="wrap grid-2">
          <div>
            <h2 id="cs-h">Computer Science</h2>
            <p><strong>Beginner:</strong> Cesia Maldonado. <strong>Advanced:</strong> Pognee Kim, a licensed NYS teacher.</p>
            <p>Understand how computers work and how to use them in everyday life: keyboard and mouse skills, email, safe internet use, and programs like Word and Excel. Then move into how apps and websites are built and the basics of coding, learning the language of computers step by step.</p>
            <Link className="btn btn-ghost" to="/pricing">See computer science pricing</Link>
          </div>
          <img src="/assets/program-computer-science.webp" width={1200} height={900} loading="lazy" alt="Students working on laptops around a wooden table in the computer room" style={{ borderRadius: 24 }} />
        </div>
      </section>

      <section className="section" id="cafe" aria-labelledby="cafe-h">
        <div className="wrap grid-2">
          <img src="/assets/program-cafe.webp" width={620} height={465} loading="lazy" alt="Coffee brewing in a pour-over filter beside a hand grinder and potted plants" style={{ borderRadius: 24 }} />
          <div>
            <h2 id="cafe-h">Cafe &amp; More</h2>
            <p>The art and science behind brewing the perfect cup. Hands-on barista training on professional espresso machines and cafe equipment.</p>
            <p>What you will learn: coffee bean basics and roast levels, grinding and dosing, extracting a perfect espresso shot, milk steaming and texturing for lattes and cappuccinos, basic latte art, equipment care, and customer service and cafe etiquette.</p>
            <Link className="btn btn-ghost" to="/pricing">See cafe pricing</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="beauty" aria-labelledby="beauty-h">
        <div className="wrap grid-2">
          <div>
            <h2 id="beauty-h">Makeup &amp; Beauty</h2>
            <p>Skincare fundamentals and step-by-step makeup application, from everyday looks to special occasions. All about feeling confident, having fun, and bringing out your best.</p>
            <Link className="btn btn-ghost" to="/pricing">See beauty pricing</Link>
          </div>
          <img src="/assets/program-makeup.webp" width={616} height={462} loading="lazy" alt="An open makeup kit with eyeshadow palettes, brushes, and lipsticks" style={{ borderRadius: 24 }} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h2>Not sure which class fits?</h2>
              <p>Tell us about your learner and we will recommend a starting point.</p>
            </div>
            <Link className="btn btn-light" to="/contact">Ask us</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
