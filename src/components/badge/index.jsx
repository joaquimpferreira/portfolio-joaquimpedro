export const Badge = ({ children }) => {
    return <div className=" w-[266px] hover:w-[270px] flex flex-col justify-center items-center relative" >{children}</div>

}

export const BadgeSecond = ({ children }) => {
    return <div className=" h-[38px] flex justify-center items-center bg-gray-400 rounded-lg lg:mr-5 p-2 pr-[10px]" >{children}</div>

}

export const BadgeThird = ({ children }) => {
    return <div className="flex justify-center items-center bg-none rounded-3xl outline outline-badge pt-1.5 pr-3 pl-3 pb-1.5 text-text-700 text-[14px] leading-4 font-normal w-fit" >{children}</div>

}