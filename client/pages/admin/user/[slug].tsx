import Input from "@/src/components/Input/Input";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import UserService from "@/src/services/User.service";

interface MainProps {
  user: User;
}
const Page: React.FC<MainProps> = ({ user }) => {
  return (
    <LayoutAdmin>
      <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
        <div className={`text-xl font-semibold`}>
          Quản lí: <span className="text-error">{user.email}</span>
        </div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full p-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Role:</span>
              </label>
              <select className="select select-bordered" defaultValue={user.role}>
                <option>USER</option>
                <option>ADMIN</option>
              </select>
            </div>
            <div className="form-control w-full max-w-xs mt-2" defaultValue={user.status}>
              <label className="label">
                <span className="label-text">Status:</span>
              </label>
              <select className="select select-bordered">
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </select>
            </div>
            <Input style="max-w-[320px]" label="Vip" type="number" name="vip" data={user.vip} />
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Page;

export const getServerSideProps = async ({ req, params }: any) => {
  const user = await UserService.getById(req.cookies.token, params.slug);
  return { props: { user: JSON.parse(JSON.stringify(user)) } };
};
