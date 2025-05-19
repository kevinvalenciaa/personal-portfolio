import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import Stack from "@/components/Stack";
import Particles from "@/components/Particles";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";
import IconCloud from "@/components/ui/icon-cloud";
import { Icons } from "@/components/icons";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import React from "react";

const BLUR_FADE_DELAY = 0.06;

const slugs = [
  "typescript",
  "python",
  "javascript",
  "mysql",
  "pandas",
  "tailwindcss",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "cloudflare",
  "vercel",
  "git",
  "github",
  "figma",
  "mongodb",
  "flask",
];

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70 z-0"></div>
        <Particles 
          particleCount={700}
          particleSpread={40}
          speed={0.02}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>
      
      <main className="flex flex-col min-h-[100dvh] space-y-10 relative z-10 backdrop-blur-[0px]">

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Stack 
                cardDimensions={{ width: 160, height: 160 }}
                randomRotation={true}
                sendToBackOnClick={true}
                sensitivity={100}
                cardsData={[ 
                  { id: 6, img: "/qhacks.jpeg", tooltip: "My first ever hackathon at QHacks 2025!" },
                  { id: 5, img: "/cucaistand.png", tooltip: "CUCAI 2025 Project Showcase!" },
                  { id: 3, img: "/amazonlogo.jpg", tooltip: "Amazon Firm Day!" },
                  { id: 4, img: "/casecomp.png", tooltip: "2nd place at the QSAO Case Competition!" },
                  { id: 2, img: "/amazonfirmday.jpg", tooltip: "3rd at the Amazon Office Project Showcase!" },
                  { 
                    id: 1, 
                    img: "/profile1.jpg", 
                    tooltip: "That's me! 👋",
                    imageStyle: { 
                      transform: 'scale(1.05)',
                      objectPosition: 'center 30%'
                    }
                  },
                ]}
                animationConfig={{ stiffness: 300, damping: 25 }}
              />
            </BlurFade>
          </div>
        </div>
      
      <div className="flex justify-left gap-6 mt-2">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <a href="https://github.com/kevinvalenciaa" target="_blank" rel="noopener noreferrer" className="group relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-600/60 opacity-0 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></div>
          <div className="transform transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-3">
            <GitHubLogoIcon className="w-7 h-7 relative z-10" />
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/85 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700/30 pointer-events-none">
            my github!
          </div>
        </a>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
        <a href="https://www.linkedin.com/in/kevin-valenciaa/" className="group relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/60 to-sky-400/60 opacity-0 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></div>
          <div className="transform transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-3">
            <LinkedInLogoIcon className="w-7 h-7 relative z-10" />
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/85 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700/30 pointer-events-none">
            let&apos;s connect!
          </div>
        </a>
       </BlurFade>
       <BlurFade delay={BLUR_FADE_DELAY}>
       <a href="mailto:kevin.valencia@queensu.ca" className="group relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/60 to-orange-400/60 opacity-0 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></div>
          <div className="transform transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-3">
            <EnvelopeClosedIcon className="w-7 h-7 relative z-10" />
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/85 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700/30 pointer-events-none">
            contact me!
          </div>
       </a>
       </BlurFade>
       <BlurFade delay={BLUR_FADE_DELAY}>
       <a href={DATA.contact.social.Resume.url} target="_blank" rel="noopener noreferrer" className="group relative inline-block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/60 to-green-400/60 opacity-0 blur transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></div>
          <div className="transform transition-all duration-300 ease-out group-hover:scale-125 group-hover:-translate-y-1 group-hover:rotate-3">
            <div className="w-7 h-7 relative z-10">
              {React.createElement(DATA.contact.social.Resume.icon, { className: "w-full h-full" })}
            </div>
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/85 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-gray-700/30 pointer-events-none">
            my experience!
          </div>
       </a>
       </BlurFade>
     </div>
      </section>


      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-l text-gray-500 space-y-100">
            <span className="not-italic">{`📌`}</span> Toronto, Canada
            </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start}  ${education.end}`}
                description={education.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className="px-4 py-1">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>

        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8 mx-auto">
        <IconCloud iconSlugs={slugs} />
        </div>

      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My Projects
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  /*video={project.video}*/
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Hackathons
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I have attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Contact
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select any of the items in the navigation bar below!
                </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
    </>
  );
}
