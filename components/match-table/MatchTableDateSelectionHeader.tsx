"use client";
import React, { useState, useCallback } from "react";
import DateSelectionHeader from "./DateSelectionHeader";
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import useCustomQuery from "@/hooks/useCustomQuery";
import { format } from "date-fns";
import { LeagueMatchData } from "@/types/match-type";
import { mapAndGroupFixtures } from "@/lib/matchMapper";
import MatchTable from "./MatchTable";
import MatchSectionSkeletonLoader from "../loading/MatchSectionSkeletonLoader";

const MatchTableDateSelectionHeader = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format the date for API call
  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  // Handle date selection with proper refetch
  const handleDateSelect = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  // Use the custom query hook with data transformation
  const {
    data: rawMatchData,
    isLoading,
    isError,
    error,
  } = useCustomQuery<LeagueMatchData[]>(
    `/api/football/${formattedDate}`,
    ["matches", formattedDate],
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      // Transform the raw data using matchMapper
      select: (data: any) =>
        mapAndGroupFixtures(data?.data) as LeagueMatchData[],
    }
  );
  // Get live matches count
  const liveMatchesCount =
    rawMatchData?.reduce(
      (total, league) =>
        total + league.data.filter((match) => match.isLive).length,
      0
    ) || 0;

  // Loading state UI
  if (isLoading) {
    return <MatchSectionSkeletonLoader />;
  }

  // Error state UI
  if (isError) {
    return (
      <div className="w-full flex flex-col gap-4 rounded-xl bg-custom-gray-1 py-4 px-4">
        <div className="text-red-500 p-4 bg-red-100 rounded-md">
          Error loading matches: {error?.message || "Something went wrong"}
        </div>
      </div>
    );
  }
  // Success state UI
  return (
    <div className="w-full flex flex-col gap-4 rounded-xl bg-custom-gray-1 py-4 px-4">
      <div className="grid md:flex md:items-center gap-4">
        <div className="flex items-center gap-1 p-2 rounded-md bg-custom-gray-2">
          <div className="w-2 aspect-square bg-custom-green rounded-full" />
          <p className="font-bold">Live</p>
          <p>{`(${liveMatchesCount})`}</p>
        </div>
        <div className="relative flex-grow flex items-center">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-8 bg-custom-gray-2 border-none"
          />
        </div>
        <div className="flex items-center justify-between p-2 rounded-md gap-4 bg-custom-gray-2">
          <p className="text-xs">All Matches</p>
          <ChevronDown />
        </div>
      </div>
      <DateSelectionHeader
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
      <MatchTable MatchData={rawMatchData || []} />
    </div>
  );
};

export default MatchTableDateSelectionHeader;
