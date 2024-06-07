import { AuctionItem } from "../AuctionItem";

const arr = Array(4).fill("");
export const HotAuction = () => {
  return (
    <section>
      <h2 className=" text-2xl">Hot Auction</h2>
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}
        className="grid gap-4 "
      >
        {arr.map((item) => {
          return <AuctionItem></AuctionItem>;
        })}
      </div>
    </section>
  );
};
