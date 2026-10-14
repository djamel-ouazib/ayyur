'use client'
import HamburgerMenue from './components/hamburgerMenue'
import { useState } from 'react'

export default function Home() {
    const [isMenue, setIsMenue] = useState<boolean>(false)

    return (
        <div className="relativ bg-black h-screen">
            <div>
                <h1 className="ml-14 animate-text-reveal bg-black mt-7 select-none font-bold text-xl uppercase tracking-[0.35em] text-white/90">
                    Ayyur ⴰⵢⵢⵓⵔ
                </h1>
                <HamburgerMenue isMenue={isMenue} setIsMenue={setIsMenue} />
                <div className="flex gap-3.5 bg-black absolute right-8 mt-7 items-center font-sans">
                    <p className="max-w-xs animate-text-reveal text-balance font-serif text-base font-light italic leading-relaxed tracking-wide text-zinc-200 md:max-w-sm md:text-lg">
                        The Moon drifts away from Earth by about 3.8 centimeters
                        every year, a slow goodbye written in silver light.
                    </p>
                    <div className="w-fit animate-image-reveal">
                        <img
                            className="hover:filter-[blur(1px)] transition-all"
                            src="https://images.unsplash.com/photo-1742473926437-fae4b1f21291?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                            alt="moon"
                            width={900}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`fixed inset-0 flex flex-col bg-white transition-all duration-700 ease-in-out ${
                    isMenue
                        ? '[clip-path:circle(150%_at_92%_7%)] opacity-100'
                        : 'pointer-events-none [clip-path:circle(0%_at_97%_7%)] opacity-100'
                }`}
            >
                <HamburgerMenue isMenue={isMenue} setIsMenue={setIsMenue} />

                <h1 className="ml-14 flex-1 mt-7 select-none font-mono text-xl font-light uppercase tracking-[0.35em] text-zinc-400">
                    Ayyur ⴰⵢⵢⵓⵔ
                </h1>

                {/* Conteneur des panneaux */}
                <div className="group/row bg-blue-400 flex-8 flex">
                    {/* TERRE : flex-2 par défaut, flex-1 si un autre panneau est survolé */}
                    <div className="relative flex-2 overflow-hidden bg-amber-600 transition-all duration-300 ease-in-out group-has-[.other:hover]/row:flex-1">
                        {/* Image : visible en flex-2, cachée en flex-1 */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-has-[.other:hover]/row:opacity-0"
                            style={{
                                backgroundImage:
                                    "url('https://www.hdnumerique.com/medias/articles/original/7381.jpg')",
                            }}
                        />

                        {/* Voile : caché en flex-2, visible en flex-1 */}
                        <div className="absolute inset-0 flex items-center justify-center bg-taupe-100 text-center text-[24px] font-medium text-black opacity-0 transition-opacity duration-500 group-has-[.other:hover]/row:opacity-100">
                            <p className="font-extrabold">PLANET TERRE</p>
                        </div>
                    </div>

                    {/* VENUS */}
                    <div
                        className="other group relative flex-1 overflow-hidden border border-r-zinc-400 bg-blue-500 bg-cover bg-center transition-all duration-300 ease-in-out hover:flex-2"
                        style={{
                            backgroundImage:
                                "url('https://w0.peakpx.com/wallpaper/769/572/HD-wallpaper-venus-hottest-planet.jpg')",
                        }}
                    >
                        <div className="flex h-full items-center justify-center text-[24px] text-white opacity-0 duration-500 group-hover:opacity-100">
                            <p className="font-extrabold">
                                PLANET VENUS -{'>'}
                            </p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-taupe-100 text-center text-[24px] font-medium text-black transition-opacity duration-500 group-hover:opacity-0">
                            <p className="font-extrabold">PLANET VENUS</p>
                        </div>
                    </div>

                    {/* JUPITER */}
                    <div
                        className="other group relative flex-1 overflow-hidden border border-r-zinc-400 bg-cover bg-center transition-all duration-300 ease-in-out hover:flex-2"
                        style={{
                            backgroundImage:
                                "url('https://i.pinimg.com/736x/ae/66/66/ae66669c00825e8b940ec47a43f477c8.jpg')",
                        }}
                    >
                        <div className="flex h-full items-center justify-center text-[24px] text-white opacity-0 duration-500 group-hover:opacity-100">
                            <p className="font-extrabold">
                                PLANET JUPITER -{'>'}
                            </p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-taupe-100 text-center text-[24px] font-medium text-black transition-opacity duration-500 group-hover:opacity-0">
                            <p className="font-extrabold">PLANET JUPITER</p>
                        </div>
                    </div>

                    {/* MARS */}
                    <div
                        className="other group relative flex-1 overflow-hidden border border-r-zinc-400 bg-cover bg-center transition-all duration-300 ease-in-out hover:flex-2"
                        style={{
                            backgroundImage:
                                "url('https://as2.ftcdn.net/v2/jpg/02/21/80/01/1000_F_221800130_LrLtuXqGfGHFDtHQEehVDpJ33tMwLjiW.jpg')",
                        }}
                    >
                        <div className="flex h-full items-center justify-center text-[24px] text-white opacity-0 duration-500 group-hover:opacity-100 ">
                            <p className="font-extrabold">PLANET MARS -{'>'}</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-taupe-100 text-center text-[24px] font-medium text-black transition-opacity duration-500 group-hover:opacity-0 ">
                            <p className="font-extrabold">PLANET MARS</p>
                        </div>
                    </div>

                    {/* MERCURY */}
                    <div
                        className="other group relative flex-1 overflow-hidden bg-cover bg-center transition-all duration-300 ease-in-out hover:flex-2"
                        style={{
                            backgroundImage:
                                "url('https://w0.peakpx.com/wallpaper/809/909/HD-wallpaper-best-mercury-planet-iphone-mercury-space.jpg')",
                        }}
                    >
                        <div className="flex h-full items-center justify-center text-[24px] text-white opacity-0 duration-500 group-hover:opacity-100">
                            <p className="font-extrabold">
                                PLANET MERCURY -{'>'}
                            </p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-taupe-100 text-center text-[24px] font-medium text-black transition-opacity duration-500 group-hover:opacity-0">
                            <p className="font-extrabold">PLANET MERCURY</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 p-1 flex">
                    <ul className="flex-1 flex gap-7 items-center justify-center">
                        <li className="text-[14px] text-white font-medium">
                            INSTAGRAME
                        </li>
                        <li className="text-[14px] text-white font-medium">
                            <a
                                className="hover:text-white/55"
                                target="_blank"
                                href="https://www.linkedin.com/in/djamel-ouazib-a59358336/?isSelfProfile=true"
                            >
                                LINEKEDIN
                            </a>
                        </li>
                    </ul>
                    <ul className="flex-1 flex gap-7 items-center justify-center">
                        <li className="text-[14px] italic text-white/55 font-medium">
                            <a
                                href="mailto:  djamel.ouazibb@gmail.com"
                                className="hover:text-white"
                            >
                                {' '}
                                djamel.ouazibb@gmail.com
                            </a>
                        </li>
                        <li className="text-[14px]  text-white font-medium">
                            <a
                                href="https://portfolio-djamel-ouazib.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white/55"
                            >
                                PORTFOLIO
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className={`absolute inset-0 bg-black -z-20 ${
                        isMenue ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-700`}
                ></div>
            </div>

            <div className="fixed flex flex-col  inset-0 bg-stone-900 animate-door-left text-center">
                {' '}
            </div>
            <div className="fixed inset-0  bg-stone-900  animate-door-right text-center"></div>
        </div>
    )
}
