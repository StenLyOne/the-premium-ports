import Image from "next/image";

interface Props {
  img: string;
  title: string;
  description: string | { text: string; list: string[] };
}

export default function BenefitsItem({ img, title, description }: Props) {
  const isList = typeof description === "object" && description !== null;

  return (
    <div className="shadow-subtle text-black max-w-[290px] min-w-[290px] md:min-w-auto md:max-w-[500px] h-full p-[20px] lg:py-[30px] lg:px-[24px] bg-white rounded-[20px] space-y-[24px] md:space-y-[44px]">
      <div className="bg-secondary rounded-full flex justify-center items-center w-[82px] h-[82px]">
        <Image src={img} alt={`Icon of ${title}`} width={52} height={52} />
      </div>
      <div className="space-y-[12px] md:space-y-[24px]">
        <h3 className="!font-bold">{title}</h3>

        {isList ? (
          <>
            <div>
              <p className="pb-[10px]">{description.text}</p>
              <ul className="list-disc list-inside space-y-[4px]">
                {description.list.map((item, index) => (
                  <li key={index} className="md:text-[20px]">{item}</li>
                ))}
              </ul>
              </div>
          </>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
}
