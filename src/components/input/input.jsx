export const Input = ({ children, type = 'inputemail' }) => {
    if (type === 'inputemail'){
        return <input type="text" placeholder="Insira seu endereço de email" className="font-inter text-text-750 text-[16px] leading-5 font-normal" name="email" required >{children}</input>
    }

    if (type === 'inputname'){
        return <input type="text" placeholder="Insira seu nome" className="font-inter text-text-750 text-[16px] leading-5 font-normal" name="from_name" required >{children}</input>
    }

    if (type === 'inputassunto'){
        return <input type="text" placeholder="Insira seu assunto" className="font-inter text-text-750 text-[16px] leading-5 font-normal" name="subject" required >{children}</input>
    }

    if (type === 'inputmensagem'){
        return <textarea type="text" placeholder="Escreva sua mensagem aqui" className="font-inter text-text-750 text-[16px] leading-5 font-normal bg-bg-800 h-[325px] rounded-xl p-6 w-full text-left align-top" name="message" required >{children}</textarea>
    }
}