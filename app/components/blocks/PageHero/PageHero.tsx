import CtaButtons from '../Cta/CtaButtons';
import CtaText from '../Cta/CtaText';

type PageHeroProps = {
  bgImage?: string;
  title: string;
  description: string;
};

export default function PageHero({ bgImage, title, description }: PageHeroProps) {
  return (
    <div className={`${bgImage} h-[650px] w-full bg-no-repeat bg-cover bg-center-top`}>
      <div className='flex flex-col justify-center items-center gap-20 h-full'>
        <CtaText title={title} description={description} />
        <CtaButtons />
      </div>
    </div>
  );
}
