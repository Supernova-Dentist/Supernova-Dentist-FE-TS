import { cn } from '@/lib/utils';
import { CheckIcon } from '@radix-ui/react-icons';

export default function ServiceGridListItem({ heading, text, textColors }: ServiceGridListItem) {
  return (
    <li className='flex items-start gap-3'>
      <CheckIcon className='h-6 w-6 flex-shrink-0 text-bronze-ink' />
      <div>
        <h3 className={cn('text-lg font-medium', textColors?.header)}>{heading}</h3>
        <p className={cn('leading-7 text-taupe', textColors?.text)}>{text}</p>
      </div>
    </li>
  );
}
