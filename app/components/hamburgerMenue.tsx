import { Dispatch, SetStateAction } from 'react'

type Props = {
    isMenue: boolean
    setIsMenue: Dispatch<SetStateAction<boolean>>
}
export default function HamburgerMenue({ isMenue, setIsMenue }: Props) {
    const handlMenue = () => {
        setIsMenue(!isMenue)
    }
    return (
        <div className="absolute top-4 right-8  w-fit ">
            <div className="relative w-fit group ">
                <button
                    onClick={handlMenue}
                    className="w-14 cursor-pointer  h-14 rounded-full border  border-zinc-500"
                >
                    {isMenue ? (
                        <Exit color={'bg-white'} />
                    ) : (
                        <Bars color={'bg-white'} />
                    )}
                </button>
                <button
                    onClick={handlMenue}
                    className={`w-14 cursor-pointer absolute inset-0 h-14 rounded-full border  bg-white [clip-path:inset(100%_0_0_0)] ${!isMenue ? 'group-hover:[clip-path:inset(0_0_0_0)] group-hover:transition-[clip-path] duration-400 ease-in' : null}`}
                >
                    <Bars color={'bg-black'} />
                </button>
            </div>
        </div>
    )
}
export function Bars({ color }: any) {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <span
                className={`h-px  rounded-full inline-block w-1/2 ${color}`}
            ></span>
            <span
                className={`h-px rounded-full inline-block  ${color} ${color == 'bg-black' ? 'w-1/2' : 'w-1/3'} transition duration-1000`}
            ></span>
        </div>
    )
}
export function Exit({ color }: any) {
    return (
        <div className="flex flex-col   items-center  justify-center">
            <span
                className={`h-0.5  rounded-full inline-block rotate-45  group-hover:rotate-45 w-1/2 ${color}`}
            ></span>
            <span
                className={`h-0.5 rounded-full inline-block -rotate-45  ${color} ${color == 'bg-black' ? 'w-1/2' : 'w-1/2'} transition duration-1000`}
            ></span>
        </div>
    )
}
