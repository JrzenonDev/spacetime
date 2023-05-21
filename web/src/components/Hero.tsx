import Image from "next/image";
import spacetimeLogo from '../assets/spacetime-log.svg';

export function Hero() {
  return(
    <div className='space-y-5'>
      <Image src={spacetimeLogo} alt="Space time logo" />

      <div className='max-w-[420px] space-y-4'>
        <h1 className='text-5xl font-bold leading-tight text-gray-50'>Sua linha do tempo</h1>
        <p className='text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compatilhe (se quiser) com o mundo!</p>
      </div>

      <a href='' className='uppercase inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm leading-none text-black hover:bg-green-600'>Cadastrar lembrança</a>
    </div>
  )
}