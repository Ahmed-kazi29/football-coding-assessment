import { Bookmark } from "lucide-react";
import React from "react";
import { trendingNewsType } from "@/types/trending-news-types";
import Image from "next/image";

const TrendingNewsHighlightSection = ({ data }: { data: trendingNewsType }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <Image
        src={data?.image}
        alt="highlighted image"
        width="372"
        height="200"
        className=" w-full object-contain aspect-[1.64]"
      />
      <div className="flex gap-2 justify-between items-center">
        <div>
          <p className="text-lg capitalize font-bold text-white">
            {data?.title}
          </p>
          <p className="text-sm text-custom-grey-3">{data?.time}</p>
        </div>
        <Bookmark
          size={24}
          className="text-custom-green min-w-[24px] aspect-square"
        />
      </div>
    </div>
  );
};

export default TrendingNewsHighlightSection;
