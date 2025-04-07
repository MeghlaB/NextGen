import { motion } from "framer-motion"

function Banner() {
  return (
    <div>
      <div className="font-sans bg-gray-100 ">
      {/* Hero Section */}
      <motion.section 
        className="bg-blue-500 text-white py-30 h-[450px]"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}>
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">We Craft Your Digital Presence</h1>
          <p className="mt-4 text-xl">Modern, Responsive & Business-Driven Web Solutions</p>
          <motion.button 
            className="mt-6 px-6 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600"
            whileHover={{ scale: 1.1 }}>
            Let's Talk
          </motion.button>
        </div>
      </motion.section>

      {/* Other sections here */}
    </div>
    </div>
  )
}

export default Banner
