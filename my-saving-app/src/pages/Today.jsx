import React from 'react';

function Today() {
  return (
    <div className="page today">
      <h2 className="title">오늘의 저축</h2>
      <div className="subtitle">티끌모아태산</div>
      <div className="save-box">
        <div className="save-title">오늘의 저축</div>
        <input className="input-item" placeholder="절약한 항목을 입력하세요" />
        <input className="input-amount" placeholder="절약한 금액을 입력하세요" />
        <button className="save-btn">저장하기</button>
      </div>
      <div className="history-box">
        <div className="history-title">오늘의 저축 내역</div>
        {/* 예시 내역 */}
        <div className="history-item">커피 절약 - 15,000원</div>
        <div className="history-item">배달음식 절약 - 20,000원</div>
      </div>
    </div>
  );
}

export default Today; 