import React from 'react';
import PrintableModal from '../../common/receipt/PrintableModal';
import ReceiptTemplate from '../../common/receipt/ReceiptTemplate';

const SalesOrderReceipt = ({
    visible,
    onClose,
    order
}) => {
    if (!visible || !order) return null;

    // Prepare party info
    const partyInfo = {
        name: order.customer_name,
        ruc: order.customer_ruc,
        address: order.delivery_address,
        branchName: order.delivery_branch_name
    };

    return (
        <PrintableModal
            visible={visible}
            onClose={onClose}
            title={`Orden de Venta ${order.order_number}`}
        >
            <ReceiptTemplate
                documentType="ORDEN DE VENTA"
                documentNumber={order.order_number}
                documentDate={order.date}
                partyInfo={partyInfo}
                partyType="Cliente"
                items={order.items || []}
                totalAmount={order.total_amount}
                showPaymentDetails={false}
            />
        </PrintableModal>
    );
};

export default SalesOrderReceipt;
