import React from 'react';

function Points() {
  return (
    <div className="page points">
      <h2 className="title">포인트</h2>
      <div className="subtitle">티끌모아태산</div>
      <div className="points-box">
        <div className="points-title">보유 포인트</div>
        <div className="points-amount">1,250 P</div>
        <div className="points-desc">현재 보유 포인트: 1,250 P</div>
      </div>
      <div className="points-history-box">
        <div className="points-history-title">포인트 내역</div>
        <div className="points-history-item">절약 목표 달성 2024-03-15 +100 P</div>
        <div className="points-history-item">포인트 사용 2024-03-14 -50 P</div>
        <div className="points-history-item">연속 저축 보너스 2024-03-13 +200 P</div>
      </div>
    </div>
  );
}

export default Points; 