import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import github from "../../../assets/icons/github.png";
import facebook from "../../../assets/icons/facebook.png";
import linkedine from "../../../assets/icons/linkedine.png";
import gmail from "../../../assets/icons/gmail.png";
import { Link } from "react-router-dom";

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wnlpimn",
        "template_2p50r9l",
        form.current,
        "flWL0VgRD16SmmVwQ"
      )
      .then(
        (result) => {
          toast.success("Message sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="text-[#E2E8F0] pb-24 md:pb-48 ">
      <div className="md:flex gap-20  justify-center">
        <div className="md:w-1/2 mb-10">
          <p className="text-[#38BDF8] pb-4 text-4xl font-bold ">Contact Us</p>
          <div>
            <p className="leading-6">
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know. Or you can just 'say hi' to me.
            </p>
            <div className="flex gap-5 mt-5">
              <Link to={'https://github.com/coderkamrul0'}>
              <img src={github} alt="" />
              </Link>
              <Link to={'https://www.facebook.com/kamrul0903'}>
              <img src={facebook} alt="" />
              </Link>
              <Link to={'https://www.linkedin.com/in/coderkamrul/'}>
              <img src={linkedine} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-5">
              <label>Name</label>
              <input
                className="w-full bg-transparent border border-[#38BDF8] rounded-md p-2"
                type="text"
                required
                name="user_name"
              />
            </div>
            <div className="mb-5">
              <label>Email</label>
              <input
                className="w-full bg-transparent border border-[#38BDF8] rounded-md p-2"
                type="email"
                required
                name="user_email"
              />
            </div>
            <div className="mb-5">
              <label>Message</label>
              <textarea
                required
                className="w-full bg-transparent border border-[#38BDF8] rounded-md p-2"
                name="message"
              />
            </div>
            <input
              className="bg-[#38BDF8] w-full py-1 rounded-md font-bold border-2 border-[#38BDF8] text-black hover:bg-transparent hover:border-2 hover:text-white cursor-pointer"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactUS;
