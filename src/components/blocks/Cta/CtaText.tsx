type CtaTextProps = {
  title?: string;
  description?: string;
  uppercase?: boolean;
};

export default function CtaText({ title, description, uppercase }: CtaTextProps) {
  const defaultTitle = 'Welcome to our clinic';
  const defaultDescription = 'A better life through better dentistry';

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center gap-4 max-w-[50rem] px-4'>
        <h1 className='uppercase text-6xl text-slate-100 text-center'>{title ?? defaultTitle}</h1>
        {description !== undefined ? (
          <p className={`${uppercase !== undefined ? 'uppercase' : null} text-2xl text-slate-100 text-center`}>
            {description ?? defaultDescription}
          </p>
        ) : null}
      </div>
    </div>
  );
}
