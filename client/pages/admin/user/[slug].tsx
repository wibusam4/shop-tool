import Input from "@/src/components/Input/Input";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import UserService from "@/src/services/User.service";
import { useState } from "react";

interface MainProps {
  user: User;
}
const Page: React.FC<MainProps> = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const editPro5 = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    ("use server");
    await UserService.editById({ ...data, id: user.id });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const editMoney = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    ("use server");
    await UserService.editMoney({ ...data, userId: user.id });
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  return (
    <LayoutAdmin>
      <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
        <div className={`text-xl font-semibold`}>
          Quản lí: <span className="text-error">{user.email}</span>
        </div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="flex w-full gap-10 flex-wrap">
            <form className="w-[320px] p-2 border border-neutral-700 rounded" onSubmit={editPro5}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Role:</span>
                </label>
                <select name="role" className="select select-bordered" defaultValue={user.role}>
                  <option>USER</option>
                  <option>ADMIN</option>
                </select>
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <label className="label">
                  <span className="label-text">Status:</span>
                </label>
                <select name="status" className="select select-bordered" defaultValue={user.status}>
                  <option>ACTIVE</option>
                  <option>INACTIVE</option>
                </select>
              </div>
              <Input style="max-w-[320px]" label="Vip" type="number" name="vip" data={user.vip} />
              <div className="form-control mt-6">
                <button className={`btn btn-success ${isLoading ? "btn-disabled" : ""}`}>
                  <span className={`${isLoading ? "loading loading-spinner" : ""}`}></span>
                  {`${isLoading ? "" : "Sửa"}`}
                </button>
              </div>
            </form>
            <form className="w-[320px] p-2 border border-neutral-700 rounded" onSubmit={editMoney}>
              <Input label="Change Money" type="number" name="money" data={0} />
              <div className="form-control mt-6">
                <button className={`btn btn-success ${isLoading ? "btn-disabled" : ""}`}>
                  <span className={`${isLoading ? "loading loading-spinner" : ""}`}></span>
                  {`${isLoading ? "" : "Sửa"}`}
                </button>
              </div>
            </form>
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
