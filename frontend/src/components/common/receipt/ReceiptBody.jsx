import React from 'react';
import { formatCurrency } from '../../../utils/formatters';

const ReceiptBody = ({
    partyInfo,
    items = [],
    partyType = "Cliente" // "Cliente" or "Proveedor"
}) => {
    return (
        <div>
            {/* Party Information */}
            <div className="receipt-party-info">
                <h3>{partyType}</h3>
                <div className="receipt-info-item">
                    <span className="receipt-info-label">Razón Social: </span>
                    <span className="receipt-info-value">{partyInfo.name}</span>
                </div>
                {partyInfo.ruc && (
                    <div className="receipt-info-item">
                        <span className="receipt-info-label">RUC: </span>
                        <span className="receipt-info-value">{partyInfo.ruc}</span>
                    </div>
                )}
                {partyInfo.address && (
                    <div className="receipt-info-item">
                        <span className="receipt-info-label">Dirección: </span>
                        <span className="receipt-info-value">{partyInfo.address}</span>
                    </div>
                )}
                {partyInfo.branchName && (
                    <div className="receipt-info-item" style={{ fontSize: '11px', color: '#666' }}>
                        Sucursal: {partyInfo.branchName}
                    </div>
                )}
            </div>

            {/* Items Table */}
            <table className="receipt-items-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th className="text-center">Cant.</th>
                        <th className="text-right">P. Unit.</th>
                        <th className="text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="receipt-product-name">{item.product_name}</div>
                                {item.product_sku && (
                                    <div className="receipt-product-sku">SKU: {item.product_sku}</div>
                                )}
                            </td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-right">{formatCurrency(item.unit_price)}</td>
                            <td className="text-right">{formatCurrency(item.subtotal)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReceiptBody;
