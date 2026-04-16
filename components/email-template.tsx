import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export function EmailTemplate({ name, email, phone, company, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ color: '#333', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>
        Шинэ хүсэлт ирлээ
      </h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px', fontWeight: 'bold', width: '120px' }}>Нэр:</td>
            <td style={{ padding: '10px' }}>{name}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>И-мэйл:</td>
            <td style={{ padding: '10px' }}>{email}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>Утас:</td>
            <td style={{ padding: '10px' }}>{phone || '—'}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px', fontWeight: 'bold' }}>Байгууллага:</td>
            <td style={{ padding: '10px' }}>{company || '—'}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px', fontWeight: 'bold', verticalAlign: 'top' }}>Мессеж:</td>
            <td style={{ padding: '10px' }}>{message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}