import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import { getTeamMember, type TeamMember } from '@/data/team';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiMessageCircle } from 'react-icons/fi';
import { BackToTeamLink, EditorialDivider, LuxuryLink } from './LuxuryPrimitives';
import SectionReveal from './SectionReveal';

function ProfileCredentials({ member }: { member: TeamMember }) {
  if (member.qualifications === undefined && member.gdc === undefined) return null;

  return (
    <dl className='mt-8 grid gap-4 border-y border-white/15 py-6 text-sm sm:grid-cols-2'>
      {member.qualifications !== undefined && (
        <div className={member.gdc !== undefined ? '' : 'sm:col-span-2'}>
          <dt className='text-xs font-semibold uppercase tracking-[0.18em] text-champagne'>Qualifications</dt>
          <dd className='mt-2 max-w-xl leading-6 text-ivory/75'>{member.qualifications}</dd>
        </div>
      )}
      {member.gdc !== undefined && (
        <div>
          <dt className='text-xs font-semibold uppercase tracking-[0.18em] text-champagne'>GDC registration</dt>
          <dd className='mt-2 font-semibold tabular-nums text-ivory'>{member.gdc}</dd>
        </div>
      )}
    </dl>
  );
}

function ProfileHero({ member }: { member: TeamMember }) {
  return (
    <section className='relative overflow-hidden bg-obsidian px-5 pb-16 pt-28 text-ivory sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24'>
      <div aria-hidden='true' className='luxury-hero-glow absolute inset-0 opacity-70' />
      <div className='relative mx-auto max-w-7xl'>
        <div className='team-breadcrumb mb-8'>
          <BreadCrumb tone='dark' />
        </div>
        <div className='grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.76fr)] lg:gap-16'>
          <div className='order-2 lg:order-1'>
            <div className='flex items-center gap-4'>
              <span className='h-px w-10 bg-champagne' />
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>Meet your care team</p>
            </div>
            <h1 className='mt-6 text-balance text-5xl font-normal leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl xl:text-8xl'>
              {member.name}
            </h1>
            <p className='mt-5 max-w-2xl text-balance text-xl leading-8 text-ivory/75 sm:text-2xl'>{member.role}</p>
            <ProfileCredentials member={member} />
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              {member.bookHref !== undefined && (
                <LuxuryLink href={member.bookHref} external>
                  Book with me
                </LuxuryLink>
              )}
              <LuxuryLink href='/enquiry' variant='secondary'>
                Get in touch
              </LuxuryLink>
            </div>
          </div>

          <div className='order-1 lg:order-2'>
            <div className='relative mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-[1.75rem] border border-champagne/30 bg-porcelain shadow-[0_30px_80px_rgba(0,0,0,0.3)]'>
              <Image
                src={member.image}
                alt={member.alt}
                fill
                priority
                placeholder='blur'
                quality={86}
                sizes='(max-width: 1024px) 100vw, 42vw'
                className='object-cover'
              />
              <div aria-hidden='true' className='absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-obsidian/15 to-transparent' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BiographySection({ member }: { member: TeamMember }) {
  return (
    <section aria-labelledby='profile-biography' className='bg-ivory px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
      <SectionReveal className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-20'>
        <div>
          <EditorialDivider />
          <p className='mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>A personal introduction</p>
          <h2 id='profile-biography' className='mt-4 text-balance text-4xl leading-tight tracking-[-0.02em] text-obsidian sm:text-5xl'>
            About {member.firstName}
          </h2>
          <BackToTeamLink className='mt-8' />
        </div>
        <div className='max-w-3xl space-y-6 text-pretty text-[1.05rem] leading-8 text-taupe sm:text-lg sm:leading-9'>
          {member.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}

function ExpertiseSection({ member }: { member: TeamMember }) {
  if (member.expertise === undefined || member.expertise.length === 0) return null;

  return (
    <section aria-labelledby='profile-expertise' className='bg-porcelain px-5 py-20 sm:px-8 sm:py-24 lg:px-12'>
      <SectionReveal className='mx-auto max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Areas of care</p>
            <h2 id='profile-expertise' className='mt-4 text-balance text-4xl leading-tight tracking-[-0.02em] text-obsidian sm:text-5xl'>
              {member.expertiseHeading}
            </h2>
          </div>
          <div className='divide-y divide-obsidian/15 border-y border-obsidian/15'>
            {member.expertise.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className='group grid min-h-24 grid-cols-[auto_1fr_auto] items-center gap-5 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-light focus-visible:ring-offset-4'
              >
                <span className='text-sm tabular-nums text-bronze-ink'>{String(index + 1).padStart(2, '0')}</span>
                <span className='text-2xl text-obsidian sm:text-3xl'>{item.title}</span>
                <FiArrowRight aria-hidden='true' className='size-5 text-bronze transition-transform duration-200 group-hover:translate-x-1' />
              </Link>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}

function ProfileVideo({ member }: { member: TeamMember }) {
  if (member.video === undefined) return null;

  return (
    <section aria-labelledby='profile-video' className='bg-deep-navy px-5 py-20 text-ivory sm:px-8 sm:py-24 lg:px-12'>
      <SectionReveal className='mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20'>
        <div>
          <EditorialDivider light />
          <p className='mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-champagne'>In conversation</p>
          <h2 id='profile-video' className='mt-4 text-balance text-4xl leading-tight sm:text-5xl'>
            {member.video.heading}
          </h2>
          <p className='mt-5 max-w-xl text-base leading-8 text-ivory/70'>{member.video.description}</p>
        </div>
        <div className='mx-auto w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-champagne/25 bg-obsidian shadow-[0_25px_70px_rgba(0,0,0,0.28)]'>
          <video
            className='aspect-video w-full object-cover'
            controls
            preload='metadata'
            playsInline
            poster={member.video.poster}
          >
            <source src={member.video.src} type='video/mp4' />
            Your browser does not support embedded video. You can still contact the practice to learn more.
          </video>
        </div>
      </SectionReveal>
    </section>
  );
}

function TestimonialSection({ member }: { member: TeamMember }) {
  if (member.testimonials === undefined || member.testimonials.length === 0) return null;

  return (
    <section aria-labelledby='profile-testimonials' className='bg-ivory px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <SectionReveal className='grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-20'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-[0.22em] text-bronze-ink'>Patient stories</p>
            <h2 id='profile-testimonials' className='mt-4 text-balance text-4xl leading-tight tracking-[-0.02em] text-obsidian sm:text-5xl'>
              Patient testimonials for {member.name}
            </h2>
          </div>
          <p className='max-w-2xl text-base leading-8 text-taupe'>{member.testimonialIntro}</p>
        </SectionReveal>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {member.testimonials.map((testimonial, index) => (
            <SectionReveal key={`${testimonial.name}-${index}`}>
              <figure className='h-full rounded-[1.5rem] border border-champagne/40 bg-porcelain p-7 shadow-[0_16px_45px_rgba(11,18,24,0.05)] sm:p-9'>
                <span aria-hidden='true' className='font-serif text-6xl leading-none text-champagne'>
                  “
                </span>
                <blockquote className='mt-2 text-pretty text-base leading-8 text-obsidian/80'>
                  <p>{testimonial.description}</p>
                </blockquote>
                <figcaption className='mt-7 border-t border-obsidian/10 pt-5'>
                  <span className='block font-semibold text-obsidian'>{testimonial.name}</span>
                  <span className='mt-1 block text-sm text-taupe'>{testimonial.title}</span>
                </figcaption>
              </figure>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCta({ member }: { member: TeamMember }) {
  return (
    <section className='bg-porcelain px-5 py-20 sm:px-8 sm:py-24 lg:px-12'>
      <SectionReveal className='mx-auto max-w-7xl rounded-[2rem] border border-champagne/35 bg-obsidian px-6 py-12 text-ivory shadow-[0_24px_70px_rgba(11,18,24,0.14)] sm:px-10 lg:px-16 lg:py-16'>
        <div className='grid items-center gap-10 lg:grid-cols-[1fr_auto]'>
          <div className='max-w-2xl'>
            <div className='flex size-11 items-center justify-center rounded-full border border-champagne/40 text-champagne'>
              <FiMessageCircle aria-hidden='true' />
            </div>
            <h2 className='mt-6 text-balance text-4xl leading-tight tracking-[-0.02em] sm:text-5xl'>
              Start a conversation with our team
            </h2>
            <p className='mt-5 text-base leading-8 text-ivory/70'>
              Tell us what would help you feel comfortable. We’ll guide you towards the right next step.
            </p>
          </div>
          <div className='flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row'>
            {member.bookHref !== undefined && (
              <LuxuryLink href={member.bookHref} external>
                Book with {member.firstName}
              </LuxuryLink>
            )}
            <LuxuryLink href='/enquiry' variant='secondary'>
              Get in touch
            </LuxuryLink>
          </div>
        </div>
        <ul className='mt-10 grid gap-3 border-t border-white/15 pt-8 text-sm text-ivory/70 sm:grid-cols-3'>
          {['Personal care', 'Clear guidance', 'A calm welcome'].map((item) => (
            <li key={item} className='flex items-center gap-2'>
              <FiCheck aria-hidden='true' className='text-champagne' /> {item}
            </li>
          ))}
        </ul>
      </SectionReveal>
    </section>
  );
}

export default function ProfilePage({ slug }: { slug: string }) {
  const member = getTeamMember(slug);

  return (
    <main className='bg-ivory text-obsidian'>
      <ProfileHero member={member} />
      <BiographySection member={member} />
      <ExpertiseSection member={member} />
      <ProfileVideo member={member} />
      <TestimonialSection member={member} />
      <ProfileCta member={member} />
    </main>
  );
}
