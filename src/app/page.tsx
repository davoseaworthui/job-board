import JobList from "@/app/components/JobList";

export default function Home() {
  return (
    <div className="w-full bg-neutral-lightGrayishCyanBg ">
      <div
        className="w-full h-40 mb-8 bg-neutral-lightGrayishCyanBg "
        style={{
          backgroundImage: "url('/images/bg-blue-banner.jpg')",
          backgroundSize: "auto",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}></div>
      <JobList />
    </div>
  );
}
