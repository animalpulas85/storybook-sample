import React from 'react';
import { render, screen } from '@testing-library/react';
import { CompanyInfo } from '../view/CompanyInfo';

const sampleData = [
  { id: '1', name: 'test1', value: 'value1', status: 'active' },
  { id: '2', name: 'test2', value: 'value2', status: 'inactive' },
];

describe('CompanyInfo', () => {
  it('renders the company name', () => {
    render(<CompanyInfo companyName="Test Company" data={sampleData} />);
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<CompanyInfo companyName="Test Company" data={sampleData} />);
    expect(screen.getByText('スケジュール')).toHaveAttribute('href', 'https://www.google.com');
    expect(screen.getByText('結果')).toHaveAttribute('href', 'https://www.yahoo.co.jp/');
  });

  it('renders the data table with correct data', () => {
    render(<CompanyInfo companyName="Test Company" data={sampleData} />);
    expect(screen.getByText('id')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('value')).toBeInTheDocument();
    expect(screen.getByText('status')).toBeInTheDocument();
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('value1')).toBeInTheDocument();
    expect(screen.getByText('active')).toBeInTheDocument();
  });

  it('renders maximum 30 items in the table', () => {
    const largeData = Array.from({ length: 50 }, (_, i) => ({
      id: `${i + 1}`,
      name: `test${i + 1}`,
      value: `value${i + 1}`,
      status: i % 2 === 0 ? 'active' : 'inactive',
    }));

    render(<CompanyInfo companyName="Test Company" data={largeData} />);
    expect(screen.getAllByRole('row')).toHaveLength(31); // 1 for header row and 30 for data rows
  });
});
