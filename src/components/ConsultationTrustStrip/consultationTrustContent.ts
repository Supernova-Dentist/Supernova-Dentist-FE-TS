import type { LucideIcon } from 'lucide-react';
import { CircleHelp, ClipboardList, CreditCard, MessageCircle, Stethoscope, Waypoints } from 'lucide-react';

export type ConsultationTrustItem = Readonly<{
  title: string;
  description: string;
  icon: LucideIcon;
}>;

export type ConsultationTrustContent = Readonly<{
  label: string;
  items: readonly [ConsultationTrustItem, ConsultationTrustItem, ConsultationTrustItem, ConsultationTrustItem];
}>;

export const consultationTrustContent = {
  cosmetic: {
    label: 'What your cosmetic consultation enquiry can help with',
    items: [
      {
        title: 'Share your priorities',
        description: 'Tell the team what you would like to change or understand about your smile.',
        icon: MessageCircle,
      },
      {
        title: 'Explore relevant options',
        description: 'Begin a conversation about the treatments already offered by the practice.',
        icon: Waypoints,
      },
      {
        title: 'Understand the next step',
        description: 'The team can explain which type of appointment may be appropriate.',
        icon: ClipboardList,
      },
      {
        title: 'Ask about payment options',
        description: 'Discuss the payment and finance information available for relevant treatment.',
        icon: CreditCard,
      },
    ],
  },
  implant: {
    label: 'What your dental implant enquiry can help with',
    items: [
      {
        title: 'Describe what you need',
        description: 'Tell the team whether you want to discuss replacing one or more missing teeth.',
        icon: MessageCircle,
      },
      {
        title: 'Ask about assessment',
        description: 'Find out what the practice may need to understand before discussing options.',
        icon: Stethoscope,
      },
      {
        title: 'Understand possible next steps',
        description: 'The team can explain which type of consultation may be appropriate.',
        icon: ClipboardList,
      },
      {
        title: 'Ask about payment options',
        description: 'Discuss the payment and finance information available for relevant treatment.',
        icon: CreditCard,
      },
    ],
  },
  appointment: {
    label: 'What your appointment enquiry can help with',
    items: [
      {
        title: 'Explain what you need',
        description: 'Tell the team about routine care, a concern or the appointment you are considering.',
        icon: MessageCircle,
      },
      {
        title: 'Ask about appointment options',
        description: 'The team can help identify an appropriate next step for your enquiry.',
        icon: CircleHelp,
      },
      {
        title: 'Know what happens next',
        description: 'After you enquire, the practice team will contact you about the next step.',
        icon: ClipboardList,
      },
      {
        title: 'Choose how to continue',
        description: 'Use the patient portal when self-booking is available, or wait for the team to call.',
        icon: Waypoints,
      },
    ],
  },
} satisfies Record<'cosmetic' | 'implant' | 'appointment', ConsultationTrustContent>;
