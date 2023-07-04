import LayoutMain from "@/src/components/layouts/LayoutMain";

const Home = () => {
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full">
        <div className="max-w-[1280px] m-auto">
          <div className="tiltle p-4 md:p-10"></div>
          <div className="content"></div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Home;
