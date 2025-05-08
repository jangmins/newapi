import React from 'react';

function Status() {
  return (
    <div className="page status">
      <h2 className="title">전체 저축 현황</h2>
      <button className="deposit-btn">입금하기</button>
      <div className="subtitle">티끌모아태산</div>
      <div className="account-box">
        <div className="account-title">티끌모아태산 통장</div>
        <div className="account-number">123-456-789012</div>
        <div className="account-date">최근 거래 2024-03-15</div>
        <div className="account-amount">1,500,000원</div>
      </div>
      <div className="daily-box">
        <div className="daily-title">일별 저축 현황</div>
        <div className="daily-item">커피 절약 2024-03-15 - 15,000원</div>
        <div className="daily-item">배달음식 절약 2024-03-15 - 20,000원</div>
      </div>
    </div>
  );
}

export default Status; 