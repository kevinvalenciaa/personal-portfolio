"use client"

import React, { useState } from "react";
import { ResumeCard } from "@/components/resume-card";
import { ProjectCard } from "@/components/project-card";
import { WorkCard } from "@/components/work-card";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.06;

export function WorkEducationTabs() {
  const [activeTab, setActiveTab] = useState<"work" | "extracurriculars">("work");

  return (
    <section id="work-education">
      <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
        <div className="flex gap-2 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("work")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[1px]",
              activeTab === "work"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Work
          </button>
          {/* <button
            onClick={() => setActiveTab("extracurriculars")}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-[1px]",
              activeTab === "extracurriculars"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Extracurriculars
          </button> */}
        </div>
      </BlurFade>

      {activeTab === "work" && (
        <div className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <WorkCard
              title="Clover Labs"
              subtitle="Software Engineer Intern"
              dates="October 2025 - Present"
              image="/cloverlabs-mockup.png"
              description="A portfolio of four verticalized ('leafs') AI growth agents. On track to hit $10M ARR in 2025. We're profitability obsessed, and proudly Canadian 🍁."
            />
          </BlurFade>
        </div>
      )}

      {/* {activeTab === "work" && (
        <div className="flex min-h-0 flex-col gap-y-4">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
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
      )} */}

      {/* {activeTab === "extracurriculars" && (
        <div className="flex min-h-0 flex-col gap-y-3">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 5 + id * 0.05}
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
      )} */}
    </section>
  );
}

