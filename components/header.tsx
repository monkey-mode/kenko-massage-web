type Props = {
  hello?: string;
};
export default function Header({ hello }: Props) {
  return (
    <header className="flex justify-between items-center p-4  bg-primary  h-20">
      <div className="flex items-center ml-40">
        {/* <img src="/logo.png" alt="Logo" className="mr-4" /> */}
        <span className=" text-3xl font-bold">Your Logo</span>
      </div>
      <nav className="flex items-center text-xl">
        <a href="#" className="mr-4">
          หน้าแรก
        </a>
        <a href="#" className="mr-4">
          โปรโมชั่น
        </a>
        <a href="#" className="mr-4">
          บริการ
        </a>
        <a href="#" className="mr-4">
          ติดต่อเรา
        </a>
        <a href="#" className=" mr-40">
          เปลี่ยนภาษา
        </a>
      </nav>
    </header>
  );
}
