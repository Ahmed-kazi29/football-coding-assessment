import { LeagueMatchData } from "@/types/match-type";
import Image from "next/image";
import React from "react";

const MatchTable = ({ MatchData }: { MatchData: LeagueMatchData[] }) => {
  return (
    <>
      {MatchData?.length === 0 ? (
        <div className="w-full rounded-lg overflow-hidden">
          <p className="text-center text-sm font-bold">No matches found</p>
        </div>
      ) : (
        <>
          {MatchData?.map((match, index) => (
            <div
              className="w-full rounded-lg overflow-hidden"
              key={match?.leagueName + index}
            >
              <div className="p-2 flex gap-2 text-xs font-bold bg-black">
                <Image
                  src={match?.leagueLogo}
                  alt={match?.leagueName}
                  width={20}
                  height={20}
                  className="bg-white rounded-full w-5 h-5"
                />
                <p>{match?.leagueName}</p>
                <p className="text-[#808080]">{match?.stage}</p>
              </div>
              {match?.data?.map((value, index) => (
                <div
                  key={index}
                  className={`flex p-2  items-center justify-between gap-2 ${
                    index % 2 === 0 ? "bg-custom-grey-4" : "bg-custom-grey-5"
                  }`}
                >
                  <p
                    className={`${
                      value?.isLive && "text-custom-green"
                    } text-xs font-bold`}
                  >
                    {value?.isLive ? "Live" : value?.time}
                  </p>
                  <div className="flex-grow flex sm:flex-row flex-col gap-2 text-center text-sm font-bold">
                    <div className="flex items-center gap-2 sm:w-1/2 md:justify-end">
                      <Image
                        src={value?.logoA}
                        alt={value?.teamA}
                        width={20}
                        height={20}
                      />
                      <p>{value?.teamA}</p>
                      {value?.scoreA && <p>{value?.scoreA}</p>}
                      <p>-</p>
                    </div>
                    <div className="flex items-center gap-2 sm:w-1/2 justify-start">
                      {value?.scoreB && <p>{value?.scoreB}</p>}
                      <Image
                        src={value?.logoB}
                        alt={value?.teamB}
                        width={20}
                        height={20}
                      />
                      <p>{value?.teamB}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MatchTable;
