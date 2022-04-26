import { motion } from 'framer-motion'
import '../components/Home/Home.styles.css'

const Home = () => {
  return (
    <main className='bg-home min-h-screen text-white-text pt-[112px] px-6 pb-12 font-barlow-condensed md:pt-[202px] md:pb-[90px] lg:pt-378 lg:px-32 lg:pb-28 xl:px-40 '>
      <div className='max-w-[450px] mx-auto lg:flex lg:max-w-none justify-between items-end'>
        <motion.div
          initial={{
            x: -100,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.5,
              ease: 'linear'
            }
          }} className='text-center lg:text-left lg:max-w-[380px] xl:max-w-[450px]'
        >
          <h3 className='tracking-[2.7px] leading-[19.2px] md:text-[20px] md:leading-[24px] md:tracking-[3.38px] lg:text-[24px] lg:leading-[30px] lg:tracking-[4px] xl:text-[28px] xl:leading-[33.6px] xl:tracking-[4.72px]'>SO, YOU WANT TO TRAVEL TO</h3>
          <h2 className='text-white font-bellefair my-4 text-[80px] leading-[100px] md:text-[150px] md:leading-[150px] lg:text-[120px] lg:leading-[140px] xl:text-[150px] xl:leading-[171.9px]'>SPACE</h2>
          <p className='font-barlow-condensed text-[15px] leading-[25px] md:text-[16px] md:leading-[28px] lg:text-[18px] lg:leading-[32px]'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1.5
            }
          }} className='bg-white text-black w-[150px] h-[150px] mx-auto mt-[81px] flex justify-center items-center rounded-full md:w-[242px] md:h-[242px] md:mt-[156px] lg:w-[274px] lg:h-[274px] lg:mt-0 lg:mr-0'
        >
          <p className='font-bellefair text-[20px] leading-[22.92px] tracking-[1.25px] md:text-[32px] md:leading-[36.67px] md:tracking-[2px] lg:text-[32px] lg:leading-[36.67px] lg:tracking-[2px] lg:px-[63px] lg:py-[119px] lg:hover:border-[88px] lg:transition-all lg:duration-500 lg:border-white lg:border-opacity-10 rounded-full'>EXPLORE</p>
        </motion.div>
      </div>
    </main>
  )
}

export default Home
