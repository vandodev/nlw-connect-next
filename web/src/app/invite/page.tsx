import Image from 'next/image'
import logo from '../../assets/logo.svg'
import { InputField, InputIcon, InputRoot } from '../components/input'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import { IconButton } from '../components/icon-button'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export default async function InvitePage() {
    return(
        <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
            <div className="flex flex-col gap-10 w-full max-w-[550px]">
                <Image src={logo} alt="devstage" className="h-[30px] w-[108.5px]" />

                <div className="space-y-2">
                    <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
                        Inscrição confirmada!
                    </h1>
                    <p className="text-gray-300">
                        Para entrar no evento, acesse o link enviado para seu e-mail.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                            Indique e ganhe
                        </h2>
                        <p className="text-gray-300">
                            Convide mais pessoas para o evento e concorra a prêmios
                            exclusivos! É só compartilhar o link abaixo e acompanhar as
                            inscrições:
                        </p>
                    </div>
                    <InputRoot>
                        <InputIcon>
                            <Link className="size-5"  />
                        </InputIcon>
                        <InputField readOnly defaultValue="http://localhost/invite/gdhfyvhtgj" />

                        <IconButton className="-mr-2">
                            <Copy className="size-5" />
                        </IconButton>
                    </InputRoot>

                    <div className="grid md:grid-cols-3 gap-3">
                        <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                1067
                            </span>

                            <span className="text-sm text-gray-300 leading-none text-center">
                                Acessos ao link
                            </span>
                            <MousePointerClick className="size-5 text-purple top-3 left-3 absolute" />
                        </div>
                        <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                1067
                            </span>
                            
                            <span className="text-sm text-gray-300 leading-none text-center">
                                Inscrições feitas
                            </span>
                            <BadgeCheck className="size-5 text-purple top-3 left-3 absolute" />
                        </div>
                        <div className="relative rounded-xl bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1">
                            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                                10
                            </span>
                            
                            <span className="text-sm text-gray-300 leading-none text-center">
                                Posição no ranking
                            </span>
                            <Medal className="size-5 text-purple top-3 left-3 absolute" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-[440px] space-y-5">
                <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
                    Ranking de indicações
                </h2>

                <div className="space-y-4">
                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">2 &ordm;</span> {" "}
                            Ana carolina
                        </span>

                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                            156585
                        </span>
                        
                        <Image src={gold} alt="" className="absolute top-0 right-8" />
                    </div>

                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">1 &ordm;</span> {" "}
                            Evando Oliveira
                        </span>

                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                            12565
                        </span>
                        
                        <Image src={silver} alt="" className="absolute top-0 right-8" /> 
                    </div>

                    <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
                        <span className="text-sm text-gray-300 leading-none">
                            <span className="font-semibold">3 &ordm;</span> {" "}
                            Israel Oliveira
                        </span>

                        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                            12565
                        </span>
                        
                        <Image src={cooper} alt="" className="absolute top-0 right-8" /> 
                    </div>
                   
                        
                </div> 
                    
                   
            </div>
            
        </div>
    )
}