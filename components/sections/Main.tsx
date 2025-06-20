import RowItem from "../ui/RowItem";
import Button from "../ui/Button";

const benefits = [
  "195 COUNTRIES",
  "80M+ best reputation IPs",
  "UNLIMITED CONCURRENT STICKY SESSIONS ",
  "ALL TYPES OF PROTOCOLS",
  "LOWEST LATENCY AND 99.9% SUCCESS RATES",
  "MOBILE AND ISP/LANDLINE",
];

export default function Main() {
  return (
    <main
      id="product"
      className="relative px-[16px] md:px-[40px] pb-[30px] md:pb-[211px] text-white"
    >
      <div className="relative max-w-[1328px] flex mx-auto z-[1]">
        <div className="md:w-1/2 space-y-[48px] pt-[100px] min-[500px]:pt-[140px] md:pt-[125px]">
          <div className="space-y-[40px] md:space-y-[56px]">
            <div className="space-y-[20px] md:space-y-[24px]">
              <p className="!text-[18px] md:!text-[24px]">
                Our products are trusted by top professionals.
              </p>
              <div className="flex gap-[32px] justify-center md:justify-start">
                <img
                  src="/svg/trustpilot.svg"
                  alt=""
                  className="w-[20%] md:w-auto"
                />
                <img src="/svg/g2.png" alt="" className="w-[20%] md:w-auto" />
                <img
                  src="/svg/capterra.png"
                  alt=""
                  className="w-[25%] md:w-auto"
                />
              </div>
            </div>
            <div className="w-full md:max-w-[612px] space-y-[48px] md:space-y-[48px]">
              <div className="space-y-[20px] md:space-y-[24px]">
                <h1 className="text-center md:text-left">
                  Premium Residential Proxies
                </h1>
                <div className="space-y-[0px]">
                  <p className="!text-[18px] md:!text-[24px]">
                    The Premium Ports ® company offers the best price/quality
                    ratio on the market for middle and large RPA and security
                    projects. We provide the best premium quality and personal
                    support to each client, with options on demand for maximum
                    result.
                  </p>{" "}
                  <img
                    className="w-full  md:hidden"
                    src="/svg/OBJECTS-v2b.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="space-y-[18px] md:space-y-[24px]">
                {benefits.map((ele, index) => (
                  <RowItem key={index} text={ele} />
                ))}
              </div>
            </div>
          </div>
          <Button link="/#pricing" color={"gradient"} text={"BUY  NOW"} size={true} />
        </div>
        <img
          className="w-1/2 hidden md:block"
          src="/svg/OBJECTS-v2b.svg"
          alt=""
        />
      </div>
      <div>
        <div
          data-astro-cid-kvz7kqaw="true"
          className="!absolute top-0 left-0 right-0  h-[100%] md:h-[90%] z-[0]"
          style={{
            background:
              " linear-gradient( #00143B 30%, #263A8F 55%, #2F4ABF 60%, #4564E9 70%, #FFFFFF 100%)",
          }}
        >
          {" "}
        </div>
      </div>
    </main>
  );
}
