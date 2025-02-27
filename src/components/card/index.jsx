export const Card = ({ children, type = 'card1' }) => {
    if (type === 'card1'){
        return <div className="bg-gradient-to-r from-gray-600 to-gray-200  hover:bg-[length:200%_100%] animate-degrade outline outline-gray-300  w-[90%] lg:h-[565px] rounded-4xl flex lg:justify-between lg:w-[65%]">{children}</div>
    }

    if (type === 'card2'){
        return <div className="bg-gradient-to-r from-c-800 to-c-500  hover:bg-[length:200%_100%] animate-degrade outline outline-gray-300 lg:h-[565px] w-[90%] rounded-4xl flex lg:justify-between lg:w-[65%]">{children}</div>
    }

    if (type === 'card3'){
        return <div className="bg-gradient-to-r from-v-800 to-v-300  hover:bg-[length:200%_100%] animate-degrade outline outline-gray-300 lg:h-[565px] w-[90%] rounded-4xl flex lg:justify-between lg:w-[65%]">{children}</div>
    }

    if (type === 'card4'){
        return <div className="bg-gray-700 outline outline-dashed outline-gray-300 lg:h-[565px] rounded-4xl w-[90%] lg:w-[65%] flex flex-col justify-center items-center pt-24 pb-32 hover:bg-gray-600">{children}</div>
    }

    if (type === 'card5'){
        return <div className="bg-gray-600 outline outline-gray-300 lg:h-[700px] rounded-xl lg:w-[65%] w-[90%] pt-5 pb-5 pl-10 pr-10">{children}</div>
    }
}