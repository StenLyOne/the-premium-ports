type RowItemProps = {
  text: string;
};

export default function RowItem({ text }: RowItemProps) {
  return (
    <div className="flex items-center gap-[22px] ">
      <span className="w-[24px] min-w-[24px] md:w-[40px] md:min-w-[40px]">
        <img className="w-[24px] min-w-[24px] md:w-[40px] md:min-w-[40px]" src="/svg/arrow.svg" alt="" />
      </span>
      <h4 className=" !font-[500] !text-white">{text}</h4>
    </div>
  );
}
