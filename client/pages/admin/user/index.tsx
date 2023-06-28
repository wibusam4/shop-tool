import CardHeader from "@/src/components/cards/CardHeader";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import badge from "@/src/libs/badge";
import format from "@/src/libs/format";
import UserService from "@/src/services/User.service";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import PencilIcon from "@heroicons/react/24/solid/PencilIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import { getCookie } from "cookies-next";
import { NextApiRequest } from "next";
import Link from "next/link";
import React from "react";
interface MainProps {
  data: [];
}
const Page: React.FC<MainProps> = ({ data }) => {
  return (
    <LayoutAdmin>
      <CardHeader>
        <div className="join">
          <div>
            <div>
              <input className="input input-sm input-bordered join-item" placeholder="Email..." />
            </div>
          </div>
          <div className="indicator">
            <button className="btn btn-warning btn-sm join-item">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </CardHeader>
      <div className="card w-full p-6 bg-base-100 shadow-xl mt-6">
        <div className={`text-xl font-semibold`}>Danh sách tool</div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tên</th>
                  <th>Email</th>
                  <th>Số Tiền</th>
                  <th>Role</th>
                  <th>Vip</th>
                  <th>Trạng Thái</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((user: User) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{format.money(user.money)}</td>
                        <td>{badge.role(user.role)}</td>
                        <td className="text-secondary font-semibold">{user.vip}</td>
                        <td>{badge.status(user.status)}</td>
                        <td className="flex">
                          <Link href={`/admin/user/${user.id}`} className="btn btn-square btn-ghost text-info">
                            <PencilIcon className="w-5" />
                          </Link>
                          <button className="btn btn-square btn-ghost text-error">
                            <TrashIcon className="w-5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default Page;

export const getServerSideProps = async ({ req }: any) => {
  const data = await UserService.getAllUser(req.cookies.token);
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
