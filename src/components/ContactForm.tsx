import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First Name is required'),
  lastName: Yup.string()
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d+$/, 'Invalid phone number')
    .required('Phone Number is required'),
  message: Yup.string(),
});

const initialValues = {
  firstName: '',
  lastName :'',
  email:'',
  phoneNumber:'',
  fav_language:'',
  message:''
}

interface Values {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber:string,
    fav_language:string,
    message:string
  }

  interface ContactFormProps {
    setName: React.Dispatch<React.SetStateAction<string>>;
  }

const ContactForm:React.FC<ContactFormProps> = ({setName}) => {
    const navigate = useNavigate();

  const handleSubmit = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setName(`${values.firstName} ${values.lastName}`);
    setSubmitting(false);
    navigate('/thankyou');
  };
  return (
    <>
    <Formik initialValues={initialValues} 
    validationSchema={validationSchema}
      onSubmit={handleSubmit}>
    <Form id='contact-form' action="/ThankYou">
            <div className="grid md:grid-cols-2  gap-5 md:gap-[3.25rem] my-5 ">
              <div>
                <label htmlFor="firstName">First Name:</label>
                <br />
                <Field
                  className="appearance-none w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="firstName"
                  name='firstName'
                  placeholder="john"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="lastName">Last Name:</label>
                <br />
                <Field
                  className="appearance-none  w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  name='lastName'
                  id="lastName"
                  placeholder="Doe"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <br />
                <Field
                  className="appearance-none  w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <br />
                <Field
                  className="appearance-none  w-full bg-transparent border-black border-b-[1px] "
                  type="text"
                  id="phoneNumber"
                  name='phoneNumber'
                  placeholder="+91 81030457458"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
              </div>
            </div>

            <div className="my-5 md:my-10">
              <label>Select Subject:</label>
              <div className="flex flex-wrap flex-row gap-3 md:gap-10 pt-3">
                <div className="flex flex-row gap-2">
                  <Field
                    className=""
                    type="radio"
                    id="1"
                    name="fav_language"
                    value="1"
                  />
                  <label htmlFor="1">General Inquiry</label>
                </div>
                <div className="flex flex-row gap-2">
                  <Field type="radio" id="2" name="fav_language" value="2" />
                  <label htmlFor="2">General Inquiry</label>
                </div>
                <div className="flex flex-row gap-2">
                  <Field type="radio" id="3" name="fav_language" value="3" />
                  <label htmlFor="3">General Inquiry</label>
                </div>
                <div className="flex flex-row gap-2">
                  <Field type="radio" id="4" name="fav_language" value="4" />
                  <label htmlFor="4">General Inquiry</label>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <Field
                as='textarea'
                className="w-full appearance-none bg-transparent border-black border-b-2 mb-5"
                name="message"
                id="message"
                placeholder="type a message here.."
              />
            </div>
            
            <div className="w-full h-full flex flex-col items-center md:items-end ">
              <button type="submit" className="border-2 border-black rounded-full py-2 px-8 font-inter flex flex-row items-center font-[600] max-md:mt-5">
                <span className="pr-4 text-[12px] md:text-[18px]">
                  Submit Inquiry
                </span>
                <img src="/images/arrow-black.png" alt="arrow img" />
              </button>
            </div>
           </Form >
           </Formik>
    </>
  )
}

export default ContactForm