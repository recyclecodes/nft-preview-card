import Image from "next/image";

const Preview = () => {
  return (
    <div className="min-h-full rounded-2xl bg-dark-turquoise shadow-nft max-h-full mx-auto p-[22px] w-[313px]">
      <div className="group relative rounded-[11px] w-[270px] h-[275px]">
        <Image
          priority={true}
          className="rounded-[11px] object-cover"
          src="/images/image-equilibrium.jpg"
          fill={true}
          alt="equilibrium"
        />
        <div className="rounded-[11px] absolute w-full h-full flex justify-center items-center bg-bright-cyan/40 opacity-0 group-hover:h-full hover:opacity-100 ease-in-out duration-300 cursor-pointer">
          <Image
            src="/images/icon-view.svg"
            width={45}
            height={45}
            alt="view"
          />
        </div>
      </div>

      <h1 className="font-semibold text-xl pt-6 hover:text-bright-cyan cursor-pointer">
        Equilibrium #3429
      </h1>
      <p className="text-pale-blue font-light pt-[10px] pb-5">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex justify-between font-medium">
        <div className="flex items-center">
          <Image
            src="/images/icon-ethereum.svg"
            width={11}
            height={18}
            alt="ethereum"
          />
          <p className="pl-2.5 text-bright-cyan">0.041 ETH</p>
        </div>
        <div className="flex items-center">
          <Image
            src="/images/icon-clock.svg"
            width={18}
            height={18}
            alt="clock"
          />
          <p className="pl-[10px] text-pale-blue">3 days left</p>
        </div>
      </div>
      <div className="border-b border- border-dark-blue w-full py-2.5"></div>
      <div className="flex flex-row items-center py-3">
        <Image
          className="border rounded-full border-nft-white"
          src="/images/image-avatar.png"
          width={30}
          height={30}
          alt="Avatar"
        />
        <p className="font-light text-pale-blue pl-2.5">Creation of</p>
        <p className="text-nft-white font-light pl-1 hover:text-bright-cyan cursor-pointer">
          Jules Wyvern
        </p>
      </div>
    </div>
  );
};

export default Preview;
