import React from 'react';
import PrintableModal from '../../common/receipt/PrintableModal';
import ReceiptTemplate from '../../common/receipt/ReceiptTemplate';

const SalesInvoiceReceipt = ({
    visible,
    onClose,
    invoice
}) => {
    if (!visible || !invoice) return null;

    // Prepare party info
    const partyInfo = {
        name: invoice.customer_name,
        ruc: invoice.customer_ruc,
        address: invoice.delivery_address,
        branchName: invoice.delivery_branch_name
    };

    return (
        <PrintableModal
            visible={visible}
            onClose={onClose}
            title={`Factura de Venta ${invoice.invoice_number}`}
        >
            <ReceiptTemplate
                documentType="FACTURA DE VENTA"
                documentNumber={invoice.invoice_number}
                documentDate={invoice.invoice_date}
                partyInfo={partyInfo}
                partyType="Cliente"
                items={invoice.items || []}
                totalAmount={invoice.total_amount}
                amountPaid={invoice.amount_paid || 0}
                payments={invoice.payments || []}
                showPaymentDetails={true}
            />
        </PrintableModal>
    );
};

export default SalesInvoiceReceipt;
