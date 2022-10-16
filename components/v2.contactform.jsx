import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function V2ContactForm() {
  const [sent, setSent] = useState(false);

  return sent ? (
    <div className="text-2xl text-purple max-w-[35ch]"> 
    <p className="mb-10">Thank you for your message. I will get back to you asap!</p>
  
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
          message: Yup.string().required("Don't forget to write your message"),
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
              <p className="my-1">Make sure that no field is left empty!</p>
            )}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={
                "text-white text-xl p-3 my-2 rounded bg-purple hover:bg-white hover:text-purple hover:cursor-pointer hover:translate-y-1 transition-color duration-200 delay-180"
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
