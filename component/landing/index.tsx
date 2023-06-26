import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "@/styles/Landing.module.css";
import FaqBox from "../common/FaqBox";
import faq_icon1 from "@/public/img/faq_icon1.svg";
import faq_icon2 from "@/public/img/faq_icon2.svg";
import faq_icon3 from "@/public/img/faq_icon3.svg";
import faq_icon4 from "@/public/img/faq_icon4.svg";

const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [successmsg, setSuccessmsg] = useState(false);
  const [servermsg, setServermsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    await axios
      .post("/api", data)
      .then((res) => {
        setServermsg(res.data.name);
        setLoading(false);
        setSuccessmsg(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function scrollToTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="main_container">
      <section className={styles.landing_container}>
        <div className={styles.landing_left_sec}>
          <h1>ChatGPT for Students Trained on Your Class Data</h1>
          <Image
            src="img/text_underline.svg"
            alt=""
            height={17}
            width={401}
            className={styles.underLine}
          />
          <p>
            An AI Tool with complete context on your class data by extracting it
            from Canvas that can answer any question
            <br />
          </p>
          {loading ? (
            <p className={styles.email_input_submit}>Loading...</p>
          ) : successmsg ? (
            <p className={styles.email_input_submit}>{servermsg}</p>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.form_container}
            >
              <div className={styles.sign_up_text}>
                Sign Up for Early Access this Fall
              </div>
              <div className={styles.email_input_sec}>
                <div>
                  <input
                    placeholder="Enter your email address"
                    type="text"
                    className={styles.input_container}
                    {...register("Email", {
                      required: "Required",
                      pattern: {
                        value:
                          /^(?!.*@(?:|g(?:m(?:a(?:i(?:l)?)?)?)?)\.edu$).*@.*\.edu$/,
                        message:
                          "Please enter a valid school email address ending in .edu",
                      },
                    })}
                  />
                  <p className={styles.error_message}>
                    {errors.Email?.message?.toString()}
                  </p>
                </div>
                <div>
                  <select
                    id="Schoolterm"
                    className={styles.input_container}
                    {...register("Schoolterm", {
                      required: "Required",
                    })}
                  >
                    <option value="" disabled selected hidden>What School Term would you like to have access?</option>
                    <option value="summer2023">Summer 2023</option>
                    <option value="fall2023">Fall 2023</option>
                    <option value="spring2024">Spring 2024</option>
                  </select>
                  <p className={styles.error_message}>
                    {errors.Schoolterm?.message?.toString()}
                  </p>
                </div>
                <button>Join</button>
              </div>
            </form>
          )}
        </div>
        <Image src="img/man_with_pc.svg" alt="man" height={454} width={537} />
      </section>
      <section className={styles.faq_container}>
        <h1>
          Ask anything Get <span>Answers</span> in Seconds
        </h1>
        <p>
          Ask the AI about anything related to your class data and it will
          provide you with valuable insights, explanations, and even reference
          the class material.
        </p>
        <div className={styles.faq_boxes_container}>
          <div className={styles.left_container}>
            <div className={styles.head_text}>Class Policy</div>
            <div>
              <FaqBox
                image={faq_icon1}
                title="What is the policy on late work?"
                description="AI: It may be subject to a grade penalty unless prior arrangements have been made with the instructor"
              />
              <FaqBox
                image={faq_icon2}
                title="When is Hw2 due?"
                description="AI: The due date for Hw2 is Sunday, March 19 at 11:59pm"
              />
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.head_text}>Class Content</div>
            <div>
              <FaqBox
                image={faq_icon3}
                title="Where is DNA found inside the cell?"
                description="AI: Photosynthesis is the process by which cells build proteins using the information encoded in DNA from transcriptions into translation"
              />
              <FaqBox
                image={faq_icon4}
                title="Can you provide resources for practicing calculus?"
                description="AI: Here are top 3 Materials to practicing Calculus based on your Data. Khan Academy, Calculus textbooks, MIT OpenCourseWare"
              />
            </div>
          </div>
        </div>
        <div className={styles.add_more_text}>And more...</div>
      </section>
      <section className={styles.join_waitlist_container}>
        <h1>Get Early Access to Your Personal AI Teaching Assistant</h1>
        <button onClick={() => scrollToTop()}>Join the waitlist →</button>
      </section>
      <footer className={styles.footer_container}>
        Copyright © CourseMind 2023
      </footer>
    </div>
  );
};

export default Landing;
