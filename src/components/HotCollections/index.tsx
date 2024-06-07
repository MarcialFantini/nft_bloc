import srcDefault from "../../../public/images/avatars/avatar.svg";
import { ItemCollection } from "../ItemCollection";

const arr = Array(12).fill("");

export const HotCollections = () => {
  return (
    <section>
      <header>
        <h2 className=" text-2xl font-bold my-4">Hot Collections</h2>
      </header>

      <div className="grid gap-4 grid-cols-4">
        {arr.map((item, index) => {
          return (
            <ItemCollection
              key={index}
              price={2}
              title="Impostors Genesis"
              srcImage={srcDefault}
              id={2}
            ></ItemCollection>
          );
        })}
      </div>
    </section>
  );
};
