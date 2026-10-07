import Link from 'next/link';
import CampaignHero from '@/components/CampaignHero/CampaignHero';
import GeneralAboutSection from '@/components/AboutSection/GeneralAboutSection';
import GoogleReviews from '@/components/blocks/GoogleReviews/GoogleReviews';
import ConsultFindUs from '@/components/FindUs/ConsultFindUs';
import ConsultationTrustStrip from '@/components/ConsultationTrustStrip/ConsultationTrustStrip';
import { consultationTrustContent } from '@/components/ConsultationTrustStrip/consultationTrustContent';
import GeneralPromotionForm from '@/components/PromotionForm/GeneralPromotionForm';
import { ScrollToPromotionFormButton } from '@/components/ScrollToPromotionFormButton/ScrollToPromotionFormButton';
import { localReachEditions, type LocalReachEdition } from '@/lib/localreach';

const linkClass = 'mt-6 inline-flex min-h-12 items-center rounded-full border border-obsidian/25 px-5 text-sm font-semibold transition-colors hover:bg-obsidian hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-obsidian focus-visible:ring-offset-2';

export default function LocalReachLandingPage({ edition }: { edition: LocalReachEdition }) {
  return (
    <main className='campaign-experience min-w-0 overflow-x-clip bg-porcelain text-obsidian'>
      <CampaignHero
        eyebrow={`Welcome, LocalReach ${localReachEditions[edition]} readers`}
        title='Come and see us'
        highlightedTitle='before you decide.'
        description='Finding a new dentist can feel like a big step. At Supernova Dental in Bridgwater, you can begin by simply coming to see the practice.'
        details='We are welcoming new private patients. Look around, meet the team and ask questions with a complimentary practice tour, at your own pace.'
      />
      <section aria-labelledby='localreach-options' className='bg-ivory px-5 py-16 sm:px-8 lg:px-12 lg:py-24'>
        <div className='mx-auto max-w-7xl'>
          <h2 id='localreach-options' className='text-3xl sm:text-4xl'>Choose your first step</h2>
          <div className='mt-10 grid gap-10 md:grid-cols-3'>
            <article className='border-t border-obsidian/20 pt-6'>
              <h3 className='text-2xl'>A complimentary practice tour</h3>
              <p className='mt-4 leading-7 text-obsidian/75'>Look around the practice, meet the people who would welcome you and ask questions before deciding whether to book an appointment.</p>
              <a href='tel:01278806284' className={linkClass}>Call to arrange a tour</a>
            </article>
            <article className='border-t border-obsidian/20 pt-6'>
              <h3 className='text-2xl'>Interested in straighter teeth?</h3>
              <p className='mt-4 leading-7 text-obsidian/75'>Ask about a complimentary Invisalign consultation. Discuss what you hope to change and learn what the process may involve. Any treatment recommendation follows a full clinical assessment.</p>
              <Link href='/cosmetic-dentistry/invisalign' className={linkClass}>Explore Invisalign</Link>
            </article>
            <article className='border-t border-obsidian/20 pt-6'>
              <h3 className='text-2xl'>Ready to become a patient?</h3>
              <p className='mt-4 leading-7 text-obsidian/75'>A new patient examination gives the team time to assess your dental health, listen to your concerns and explain suitable options. Register your interest using the form below.</p>
              <ScrollToPromotionFormButton type='button' className={linkClass}>Enquire about an appointment</ScrollToPromotionFormButton>
            </article>
          </div>
          <p className='mt-12 text-lg'>For a tour, an Invisalign consultation or questions about becoming a patient, call <a href='tel:01278806284' className='inline-flex min-h-11 items-center font-semibold underline underline-offset-4'>01278 806284</a>.</p>
          <p className='mt-3 text-sm text-obsidian/70'>Supernova Dental is a private practice and does not provide NHS services.</p>
        </div>
      </section>
      <section id='consultation-form' aria-label='New patient appointment enquiry' className='scroll-mt-24 bg-porcelain px-5 py-16 sm:px-8 lg:px-12 lg:py-24'>
        <GeneralPromotionForm />
      </section>
      <div className='campaign-trust-strip bg-ivory px-5 py-4 sm:px-8 lg:px-12'>
        <ConsultationTrustStrip content={consultationTrustContent.appointment} />
      </div>
      <div className='campaign-support bg-porcelain'><GeneralAboutSection /></div>
      <div className='campaign-reviews bg-ivory'><GoogleReviews /></div>
      <ConsultFindUs />
    </main>
  );
}
