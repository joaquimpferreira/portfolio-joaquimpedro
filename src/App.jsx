import './App.css'
import { Link } from 'react-scroll';
import { Button } from './components/button/index.jsx'
import { ButtonSecond } from './components/button/index.jsx'
import { ButtonPerfil } from './components/button/index.jsx'
import { Emblem } from './components/emblem/index.jsx'
import { Badge } from './components/badge/index.jsx'
import { BadgeSecond } from './components/badge/index.jsx'
import { BadgeThird } from './components/badge/index.jsx'
import { Heading } from './components/Heading/index.jsx'
import { Card } from './components/card/index.jsx'
import { Paragraph } from './components/paragraph/index.jsx'
import { Input } from './components/input/input.jsx'
import { Navbar } from './components/navbar/index.jsx'
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaBehanceSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFigma } from "react-icons/io5";
import SendEmail from "./components/emailjs/index.jsx"
import { IoPerson } from "react-icons/io5";
import React, { useRef } from "react";
import Spline from '@splinetool/react-spline';
import { LuPencil } from "react-icons/lu";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";
import assinatura from './assets/assinatura.svg';
import perfil from './assets/foto-perfil.png';
import tierA from './assets/tierA.png';
import tierB from './assets/tierB.png';
import tierS from './assets/tierS.png';
import badgeE from './assets/badge-equipe.png';
import badgeP from './assets/badge-pensamento.png';
import badgeA from './assets/badge-adpt.png';
import money from './assets/screen-convertmoney.png';
import covary from './assets/screen-covarylocation.svg';
import node from './assets/screen-nodestudy.png';
import stars from './assets/stars-symbol.svg';
import linha from './assets/linha.svg';
import logo from './assets/logo.svg';
import seta1 from './assets/seta-button1.svg';
import seta2 from './assets/seta-button2.svg';



function App() {

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await SendEmail(form.current); // Passa o FormData como argumento
      alert('Mensagem enviada com sucesso!');
      e.target.reset(); // Reseta o formulário após o envio
    } catch (error) {
      console.error(error); // Exibe o erro no console para depuração
      alert('Ocorreu um erro ao enviar a mensagem.');
    }
  };


  return (
    <div className='relative overflow-hidden w-full'>
      <Spline scene="https://prod.spline.design/ZhTG6aAJofIJ5CKm/scene.splinecode" className='absolute z-1 overflow-hidden w-full !h-screen'/>
      <div className='relative z-10'>
        <header className='flex justify-center'>
          <Navbar>
            <section>
              <ul className='list-none hidden lg:flex flex-row items-center justify-start gap-10 '>
                
                <li><Link to="home" smooth={true} duration={500}><img className='w-[51px] h-[35px] hover:w-[53px] hover:h-[37px]' src={logo} alt="logo" /></Link></li>
                <li><Link to="sobre-mim" smooth={true} duration={500} offset={-60}><Paragraph type='p10'>Sobre mim</Paragraph></Link></li>
                <li><Link to="skills" smooth={true} duration={500} offset={-60}><Paragraph type='p10'>Skills</Paragraph></Link></li>
                <li><Link to="projetos" smooth={true} duration={500} offset={-60}><Paragraph type='p10'>Projetos</Paragraph></Link></li>
                <li><Link to="contato" smooth={true} duration={500} offset={-60}><Paragraph type='p10'>Contato</Paragraph></Link></li>
              </ul>
            </section>
            <section className='lg:ml-[45%]'>
              <ul className='list-none hidden lg:flex flex-row items-center justify-end gap-6'>
                <li><a href='mailto:joaquimjpfc@gmail.com?'> <MdEmail className='w-[18px] h[18px] hover:w-5 hover:h-5' /> </a></li>
                <li> <a href='https://www.linkedin.com/in/joaquim-pedro-ferreira/' target='blank'><BsLinkedin className='hover: w-[18px] hover:h-[18px]'/> </a> </li>
                <li><a href='https://github.com/joaquimpferreira' target='blank'><RxGithubLogo className='hover: w-[18px] hover:h-[18px]'/> </a> </li>
              </ul>
            </section>

            <section>
              <ul className='list-none flex lg:hidden flex-row items-center justify-start gap-10 '>
                
                <li><Link to="home" smooth={true} duration={500}><IoPerson className='w-5 h-5' /></Link></li>
                <li><Link to="skills" smooth={true} duration={500} offset={-60}><LuPencil className='w-5 h-5' /></Link></li>
                <li><Link to="projetos" smooth={true} duration={500} offset={-60}><PiSuitcaseSimpleBold className='w-5 h-5' /></Link></li>
                <li><Link to="contato" smooth={true} duration={500} offset={-60}><MdMailOutline className='w-5 h-5' /></Link></li>
              </ul>
            </section>

          </Navbar>
        </header>

        <main>
          
          <article className='flex flex-col md:flex-row items-center justify-center mb-[40vh] mt-[40vh] lg:mb-[26vh] lg:mt-[26vh]' id='home'>
            <section className='text-center md:text-left'>
            <Heading>Transformando ideias em experiências digitais.</Heading>
            </section>
            </article>
            

          <article className='lg:mb-[190px] mb-[100px] p-4 lg:p-0' id='sobre-mim'>
            <section className='lg:ml-[243px] lg:mb-[120px] mb-[100px]'>
              <Heading type='h2'>Um pouco sobre mim</Heading>
              <Paragraph>Quem eu sou e o que eu faço.</Paragraph>
            </section>
            <div className='flex lg:justify-evenly items-center flex-col lg:flex-row'>
              <section className='lg:w-1/3 w-2/3'>
                <div className='mb-8'>
                <Paragraph type='p2'>QUEM SOU EU</Paragraph>
                <Paragraph type='p3'>Sou o <span className='font-semibold text-white'>Joaquim Pedro</span>, um desenvolvedor front-end e designer UI/UX. Tenho 18 anos e estou cursando o primeiro periodo de Sistemas de Informacao na Universidade Federal de Uberlandia, no Brasil.</Paragraph>
                </div>
                <div className='mb-8' >
                <Paragraph type='p2'>O QUE EU FIZ</Paragraph>
                <Paragraph type='p3'>Aos 13 anos, mudei-me para a cidade de Uberlândia, onde concluí o ensino médio no <span className='font-semibold text-white'>Colégio Nacional</span> (2022–2024). Aos 18 anos, ingressei no ensino superior na <span className='font-semibold text-white'>Universidade Federal de Uberlândia</span> (2025 – atual).
                  Sempre fui apaixonado por tecnologia e, ao longo dos anos, desenvolvi projetos e atuei na área de design, com foco em identidade visual. Com o tempo, migrei para a área de UI e me apaixonei pelo universo da programação.
                  Além disso, tenho grande interesse por matemática e astronomia. Em 2021, fui medalhista de ouro na Olimpíada Brasileira de Astronomia, e, em 2022, conquistei a medalha de bronze.</Paragraph>
                </div>
                <div className='mb-[53px]'>
                <Paragraph type='p2'>O QUE EU FACO</Paragraph>
                <Paragraph type='p3'>Sou um desenvolvedor web especializado em tecnologias modernas para criação de interfaces dinâmicas e eficientes. Trabalho com <span className='font-semibold text-white'>JavaScript, HTML e CSS,</span> utilizando frameworks e bibliotecas como <span className='font-semibold text-white'>React, Node.js e Tailwind CSS</span> para desenvolver aplicações escaláveis, responsivas e de alta performance.</Paragraph>
                </div>
                <div>
                <Paragraph type='p3'>Vamos construir algo incrivel,</Paragraph>
                <img src={assinatura} alt="assinatura" />
              </div>
              </section>
              <aside className='mt-[15%] lg:mt-0'>
                <img src={perfil} alt="foto-perfil" />
                <Link to="contato" smooth={true} duration={500} offset={-60}><ButtonPerfil imgSrc={seta1}>Contato</ButtonPerfil></Link>
              </aside>
            </div>
          </article>

          <article className='lg:mb-[190px] mb-[40px]' id='skills'>

            <section className='lg:ml-[243px] lg:mb-[120px] mb-[60px] lg:w-1/3 p-4 lg:p-0'>
              <Heading type='h2'>Skills</Heading>
              <Paragraph>As habilidades técnicas, ferramentas de desenvolvimento e habilidades interpessoais.</Paragraph>
            </section>

            <section className='mb-[80px] p-4 lg:p-0'>
              <div className='flex justify-center'>
                <Heading type='h3'>Tecnologias</Heading>
              </div>

              <div className='flex lg:flex-row flex-col gap-4 mb-4 mt-8 justify-center items-center'>
                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierA} alt="tier-a" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-yellow-300'> <IoLogoJavascript className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>JavaScript</Paragraph>
                    <BadgeThird>Js</BadgeThird>
                  </div>
                </Emblem>

                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierB} alt="tier-b" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-cyan-400'> <FaReact className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>ReactJS</Paragraph>
                    <BadgeThird>Js Library</BadgeThird>
                  </div>
                </Emblem>

                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierB} alt="tier-b" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-green-600'> <FaNodeJs className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>NodeJS</Paragraph>
                    <BadgeThird>Js Software</BadgeThird>
                  </div>
                </Emblem>

              </div>

              <div className='flex gap-4 mb-4 justify-center lg:flex-row flex-col items-center'>
                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierB} alt="tier-b" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-cyan-500'> <RiTailwindCssFill className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>TailwindCSS</Paragraph>
                    <BadgeThird>CSS Framework</BadgeThird>
                  </div>
                </Emblem>

                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierS} alt="tier-s" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-blue-500'> <FaCss3Alt className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>CSS3</Paragraph>
                    <BadgeThird>CSS</BadgeThird>
                  </div>
                </Emblem>

                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierS} alt="tier-s" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-orange-500'> <FaHtml5 className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>HTML5</Paragraph>
                    <BadgeThird>HTML</BadgeThird>
                  </div>
                </Emblem>

              </div>
            </section>

            <section className='mb-[90px] p-4 lg:p-0'>
              <div className='flex justify-center'>
              <Heading type='h3'>Ferramentas</Heading>
              </div>
              <div className='flex lg:flex-row flex-col gap-4 mt-8 justify-center items-center'>

                <Emblem>
                  <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierA} alt="tier-a" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                    </div>

                    <div className='h-[60%] w-full flex justify-center items-center text-blue-400'> <VscVscode className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                    <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>VScode</Paragraph>
                    <BadgeThird>Code editor</BadgeThird>
                  </div>
                </Emblem>

              <Emblem>
              <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierS} alt="tier-s" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                  </div>

                  <div className='h-[60%] w-full flex justify-center items-center text-white'> <IoLogoFigma className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                  <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>Figma</Paragraph>
                    <BadgeThird>UI editor</BadgeThird>
                  </div>
              </Emblem>

              <Emblem>
                <div className='h-[20%] w-full flex justify-end'>
                    <img src={tierA} alt="tier-a" className='w-27 h-27 relative left-10 bottom-10 hover:w-28 hover:h-28'/>
                    </div>

                    <div className='h-[60%] w-full flex justify-center items-center text-gray-200'> <RxGithubLogo className='w-[60%] h-[60%] hover:w-[65%] hover:h-[65%]'/></div>

                    <div className='h-[20%] w-full flex items-center justify-between'>
                    <Paragraph type = 'p9'>GitHub</Paragraph>
                    <BadgeThird>Version Control</BadgeThird>
                  </div>
              </Emblem>

              </div>
            </section>

            <section>
              <div className='flex justify-center mb-10 text-center'>
              <Heading type='h3'>Soft Skills</Heading>
              </div>
              <div className='flex lg:justify-between lg:flex-row flex-col items-center '>
              <Badge></Badge>

              <Badge>
                <img src={badgeE} alt="badges-equipe" />
                <div className='relative bottom-[50px]'>
                  <Heading type='h5'>Trabalho em equipe</Heading>
                </div>
                <div className='relative bottom-[50px] text-center w-[231px] mt-[15px]'>
                  <Paragraph type='p4'>Trabalhar junto com a equipe para dividir tarefas, solucionar problemas e entregar soluções</Paragraph>
                </div>
              </Badge>

              <Badge>
                <img src={badgeP} alt="badges-pensamento" />
                <div className='relative bottom-[50px]'>
                  <Heading type='h5'>Pensamento crítico</Heading>
                </div>
                <div className='relative bottom-[50px] text-center w-[231px] mt-[15px]'>
                  <Paragraph type='p4'>Analisar problemas de forma lógica e encontrar as melhores soluções.</Paragraph>
                </div>
              </Badge>

              <Badge>
                <img src={badgeA} alt="badges-adpt" />
                <div className='relative bottom-[50px]'>
                  <Heading type='h5'>Adaptabilidade</Heading>
                </div>
                <div className='relative bottom-[50px] text-center w-[231px] mt-[15px]'>
                  <Paragraph type='p4'>Ajustar rapidamente a novas tecnologias, linguagens e metodologias.</Paragraph>
                </div>
              </Badge>

              <Badge></Badge>

              </div>
            </section>

          </article>

          <article className='lg:mb-[190px] mb-[100px]' id='projetos'>
            <section className='lg:ml-[243px] lg:mb-[120px] mb-[60px] p-4 lg:p-0'>
              <Heading type='h2'>Projetos</Heading>
              <Paragraph>Projetos e ideias desenvolvidos por mim.</Paragraph>
          </section>

          <section className='flex flex-col items-center gap-4'>
            <Card>
              <div className='lg:pl-14 lg:pt-22 lg:pb-18 lg:pr-9 pt-14 pb-13 lg:w-[45%]'>
                <Heading type='h4'>Convert Money</Heading>
                <div className='mt-4 mb-13 ml-10 mr-10 lg:mr-0 lg:ml-0'>
                  <Paragraph type='p4'>Convert Money é aplicação que permite converter valores monetários entre diferentes moedasm utilizando HTML, CSS e JavaScript para implementar a lógica de conversão. Conceitos como manipulação do DOM, eventos e cálculos matemáticos são desenvolvidos.</Paragraph>
                </div>
                <div className='flex lg:mb-33 mb-15 justify-evenly'>
                  <BadgeSecond>
                    <IoLogoJavascript className='h-[23px] w-[23px] text-yellow-400 m-1'/>
                    <Paragraph type ='p5'>JavaScript</Paragraph>
                  </BadgeSecond>
                  
                  <BadgeSecond>
                  <FaCss3Alt className='w-[25px] h-[25px] text-blue-700 m-1'/>
                    <Paragraph type ='p5'>CSS3</Paragraph>
                  </BadgeSecond>

                  <BadgeSecond>
                  <FaHtml5 className='w-[25px] h-[25px] text-orange-700 m-1'/>
                    <Paragraph type ='p5'>HTML5</Paragraph>
                  </BadgeSecond>
                </div>
                <a href="https://github.com/joaquimpferreira/convert-money" target='blank'><ButtonSecond imgSrc={seta2}>Acessar projeto</ButtonSecond></a>
              </div>
        
              <img className='hidden lg:block' src={money} alt="screen-convertmoney" />
            </Card>

            <Card type='card2'>

            <div className='lg:pl-14 lg:pt-22 lg:pb-18 lg:pr-9 lg:w-[45%] pt-14 pb-13'>
                <Heading type='h4'>Node Study</Heading>
                <div className='mt-4 mb-13 ml-10 mr-10 lg:mr-0 lg:ml-0'>
                  <Paragraph type='p4'>Node Study é um projeto com uso de JavaScript para o desenvolvimento do servidor e a gestão de dependências através do npm. Trabalhando conceitos fundamentais do Node.js, como módulos, gerenciamento de pacotes e execução de scripts.</Paragraph>
                </div>
                <div className='flex lg:mb-33 mb-15 justify-evenly'>
                  <BadgeSecond>
                    <IoLogoJavascript className='h-[23px] w-[23px] text-yellow-400 m-1'/>
                    <Paragraph type ='p5'>JavaScript</Paragraph>
                  </BadgeSecond>
                  
                  <BadgeSecond>
                  <FaNodeJs className='w-[25px] h-[25px] text-green-700' />
                    <Paragraph type ='p5'>NodeJS</Paragraph>
                  </BadgeSecond>

                </div>
                <a href="https://github.com/joaquimpferreira/Node-Study-Project" target='blank'><ButtonSecond imgSrc={seta2}>Acessar projeto</ButtonSecond></a>
              </div>
        
              <img className='hidden lg:block' src={node} alt="screen-nodestudy" />

            </Card>

            <Card type='card3'>
            <div className='lg:pl-14 lg"pt-22 lg"pb-18 lg:pr-9 lg:w-[45%] pt-14 pb-13'>
                <Heading type='h4'>Covary Location</Heading>
                <div className='mt-4 mb-13 ml-10 mr-10 lg:mr-0 lg:ml-0'>
                  <Paragraph type='p6'>O projeto Wide Coverage Location é um estudo de responsividade e CSS, seu foco principal é a prática de técnicas de responsividade e estilização utilizando CSS e HTML.</Paragraph>
                </div>
                <div className='flex lg:mb-33 mb-15 justify-evenly'>
                  <BadgeSecond>
                  <FaCss3Alt className='w-[25px] h-[25px] text-blue-700 m-1'/>
                    <Paragraph type ='p5'>CSS3</Paragraph>
                  </BadgeSecond>

                  <BadgeSecond>
                  <FaHtml5 className='w-[25px] h-[25px] text-orange-700 m-1'/>
                    <Paragraph type ='p5'>HTML5</Paragraph>
                  </BadgeSecond>
                </div>

                <a href="https://github.com/joaquimpferreira/Wide-Coverage-Location" target='blank'><ButtonSecond imgSrc={seta2}>Acessar projeto</ButtonSecond></a>

              </div>
        
              <img className='hidden lg:block' src={covary} alt="screen-covarylocation"/>
            </Card>

            <Card type='card4'>
              <img src={stars} alt="stars-symbol" className='w-26 h-26'/>
                <div className='mb-22 mt-6'>
                  <Heading type = 'h4'>SEU PROJETO VAI AQUI</Heading>
                  <Paragraph type = 'p7'>Vamos transformar sua ideia em realidade visual</Paragraph>
                </div>
              <Link to="contato" smooth={true} duration={500} offset={-60}><Button imgSrc={seta1}>Entrar em contato</Button></Link>
            </Card>
          </section>
          </article>

          <article className='lg:mb-[75px] mb-[0px]' id='contato'>
            <section className='lg:ml-[243px] lg:mb-[120px] mb-[60px] p-4 lg:p-0'>
            <Heading type='h2'>Entrar em contato</Heading>
            <Paragraph>Vamos construir algo incrivel!</Paragraph>
            </section>

            <section className='flex justify-center mb-15'>
              <Card type = 'card5'>
                <div className='flex justify-center items-center mb-7'>
                  <Paragraph type = 'p8'>Nova mensagem</Paragraph>
                </div>
              
              <form ref={form} onSubmit={handleSubmit}>

                <div className='flex'>
                  <label className='mr-2' htmlFor="email"><Paragraph type = 'p8'>Email:</Paragraph></label> 
                  <Input></Input>
                </div>

                <img src={linha} alt="linha" className='mb-4 mt-4 w-full'/>

                <div className='flex'>
                  <label className='mr-2' htmlFor="from_name"><Paragraph type = 'p8'>Nome:</Paragraph></label>
                  <Input type = 'inputname' ></Input>
                </div>

                <img src={linha} alt="linha" className='mb-4 mt-4 w-full'/>

                <div className='flex'>
                  <label className='mr-2' htmlFor="subject"><Paragraph type = 'p8'>Assunto:</Paragraph></label>
                  <Input type = 'inputassunto' ></Input>
                </div>

                <img src={linha} alt="linha" className='mb-8 mt-8 w-full'/>

                <div className='flex mb-8'>
                  <Input type = 'inputmensagem'></Input>
                </div>

                <div className='flex justify-end'>
                  <Button type="submit" imgSrc={seta1}>Enviar</Button>
                </div>

              </form>
              </Card>
            </section>

            <section>

        <div className='text-gray-400 flex justify-center gap-11'>

          <a href="'mailto:joaquimjpfc@gmail.com?" target='blank'><MdEmail className='w-6 h-6'/></a>
          <a href="https://www.linkedin.com/in/joaquim-pedro-ferreira/" target='blank'><BsLinkedin className='w-[22px] h-[22px]'/></a>
          <a href="https://www.instagram.com/joaquimpe_/" target='blank'><RiInstagramFill className='w-6 h-6'/></a>
          <a href="https://github.com/joaquimpferreira" target='blank'><RxGithubLogo className='w-6 h-6'/></a>
          <a href="https://www.behance.net/shadowndesigner" target='blank'><FaBehanceSquare className='w-6 h-6'/></a>
          </div>

            </section>

          </article>
        </main>

        <footer className='pb-19 px-10 lg:px-0'>
          <img src={linha} alt="linha" className='w-full mb-34'/>
          <div className='flex lg:justify-around lg:flex-row flex-col-reverse gap-12 lg:gap-0'>
            <div>
              <img src={logo} alt="logo" className='w-[109px] h-[75px]'/>
              <p className="font-inter text-text-700 opacity-50 text-[14px] leading-4 font-normal mt-2">© 2025 Joaquim Pedro. All Rights Reserved.</p>
            </div>


            <div>
              <Paragraph type= 'p8'>Links</Paragraph>
              <ul className='list-none mt-8'>
                <li><Link to="sobre-mim" smooth={true} duration={500} offset={-60}><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4 hover:text-white hover:text-[18px] cursor-pointer'>Sobre mim</p></Link></li>
                <li><Link to="skills" smooth={true} duration={500} offset={-60}><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4 hover:text-white hover:text-[18px] cursor-pointer'>Skills</p></Link> </li>
                <li><Link to="projetos" smooth={true} duration={500} offset={-60}><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4 hover:text-white hover:text-[18px] cursor-pointer'>Projetos</p></Link> </li>
                <li><Link to="contato" smooth={true} duration={500} offset={-60}><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4 hover:text-white hover:text-[18px] cursor-pointer'>Contato</p></Link> </li>
              </ul>
            </div>

            <div>
            <Paragraph type= 'p8'>Outros</Paragraph>
            <ul className='list-none mt-8'>
                <li><a href='mailto:joaquimjpfc@gmail.com?'><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4'>Email</p></a></li>
                <li> <a href='https://www.linkedin.com/in/joaquim-pedro-ferreira/' target='blank'><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4'>Linkedin</p></a> </li>
                <li><a href='https://github.com/joaquimpferreira' target='blank'><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4'>Github</p></a> </li>
                <li><a href='https://www.instagram.com/joaquimpe_/' target='blank'><p className='font-inter text-text-400 text-[16px] leading-7 font-normal mt-4'>Instagram</p></a> </li>
                
              </ul>
            </div>

          </div>
        </footer>

      </div>
    </div>
  )

}

export default App
