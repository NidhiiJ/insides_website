import ContactUs from '../components/ContactUs'

interface ContactUsPageProps {
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const ContactUsPage: React.FC<ContactUsPageProps> = ({ setName }) => {
  return (
    <div className="min-h-screen py-10 md:py-20 ">
      <ContactUs setName={setName} />
    </div>
  );
};

export default ContactUsPage;

