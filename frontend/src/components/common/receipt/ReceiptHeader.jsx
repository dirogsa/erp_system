import React from 'react';
import { formatDate } from '../../../utils/formatters';

const ReceiptHeader = ({
    documentType,
    documentNumber,
    documentDate,
    companyName = "Mi Empresa S.A.C.",
    companyInfo = "RUC: 20123456789 | Tel: (01) 123-4567"
}) => {
    return (
        <div className="receipt-header">
            <h1>{companyName}</h1>
            <div className="company-info">{companyInfo}</div>
            <div style={{ marginTop: '15px', fontSize: '18px', fontWeight: 'bold' }}>
                {documentType}
            </div>
            <div style={{ fontSize: '14px', marginTop: '5px' }}>
                N° {documentNumber}
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                Fecha: {formatDate(documentDate)}
            </div>
        </div>
    );
};

export default ReceiptHeader;
