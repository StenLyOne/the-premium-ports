import BenefitsItem from "../ui/BenefitsItem";

const data = [
  {
    img: "/svg/quality.svg",
    title: "Quality",
    description:
      "We're regularly monitoring speed, blacklists, and renewing our pool with fresh IPs every day. Our clients are professional users. We do not sell to retail clients that can harm the pool.",
  },
  {
    img: "/svg/unlimited.svg",
    title: "Unlimited concerent (sticky) session ",
    description:
      "Our servers can handle thousands of connections in the same time. You are able to initiate and control any number of sessions and IP addresses",
  },
  {
    img: "/svg/location.svg",
    title: "Location targeting",
    description:
      "You can use a wide number of parameters for targeting by :Country City State or region ASN (ISP number)",
  },
  {
    img: "/svg/mobile.svg",
    title: "Mobile",
    description: "5G/4G/3G/LTE Mobile Proxies",
  },
  {
    img: "/svg/ips.svg",
    title: "ISP",
    description: "Landline Home routers IPs",
  },
  {
    img: "/svg/protocols.svg",
    title: "Protocols",
    description:
      "Our backend supports different protocols : HTTP HTTPS SOCKS5 DNS forwarding",
  },
  {
    img: "/svg/Whitelisting.svg",
    title: "Whitelisting",
    description:
      "You are able to control data usage by whitelisting your own server IPs.",
  },
  {
    img: "/svg/detailed.svg",
    title: "Detailed stats",
    description:
      "You can monitor any traffic activity using our admin panel. Our stats can filter your usage by date, time, URL, traffic source, etc.",
  },
  {
    img: "/svg/monthly.svg",
    title: "Monthly commitment",
    description:
      "We keep our prices low with monthly commitment and  pre-ordered traffic. All packages expire 30 days after purchase.",
  },
  {
    img: "/svg/personal.svg",
    title: "Personal service",
    description:
      "We offer our clients free personal support. We develop and offer solutions that suit their needs for each case.",
  },
  {
    img: "/svg/closest.svg",
    title: "Closest location",
    description:
      "Our company provides the closest servers to clients' locations, which helps to reduce latency timings. Also dedicated servers on request.",
  },
  {
    img: "/svg/proxylist.svg",
    title: "Proxylist generation tool",
    description:
      "Our company provides the closest servers to clients' locations, which helps to reduce latency timings. Also dedicated servers on request.",
  },
];

export default function Benefits() {
  return (
    <section className="pb-[40px] md:px-[40px] md:pb-[140px]">
      <div className="max-w-[1328px] mx-auto">
        {/* ✅ Десктоп: 3x4 сетка */}
        <div className="hidden md:grid grid-cols-3 gap-[24px] relative">
          {data.slice(0, 12).map((ele, index) => (
            <div key={index}>
              <BenefitsItem
                title={ele.title}
                img={ele.img}
                description={ele.description}
              />
            </div>
          ))}
        </div>

        {/* ✅ Мобилка и планшет: 2 строки с overflow-hidden */}
        <div className="md:hidden flex flex-col ">
          <div className="">
            <div className="flex overflow-x-auto hide-scrollbar-x  ">
              {data.slice(0, 6).map((ele, index) => (
                <div
                  key={`row1-${index}`}
                  className="min-w-[280px] flex-shrink-0 ml-[16px] mt-[40px] mb-[16px] "
                >
                  <BenefitsItem {...ele} />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="flex overflow-x-auto hide-scrollbar-x ">
              {data.slice(6, 12).map((ele, index) => (
                <div
                  key={`row2-${index}`}
                  className="min-w-[280px] flex-shrink-0 ml-[16px] mb-[40px]"
                >
                  <BenefitsItem {...ele} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
