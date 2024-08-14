export default function ServiceStat({ title, text }: ServiceStatProps) {
  return (
    <div className='flex flex-col'>
      <span className='text-lg font-bold text-gold text-center'>{title}</span>
      <span className='text-sm text-lightGrey text-center'>{text}</span>
    </div>
  );
}
