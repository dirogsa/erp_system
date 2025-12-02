import React from 'react';
import ReceiptHeader from './ReceiptHeader';
import ReceiptBody from './ReceiptBody';
import ReceiptFooter from './ReceiptFooter';
import './receipt.css';

const ReceiptTemplate = ({
    documentType,
    documentNumber,
    documentDate,
    partyInfo,
    partyType = "Cliente",
    items = [],
    totalAmount,
    amountPaid = 0,
    payments = [],
    notes,
    showPaymentDetails = false,
    companyName,
    companyInfo
}) => {
    return (
        <div className="receipt-container">
            <ReceiptHeader
                documentType={documentType}
                documentNumber={documentNumber}
                documentDate={documentDate}
                companyName={companyName}
                companyInfo={companyInfo}
            />

            <ReceiptBody
                partyInfo={partyInfo}
                partyType={partyType}
                items={items}
            />

            <ReceiptFooter
                totalAmount={totalAmount}
                amountPaid={amountPaid}
                payments={payments}
                notes={notes}
                showPaymentDetails={showPaymentDetails}
            />
        </div>
    );
};

export default ReceiptTemplate;
