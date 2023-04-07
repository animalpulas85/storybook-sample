import React from 'react';
import './CompanyInfo.scss';

interface CompanyInfoProps {
  companyName: string;
  data: Array<{ id: string; name: string; value: string; status: string }>;
}

export const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyName, data }) => {
  return (
    <div className="company-info">
      <h1 className="company-name">{companyName}</h1>
      <nav className="navigation">
        <a href="https://www.google.com" className="nav-item">
          スケジュール
        </a>
        <a href="https://www.yahoo.co.jp/" className="nav-item">
          結果
        </a>
      </nav>
      <table className="info-table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>value</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 30).map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
