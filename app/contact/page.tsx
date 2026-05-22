import { Metadata } from 'next';
import { ContactFormSection } from '@/components/sections/contact-form-section';

export const metadata: Metadata = {
  title: 'Contact Us - Lumina Motion Labs',
  description:
    'Get in touch with our team. We are ready to discuss your next project.',
};

export default function ContactPage() {
  return <ContactFormSection />;
}
