import type { ConsultationTrustContent } from './consultationTrustContent';

type ConsultationTrustStripProps = {
  content: ConsultationTrustContent;
};

export default function ConsultationTrustStrip({ content }: ConsultationTrustStripProps) {
  return (
    <section aria-label={content.label} className='mx-auto w-full max-w-7xl border-y border-stone'>
      <div className='grid gap-px bg-stone sm:grid-cols-2 lg:grid-cols-4'>
        {content.items.map(({ title, description, icon: Icon }) => (
          <article key={title} className='min-w-0 bg-ivory px-5 py-7 sm:px-6 lg:py-8'>
            <div className='flex min-w-0 items-start gap-4'>
              <span className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-obsidian text-ivory' aria-hidden='true'>
                <Icon size={21} strokeWidth={1.75} />
              </span>
              <div className='min-w-0'>
                <h2 className='text-lg font-normal leading-6 text-obsidian'>{title}</h2>
                <p className='mt-2 text-sm leading-6 text-taupe'>{description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
