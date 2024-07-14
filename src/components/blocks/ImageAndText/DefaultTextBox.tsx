type DefaultTextBoxProps = {
  title: string;
  emphasis?: string;
  descriptionOne: string;
  descriptionTwo?: string;
  descriptionOneColor?: string;
  titleColor?: string;
};

export default function DefaultTextBox({
  title,
  emphasis,
  descriptionOne,
  descriptionTwo,
  descriptionOneColor = 'text-cream',
  titleColor = 'text-cream',
}: DefaultTextBoxProps) {
  return (
    <div className='w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-grey'>
      <h3 className={`${titleColor} text-2xl sm:text-3xl mb-4 sm:mb-8 flex gap-2`}>
        {emphasis !== undefined ? <span className='text-gold'>{emphasis}</span> : null}
        {title}
      </h3>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <p className={descriptionOneColor}>{descriptionOne}</p>
        {descriptionTwo !== undefined ? <p className='text-cream'>{descriptionTwo}</p> : null}
      </div>
    </div>
  );
}
