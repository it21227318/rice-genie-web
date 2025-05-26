import { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PrimaryTypo from "../atoms/Headings";
import PrimaryText from "../atoms/Text";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();

  const initialValues = {
    user_name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    user_name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required")
      .matches(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),

    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),

    message: Yup.string()
      .required("Message is required")
      .test(
        "word-count",
        "Message must be between 10 and 500 words",
        (value) => {
          if (!value) return false;
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount >= 10 && wordCount <= 500;
        }
      ),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const formElement = form.current;
      Object.keys(values).forEach((key) => {
        if (formElement.elements[key]) {
          formElement.elements[key].value = values[key];
        }
      });

      await emailjs.sendForm(
        "service_2bq0wsb",
        "template_mor5gpw",
        formElement,
        "rtHbDjVz2ikPGvmGC"
      );

      setStatus({
        success: true,
        message: "Message sent successfully!",
      });
      toast.success("Your message has been sent to our team!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      resetForm();
    } catch (error) {
      setStatus({
        success: false,
        message: "Failed to send message. Please try again.",
      });
      console.error("Failed to send email:", error);
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="bg-gray-50">
      <div className="container mx-auto p-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="flex flex-col justify-center p-8 rounded-lg w-full">
            <PrimaryTypo
              text="Contact Us"
              className="text-4xl font-bold mb-4"
            />
            <PrimaryText
              text="We would love to hear from you! Please fill out the form, and we will get back to you as soon as possible."
              className="text-lg mb-6"
            />
            <PrimaryText
              text="For urgent inquiries, contact us via email at ssdjayasekara@gmail.com
              or call us at (+94) 71 868 4580"
              className="text-lg mb-6"
            />
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, status }) => (
              <Form
                ref={form}
                className="bg-white rounded-lg shadow-lg p-8 space-y-6 m-2"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="user_name"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="user_name"
                    id="user_name"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="user_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message (10-500 words)
                  </label>
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    rows="4"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {status && (
                  <div
                    className={`text-sm ${
                      status.success ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
