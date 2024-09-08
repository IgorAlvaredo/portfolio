'use client'

export default function Title(props:any) {
  return (
    <div className="flex w-full justify-center items-center font-bold text-2xl py-4 bg-black">
        <h1>{props.title}</h1>
    </div>
  );
}
