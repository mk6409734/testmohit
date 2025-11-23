import React from "react";
import {
  Card as UiCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export interface CardProps {
  name: string;
  quote?: string;
  image?: string;
  href?: string;
  role?: string;
}

const Card: React.FC<CardProps> = ({ name, quote, image, href, role }) => {
  const inner = (
    <div className="w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <div className="rounded-full w-16 h-16 min-w-16 overflow-hidden mb-5">
        <img
          className="w-full h-full object-cover transition duration-700"
          src={image}
          alt=""
        />
      </div>
      <p className="text-lg leading-relaxed text-stone-200">{quote}</p>
      <footer className="mt-6">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm uppercase tracking-[0.25em] text-stone-400">
          {role}
        </p>
      </footer>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={name}>
      {inner}
    </a>
  ) : (
    inner
  );
};

export default Card;
