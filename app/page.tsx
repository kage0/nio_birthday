"use client";

import { motion } from "framer-motion";

const photos = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5, // ralentir un peu l'apparition
      duration: 1.5,
      ease: "easeOut",
    },
  }),
};

const poem = [
  "On ne se parle pas souvent,",
  "Mais parfois, quelques mots suffisent",
  "Pour dire :",
  "J’espère que ta journée est douce,",
  "Et que ton année commence bien.",
  "Bon anniversaire.",
];

export default function BirthdaySite() {
  return (
    <div className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section
        className="h-screen relative bg-cover bg-center flex items-center justify-center flex-col gap-6 px-4"
        style={{ backgroundImage: `url('/images/hero.jpg')` }}
      >
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {photos.slice(0, 3).map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Intro Photo ${i + 1}`}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-white shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.6, duration: 0.6 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Joyeux Anniversaire ✨
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-300">Nio Elric</p>
        </motion.div>
      </section>

      {/* POEM SECTION */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        {poem.map((line, i) => (
          <motion.p
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={i + 1}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            {line}
          </motion.p>
        ))}
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 px-6">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl font-semibold mb-12 text-center"
        >
          Je voulais écrire quelque chose de cool, mais je n'ai pas d'inspi donc
          je met juste quelques photos de toi.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.3 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-2xl italic text-gray-400"
        >
          Tu sais, comme on dit :
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
          className="text-3xl text-white mt-6 font-semibold"
        >
          "Quand la banane commence à conseiller la patate, c’est que la marmite
          a perdu le couvercle."
        </motion.p>
      </section>

      {/* ENDING SECTION */}
      <section className="py-20 px-6 text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-xl text-gray-400"
        >
          J’espère que ce petit geste t’aura fait sourire 🙂
        </motion.p>
      </section>
    </div>
  );
}
