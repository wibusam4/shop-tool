import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";

interface MainProps {
  handle: Function;
}
const Video: React.FC<MainProps> = ({ handle }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-900 bg-opacity-70">
      <div className="relative w-full mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-hidden min-w-fit">
          <div className="flex items-start justify-between p-3 border-b border-solid border-gray-300 rounded-t ">
            <h1>Demo Tool</h1>
            <button className="bg-transparent border-0 text-black float-right" onClick={() => handle()}>
              <XCircleIcon className="w-6 h-6 text-error border border-neutral-800 rounded-full" />
            </button>
          </div>

          <div className="overflow-hidden relative pb-[56%]">
            <iframe
              width="560"
              height="315"
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
