import ContactComponent from '../components/contact-components';
import ContactForm from '../components/contact-form';

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center mx-auto my-8 px-4 md:px-8 gap-8">
      <ContactComponent />
      <ContactForm />
    </div>
  )
}