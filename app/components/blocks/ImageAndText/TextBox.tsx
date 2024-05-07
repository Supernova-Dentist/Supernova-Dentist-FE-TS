type TextBoxProps = {
  emphasis?: string;
  main: string;
  descriptionOne: string;
  descriptionTwo?: string;
  containerBg?: string;
  descriptionOneColor?: string;
  titleColor?: string;
};

export default function TextBox({
  emphasis,
  main,
  descriptionOne,
  descriptionTwo,
  containerBg = 'bg-grey',
  descriptionOneColor = 'text-cream',
  titleColor = 'text-cream',
}: TextBoxProps) {
  return (
    <div className={`${containerBg} w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center`}>
      <h3 className={`${titleColor} text-2xl sm:text-3xl mb-4 sm:mb-8 flex gap-2`}>
        {emphasis !== undefined ? <span className='text-gold'>{emphasis}</span> : null}
        {main}
      </h3>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <p className={descriptionOneColor}>{descriptionOne}</p>
        {descriptionTwo !== undefined ? <p className='text-cream'>{descriptionTwo}</p> : null}
      </div>
    </div>
  );
}
