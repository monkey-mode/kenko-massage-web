import ImageCarousel from "@/components/imageCarousel";

const images = [
  "/bodycare-menu/body-scrub.jpg",
  "/bodycare-menu/milk-bath.jpg",
  "/bodycare-menu/treatment-oil.jpg"
];
export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen font-sansthai text-black">
      <main className="flex flex-col items-center p-24 flex-grow bg-white">
        <text className="text-2xl font-bold">About Us</text>
        <text className="font-bold">
          ความสุขคือเป้าหมายสำหรับทุกคน
          การมีชีวิตที่ยอดเยี่ยมนั้นมาจากร่างกายที่แข็งแรงประกอบกับจิตใจที่แข็งแรง
          พรีมสปามุ่งสู่แนวคิดนี้และเชื่ออย่างแท้จริงว่าร่างกายและจิตใจเป็นหนึ่งเดียวและเป็นรากฐานสำคัญของการมีสุขภาพที่ดี
          และนั่นคือสิ่งที่ทรีตเมนต์ของเราให้ความสำคัญ
          เราหวังว่าทรีตเมนต์และบริการพิเศษที่หลากหลายของเราโดยนักบำบัด
          ที่มีคุณสมบัติเหมาะสมจะทำให้คุณได้รับประสบการณ์ที่ผ่อนคลายและมีความสุขที่สุดเพราะความพอใจของคุณคือแรงบันดาล
          ใจของเรา
        </text>
        <ImageCarousel images={images} />
      </main>
    </div>
  );
}
