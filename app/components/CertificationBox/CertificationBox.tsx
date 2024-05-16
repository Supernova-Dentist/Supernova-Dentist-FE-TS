type CertificationBoxProps = { header: string; text: string };

export default function CertificationBox({ header, text }: CertificationBoxProps) {
  return (
    <div className='flex flex-col text-center sm:text-left gap-2 flex-1'>
      <h4 className='text-xl font-light'>{header}</h4>
      <p className='font-light text-[16px] text-center sm:text-left'>{text}</p>
    </div>
  );
}
