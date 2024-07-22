import TextBoxContainer from './TextBoxContainer';

type TextBoxProps = { title?: string; textOne?: string; textTwo?: string; children?: React.ReactNode };

export default function TextBox({ title, textOne, textTwo, children }: TextBoxProps) {
  return (
    <TextBoxContainer>
      {title !== undefined ? <h3 className='text-2xl sm:text-3xl'>{title}</h3> : null}
      <p>{textOne}</p>
      {textTwo !== undefined ? <p>{textTwo}</p> : null}
      {children}
    </TextBoxContainer>
  );
}
