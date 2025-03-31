import { trendingNewsType } from "@/types/trending-news-types";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import React from "react";

const TrendingNewsCard = ({ data }: { data: trendingNewsType }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <Image
        src={data?.image}
        alt="highlighted image"
        width="80"
        height="80"
        className=" w-20  object-contain aspect-square"
      />
      <div className="flex-grow">
        <p className="text-lg capitalize font-bold text-white">{data?.title}</p>
        <p className="text-sm text-custom-grey-3">{data?.time}</p>
      </div>
      <Bookmark
        size={24}
        className="text-custom-green min-w-[24px] aspect-square"
      />
    </div>
  );
};

export default TrendingNewsCard;
