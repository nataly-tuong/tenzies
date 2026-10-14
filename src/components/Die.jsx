export default function Die(props) {
  return (
    <button className="h-12.5 w-12.5 text-[1.75rem] shadow-[0px_2px_2px_rgba(0,0,0,0.15)] font-bold cursor-pointer rounded-sm bg-white">
      {props.value}
    </button>
  );
}
