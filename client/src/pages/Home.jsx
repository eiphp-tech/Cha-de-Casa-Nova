import React from "react"
import Button from "../components/button"
import ExternalActionButton from "../components/ExternalActionButton"
import WhatsAppButton from "../components/WhatsAppButton"

import batedeira from "../assets/image/batedeira.svg"
import talheres from "../assets/image/talheres.svg"
import panelas from "../assets/image/panelas.svg"

import { MapPin } from "lucide-react"
import { motion } from "framer-motion"

const Home = () => {
  // Variantes para animações
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const slideFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  }

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  }

  const slideFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  }

  const rotatingAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="relative w-full min-h-screen flex flex-col justify-center items-center gap-14 px-4  overflow-x-hidden -mb-10"
    >
      <motion.img
        src={batedeira}
        alt="Imagem/icon de batedeira"
        className="absolute top-0 right-0 -translate-y-60 translate-x-1/3 -rotate-12 z-0"
        variants={rotatingAnimation}
        initial="initial"
        animate="animate"
      />

      <motion.header
        className="flex flex-col items-center justify-center mt-48 z-10"
        variants={slideFromTop}
      >
        <motion.div
          className="flex flex-col max-w-screen leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-gotu text-4xl text-gray-950 w-36 font-bold pl-2">
            Chá de
          </span>
          <h1 className="font-gotu text-6xl font-bold text-gray-950 w-80 -mt-4">
            casa Nova
          </h1>
        </motion.div>

        <motion.p
          className="bg-black text-white p-2 -pt-2 rounded-sm text-2xl font-instru font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Luanna & Fransergio
        </motion.p>
      </motion.header>

      <motion.img
        src={talheres}
        alt="Imagem/icon de uma talher"
        className="absolute top-56 -left-48 h-[900px] w-auto rotate-12 -z-10"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      />

      <motion.p
        className="text-center w-4/5 text-[20px] font-instru font-light text-gray-950 z-10"
        variants={fadeIn}
      >
        Um momento importante, enquanto nos preparamos para essa nova etapa.
      </motion.p>

      <motion.section
        className="flex flex-col items-center justify-center gap-4 mt-4"
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn}>
          <Button text="Sugestão de Presentes" path="/ListaPresentes" />
        </motion.div>
        <motion.div variants={fadeIn}>
          <ExternalActionButton
            text="Local do Evento"
            href="https://maps.app.goo.gl/YawrRbdT3s1raMrZ6"
          />
        </motion.div>
        <motion.div variants={fadeIn}>
          <WhatsAppButton />
        </motion.div>
      </motion.section>

      <motion.section
        className="flex flex-row items-center justify-center gap-1.5 -mb-5"
        variants={slideFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center border-t border-b border-black w-min pl-1 pr-1">
          <p className="text-2xl font-gotu">Domingo</p>
        </div>
        <div className="flex flex-col items-center justify-center translate-y-[10px]">
          <p className="text-5xl font-gotu">14</p>
          <p className="text-2xl font-gotu font-bold">Setembro</p>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-b border-black w-[106px] pl-1 pr-1">
          <p className="text-2xl font-gotu">ás 13:30</p>
        </div>
      </motion.section>

      <motion.section
        variants={slideFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-row items-center justify-center gap-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.8,
            }}
          >
            <MapPin className="bg-black rounded-full text-white p-1 w-8 h-8" />
          </motion.div>
          <p>R. Raposa do Campo, 510 - Pequis</p>
        </div>
      </motion.section>

      <motion.section
        className="flex flex-col justify-center bg-gray-200 p-2 rounded-3xl w-[90%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-2xl font-instru font-light text-gray-950">
          Venha celebrar com a gente! Cada casa conta uma história única, e é
          com imensa alegria que queremos iniciar a nossa ao lado de pessoas tão
          queridas. Este não é apenas um novo endereço, mas o começo de uma nova
          fase cheia de esperanças e sonhos. Vamos celebrar juntos este novo
          capítulo!
        </p>
        <motion.p
          className="text-xl font-bold font-instru m-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          - Luanna & Fransergio
        </motion.p>
      </motion.section>

      <motion.img
        src={panelas}
        alt="Imagem/icon de uma panela"
        className="absolute right-0 bottom-0 translate-x-[30%] translate-y-[50%] rotate-12 -z-10"
        variants={floatingAnimation}
        initial="initial"
        animate="animate"
      />
    </motion.main>
  )
}

export default Home
