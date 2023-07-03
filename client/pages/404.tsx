import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-wrap md:flex-nowrap md:justify-center md:items-center h-screen bg-base-300">
      <img src="/404.png" alt="" className="object-scale-down max-h-[50%] drop-shadow-md rounded-3xl" />
      <div className="flex flex-col md:justify-center md:h-auto items-center sm:px-12 p-8">
        <h1 className="text-6xl sm:text-8xl font-bold w-full">404</h1>
        <p className="py-5 text-3xl sm:text-4xl font-semibold">Trang không tồn tại, mời thí chủ quay lại</p>
        <div className="w-full">
          <Link className="btn btn-ghost btn-outline" href={"/"}>
            Về Trang Chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
