import React, { useEffect, useState } from 'react';
import styles from '../style/SelectPage.module.css';
import { Link } from 'react-router-dom';
import Mbti from '../component/Mbti';
import Birth from '../component/Birth';

const SelectPage = () => {
  return (
    <div>
      <Mbti />
    </div>
  );
};

export default SelectPage;
