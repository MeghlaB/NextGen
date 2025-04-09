import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

function Top10Services() {
  const services = [
    {
      title: 'Web Service',
      description:
        'We provide comprehensive web development solutions to help businesses build robust online platforms.',
      link: '/webservice',
      buttonText: 'Learn More',
    },
    {
      title: 'Graphics Design',
      description:
        "We offer creative graphic design services to bring your brand's visual identity to life.",
      link: '/graphic-design',
      buttonText: 'Explore',
    },
    {
      title: 'Marketing',
      description:
        'We provide data-driven marketing strategies to help your business reach its target audience effectively.',
      link: '/marketing',
      buttonText: 'Get Started',
    },
  ]

  return (
    <div className="py-10 px-4 md:px-10 lg:px-20 bg-gray-50">
      <div className="text-center py-8">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
          Top Ten <span className="text-yellow-500">Singapore Services</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          (Web Services, Graphics Design, Marketing)
        </p>
      </div>

      {/* Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="border-2 border-blue-200 hover:border-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
          >
            <h1 className="text-xl font-semibold mb-4">{service.title}</h1>
            <p className="mb-4">{service.description}</p>
            <Link
              to={service.link}
              className="text-blue-600 underline py-2 px-4 rounded transition-all flex items-center"
            >
              {service.buttonText}
              <ArrowRight size={'20px'} className="ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Top10Services
