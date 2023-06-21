import React from "react";
import styles from "@/styles/Landing.module.css";
import Image from "next/image";

const FaqBox = ({image, title, description}: any) => {
  return (
    <div className={styles.faq_box_sec}>
      <Image src={image} alt="img" height={64} width={64} />
      <div className={styles.faq_title_des}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
    </div>
  );
};

export default FaqBox;
