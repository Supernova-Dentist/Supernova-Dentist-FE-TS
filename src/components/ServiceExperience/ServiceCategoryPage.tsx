import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { EditorialDivider, LuxuryLink } from '@/components/TeamExperience/LuxuryPrimitives';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export type ServiceCategoryItem = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  description: string;
};

export type ServiceCategoryGroup = {
  title: string;
  description?: string;
  services: ServiceCategoryItem[];
};

export default function ServiceCategoryPage({
  eyebrow,
  title,
  intro,
  groups,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  groups: ServiceCategoryGroup[];
}) {
  return (
    <main className='bg-porcelain text-obsidian'>
      <section className='relative isolate overflow-hidden bg-obsidian text-ivory'>
        <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 -z-10' />
        <div className='mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 md:pb-24 lg:px-8'>
          <BreadCrumb tone='dark' />
          <div className='max-w-4xl pt-14 md:pt-20'>
            <p className='mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>{eyebrow}</p>
            <EditorialDivider light className='mb-7' />
            <h1 className='max-w-3xl text-balance text-4xl leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl'>
              {title}
            </h1>
            <div className='mt-7 max-w-2xl space-y-4 text-pretty text-base leading-8 text-ivory/80 sm:text-lg'>
              {intro}
            </div>
          </div>
        </div>
      </section>

      <div className='mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 md:space-y-28 md:py-24 lg:px-8'>
        {groups.map((group, groupIndex) => (
          <section key={group.title} aria-labelledby={`service-group-${groupIndex}`}>
            <div className='mb-9 grid gap-5 border-b border-stone pb-7 md:grid-cols-[minmax(0,0.7fr)_minmax(18rem,0.5fr)] md:items-end'>
              <div>
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>
                  {String(groupIndex + 1).padStart(2, '0')}
                </p>
                <h2 id={`service-group-${groupIndex}`} className='text-balance text-3xl leading-tight sm:text-4xl'>
                  {group.title}
                </h2>
              </div>
              {group.description !== undefined && group.description !== '' && (
                <p className='text-pretty leading-7 text-taupe md:text-right'>{group.description}</p>
              )}
            </div>

            <div
              className={cn(
                'grid gap-x-6 gap-y-10 sm:grid-cols-2',
                group.services.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-4'
              )}
            >
              {group.services.map((service) => (
                <article key={service.href} className='group min-w-0'>
                  <Link
                    href={service.href}
                    className='block rounded-[1.25rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4'
                    aria-label={`Explore ${service.name}`}
                  >
                    <div className='relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-stone'>
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                        className='object-cover transition-transform duration-200 motion-reduce:transition-none group-hover:scale-[1.015]'
                      />
                      <div aria-hidden='true' className='absolute inset-0 bg-gradient-to-t from-obsidian/35 via-transparent to-transparent' />
                    </div>
                    <div className='px-1 pt-5'>
                      <div className='flex min-w-0 items-start justify-between gap-4'>
                        <h3 className='min-w-0 text-balance text-2xl leading-tight'>{service.name}</h3>
                        <span className='mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-champagne/55 text-bronze-ink transition-colors duration-200 group-hover:bg-champagne group-hover:text-obsidian'>
                          <FiArrowRight aria-hidden='true' className='size-4' />
                        </span>
                      </div>
                      <p className='mt-3 text-pretty leading-7 text-taupe'>{service.description}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className='bg-deep-navy px-4 py-16 text-ivory sm:px-6 md:py-20 lg:px-8'>
        <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end'>
          <div className='max-w-2xl'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>Personal care, clearly explained</p>
            <h2 className='text-balance text-3xl leading-tight sm:text-4xl'>Let&apos;s talk about the right next step for you.</h2>
            <p className='mt-5 max-w-xl leading-7 text-ivory/75'>
              Speak with our Bridgwater team about your concerns, priorities and the treatment options available.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row md:justify-end'>
            <LuxuryLink href='/book-appointment'>Book an appointment</LuxuryLink>
            <LuxuryLink href='/enquiry' variant='secondary'>Get in touch</LuxuryLink>
          </div>
        </div>
      </section>
    </main>
  );
}
