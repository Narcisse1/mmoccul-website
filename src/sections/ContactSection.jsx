import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const contactOptions = [
  {
    label: 'Call our team',
    detail: '+237 675 95 27 41',
    href: 'tel:+237675952741',
    icon: Phone,
  },
  {
    label: 'Send us an email',
    detail: 'contact@mmoccul.com',
    href: 'mailto:contact@mmoccul.com',
    icon: Mail,
  },
  {
    label: 'Visit a branch',
    detail: 'Find your nearest MMOCCUL branch',
    href: '/branches',
    icon: MapPin,
  },
]

export const ContactSection = () => (
  <section className="w-full bg-[#F5F7FA] px-5 py-16 sm:px-8 sm:py-20">
    <div className="mx-auto grid max-w-6xl gap-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(0,46,138,0.07)] sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:p-14">
      <div>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF8E8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#785A12]">
          <span className="h-2 w-2 rounded-full bg-[#D4A735]" />
          Here when you need us
        </span>
        <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-[#002E8A] sm:text-4xl">
          Let’s make your next move together.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
          Whether you have a question about an account or need help choosing a service, our team is ready to help.
        </p>
      </div>

      <div className="grid gap-3">
        {contactOptions.map(({ label, detail, href, icon: Icon }) => {
          const external = href.startsWith('tel:') || href.startsWith('mailto:')
          const content = (
            <>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#F1F5FB] text-[#002E8A] transition-colors group-hover:bg-[#FFF4D9]">
                <Icon size={20} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-slate-800">{label}</span>
                <span className="mt-1 block break-words text-sm text-slate-500">{detail}</span>
              </span>
              <ArrowUpRight size={18} className="shrink-0 text-[#D4A735] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )

          const sharedClassName = "group flex items-center gap-4 rounded-2xl border border-slate-200 px-4 py-4 transition-all hover:border-[#D4A735] hover:bg-[#FFFCF5] sm:px-5"

          return external ? (
            <a key={href} href={href} className={sharedClassName}>
              {content}
            </a>
          ) : (
            <Link key={href} to={href} className={sharedClassName}>
              {content}
            </Link>
          )
        })}
      </div>
    </div>
  </section>
)
