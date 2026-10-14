import Die from "./Die";

export default function Main() {
  return (
    <main className="bg-blue-950 justify-center items-center min-h-screen p-5 flex flex-col">
      <div className="bg-white rounded-md w-full max-w-100 flex-1 max-h-100 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-5">
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
          <Die value={1} />
        </div>
      </div>
    </main>
  );
}
