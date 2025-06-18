import PricesItem from "../ui/PricesItem";

const data = [
  {
    icon: "/svg/test.svg",
    name: "Test",
    perHour: "2.0",
    included: "10",
    description: "When you need to test our pool first time  and check quality",
    monthly: "20",
    button: "blue",
  },
  {
    icon: "/svg/lite.svg",
    name: "Lite",
    perHour: "1.40",
    included: "250",
    description: "Very tiny  projects and initial development of automation",
    monthly: "350",
    button: "blue",
  },
  {
    icon: "/svg/starter.svg",
    name: "Starter",
    perHour: "1.20",
    included: "500",
    description: "Users with a limited number of accounts",
    monthly: "600",
    button: "blue",
  },
  {
    icon: "/svg/advanced.svg",
    name: "Advanced",
    perHour: "1.0",
    included: "1000",
    description: "Ideal for large teams and automation professionals",
    monthly: "1000",
    button: "accent",
  },
  {
    icon: "/svg/production.svg",
    name: "Production",
    perHour: "0.80",
    included: "3000",
    description:
      "Serious amount of traffic providing for own services Ideal for large teams and automation professionals (Dedicated Pool)",
    monthly: "2400",
    button: "accent",
  },
];

export default function Prices() {
  return (
    <section className="bg-secondary pt-[40px] md:pt-[140px]">
      <div className="space-y-[32px]">
        <div className="text-center text-black space-y-[20px] md:space-y-[36px]">
          <h2>Subscriptions and prices</h2>
          <h3>
            You can choose between 4 professional solutions for all your online
            needs
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-[24px] px-[16px] md:px-[40px]">
          {data.map((ele, index) => (
            <PricesItem
              key={index}
              icon={ele.icon}
              name={ele.name}
              perHour={ele.perHour}
              included={ele.included}
              description={ele.description}
              montly={ele.monthly}
              button={ele.button}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row gap-[24px] pt-[30px] pb-[30px] md:pb-[70px]">
        <p>Payment Methods:</p>
        <div className="flex gap-[24px]" >
          <img src="/svg/payment.svg" alt="" />
          <img src="/svg/mastercard.svg" alt="" />
          <img src="/svg/bitcoin.svg" alt="" />
          <img src="/svg/trc.svg" alt="" />
          <img src="/svg/visa.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
