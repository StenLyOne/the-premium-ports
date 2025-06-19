import BenefitsItem from "../ui/BenefitsItem";
import Button from "../ui/Button";

const data = [
  {
    img: "/svg/Scraping.svg",
    title: "Scraping",
    description:
      "Extracting data from websites using software or automated programs",
  },
  {
    img: "/svg/Posting.svg",
    title: "Posting",
    description:
      "Publish content on social media and other platforms sautomatically ",
  },
  {
    img: "/svg/Ranking.svg",
    title: "Ranking",
    description:
      "Simulation of real  user activity and ranking up your position in search engines, online shops, music charts and others",
  },
  {
    img: "/svg/Quick Orders.svg",
    title: "Quick Orders",
    description:
      "There are a lot of cases when humans are not able to do order. Using sneaker bots, ticket bots, and restaurant reservation bots",
  },
  {
    img: "/svg/Social network .svg",
    title: "Social network ",
    description:
      "Our proxies are a good solution to register and farm accounts on Facebook, Twitter, LinkedIn, and many others. ASN option can be used for same location targeting for account",
  },
  {
    img: "/svg/Social network .svg",
    title: "Social network ",
    description:
      "Our proxies are a good solution to register and farm accounts on Facebook, Twitter, LinkedIn, and many others. ASN option can be used for same location targeting for account",
  },
];

export default function Cases() {
  return (
    <section className=" py-[60px] md:py-[140px]  bg-secondary md:px-[40px]">
      <div className="max-w-[1328px] mx-auto space-y-[40px] md:space-y-[48px]">
        <div className=" max-w-[800px] mx-auto space-y-[20px] md:space-y-[24px] px-[16px] md:px-[0px]">
          <h2 className="text-center text-black ">Usage Cases</h2>
          <h3 className="text-center text-black !font-[400]">
            Our product if perfect for any activity that requires multiple ip
            addresses or different locations
          </h3>
        </div>
        <div>
          <div className="hidden md:grid grid-cols-3 gap-[24px] md:gap[24px] ">
            {data.slice(0, 12).map((ele, index) => (
              <BenefitsItem
                key={index}
                title={ele.title}
                img={ele.img}
                description={ele.description}
              />
            ))}
          </div>

          {/* ✅ Планшет и ниже: 2 строки с горизонтальным скроллом */}
          <div className="md:hidden flex flex-col gap-y-[16px]">
            {/* 🔹 Первая строка */}
            <div className="flex overflow-x-auto hide-scrollbar-x gap-x-[16px] px-[16px]">
              {data.slice(0, 6).map((ele, index) => (
                <div
                  key={`row1-${index}`}
                  className="min-w-[280px] flex-shrink-0"
                >
                  <BenefitsItem
                    title={ele.title}
                    img={ele.img}
                    description={ele.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            link="/"
            color="gradient"
            text="TALK WITH SPECIALIST"
            size={true}
          />
        </div>
      </div>
    </section>
  );
}
