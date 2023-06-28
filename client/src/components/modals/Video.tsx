import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";

interface MainProps {
  handle: Function;
  tool: Tool;
}
const Video: React.FC<MainProps> = ({ handle, tool }) => {
  return (
    <div className="flex justify-center items-center px-2 fixed inset-0 z-50  bg-neutral-900 bg-opacity-70">
      <div className="relative w-full mx-auto max-w-3xl">
        <div className=" rounded-lg relative flex flex-col w-full bg-base-100 overflow-hidden min-w-fit">
          <div className="flex justify-between p-3 border-b border-solid">
            <h1>Demo {tool.nameTool}</h1>
            <button className="border border-neutral-800 rounded-full" onClick={() => handle()}>
              <XCircleIcon className="w-6 h-6 text-error " />
            </button>
          </div>

          <div className="overflow-hidden relative pb-[56%]">
            <iframe
              src={`https://www.youtube.com/embed/YgRrOHfWH7I`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="left-0 top-0 h-full w-full absolute"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
