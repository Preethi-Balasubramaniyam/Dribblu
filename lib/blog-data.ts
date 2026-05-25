export interface Blog {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  coverColor: string // tailwind bg class used as placeholder cover
  body: string // HTML string for the blog body
}

export const blogs: Blog[] = [
  {
    slug: 'web-design-trends-2026',
    title: '10 Web Design Trends to Watch in 2026',
    excerpt:
      'From AI-generated layouts to immersive 3-D scrolling experiences, discover the design directions shaping the web this year.',
    category: 'Web Design',
    date: 'April 28, 2026',
    readTime: '6 min read',
    coverColor: 'from-orange-500 to-orange-800',
    body: `
      <p>The digital landscape evolves faster than ever, and 2026 is no exception. Businesses that stay ahead of design trends gain a decisive competitive edge. Here are the ten trends every forward-thinking brand should know.</p>

      <h2>1. AI-Assisted Personalization</h2>
      <p>Artificial intelligence now powers real-time layout adaptation — content, colours, and calls-to-action shift based on each visitor's behaviour and preferences, delivering a uniquely tailored experience at scale.</p>

      <h2>2. Bento-Grid Layouts</h2>
      <p>Popularised by Apple, the bento-grid organises content into clean, modular tiles. The result is visually rich yet highly readable — perfect for showcasing services, portfolios, or product features.</p>

      <h2>3. Immersive Scroll Experiences</h2>
      <p>Parallax effects are giving way to full-scene scroll-driven animations where entire narratives unfold as the user scrolls. Tools like Framer Motion and GSAP make this achievable without sacrificing performance.</p>

      <h2>4. Dark Mode as a Default</h2>
      <p>Dark-first design reduces eye strain and feels premium. Many brands now ship dark mode as the primary theme, with a light toggle for accessibility.</p>

      <h2>5. Micro-Interactions Everywhere</h2>
      <p>Subtle hover states, animated loaders, and button-press feedback communicate quality and responsiveness without overwhelming the user.</p>

      <h2>6. Variable Fonts</h2>
      <p>A single variable font file replaces dozens of static weight files, reducing page load while enabling fluid typographic transitions that respond to viewport width.</p>

      <h2>7. Claymorphism & Soft 3-D</h2>
      <p>Inflated, pastel-shaded UI elements give interfaces a playful, tactile feel — ideal for consumer apps and e-commerce brands targeting younger audiences.</p>

      <h2>8. Accessibility-First Approach</h2>
      <p>WCAG 3.0 is on the horizon. Proactive teams are adopting higher-contrast colour ratios, focus-visible styles, and semantic HTML today to future-proof their products.</p>

      <h2>9. Glassmorphism 2.0</h2>
      <p>The frosted-glass look has matured — now combined with layered depth, subtle borders, and noise textures for a more refined aesthetic.</p>

      <h2>10. Sustainability-Driven Design</h2>
      <p>Lean code, optimised images, and low-carbon hosting are becoming brand differentiators as eco-conscious consumers scrutinise digital footprints.</p>

      <p>At Dribblu, we incorporate the right mix of these trends for every client — balancing aesthetics with performance and accessibility. <a href="/contact">Get in touch</a> to see how we can modernise your digital presence.</p>
    `,
  },
  {
    slug: 'seo-backbone-digital-strategy',
    title: 'Why SEO Is the Backbone of Your Digital Strategy',
    excerpt:
      'Paid ads stop the moment you pause spending. SEO compounds over time — here\'s why it deserves the centre spot in your marketing plan.',
    category: 'SEO',
    date: 'April 14, 2026',
    readTime: '7 min read',
    coverColor: 'from-blue-600 to-blue-900',
    body: `
      <p>Imagine a 24/7 salesperson who works for free, never takes a day off, and reaches customers precisely when they are searching for what you offer. That is what a well-executed SEO strategy delivers.</p>

      <h2>Organic Traffic Compounds</h2>
      <p>Unlike pay-per-click advertising, every ranking improvement you earn continues to generate traffic without additional spend. A blog post that ranks on page one today can drive leads for years.</p>

      <h2>Trust and Credibility</h2>
      <p>Users instinctively trust organic results more than advertisements. Appearing on the first page of Google signals authority in your niche — authority that transfers directly to your brand perception.</p>

      <h2>The Three Pillars of SEO</h2>
      <p><strong>Technical SEO</strong> ensures search engines can crawl and index your site efficiently. Core Web Vitals — loading speed, interactivity, and visual stability — now directly influence rankings.</p>
      <p><strong>On-Page SEO</strong> covers content quality, keyword targeting, meta tags, and internal linking. Each page should serve one primary intent and answer it thoroughly.</p>
      <p><strong>Off-Page SEO</strong> builds domain authority through earned backlinks, brand mentions, and digital PR campaigns.</p>

      <h2>Local SEO for Service Businesses</h2>
      <p>For businesses serving a geographic area, Google Business Profile optimisation, consistent NAP (Name, Address, Phone) data, and localised content can put you at the top of map results — directly above organic listings.</p>

      <h2>Content Is Still King</h2>
      <p>Google's Helpful Content System rewards pages that demonstrate genuine expertise, authoritativeness, and trustworthiness (E-E-A-T). Long-form, well-researched articles that solve real problems outperform thin, keyword-stuffed pages.</p>

      <h2>Measuring What Matters</h2>
      <p>Keyword rankings are a vanity metric without conversion data alongside. Track organic sessions, goal completions, and revenue attributed to organic search to understand true ROI.</p>

      <p>Dribblu's SEO team combines technical audits, content strategy, and link-building campaigns to deliver measurable, lasting results. <a href="/services/seo">Explore our SEO services</a> or <a href="/contact">contact us today</a>.</p>
    `,
  },
  {
    slug: 'app-development-idea-to-launch',
    title: 'From Idea to Launch: A Complete Guide to App Development',
    excerpt:
      'Building a mobile app is a journey with many stages. This guide walks you through every phase — from concept to App Store listing.',
    category: 'App Development',
    date: 'March 30, 2026',
    readTime: '8 min read',
    coverColor: 'from-purple-600 to-purple-900',
    body: `
      <p>Every successful app starts as an idea scribbled on a napkin or typed into a note app at 2 a.m. Transforming that idea into a polished, live product requires a clear process. Here is a blueprint.</p>

      <h2>Phase 1: Discovery & Research</h2>
      <p>Before a single line of code is written, invest time in understanding your target users. Conduct interviews, study competitor apps, and define the core problem your app will solve. A one-sentence value proposition — "Our app helps X do Y so they can Z" — keeps the project focused.</p>

      <h2>Phase 2: Define the MVP</h2>
      <p>A Minimum Viable Product contains only the features essential to deliver core value. Resist the temptation to ship everything at once. Ship the smallest useful version, gather real feedback, and iterate. This saves time, money, and emotional energy.</p>

      <h2>Phase 3: UX Wireframing</h2>
      <p>Wireframes are low-fidelity blueprints of every screen. They map the user journey before visual design begins, ensuring the information architecture is logical before aesthetics are added. Tools like Figma make collaborative wireframing fast and shareable.</p>

      <h2>Phase 4: UI Design</h2>
      <p>With the wireframes approved, designers apply brand colours, typography, icons, and animations. A robust design system — buttons, cards, form fields — ensures consistency across all screens and speeds up developer handoff.</p>

      <h2>Phase 5: Development</h2>
      <p>React Native and Flutter allow a single codebase to run on both iOS and Android, dramatically reducing development cost. For performance-critical or platform-specific functionality, native development remains the gold standard.</p>

      <h2>Phase 6: Testing</h2>
      <p>Quality Assurance covers functional testing (does it work?), usability testing (can users figure it out?), performance testing (does it stay fast under load?), and security testing (is user data safe?). Automated test suites catch regressions as features are added.</p>

      <h2>Phase 7: Launch</h2>
      <p>App Store Optimisation (ASO) — compelling screenshots, keyword-rich descriptions, and a strong icon — determines how discoverable your app is in store search. Plan a launch announcement across email, social media, and PR channels.</p>

      <h2>Phase 8: Post-Launch Iteration</h2>
      <p>The launch is the beginning, not the end. Monitor crash reports, user reviews, and analytics. Prioritise the next iteration based on real usage data.</p>

      <p>Dribblu's app development team has shipped apps across fintech, healthcare, e-commerce, and education verticals. <a href="/services/app-development">See what we build</a> or <a href="/contact">start a conversation</a>.</p>
    `,
  },
  {
    slug: 'graphic-design-builds-brand-identity',
    title: 'How Graphic Design Builds a Brand Identity That Lasts',
    excerpt:
      'Your logo is just the beginning. Discover how a cohesive visual language across every touchpoint transforms a business into a brand.',
    category: 'Graphic Design',
    date: 'March 15, 2026',
    readTime: '5 min read',
    coverColor: 'from-pink-500 to-rose-700',
    body: `
      <p>When someone spots your brand's colour on a billboard before they even read the name, that is the power of great graphic design. Visual identity is the silent ambassador of your business.</p>

      <h2>The Brand Identity System</h2>
      <p>A complete brand identity is far more than a logo. It includes a colour palette, typography hierarchy, iconography style, photography art direction, and a set of rules — the brand guidelines — that govern how every element is used together.</p>

      <h2>Logo: The Cornerstone</h2>
      <p>Your logo must work at any size — from a 16 × 16 px favicon to a 10-metre billboard. A well-designed logo has an icon mark, a wordmark variant, and a stacked version, giving designers flexibility across every medium.</p>

      <h2>Colour Psychology</h2>
      <p>Colours trigger unconscious emotional responses. Orange (like Dribblu's signature <span style="color:#F15A22">#F15A22</span>) communicates energy, creativity, and approachability. Blue conveys trust and stability. Choose colours that align with how you want customers to feel.</p>

      <h2>Typography as Personality</h2>
      <p>A serif heading font paired with a clean sans-serif body font is a classic combination for a reason — it signals authority while remaining readable. Stick to two or three typefaces maximum; more creates visual noise.</p>

      <h2>Consistency Across Touchpoints</h2>
      <p>From business cards to email signatures, social media templates to packaging, every touchpoint that carries your brand is an opportunity to reinforce recognition. Inconsistency erodes trust.</p>

      <h2>Designing for Digital First</h2>
      <p>Most brand interactions now happen on screens. Design in RGB colour spaces, create assets in vector format (SVG), and optimise every graphic for retina displays.</p>

      <p>Dribblu's graphic design team crafts identities that are as strategic as they are beautiful. <a href="/services/graphic-design">View our design services</a> or <a href="/contact">let's create something remarkable together</a>.</p>
    `,
  },
  {
    slug: 'custom-website-business-2026',
    title: 'Why Your Business Needs a Custom Website in 2026',
    excerpt:
      'Template sites are getting faster, but custom-built websites still win on performance, brand differentiation, and long-term scalability.',
    category: 'Web Design',
    date: 'February 22, 2026',
    readTime: '5 min read',
    coverColor: 'from-teal-500 to-cyan-800',
    body: `
      <p>Website builders have democratised the web. Anyone can launch a site in an afternoon — so why invest in a custom-built website? Because "anyone can do it" is exactly the problem.</p>

      <h2>Stand Out in a Sea of Templates</h2>
      <p>Popular website builders power millions of sites. Visitors unconsciously recognise template layouts, which signals that a business hasn't invested in its digital presence. A bespoke design immediately communicates professionalism and attention to detail.</p>

      <h2>Performance You Can Control</h2>
      <p>Template platforms bundle hundreds of features — many of which your site will never use — inflating page weight and degrading Core Web Vitals scores. A custom build ships only what is needed, enabling sub-second load times and top Lighthouse scores.</p>

      <h2>Scalability Without Lock-In</h2>
      <p>As your business grows, you may need custom integrations, unique user flows, or advanced e-commerce logic. Template platforms hit their ceiling quickly. A custom codebase scales on your terms.</p>

      <h2>SEO from the Ground Up</h2>
      <p>Custom sites allow full control over page structure, schema markup, canonical tags, and performance — all critical ranking factors. You're not fighting the platform's default HTML to get clean code.</p>

      <h2>Accessibility & Security</h2>
      <p>A purpose-built site can be engineered with accessibility and security in mind from day one — not retrofitted through plugins that themselves introduce vulnerabilities.</p>

      <h2>Total Cost of Ownership</h2>
      <p>Subscription fees for premium templates, plugins, and hosting can exceed the cost of a custom build within a few years — without any of the flexibility or ownership benefits.</p>

      <p>Dribblu builds high-performance, fully custom websites for businesses that refuse to settle. <a href="/services/web-design">Explore web design & development</a> or <a href="/contact">request a free quote</a>.</p>
    `,
  },
  {
    slug: 'boost-website-performance',
    title: '5 Proven Ways to Boost Your Website\'s Performance',
    excerpt:
      'Speed is a conversion lever. Every second of delay reduces conversions by up to 7%. Here are five impactful optimisations you can start today.',
    category: 'Web Design',
    date: 'January 18, 2026',
    readTime: '4 min read',
    coverColor: 'from-yellow-500 to-orange-600',
    body: `
      <p>Google's research is unambiguous: page speed directly impacts bounce rate, engagement, and revenue. A one-second delay in mobile load time can cut conversions by up to 20%. Here are five optimisations with the highest impact-to-effort ratio.</p>

      <h2>1. Optimise and Serve Modern Image Formats</h2>
      <p>Images account for the majority of page weight on most websites. Convert images to WebP or AVIF — modern formats that achieve 30–50% smaller file sizes at equivalent visual quality. Use the HTML <code>picture</code> element or Next.js <code>Image</code> component to serve the right format to every browser automatically.</p>

      <h2>2. Implement Lazy Loading</h2>
      <p>Images and iframes below the fold don't need to load on page open. The <code>loading="lazy"</code> attribute defers off-screen resources until the user scrolls near them, reducing initial payload dramatically.</p>

      <h2>3. Eliminate Render-Blocking Resources</h2>
      <p>CSS and JavaScript in the <code>&lt;head&gt;</code> block the browser from rendering the page until they are parsed. Defer non-critical scripts with <code>async</code> or <code>defer</code>, and load non-critical CSS asynchronously.</p>

      <h2>4. Enable Caching and a CDN</h2>
      <p>A Content Delivery Network serves assets from edge nodes closest to each visitor, cutting latency dramatically. Pair this with aggressive cache headers for static assets — images, fonts, and scripts rarely change and should be cached for months.</p>

      <h2>5. Minimise Third-Party Scripts</h2>
      <p>Every third-party script — analytics, chat widgets, social embeds — adds network requests and execution time. Audit your scripts quarterly. Remove anything that isn't delivering measurable value, and load the rest via a tag manager with a firing condition.</p>

      <p>Dribblu builds performance into every project from day one. If your current site is slow, our technical audit identifies every bottleneck and prioritises fixes by impact. <a href="/contact">Book a free performance review</a>.</p>
    `,
  },
]

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug)
}
