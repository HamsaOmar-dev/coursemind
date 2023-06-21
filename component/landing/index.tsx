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
    console.log(data);
    // setLoading(true);
    // await axios
    //   .post("/api", data)
    //   .then((res) => {
    //     setServermsg(res.data);
    //     setLoading(false);
    setSuccessmsg(true);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  console.log(successmsg);

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
            Empowering student success by seamlessly integrating Canvas data and
            providing intelligent support through ChatGPT for a smarter learning
            experience
          </p>
          {loading ? (
            <p className={styles.loading_text}>Loading...</p>
          ) : successmsg ? (
            <p className={styles.email_input_submit}>{servermsg}</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.email_input_sec}>
                {/* <input type="email" placeholder="Enter your email address" /> */}
                <input
                  placeholder="Enter your email address"
                  type="text"
                  className={styles.input_container}
                  {...register("Email", {
                    required: "Required",
                    pattern: {
                      value:
                        /^(?!.*@(?:|g(?:m(?:a(?:i(?:l)?)?)?)?)\.edu$).*@.*\.edu$/,
                      message: "Please enter a valid school email address",
                    },
                  })}
                />
                <button>Join</button>
                {/* <p className={styles.input_error_section}> */}
                <p>
                  {errors.companyEmail?.message?.toString()}
                </p>
              </div>
            </form>
            // :
            // <div className={styles.email_input_submit}>Thank You for Your Submission!</div>
          )}
          {/* {true ?
            <div className={styles.email_input_sec}>
              <input type="email" placeholder="Enter your email address" />
              <button>Join</button>
            </div> :
            <div className={styles.email_input_submit}>Thank You for Your Submission!</div>
          } */}
        </div>
        <Image src="img/man_with_pc.svg" alt="man" height={454} width={537} />
      </section>
      <section className={styles.faq_container}>
        <h1>
          Ask anything Get <span>Answers</span> in Seconds
        </h1>
        <p>
          Ask the AI about anything related to your class Data and it will
          provide you with valuable insights, explanations, and even
          recommendations. Our Platform is here to assist your learning journey
        </p>
        <div className={styles.faq_boxes_container}>
          <div className={styles.left_container}>
            <div className={styles.head_text}>Class Policy</div>
            <div>
              <FaqBox
                image={faq_icon1}
                title="What is the policy on late work?"
                description="It may be subject to a grade penalty unless prior arrangements have been made with the instructor"
              />
              <FaqBox
                image={faq_icon2}
                title="When is Hw2 due?"
                description='Based on the information provided, the due date for "HW2" is Thursday, June 21st 2023 at 9am'
              />
            </div>
          </div>
          <div className={styles.right_container}>
            <div className={styles.head_text}>Class Content</div>
            <div>
              <FaqBox
                image={faq_icon3}
                title="Where is DNA found inside the cell?"
                description="Photosynthesis is the process by which cells build proteins using the information encoded in DNA from transcriptions into translation"
              />
              <FaqBox
                image={faq_icon4}
                title="Can you provide resources for practicing calculus?"
                description="Here are top 3 Materials to practicing Calculus based on your Data. Khan Academy, Calculus textbooks, MIT OpenCourseWare"
              />
            </div>
          </div>
        </div>
        <div className={styles.add_more_text}>And more...</div>
      </section>
      <section className={styles.join_waitlist_container}>
        <h1>Get Early Access to your Personal AI Teaching Assistant</h1>
        <button onClick={() => scrollToTop()}>Join the waitlist →</button>
      </section>
      <footer className={styles.footer_container}>
        Copyright © CourseMind 2023
      </footer>
    </div>
  );
};

export default Landing;
