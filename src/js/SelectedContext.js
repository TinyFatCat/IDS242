import React, { createContext, useState, useContext } from 'react';

const SelectedContext = createContext();

export const SelectedCardProvider = ({ children }) => {
  // 전역 상태를 객체 형태로 초기화
  const [selectedData, setSelectedData] = useState({
    selectedMbti: '', // MBTI 선택 데이터
    selectedBirth: '', // Birth.js에서 선택한 데이터
    // 필요에 따라 추가할 수 있는 다른 전역 상태
  });

  // 상태 업데이트 함수
  const updateSelectedData = (key, value) => {
    setSelectedData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <SelectedContext.Provider value={{ selectedData, updateSelectedData }}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelectedCard = () => {
  return useContext(SelectedContext);
};
