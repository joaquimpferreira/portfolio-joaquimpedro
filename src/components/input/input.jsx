export const Input = ({ children, type = 'inputemail' }) => {
    if (type === 'inputemail'){
        return <input type="text" placeholder="you@example.com" className="focus:outline-none font-inter text-white/70 text-[16px] leading-5 font-normal" name="email" required >{children}</input>
    }

    if (type === 'inputname'){
        return <input type="text" placeholder="Insira seu nome" className=" focus:outline-none font-inter text-white/70 text-[16px] leading-5 font-normal" name="from_name" required >{children}</input>
    }

    if (type === 'inputassunto'){
        return <input type="text" placeholder="Insira seu assunto" className=" focus:outline-none font-inter text-white/70 text-[16px] leading-5 font-normal" name="subject" required >{children}</input>
    }

    if (type === 'inputmensagem'){
        return <textarea type="text" placeholder="Escreva sua mensagem aqui" className=" resize-none focus:outline-none font-inter text-white/70 text-[16px] leading-5 font-normal bg-bg-800 h-[325px] rounded-xl p-6 w-full text-left align-top" name="message" required >{children}</textarea>
    }
}