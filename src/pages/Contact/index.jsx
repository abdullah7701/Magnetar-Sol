import { useState } from "react";
import contactImg from '../../resources/images/contact-img.svg';

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setTimeout(() => {
      setButtonText("Send");
      setStatus({ success: true, message: "Message sent successfully" });
      setFormDetails({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section style={{ backgroundColor: '#0086c7' }} className="py-36">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-wrap">
        <div className="w-full md:w-1/2 mb-8 flex justify-center">
            <img
            src={contactImg}
            alt="Contact Us"
            className="w-full max-w-[400px] -ml-40"
            />
        </div>
        <div className="w-full md:w-1/2 max-w-xl mx-auto px-5">
            <h2 className="text-white text-4xl font-bold mb-2">Get In Touch</h2>
            <p className="text-white text-lg mb-6">
            Tell us about your project! Whether it's development, design, or consultation, we'd love to help you bring your vision to life.
            </p>
            <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-5">
                <div className="flex w-full gap-5">
                <input
                    type="text"
                    name="firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    className="w-1/2 bg-white bg-opacity-10 border border-white rounded-full text-white py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
                <input
                    type="text"
                    name="lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    className="w-1/2 bg-white bg-opacity-10 border border-white rounded-full text-white py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
                </div>
                <div className="flex w-full gap-5">
                <input
                    type="email"
                    name="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="w-1/2 bg-white bg-opacity-10 border border-white rounded-full text-white py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
                <input
                    type="tel"
                    name="phone"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={handleChange}
                    className="w-1/2 bg-white bg-opacity-10 border border-white rounded-full text-white py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
                </div>

                <select
                name="service"
                value={formDetails.service}
                onChange={handleChange}
                className="w-full bg-white bg-opacity-10 border border-white rounded-full text-black py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mt-3"
                >
                <option value="" disabled>Select Service</option>
                <option value="webDevelopment">Web Development</option>
                <option value="appDevelopment">App Development</option>
                <option value="uiDesign">UI/UX Design</option>
                <option value="seo">SEO Optimization</option>
                <option value="cloudSolutions">Cloud Solutions</option>
                <option value="saasDevelopment">SAAS Development</option>
                <option value="softwareDevelopment">Software Development</option>
                <option value="digitalMarketing">Digital Marketing</option>
                <option value="aiSolution">AI Solution</option>
                <option value="other">Other</option>
                </select>

                <input
                type="text"
                name="budget"
                value={formDetails.budget}
                placeholder="Budget"
                onChange={handleChange}
                className="w-full bg-white bg-opacity-10 border border-white rounded-full text-white py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mt-3"
                />

                <textarea
                name="message"
                value={formDetails.message}
                placeholder="Message"
                onChange={handleChange}
                rows="6"
                className="w-full bg-white bg-opacity-10 border border-white rounded-xl text-white py-4 px-6 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mt-5"
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-white text-black py-4 px-12 text-xl font-bold rounded-full mt-5 hover:bg-indigo-500 hover:text-white transition duration-300"
            >
                <span>{buttonText}</span>
            </button>
            {status.message && (
                <p className={`mt-4 font-semibold ${status.success ? 'text-green-500' : 'text-red-500'}`}>
                {status.message}
                </p>
            )}
            </form>
        </div>
        </div>
    </section>
  );
};

export default ContactForm;
