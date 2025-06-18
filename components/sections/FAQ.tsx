import FAQItem from "../ui/FAQItem";

const data = [
  {
    question: "Why is our website price 10% higher than our affiliates offer?",
    answer:
      "Our affiliates promote and advertise our products on their networks. We motivate them to sell our products, giving them the advantage of lower prices. Please use your affiliate link or promo code.",
  },
  {
    question: "When are proxies expiring?",
    answer:
      "We keep our prices low with monthly commitment and pre-ordered traffic. Your traffic will expire on the same date, the same day of next month (including the current date). Please plan your usage in advance!",
  },
  {
    question: "Can I get a discount for commercial use?",
    answer: "Yes, starting from 10 TB per month. Please contact support.",
  },
  {
    question: "How do you calculate traffic usage?",
    answer:
      "Every byte incoming and outcoming is counted. After package limit is reached, traffic will be blocked. You are always able to buy an additional package.",
  },
  {
    question: "How frequently is the proxy network refreshed?",
    answer:
      "We refresh our IPs every 24 hours. Every day, we replace 50% of IPs to avoid blocks and blacklists.",
  },
  {
    question: "What are supported protocols?",
    answer:
      "HTTP, HTTPS, and SOCKS5 with DNS forwarding. UDP is not supported.",
  },
  {
    question: "What's average uptime?",
    answer:
      "We are regularly testing our servers and proxy network. We can guarantee 99.99% uptime!",
  },
  {
    question: "Do you allow SMTP access?",
    answer:
      "SMTP ports are blocked and not allowed on our pool. Any kind of mail spam is forbidden!",
  },
  {
    question: "What types of payments do you accept?",
    answer:
      "For retail users, we accept crypto and classic bank cards. For commercial users, we accept bank wire transfer based on a signed contract.",
  },
];

export default function FAQ() {
  return (
    <section className="pb-[40px] px-[16px] md:px-[40px] py-[40px] md:py-[140px] bg-[#F3F5FF] overflow-hidden">
      <div className="max-w-[1328px] mx-auto flex flex-col justify-between md:flex-row gap-[40px]">
        <h2 className="text-black text-center">
          FAQ
        </h2>
        <div className="flex-1 max-w-[980px] flex flex-col gap-[24px]">
          {data.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
