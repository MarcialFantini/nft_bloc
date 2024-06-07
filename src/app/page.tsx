import { DiscoverSection } from "@/components/Discover";
import { HeaderHome } from "@/components/Header";
import { HotAuction } from "@/components/HotAuction";
import { HotCollections } from "@/components/HotCollections";

export default function Home() {
  return (
    <main className=" flex flex-col gap-4 py-4 w-full m-auto max-w-[1200px]">
      <HeaderHome></HeaderHome>
      <HotCollections></HotCollections>
      <HotAuction></HotAuction>
      <DiscoverSection></DiscoverSection>
    </main>
  );
}
