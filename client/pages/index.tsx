import ToolService from "@/src/services/Tool.service";
import LayoutMain from "@/src/components/layouts/LayoutMain";
import { useEffect, useState } from "react";
import InforHome from "@/src/components/modals/InforHome";
import CardTool from "@/src/components/cards/CardTool";

interface MainProps {
  data: [];
}

const Home: React.FC<MainProps> = ({ data }) => {
  const [modalShown, toggleModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      toggleModal(true);
    }, 200);
  }, []);
  return (
    <LayoutMain>
      <div className="bg-base-200 mx-auto rounded shadow-md w-full">
        <div className="max-w-[1280px] m-auto">
          <div className="tiltle p-4 md:p-10">
            <InforHome
              shown={modalShown}
              close={() => {
                toggleModal(false);
              }}
            />
            <h1 className="text-center text-2xl uppercase font-bold relative">Tool Server Teamobile</h1>
            <div className="w-36 h-1 bg-success m-auto"></div>
            <div className="card-item flex flex-wrap mt-2 max-w-[1280px]">
              {data.length > 0 &&
                data.map((tool: Tool) => {
                  return <CardTool tool={tool} />;
                })}
            </div>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const data = await ToolService.getAllTool();
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
