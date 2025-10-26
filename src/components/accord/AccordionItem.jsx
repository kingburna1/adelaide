'use client'; 

import React, { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react'; 

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Ref to measure content height

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Set max-height for smooth transition
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen 
        ? `${contentRef.current.scrollHeight}px` 
        : '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200"> {/* Separator line */}
      <button
        className="flex items-center justify-between w-full p-6 text-left cursor-pointer transition-colors duration-200 hover:bg-gray-50"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          {/* Icon Container: Green background, white icon */}
          <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-green-900 rounded-md flex items-center justify-center mr-4">
            {isOpen ? (
              <Minus className="w-3 h-3 text-white" />
            ) : (
              <Plus className="w-3 h-3 text-white" />
            )}
          </div>
          {/* Question Text */}
          <h3 className="text-md md:text-lg font-semibold text-green-900 leading-tight">
            {question}
          </h3>
        </div>
      </button>

      {/* Answer Content - Hidden/Shown with max-height transition */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <p className="pl-[5.5rem] md:pl-[6.5rem] pr-6 pb-6 text-gray-700 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;