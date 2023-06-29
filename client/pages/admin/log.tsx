import CardHeader from "@/src/components/cards/CardHeader";
import LayoutAdmin from "@/src/components/layouts/LayoutAdmin";
import format from "@/src/libs/format";
import LogService from "@/src/services/Log.service";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";

import React from "react";

interface MainProps {
  data: Log[];
}
const Page: React.FC<MainProps> = ({ data }) => {
  return (
    <LayoutAdmin>
      <CardHeader>
        <div className="join">
          <div>
            <div>
              <input className="input input-sm input-bordered join-item" placeholder="Log ID..." />
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
        <div className={`text-xl font-semibold`}>Logs</div>
        <div className="divider mt-2"></div>
        <div className="h-full w-full pb-6 bg-base-100">
          <div className="overflow-x-auto w-full">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>UserID</th>
                  <th>Nội Dung</th>
                  <th>Thời Gian</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((log: Log) => {
                    return (
                      <tr key={log.id}>
                        <td>{log.id}</td>
                        <td>{log.userId}</td>
                        <td className="min-w-[150px]">{log.content}</td>
                        <td className="min-w-[150px]">{format.dateTime(log.createdAt)}</td>
                        <td className="flex">
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
  const data = await LogService.getAllLog(req.cookies.token);
  const vcl = {};
  return { props: { data: JSON.parse(JSON.stringify(data)) } };
};
