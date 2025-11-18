"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface WorkCardProps {
  title: string;
  subtitle: string;
  dates: string;
  image?: string;
  href?: string;
  description?: string;
  className?: string;
}

export function WorkCard({
  title,
  subtitle,
  dates,
  image,
  href,
  description,
  className,
}: WorkCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  // Convert paragraph description into bullet points
  const bulletPoints = description
    ? description.split('. ')
        .filter(sentence => sentence.trim().length > 0)
        .map(sentence => sentence.trim().endsWith('.') ? sentence.trim() : sentence.trim() + '.')
    : [];

  const content = (
    <div
      onClick={handleClick}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-background border border-border transition-all duration-300 hover:shadow-lg cursor-pointer",
        className
      )}
    >
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-[400px] bg-muted overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="flex flex-col p-8 relative">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-4xl font-bold tracking-tight inline-flex items-center">
            {title}
            {description && (
              <ChevronRightIcon
                className={cn(
                  "size-5 ml-2 translate-x-0 transform transition-all duration-300 ease-out",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            )}
          </h3>
        </div>
        <p className="text-xl text-gray-400 font-bold">{subtitle}</p>
        {/* Dates positioned at top right */}
        <div className="absolute top-6 right-8 text-sm text-muted-foreground font-light">
          {dates}
        </div>
        {/* Expandable Description */}
        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-4 overflow-hidden"
          >
            <ul className="list-disc space-y-2 ml-4 text-sm text-muted-foreground">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );

  if (href && !description) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

