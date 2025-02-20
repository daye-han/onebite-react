import "./Header.css";
import { memo } from 'react';

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header); // memo 메서드로 불필요한 리렌더링 방지