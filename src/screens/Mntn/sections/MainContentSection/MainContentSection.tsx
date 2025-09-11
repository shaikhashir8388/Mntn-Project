import { ChevronDownIcon } from "lucide-react";

const articles = [
  {
    number: "01",
    category: "GET STARTED",
    title: "What level of hiker are you?",
    description:
      "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?",
    image: "/01.png",
    imagePosition: "right",
  },
  {
    number: "02",
    category: "HIKING ESSENTIALS",
    title: "Picking the right Hiking Gear!",
    description:
      "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have.\nLet's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
    image: "/01-1.png",
    imagePosition: "left",
  },
  {
    number: "03",
    category: "WHERE YOU GO IS THE KEY",
    title: "Understand Your Map & Timing",
    description:
      "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..",
    image: "/01-2.png",
    imagePosition: "right",
  },
];

const blogLinks = [
  "About MNTN",
  "Contributors & Writers",
  "Write For Us",
  "Contact Us",
  "Privacy Policy",
];

const mntnLinks = ["The Team", "Jobs", "Press"];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-[200px] w-full overflow-hidden">
      {articles.map((article, index) => (
        <article
          key={index}
          className="relative w-full max-w-[1462px] min-h-[720px] lg:h-[720px] px-4 lg:px-0"
        >
          {article.imagePosition === "right" ? (
            <>
              <div className="relative lg:absolute w-full lg:w-[782px] min-h-[543px] lg:h-[543px] py-8 lg:py-0 lg:top-[37px] lg:left-0">
                <div className="hidden lg:block top-0 left-0 opacity-10 text-white text-[120px] md:text-[180px] lg:text-[240px] leading-[1] lg:leading-[240px] whitespace-nowrap absolute font-sans font-medium tracking-[0]">
                  {article.number}
                </div>

                <div className="flex flex-col items-start gap-[27px] relative lg:absolute lg:top-[104px] lg:left-[150px]">
                  <div className="relative h-[22px]">
                    <div className="absolute top-0 left-24 [font-family:'Gilroy-ExtraBold',Helvetica] font-extrabold text-app-accent text-lg tracking-[6.00px] leading-[normal]">
                      {article.category}
                    </div>
                    <div className="absolute w-[72px] h-0.5 top-2.5 left-0 bg-app-accent" />
                  </div>

                  <h2 className="relative w-[555px] [font-family:'Chronicle_Display-Semibold',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
                    {article.title}
                  </h2>

                  <p className="relative w-[632px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-8 whitespace-pre-line">
                    {article.description}
                  </p>

                  <div className="relative w-[129px] h-[22px] cursor-pointer">
                    <span className="top-0 left-0 text-app-accent text-lg leading-[normal] absolute [font-family:'Gilroy-Bold',Helvetica] font-bold tracking-[0]">
                      read more
                    </span>
                    <div className="absolute w-4 h-6 -top-px left-[107px] -rotate-90">
                      <ChevronDownIcon className="absolute w-6 h-4 top-1 -left-1 rotate-90 text-app-accent" />
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="left-[896px] object-cover absolute w-[566px] h-[720px] top-0"
                alt="Element"
                src={article.image}
              />
            </>
          ) : (
            <>
              <img
                className="left-0 absolute w-[566px] h-[720px] top-0"
                alt="Element"
                src={article.image}
              />

              <div className="absolute w-[782px] h-[543px] top-[37px] left-[680px]">
                <div className="top-0 left-0 opacity-10 text-white text-[240px] leading-[240px] whitespace-nowrap absolute [font-family:'Gilroy-Bold',Helvetica] font-bold tracking-[0]">
                  {article.number}
                </div>

                <div className="inline-flex flex-col items-start gap-[27px] absolute top-[104px] left-[150px]">
                  <div className="relative h-[22px]">
                    <div className="absolute top-0 left-24 [font-family:'Gilroy-ExtraBold',Helvetica] font-extrabold text-app-accent text-lg tracking-[6.00px] leading-[normal]">
                      {article.category}
                    </div>
                    <div className="absolute w-[72px] h-0.5 top-2.5 left-0 bg-app-accent" />
                  </div>

                  <h2 className="relative w-[555px] [font-family:'Chronicle_Display-Semibold',Helvetica] font-normal text-white text-[64px] tracking-[0] leading-[normal]">
                    {article.title}
                  </h2>

                  <p className="relative w-[632px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-8 whitespace-pre-line">
                    {article.description}
                  </p>

                  <div className="relative w-[129px] h-[22px] cursor-pointer">
                    <span className="top-0 left-0 text-app-accent text-lg leading-[normal] absolute [font-family:'Gilroy-Bold',Helvetica] font-bold tracking-[0]">
                      read more
                    </span>
                    <div className="absolute w-4 h-6 -top-px left-[107px] -rotate-90">
                      <ChevronDownIcon className="absolute w-6 h-4 top-1 -left-1 rotate-90 text-app-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </article>
      ))}

      <footer className="relative w-full max-w-[1466px] h-[280px] bg-transparent">
        <div className="absolute w-[116px] h-[38px] top-0 left-0">
          <div className="absolute top-0 left-0 font-sans font-medium text-wei text-[32px] tracking-[0.32px] leading-[normal] whitespace-nowrap">
            M
          </div>
          <div className="left-8 absolute top-0 font-sans font-medium text-wei text-[32px] tracking-[0.32px] leading-[normal] whitespace-nowrap">
            N
          </div>
          <div className="absolute top-0 left-[58px] font-sans font-medium text-wei text-[32px] tracking-[0.32px] leading-[normal] whitespace-nowrap">
            T
          </div>
          <div className="left-[82px] absolute top-0 font-sans font-medium text-wei text-[32px] tracking-[0.32px] leading-[normal] whitespace-nowrap">
            N
          </div>
        </div>

        <div className="absolute w-[303px] top-[62px] left-0 font-sans font-medium text-white text-base tracking-[0] leading-8">
          Get out there & discover your next slope, mountain & destination!
        </div>

        <nav className="w-[205px] h-[280px] left-[896px] absolute top-0">
          <div className="absolute top-0 left-0 font-sans font-medium text-app-accent text-base tracking-[0] leading-8 whitespace-nowrap">
            More on The Blog
          </div>
          {blogLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`absolute left-0 font-sans font-medium text-white text-base tracking-[0] leading-8 whitespace-nowrap hover:text-app-accent transition-colors ${
                index === 0
                  ? "top-14"
                  : index === 1
                    ? "top-[104px]"
                    : index === 2
                      ? "top-[152px]"
                      : index === 3
                        ? "top-[200px]"
                        : "top-[248px]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <nav className="w-[169px] h-[184px] left-[1301px] absolute top-0">
          <div className="absolute top-0 left-0 font-sans font-medium text-app-accent text-base tracking-[0] leading-8 whitespace-nowrap">
            More on MNTN
          </div>
          {mntnLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className={`absolute left-0 font-sans font-medium text-white text-base tracking-[0] leading-8 whitespace-nowrap hover:text-app-accent transition-colors ${
                index === 0
                  ? "top-14"
                  : index === 1
                    ? "top-[104px]"
                    : "top-[152px]"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="absolute top-[248px] left-1.5 opacity-50 font-sans font-medium text-white text-base tracking-[0] leading-8 whitespace-nowrap">
          Copyright 2023 MNTN, Inc. Terms & Privacy
        </div>
      </footer>
    </section>
  );
};
