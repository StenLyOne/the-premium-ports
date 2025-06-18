interface Props {
  title: string;
}

export default function IntegrationItem({ title }: Props) {
  return (
    <div className="shadow-subtle w-max bg-secondary flex flex-col items-center gap-[18px] p-[24px] rounded-[20px]">
      <img src={`/img/${title}.png`} alt={`Icon of ${title}`} />
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}
