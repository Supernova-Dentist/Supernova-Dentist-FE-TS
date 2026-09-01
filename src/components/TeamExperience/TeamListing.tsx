import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { DentallyPortal } from '@/lib/constants';
import { teamGroups, teamMembers, type TeamMember } from '@/data/team';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import { EditorialDivider, LuxuryLink } from './LuxuryPrimitives';
import SectionReveal from './SectionReveal';

function TeamHero() {
  return (
    <section className='relative overflow-hidden bg-obsidian px-5 pb-20 pt-32 text-ivory sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28'>
      <div aria-hidden='true' className='luxury-hero-glow absolute inset-0' />
      <div className='relative mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[minmax(0,1fr)_280px]'>
        <div className='max-w-4xl'>
          <div className='mb-8 flex items-center gap-4'>
            <span className='h-px w-10 bg-champagne' />
            <p className='text-xs font-semibold uppercase tracking-[0.24em] text-champagne sm:text-sm'>
              The people behind your care
            </p>
          </div>
          <h1 className='max-w-4xl text-balance text-5xl font-normal leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-8xl'>
            Meet the people behind your smile
          </h1>
          <p className='mt-8 max-w-2xl text-pretty text-base leading-8 text-ivory/75 sm:text-lg'>
            Advanced dentistry, thoughtful personal care and a genuinely warm welcome—especially for patients who
            feel nervous about visiting the dentist.
          </p>
        </div>

        <div className='flex items-center gap-5 border-t border-white/15 pt-6 lg:block lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0'>
          <div className='flex size-20 shrink-0 items-center justify-center rounded-[1.25rem] bg-porcelain p-3 shadow-[0_20px_45px_rgba(0,0,0,0.18)] lg:size-28'>
            <Image
              src='/assets/images/logo.png'
              alt='Supernova Dental logo'
              width={180}
              height={180}
              priority
              className='h-full w-full object-contain'
            />
          </div>
          <p className='max-w-[12rem] text-sm leading-6 text-ivory/65 lg:mt-5'>Private dental care in Bridgwater, Somerset.</p>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, priority }: { member: TeamMember; priority: boolean }) {
  return (
    <article className='team-card group relative overflow-hidden rounded-[1.5rem] border border-obsidian/10 bg-porcelain shadow-[0_18px_50px_rgba(11,18,24,0.07)] transition-[border-color,box-shadow,transform] duration-200 hover:border-champagne/80 hover:shadow-[0_22px_60px_rgba(11,18,24,0.12)] focus-within:border-gold-text-light focus-within:ring-2 focus-within:ring-focus-light focus-within:ring-offset-4'>
      <Link
        href={`/team/${member.slug}`}
        className='block rounded-[1.5rem] focus-visible:outline-none'
        aria-label={`View ${member.name}'s profile`}
      >
        <div className='relative aspect-[4/5] overflow-hidden bg-stone'>
          <Image
            src={member.image}
            alt={member.alt}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            quality={82}
            placeholder='blur'
            priority={priority}
            className='object-cover transition-transform duration-200 motion-reduce:transition-none motion-reduce:transform-none md:group-hover:scale-[1.018]'
          />
          <div aria-hidden='true' className='absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-obsidian/20 to-transparent' />
        </div>
        <div className='min-h-44 px-6 pb-6 pt-5'>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-bronze-ink'>{member.group}</p>
          <h3 className='mt-2 text-balance text-3xl font-normal leading-tight tracking-[-0.02em] text-obsidian'>
            {member.name}
          </h3>
          <p className='mt-2 min-h-12 text-sm leading-6 text-taupe'>{member.role}</p>
          <span className='mt-5 inline-flex items-center gap-2 text-sm font-semibold text-obsidian underline decoration-champagne/60 underline-offset-4'>
            Meet {member.firstName}
            <FiArrowRight aria-hidden='true' className='size-4 transition-transform duration-200 group-hover:translate-x-1' />
          </span>
        </div>
      </Link>
    </article>
  );
}

function TeamGrid() {
  let cardIndex = 0;

  return (
    <section aria-labelledby='team-grid-heading' className='bg-ivory px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-2xl'>
          <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Expertise with a human touch</p>
          <h2 id='team-grid-heading' className='mt-4 text-balance text-4xl leading-tight tracking-[-0.02em] text-obsidian sm:text-5xl'>
            A team built around your comfort
          </h2>
          <p className='mt-5 text-base leading-8 text-taupe'>
            Meet the clinicians and patient care team who make every visit feel considered, calm and personal.
          </p>
        </div>

        <div className='mt-16 space-y-20'>
          {teamGroups.map((group) => {
            const members = teamMembers.filter((member) => member.group === group);
            const sectionId = `group-${group.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`;

            return (
              <SectionReveal key={group}>
                <section aria-labelledby={sectionId}>
                  <div className='mb-8 border-b border-obsidian/15 pb-4'>
                    <h3 id={sectionId} className='text-3xl font-normal text-obsidian sm:text-4xl'>
                      {group}
                    </h3>
                  </div>
                  <div className='grid gap-7 sm:grid-cols-2 lg:grid-cols-3'>
                    {members.map((member) => {
                      const priority = cardIndex < 3;
                      cardIndex += 1;
                      return <TeamCard key={member.slug} member={member} priority={priority} />;
                    })}
                  </div>
                </section>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TeamClosingCta() {
  return (
    <section className='bg-porcelain px-5 py-20 sm:px-8 sm:py-24 lg:px-12'>
      <SectionReveal className='mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-deep-navy px-6 py-12 text-ivory shadow-[0_24px_70px_rgba(11,18,24,0.14)] sm:px-10 sm:py-16 lg:px-16'>
        <div className='grid items-end gap-10 lg:grid-cols-[1fr_auto]'>
          <div className='max-w-2xl'>
            <EditorialDivider light />
            <p className='mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>Your next step</p>
            <h2 className='mt-4 text-balance text-4xl leading-tight tracking-[-0.02em] sm:text-5xl'>
              Ready to feel at home in the dentist’s chair?
            </h2>
            <p className='mt-5 text-base leading-8 text-ivory/70'>
              Book a consultation or speak with our team. We’ll take the time to understand what you need.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row'>
            <LuxuryLink href={DentallyPortal} external>
              Book a consultation
            </LuxuryLink>
            <LuxuryLink href='/enquiry' variant='secondary'>
              Contact the practice
            </LuxuryLink>
          </div>
        </div>
        <a
          href='tel:+441278228665'
          className='mt-10 inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-ivory/70 transition-colors duration-200 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-dark'
        >
          <FiPhone aria-hidden='true' /> 01278 228665
        </a>
      </SectionReveal>
    </section>
  );
}

export default function TeamListing() {
  return (
    <main className='bg-ivory text-obsidian'>
      <TeamHero />
      <div className='team-breadcrumb bg-ivory px-5 pt-8 sm:px-8 lg:px-12'>
        <div className='mx-auto max-w-7xl'>
          <BreadCrumb tone='light' />
        </div>
      </div>
      <TeamGrid />
      <TeamClosingCta />
    </main>
  );
}
