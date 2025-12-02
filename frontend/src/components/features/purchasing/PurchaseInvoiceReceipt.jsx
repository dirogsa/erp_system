import React from 'react';
import PrintableModal from '../../common/receipt/PrintableModal';
import ReceiptTemplate from '../../common/receipt/ReceiptTemplate';

const PurchaseInvoiceReceipt = ({
    visible,
    onClose,
    invoice
}) => {
    if (!visible || !invoice) return null;

    // Prepare party info
    const partyInfo = {
        name: invoice.supplier_name,
        ruc: invoice.supplier_ruc,
        address: invoice.supplier_address
    };

    return (
        <PrintableModal
            visible={visible}
            onClose={onClose}
            title={`Factura de Compra ${invoice.invoice_number}`}
        >
            <ReceiptTemplate
                documentType="FACTURA DE COMPRA"
                documentNumber={invoice.invoice_number}
                documentDate={invoice.invoice_date}
                partyInfo={partyInfo}
                partyType="Proveedor"
                items={invoice.items || []}
                totalAmount={invoice.total_amount}
                amountPaid={invoice.amount_paid || 0}
                payments={invoice.payments || []}
                showPaymentDetails={true}
            />
        </PrintableModal>
    );
};

export default PurchaseInvoiceReceipt;
