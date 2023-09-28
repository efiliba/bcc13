import Image from 'next/image';

export const ProcessStages = ({ stages }) =>
  <div className="px-3 pt-14 pb-20 sm:py-24 bg-white">
    <div className="max-w-screen-xl mx-auto text-center grid sm:grid-cols-2 md:grid-cols-6 gap-8">
      <h1 className="font-bold text-2xl md:text-4xl col-span-full mb-4 md:mb-16">How to start your home care services</h1>
      {stages.map(({ stage, icon, heading }) =>
        <div
          key={stage}
          className="relative p-4 rounded-md shadow md:col-span-2 grid grid-cols-[30px_1fr] md:grid-cols-[53px_1fr] gap-x-4 items-center text-left sm:[&:nth-last-child(2)]:col-start-2"
        >
          <div className="absolute top-[-10px] left-[-10px] bg-primary rounded-full w-7 leading-7 text-white text-center">{stage}</div>
          <Image className="h-[41px]" width={53} height={41} src={`/icons/${icon}.svg`} alt="icon" />
          <h4 className="text-base">{heading}</h4>
        </div>
      )}
    </div>
  </div>;
