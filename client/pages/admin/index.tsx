import CardChart from "@/src/components/cards/CardChart";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import ToolService from "@/src/services/Tool.service";
import UserService from "@/src/services/User.service";

interface MainProps {
  data: [][];
}
const index = ({ data }: MainProps) => {
  return (
    <LayoutAdmin>
      <div className="flex flex-wrap">
        <CardChart color="bg-info">
          <p>Người dùng</p>
          <p className="flex items-center">{data[0].length}</p>
        </CardChart>
        <CardChart color="bg-success">
          <p>Số tool</p>
          <p>{data[1].length}</p>
        </CardChart>
        <CardChart color="bg-warning">
          <p>Đã bán</p>
        </CardChart>
        <CardChart color="bg-error">
          <p>Bài viết</p>
        </CardChart>
      </div>
    </LayoutAdmin>
  );
};

export default index;

export const getServerSideProps = async ({ req }: any) => {
  const data = await Promise.all([UserService.getAllUser(req.cookies.token), ToolService.getAllTool()]);
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
