"use client";
import { Quote } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function QuoteCard({ quote }: { quote: Quote }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`px-14 bg-secondary text-black flex flex-col relative items-center py-12 gap-6 cursor-pointer transition-all duration-300 ease-in-out ${
        isExpanded ? "shadow-lg" : ""
      }`}
      onClick={toggleExpand}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === "Space") {
          toggleExpand();
        }
      }}
    >
      <h1 className="text-2xl text-center w-[25vw]">{quote.content}</h1>

      <Image
        className=""
        height={20}
        width={200}
        alt="Separador"
        src="/assets/roman-separator.png"
      />

      <p className="text-accent w-[25vw] text-center">{quote.description}</p>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-6 w-[25vw] space-y-4">
          <div>
            <p className="font-semibold">
              {new Date(quote.date_published).toLocaleDateString()}
            </p>
            <p className="capitalize">{quote.type}</p>
            <a
              href={quote.link}
              className="text-blue-900 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {quote.link}
            </a>
          </div>

          {quote.tags && quote.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {quote.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-accent text-text px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        className="absolute bottom-4 right-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          toggleExpand();
        }}
      >
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
