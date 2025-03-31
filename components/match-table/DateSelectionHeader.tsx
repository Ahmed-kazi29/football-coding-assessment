"use client";
import React, { useMemo, useCallback } from "react";

interface DateSelectionProps {
  onDateSelect: (date: Date) => void;
  selectedDate: Date;
}

const DateSelectionHeader: React.FC<DateSelectionProps> = React.memo(
  ({ onDateSelect, selectedDate }) => {
    // Generate array of dates
    const weekDates = useMemo(() => {
      const dates = [];
      const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - 2); // Start from 2 days before today

      for (let i = 0; i < 6; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        dates.push(date);
      }
      return dates;
    }, []);

    // Format date helpers
    const formatDay = useCallback((date: Date) => {
      if (isToday(date)) return "Today";
      if (isTomorrow(date)) return "Tomorrow";
      if (isYesterday(date)) return "Yesterday";
      return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    }, []);

    const formatDate = useCallback((date: Date) => {
      return date.getDate().toString().padStart(2, "0") + " Aug";
    }, []);

    const isToday = useCallback((date: Date) => {
      const today = new Date();
      return date.toDateString() === today.toDateString();
    }, []);

    const isTomorrow = useCallback((date: Date) => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return date.toDateString() === tomorrow.toDateString();
    }, []);

    const isYesterday = useCallback((date: Date) => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return date.toDateString() === yesterday.toDateString();
    }, []);

    return (
      <div className="w-full flex flex-col md:flex-row items-center justify-between flex-wrap md:flex-nowrap gap-2">
        <div className="grid md:grid-cols-6 grid-cols-3 gap-2">
          {weekDates.map((date) => {
            const isSelected =
              date.toDateString() === selectedDate.toDateString();
            return (
              <button
                key={date.toISOString()}
                onClick={() => onDateSelect(date)}
                className={`flex flex-col items-center px-4 py-1 rounded-lg transition-colors bg-custom-gray-2
                ${
                  isSelected && "border border-custom-green text-custom-green"
                }`}
              >
                <span className="font-medium whitespace-nowrap text-xs">
                  {formatDay(date)}
                </span>
                <span className="text-xs mt-1 whitespace-nowrap">
                  {formatDate(date)}
                </span>
              </button>
            );
          })}
        </div>

        <button className="flex items-center text-left space-x-2 px-3 py-2 rounded-lg border border-custom-green">
          <svg
            className="w-5 h-5 text-custom-green"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              ry="2"
              strokeWidth="2"
            />
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" />
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" />
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
          </svg>
          <span className="text-xs">View Calendar</span>
        </button>
      </div>
    );
  }
);

export default DateSelectionHeader;
