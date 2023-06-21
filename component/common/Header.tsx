import React, { useState } from 'react'
import styles from '@/styles/header.module.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div className={styles.header_container}>
      <Image src="/img/logo.svg" alt='CourseMind' height={32} width={178}/>
      <button>Join the waitlist →</button>
    </div>
  )
}

export default Header;