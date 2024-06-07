import { DiscoverItem } from "../DiscoverItem";

const arr = Array(16).fill("");
export const DiscoverSection = () => {
  return (
    <section>
      <h2 className=" text-2xl font-bold">Discover</h2>
      <p className="">151,146 items listed</p>

      <div className=" grid grid-cols-4 gap-4">
        {arr.map(() => {
          return <DiscoverItem></DiscoverItem>;
        })}
      </div>
    </section>
  );
};
