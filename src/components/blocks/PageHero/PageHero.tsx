import CtaButtons from '../Cta/CtaButtons';
import CtaText from '../Cta/CtaText';

type PageHeroProps = {
  bgImage?: string;
  title: string;
  description?: string;
  showButtons?: boolean;
  className?: string;
};

export default function PageHero({
  bgImage,
  title,
  description,
  className = 'bg-center-top',
  showButtons = true,
}: PageHeroProps) {
  return (
    <div className={`${bgImage} h-[30vh] md:h-[40vh] lg:h-[45vh] w-full bg-no-repeat bg-cover ${className}`}>
      <div className='flex flex-col justify-center items-center gap-20 h-full'>
        <CtaText title={title} description={description} />
        {showButtons ? <CtaButtons /> : null}
      </div>
    </div>
  );
}
