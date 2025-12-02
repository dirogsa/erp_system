import React from 'react';
import PrintableModal from '../../common/receipt/PrintableModal';
import ReceiptTemplate from '../../common/receipt/ReceiptTemplate';

const PurchaseOrderReceipt = ({
    visible,
    onClose,
    order
}) => {
    if (!visible || !order) return null;

    // Prepare party info
    const partyInfo = {
        name: order.supplier_name,
        ruc: order.supplier_ruc,
        address: order.supplier_address
    };

    return (
        <PrintableModal
            visible={visible}
            onClose={onClose}
            title={`Orden de Compra ${order.order_number}`}
        >
            <ReceiptTemplate
                documentType="ORDEN DE COMPRA"
                documentNumber={order.order_number}
                documentDate={order.date}
                partyInfo={partyInfo}
                partyType="Proveedor"
                items={order.items || []}
                totalAmount={order.total_amount}
                showPaymentDetails={false}
            />
        </PrintableModal>
    );
};

export default PurchaseOrderReceipt;
