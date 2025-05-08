import React from 'react';

function Home() {
  return (
    <div className="page home">
      <h2 className="title">저축 목표</h2>
      <div className="subtitle">티끌모아태산</div>
      <div className="goal-box">
        <div className="goal-title">아이폰 15</div>
        <div className="goal-amount">1,500,000원</div>
        <button className="edit-btn">목표 수정하기</button>
      </div>
      <div className="current-box">
        <div className="current-title">현재 저축액</div>
        <div className="current-amount">500,000원</div>
        <div className="remain">목표까지 1,000,000원 남음</div>
      </div>
    </div>
  );
}

export default Home; 