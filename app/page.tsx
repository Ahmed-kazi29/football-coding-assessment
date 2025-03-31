import dynamic from "next/dynamic";
import MatchSectionSkeletonLoader from "@/components/loading/MatchSectionSkeletonLoader";
const MatchTableDateSelectionHeader = dynamic(
  () => import("@/components/match-table/MatchTableDateSelectionHeader"),
  {
    ssr: false,
    loading: () => <MatchSectionSkeletonLoader />,
  }
);
const TrendingNews = dynamic(
  () => import("@/components/trending-news/TrendingNews"),
  {
    loading: () => (
      <div className="w-full h-full rounded-xl bg-custom-gray-1 animate-pulse" />
    ),
  }
);
import Image from "next/image";

export default async function Home() {
  return (
    <div className="grid lg:grid-cols-6 w-full gap-4 overflow-x-hidden">
      <div className="lg:col-span-4 flex flex-col gap-4 rounded-xl relative">
        <Image
          src="/image/home-page/home-page-banner.png"
          alt="home page banner"
          width="730"
          height="277"
          className="w-full aspect-[2.63] object-contain"
        />
        <MatchTableDateSelectionHeader />
      </div>
      <TrendingNews />
    </div>
  );
}
