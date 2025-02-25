export const Heading = ({ children, type = 'h1' }) => {
    if (type === 'h1'){
        return <h1 className="font-inter text-8xl leading-29 text-white font-bold bg-none w-[736px] h-[464px]">{children}</h1>
    }

    if (type === 'h2'){
        return <h2 className="font-inter text-[80px] leading-24 text-white font-bold">{children}</h2>
    }

    if (type === 'h3'){
        return <h3 className="font-inter text-5xl leading-15 text-text-700 font-bold">{children}</h3>
    }

    if (type === 'h4'){
        return <h4 className="font-inter text-[32px] leading-10 text-white font-extrabold">{children}</h4>
    }

    if (type === 'h5'){
        return <h5 className="font-inter text-[27px] leading-8 text-white font-semibold">{children}</h5>
    }
}