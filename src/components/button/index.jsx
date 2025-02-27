export const Button = ({ children }) => {
    return <button className="flex items-center justify-center p-4 rounded-lg bg-gradient-to-b from-gray-500 to-gray-700 text-white gap-2 font-inter text-lg leading-5 hover:shadown-3x1 hover:inset-shadow-md cursor-pointer"> <img src="../../src/assets/seta-button1.svg"></img>{children}</button>
}

export const ButtonPerfil = ({ children }) => {
    return <button className="flex items-center justify-center p-4 rounded-lg bg-gradient-to-b from-gray-500 to-gray-700 text-white gap-2 font-inter text-lg leading-5 hover:shadown-3x1 hover:inset-shadow-md cursor-pointer ml-[25%] mt-[20%]"> <img src="../../src/assets/seta-button1.svg"></img>{children}</button>
}

export const ButtonSecond = ({children}) => {
    return <button className="active:bg-white/50 flex items-center justify-center p-2 rounded-2xl bg- outline outline-white text-white gap-2 text-lg leading-5 hover:bg-button cursor-pointer hover:font-semibold ml-10 lg:ml-0">{children} <img src="../../src/assets/seta-button2.svg"></img> </button>
}
