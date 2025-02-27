export const Heading = ({ children, type = 'h1' }) => {
    if (type === 'h1'){
        return <h1 className="font-inter text-5xl leading-11 w-[340px] h-[240px] lg:text-8xl lg:leading-29 text-white font-bold bg-none lg:w-[736px] lg:h-[464px] text-center">{children}</h1>
    }

    if (type === 'h2'){
        return <h2 className="font-inter text-4xl leading-10 lg:text-[80px] lg:leading-24 text-white font-bold">{children}</h2>
    }

    if (type === 'h3'){
        return <h3 className="font-inter text-[38px] leading-10 lg:text-5xl lg:leading-15 text-text-700 font-bold">{children}</h3>
    }

    if (type === 'h4'){
        return <h4 className="font-inter text-2xl leading-8 lg:text-[32px] lg:leading-10 text-white font-extrabold ml-10 lg:ml-0">{children}</h4>
    }

    if (type === 'h5'){
        return <h5 className="font-inter text-[27px] leading-8 text-white font-semibold">{children}</h5>
    }
}