import { Bookmark, ChevronRight, Slice } from "lucide-react";
import TrendingNewsHighlightSection from "./TrendingNewsHighlightSection";
import { trendingNewsData } from "@/public/data/trending-news-data";
import TrendingNewsCard from "./TrendingNewsCard";

const TrendingNews = () => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl bg-custom-gray-1 py-4 px-4">
      <div className="flex justify-between items-center w-full">
        <p>Trending News</p>
        <ChevronRight />
      </div>
      <TrendingNewsHighlightSection data={trendingNewsData[0]} />
      {trendingNewsData?.slice(1)?.map((item, index) => (
        <TrendingNewsCard data={item} key={index} />
      ))}
    </div>
  );
};

export default TrendingNews;
