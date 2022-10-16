import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function V2ContactForm() {
  const [sent, setSent] = useState(false);

  return sent ? (
    <div className="text-2xl text-purple max-w-[35ch]"> 
    <p className="mb-10">Thank you for your message. I will get back to you asap!</p>
    <p>While you wait, you can always take a look at my GitHub or play this little quiz I created, all with questions about myself!</p>
    </div>
  ) : (
    <>
      <p className="mb-2">Or simply fill out this contact form!</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid e-mail address")
            .required("E-mail is required"),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={async (values) => {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          setSent(true);
        }}
      >
        {(formik) => (
          <Form className="flex flex-col">
            <label htmlFor="name" className="flex justify-start mt-2">
              Your name
            </label>
            <Field type="text" name="name" className="p-3 my-1 rounded" />
            <ErrorMessage name="name" />
            <label htmlFor="email" className="flex justify-start mt-2">
              Your e-mail
            </label>
            <Field type="email" name="email" className="p-3 my-1 rounded" />
            <ErrorMessage name="email" />
            <label htmlFor="message" className="flex justify-start mt-2">
              Your message
            </label>
            <Field as="textarea" name="message" className="p-3 my-1 rounded" />
            <ErrorMessage name="message" />
            {formik.submitCount > 0 && !formik.isValid && (
              <p>Hmm,something is missing</p>
            )}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={
                "text-white text-xl bg-purple hover:bg-white hover:text-purple hover:cursor-pointer p-3 my-2 rounded"
              }
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
