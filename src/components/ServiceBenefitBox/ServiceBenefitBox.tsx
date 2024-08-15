export default function ServiceBenefitBox({ icon, header, text }: ServiceBenefitBox) {
  return (
    <div className='rounded-lg bg-white p-6 shadow-lg'>
      {icon}
      <h3 className='mt-4 text-lg font-medium'>{header}</h3>
      <p className='mt-2 text-lightGrey'>{text}</p>
    </div>
  );
}
