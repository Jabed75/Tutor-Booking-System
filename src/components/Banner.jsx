import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    // এখানে h-150 পরিবর্তন করে h-120 করা হয়েছে, যা ইমেজটিকে ছোট ও পারফেক্ট করবে
    <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat text-white flex justify-between flex-col items-center gap-5 h-120">
      <div className="p-10 text-center flex justify-center flex-col items-center gap-3.5 flex-1">
        <h1 className="text-7xl text-black">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
            Explore Now
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
        
         <Separator variant="tertiary" orientation="vertical" />


           <Separator variant="tertiary" orientation="vertical" />

           <Separator variant="tertiary" orientation="vertical" />

      </div>
    </div>
  );
};

export default Banner;