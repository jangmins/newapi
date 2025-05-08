import React from 'react';

function Settings() {
  return (
    <div className="page settings">
      <h2 className="title">앱 설정</h2>
      <div className="subtitle">티끌모아태산</div>
      <div className="settings-box">
        <div className="settings-row">
          <span>앱 제목</span>
          <span>티끌모아태산 <button className="edit-btn">수정</button></span>
        </div>
        <div className="settings-row">
          <span>알림 설정</span>
          <input type="checkbox" />
        </div>
        <div className="settings-row">
          <span>다크 모드</span>
          <input type="checkbox" />
        </div>
      </div>
      <div className="app-info">
        <div>티끌모아태산 v1.0.0</div>
        <div>© 2024 티끌모아태산. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Settings; 