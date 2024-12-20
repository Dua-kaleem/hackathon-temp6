import ContactForm from '@/components/Contactform'
import { HeroHeader } from '@/components/hero-header'
import React from 'react'
import Image from 'next/image'

const ContactPage = () => {
  return (
    <div>
      <HeroHeader
       
         backgroundImage="/assets/backgroundimage1.png"
        breadcrumbItems={[
          { href: "/", label: "home" },
          { href: "/Contact", label: "Contact" },
        ]}
        title="Contact"
      />
      <ContactForm />
      <div className="w-full mt-7">
            <Image
              src="/assets/fr.png"
              alt="Promo"
              width={1440}
              height={270}
              className=" w-full shadow-lg"
            />
          </div>
    </div>
  )
}

export default ContactPage
