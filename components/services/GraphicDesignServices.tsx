import Image from 'next/image'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'
import img1 from '@/assets/services/img-1.png'
import img2 from '@/assets/services/img-2.jpg'
import img3 from '@/assets/services/img-3.jpg'
import img4 from '@/assets/services/img-4.jpg'

const bezier: [number, number, number, number] = [0.22, 1, 0.36, 1]

const services = [
  {
    id: 1,
    title: 'Logo Design',
    description:
      "Unique and memorable logos that reflect your brand's personality and values.",
    image: img1,
    imgAlt: 'Logo design mockup',
    imageRight: true,
  },
  {
    id: 2,
    title: 'Business Card',
    description:
      'Elegant, customized stationery designs that leave a lasting impression.',
    image: img2,
    imgAlt: 'Business card design mockup',
    imageRight: false,
  },
  {
    id: 3,
    title: 'Brochure & Flyer Design',
    description:
      'Professionally designed brochures and flyers that showcase your products or services in a clean and compelling way.',
    image: img3,
    imgAlt: 'Brochure and flyer design mockup',
    imageRight: true,
  },
  {
    id: 4,
    title: 'Banner Design',
    description:
      'Eye-catching web and print banners optimized for maximum engagement and impact.',
    image: img4,
    imgAlt: 'Banner design mockup',
    imageRight: false,
  },
]

export default function GraphicDesignServices() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-20">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
                svc.imageRight ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Text */}
              <AnimateOnScroll
                className="flex-1"
                variants={{
                  hidden: { opacity: 0, x: svc.imageRight ? -40 : 40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.65, ease: bezier },
                  },
                }}
              >
                <h2 className="font-heading text-[#F15A22] text-2xl md:text-3xl mb-4">
                  {svc.title}
                </h2>
                <p className="font-body text-gray-600 text-sm leading-7">
                  {svc.description}
                </p>
              </AnimateOnScroll>

              {/* Image */}
              <AnimateOnScroll
                className="flex-1 flex justify-center"
                variants={{
                  hidden: { opacity: 0, x: svc.imageRight ? 40 : -40 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.65, ease: bezier, delay: 0.1 },
                  },
                }}
              >
                <div className="border border-gray-300 p-3 w-full max-w-[340px]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.imgAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 340px"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
