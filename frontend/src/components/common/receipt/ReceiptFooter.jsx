import React from 'react';
import { formatCurrency, formatDate } from '../../../utils/formatters';

const ReceiptFooter = ({
    totalAmount,
    amountPaid = 0,
    payments = [],
    notes,
    showPaymentDetails = false
}) => {
    const pendingAmount = totalAmount - amountPaid;

    return (
        <div>
            {/* Totals Section */}
            <div className="receipt-totals">
                <div className="receipt-total-row grand-total">
                    <span className="receipt-total-label">TOTAL:</span>
                    <span className="receipt-total-value">{formatCurrency(totalAmount)}</span>
                </div>

                {showPaymentDetails && (
                    <>
                        <div className="receipt-total-row">
                            <span className="receipt-total-label">Pagado:</span>
                            <span className="receipt-total-value">{formatCurrency(amountPaid)}</span>
                        </div>
                        <div className="receipt-total-row" style={{ color: pendingAmount > 0 ? '#dc2626' : '#059669' }}>
                            <span className="receipt-total-label">
                                {pendingAmount > 0 ? 'Pendiente:' : 'Cancelado'}
                            </span>
                            <span className="receipt-total-value">{formatCurrency(Math.abs(pendingAmount))}</span>
                        </div>
                    </>
                )}
            </div>

            {/* Payment History */}
            {showPaymentDetails && payments && payments.length > 0 && (
                <div className="receipt-payment-history">
                    <h4>Historial de Pagos</h4>
                    <table className="receipt-payment-table">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Notas</th>
                                <th className="text-right">Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={index}>
                                    <td>{formatDate(payment.date)}</td>
                                    <td>{payment.notes || '-'}</td>
                                    <td className="text-right">{formatCurrency(payment.amount)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Notes */}
            {notes && (
                <div className="receipt-notes">
                    <strong>Notas:</strong> {notes}
                </div>
            )}

            {/* Footer */}
            <div className="receipt-footer">
                <p>Gracias por su preferencia</p>
                <p>Documento generado electrónicamente</p>
            </div>
        </div>
    );
};

export default ReceiptFooter;
