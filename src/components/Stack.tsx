"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import "./Stack.css";

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  tooltip?: string;
}

function CardRotate({ children, onSendToBack, sensitivity, tooltip }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);
  const [showTooltip, setShowTooltip] = useState(false);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {tooltip && showTooltip && (
        <div className="card-tooltip">
          {tooltip}
        </div>
      )}
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { 
    id: number; 
    img: string; 
    tooltip?: string;
    imageStyle?: React.CSSProperties;
  }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
        { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
        { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
        { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
        { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
      ]
  );

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div 
      className="stack-container relative group"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600,
      }}
    >
      <motion.div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/60 to-purple-600/60 blur-xl"
        style={{ 
          transform: 'translateY(10px) scale(1.1)',
          zIndex: -1 
        }}
        animate={{
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5 // Random degree between -5 and 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            tooltip={card.tooltip}
          >
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height,
              }}
            >
              <img
                src={card.img}
                alt={`card-${card.id}`}
                className="card-image"
                style={card.imageStyle}
              />
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
} 