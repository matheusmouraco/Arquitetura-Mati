
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Heart, Target, MessageSquare, Search, Award, Smartphone, Building, Users, Zap, ShieldCheck, PenTool, BrainCircuit, Sparkles, Gem, Star, XCircle, TrendingUp, HomeIcon, Ruler, Palette } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {

  const whatsappLink = "https://wa.me/5511992644010?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Mati%20Studio%20e%20quero%20um%20or%C3%A7amento%20para%20site%20de%20arquitetura.";

  const portfolioCases = [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/19d0e4b91_portfolio-1-a-50-Prancheta-17.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8ab03c6c2_portfolio-1-a-50-Prancheta-25.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f47849f56_portfolio-1-a-50-Prancheta-27-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/440998202_portfolio-1-a-50-Prancheta-32.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/308f81494_portfolio-1-a-50-Prancheta-39.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4b6b7c4ac_portfolio-1-a-50-Prancheta-45.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b1234647_portfolio-1-a-50-Prancheta-48.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/63992cb6d_portfolio-51-a-100-Prancheta-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/8279b8fb7_portfolio-51-a-100-Prancheta-4.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5490ebf32_portfolio-51-a-100-Prancheta-12.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d0818ae18_portfolio-51-a-100-Prancheta-15-1.png",
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cef816363_portfolio-51-a-100-Prancheta-25.png"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Toaster />
      <style>{`
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2131&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        .final-cta-bg {
           background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop');
           background-size: cover;
           background-position: center;
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm shadow-md z-40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1dd374859_Group-1171276258.png" alt="Mati Studio Logo" className="h-10" />
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full group px-6">
                Fale com um Especialista
                <MessageSquare className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="bg-black text-zinc-200 pt-[68px]">
        {/* Hero Section */}
        <section className="hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 md:py-36">
            <motion.div variants={fadeIn} initial="hidden" animate="visible">
              <Ruler className="w-16 h-16 text-[#FF004D] mx-auto mb-4"/>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Arquitetura é estética, sim. Mas no mundo digital, estética sem estratégia é só aparência.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
                Seus projetos têm conceito, técnica e bom gosto. Mas quando alguém busca "arquiteto em [sua cidade]", será que é você que aparece?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Um bom site não é só bonito. É uma experiência que convence, encanta e converte.</h2>
             <p className="text-xl text-zinc-300 mt-6">Sua presença online precisa transmitir tudo o que você representa no offline.</p>
          </div>
        </section>

        {/* What we do */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Na Mati Studio, desenvolvemos sites para arquitetos que desejam:</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        { icon: Gem, title: "Valorizar seu portfólio com elegância", description: "Design sofisticado que destaca seus projetos" },
                        { icon: Award, title: "Transmitir sofisticação e credibilidade", description: "Presença digital à altura do seu profissionalismo" },
                        { icon: Target, title: "Atrair os clientes certos", description: "Aqueles que entendem o valor de um bom projeto" },
                    ].map(pillar => (
                         <div key={pillar.title} className="flex flex-col items-center">
                            <pillar.icon className="w-12 h-12 text-[#FF004D] mb-4"/>
                            <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                            <p className="text-zinc-400 mt-2">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What you might be losing */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">O que você pode estar perdendo sem um site à altura do seu trabalho:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Clientes que pesquisam no Google e contratam o primeiro profissional com presença sólida",
                        "Projetos incríveis que ninguém vê porque estão perdidos no Instagram",
                        "Oportunidades com construtoras e marcas que pedem um portfólio acessível",
                        "Reconhecimento como referência no seu nicho",
                    ].map(problem => (
                         <div key={problem} className="flex items-start gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <XCircle className="w-6 h-6 text-[#FF004D] shrink-0 mt-1"/>
                            <p className="text-lg text-zinc-300">{problem}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* What we deliver */}
        <section className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-zinc-900 border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Building className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Site institucional para arquitetos</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Ideal para profissionais autônomos, escritórios de arquitetura, urbanismo, interiores ou projetos corporativos.</p>
                        <ul className="space-y-3 text-zinc-300">
                           {[
                               "Página inicial com mensagem de impacto e estilo autoral",
                               "Página 'Sobre' com storytelling profissional",
                               "Página de Serviços divididos por segmento",
                               "Galeria de portfólio com categorias intuitivas",
                               "Página de contato com formulário e localização",
                               "Blog opcional para artigos e bastidores",
                               "SEO aplicado desde a estrutura até o conteúdo",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>

                    <Card className="bg-zinc-900 border-zinc-800 text-white p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Target className="w-10 h-10 text-[#FF004D] shrink-0"/>
                            <h3 className="text-2xl font-bold">Landing Pages para campanhas</h3>
                        </div>
                        <p className="text-zinc-400 mb-6">Perfeita para ações estratégicas específicas com foco total na geração de leads qualificados.</p>
                        <ul className="space-y-3 text-zinc-300">
                            {[
                               "Consultoria de interiores com prazo limitado",
                               "Projeto arquitetônico 100% online",
                               "Campanhas de parceria com construtoras",
                               "Divulgação de novos serviços ou nichos",
                               "Copy enxuta e layout objetivo",
                           ].map(item => (
                               <li key={item} className="flex items-start gap-3">
                                   <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                                   <span>{item}</span>
                               </li>
                           ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </section>

        {/* Why our sites work */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Por que nossos sites funcionam?</h2>
            <p className="text-xl text-zinc-300 mb-12">Porque aplicamos os mesmos princípios da boa arquitetura: <span className="text-[#FF004D] font-bold">Forma, função e propósito.</span></p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: Palette, title: "Design autoral", description: "Nada de template genérico" },
                    { icon: BrainCircuit, title: "UX refinada", description: "Visitante encontra o que precisa" },
                    { icon: Target, title: "Foco estratégico", description: "Autoridade e conversão" },
                    { icon: Zap, title: "Performance", description: "Carregamento rápido e técnico" },
                ].map(item => (
                     <div key={item.title} className="bg-black p-6 rounded-lg border border-zinc-800">
                        <item.icon className="w-8 h-8 text-[#FF004D] mb-3"/>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Portfólio de Sites para Arquitetos</h2>
              <p className="text-zinc-400 mt-4">Sites que valorizam o trabalho e geram resultados</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioCases.map((src, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg overflow-hidden shadow-lg border border-zinc-700/50 bg-white"
                  variants={fadeIn} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{delay: i * 0.1}}
                >
                  <img src={src} alt={`Exemplo de site ${i + 1}`} className="w-full h-auto"/>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Comparison Section */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Site comum vs. Site profissional da Mati Studio</h2>
            <div className="bg-black rounded-xl overflow-hidden border border-zinc-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6">
                        <h3 className="font-bold text-xl text-red-500 mb-4 flex items-center gap-2"><XCircle/> Problemas comuns</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li>Visual genérico e impessoal</li>
                            <li>Portfólio desorganizado ou confuso</li>
                            <li>Site bonito, mas que não converte</li>
                            <li>Textos frios ou técnicos demais</li>
                            <li>Presença fraca no Google</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-zinc-800/50">
                        <h3 className="font-bold text-xl text-green-400 mb-4 flex items-center gap-2"><CheckCircle/> Soluções da Mati Studio</h3>
                         <ul className="space-y-2 text-zinc-300">
                            <li>Design autoral com sua assinatura</li>
                            <li>Galeria categorizada e responsiva</li>
                            <li>Estrutura com foco em leads</li>
                            <li>Copy emocional e persuasiva</li>
                            <li>SEO aplicado desde a raiz do projeto</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Image Recommendations */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="bg-zinc-900 border-zinc-800 text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Indicações de imagens para arquitetos</h2>
                  <p className="text-zinc-400 mb-6">A imagem comunica antes da primeira palavra. Elas precisam emocionar e elevar o valor percebido do seu trabalho.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-zinc-300">
                      {[
                          "Fotografias profissionais dos projetos",
                          "Detalhes arquitetônicos e materiais usados",
                          "Imagens conceituais ou 3D de projetos",
                          "Fotos suas ou da equipe em ambientes reais",
                          "Ambientes com iluminação natural",
                          "Elementos de composição e decoração"
                      ].map(item => (
                          <li key={item} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#FF004D] shrink-0 mt-1"/>
                              <span>{item}</span>
                          </li>
                      ))}
                  </ul>
              </Card>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-zinc-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Resultados que você pode esperar:</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        "Visibilidade estratégica no Google",
                        "Mais leads e orçamentos qualificados",
                        "Reforço da sua marca como arquiteto de referência",
                        "Portfólio acessível, elegante e valorizado",
                        "Posicionamento consistente no mercado de alto padrão",
                        "Experiência digital que reflete sua expertise",
                    ].map(result => (
                         <div key={result} className="flex items-center gap-4 bg-black p-6 rounded-lg border border-zinc-800">
                            <Star className="w-6 h-6 text-[#FF004D] shrink-0"/>
                            <p className="text-lg text-zinc-300">{result}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-bg">
          <div className="py-24 text-center bg-black/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Ruler className="w-16 h-16 text-[#FF004D] mx-auto mb-6"/>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Seu projeto mais importante agora é a sua imagem digital.</h2>
                <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-10">Ela precisa falar por você, mesmo quando você não está presente. E precisa dizer: "Esse é um arquiteto que entende de estética, de técnica e de experiência."</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-[#FF004D] hover:bg-[#D90042] text-white rounded-full text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Quero um site com a minha cara
                    </Button>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full text-lg px-8 py-6 font-bold">
                      Solicitar proposta personalizada
                    </Button>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black border-t border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Mati Studio | Sites profissionais para arquitetos que querem se destacar no Google e na mente dos seus clientes.</p>
        </div>
      </footer>
    </>
  );
}
