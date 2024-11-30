import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AutoRefresh = ({ timeout = 60000 }) => {
  // 기본 타임아웃: 1분 / 60000
  const navigate = useNavigate();

  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        navigate('/Home'); // 홈 화면 경로
      }, timeout);
    };

    const handleMouseMove = () => resetTimer();

    // 이벤트 리스너 등록
    window.addEventListener('mousemove', handleMouseMove);

    // 타이머 초기화
    resetTimer();

    // 컴포넌트 언마운트 시 클린업
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [navigate, timeout]);

  return null; // 렌더링할 UI 없음
};

export default AutoRefresh;
