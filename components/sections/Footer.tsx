export default function Footer() {
  return (
    <footer className=" px-[16px] md:px-[40px] bg-white pt-[45px] md:pt-[80px]">
      <div className="max-w-[1328px] text-black mx-auto flex flex-col md:justify-between md:flex-row gap-[20px] pb-[40px] md:pb-[90px]">
        <a className="text-[24px] font-Futo leading-[32px] font-medium text-center">
          Product
        </a>
        <a className="text-[24px] font-Futo leading-[32px] font-medium text-center">
          Pricing
        </a>
        <a className="text-[24px] font-Futo leading-[32px] font-medium text-center">
          Locations
        </a>
        <a className="text-[24px] font-Futo leading-[32px] font-medium text-center">
          FAQ
        </a>
        <a className="text-[24px] font-Futo leading-[32px] font-medium text-center">
          Contacts
        </a>
      </div>
      <img
        className="mx-auto w-full max-w-[1328px]"
        src="/svg/logo-black.svg"
        alt=""
      />
    </footer>
  );
}
