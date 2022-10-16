import Image from 'next/image'

export default function CvView() {
    return (
        <>
        <button className="my-6 p-1 bg-purple rounded-xl text-xl hover:bg-white hover:text-purple hover:translate-x-1 transition-color duration-200 delay-180 sm:p-2">To download this, <a href="../assets/CV.png" download> please press here </a> </button>
        <Image src="../assets/CV.png" alt="png of my cv" className="md:w-[70%]"></Image>

        </>
    )

}