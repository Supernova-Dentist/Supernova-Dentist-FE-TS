export default function ServiceBenefit({ icon, header, text }: BenefitContent) {
  return (
    <div className='service-benefit-card rounded-[1.25rem] border border-stone bg-porcelain p-6 shadow-[0_16px_40px_rgba(11,18,24,0.07)]'>
      {icon}
      <h3 className='mt-4 text-xl leading-tight text-obsidian'>{header}</h3>
      <p className='mt-3 leading-7 text-taupe'>{text}</p>
    </div>
  );
}
