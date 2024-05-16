import CertificationBox from '@/components/CertificationBox/CertificationBox';
import certificationsContent from '@/(about)/meet-dr-young/utils/certificationsContent';

export default function Certifications() {
  const { certificationsContentTop, certificationsContentBottom } = certificationsContent;

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col justify-center flex-1 gap-4 md:flex-row'>
        {certificationsContentTop.map(({ title, text }) => (
          <CertificationBox key={title} header={title} text={text} />
        ))}
      </div>
      <div className='flex flex-col justify-center flex-1 gap-4 md:flex-row'>
        {certificationsContentBottom.map(({ title, text }) => (
          <CertificationBox key={title} header={title} text={text} />
        ))}
      </div>
    </div>
  );
}
