export const Paragraph = ({ children, type = 'p1' }) => {
    if (type === 'p1'){
        return <p className="font-inter text-text-700 opacity-50 lg:text-2xl lg:leading-7  text-[16px] leading-5 font-normal mt-2">{children}</p>
    }
    if (type === 'p2'){
        return <p className="font-inter text-text-700 opacity-50 text-[16px] leading-5 font-semibold">{children}</p>
    }
    if (type === 'p3'){
        return <p className="font-inter text-text-700 text-[18px] leading-7 font-normal">{children}</p>
    }

    if (type === 'p4'){
        return <p className="font-inter text-text-700 lg:text-[16px] text-[14px] leading-5 font-normal">{children}</p>
    }

    if (type === 'p5'){
        return <p className="font-inter text-gray-500 text-[13px] leading-4 lg:text-[16px] lg:leading-5 font-semibold">{children}</p>
    }

    
    if (type === 'p6'){
        return <p className="font-inter text-white text-[14px] leading-5 lg:text-[16px] lg:leading-5 font-normal">{children}</p>
    }

    if (type === 'p7'){
        return <p className="font-inter text-text-750 text-[16px] leading-5 font-normal">{children}</p>
    }

    if (type === 'p8'){
        return <p className="font-inter text-white text-[16px] leading-5 font-semibold">{children}</p>
    }
    
    if (type === 'p9'){
        return <p className="font-inter text-white text-[20px] leading-5 font-semibold">{children}</p>
    }

    if (type === 'p10'){
        return <p className="font-inter text-text-700 text-[16px] leading-5 font-normal hover:text-white hover:text-[17px] cursor-pointer">{children}</p>
    }
}