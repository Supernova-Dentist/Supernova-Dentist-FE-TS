export default function ServiceBenefit({ icon, header, text }: BenefitContent) {
  return (
    <div className='rounded-lg bg-gray-50 p-6 shadow-lg'>
      {icon}
      <h3 className='mt-4 text-lg font-medium'>{header}</h3>
      <p className='mt-2 text-lightGrey'>{text}</p>
    </div>
  );
}
