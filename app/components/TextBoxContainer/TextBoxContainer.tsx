type TextBoxContainerProps = { children: React.ReactNode };

export default function TextBoxContainer({ children }: TextBoxContainerProps) {
  return <div className='w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center gap-4'>{children}</div>;
}
