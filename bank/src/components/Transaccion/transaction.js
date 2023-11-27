import React from 'react';
import './transaction.css';
const Section = () => {

    return (
      <section>
        <h3>Mis Transacciones</h3>

        <ul class="transaccion">
          <li><strong>Tienda:</strong> Moda Trendy</li>
          <li><strong>Producto:</strong> Chaqueta de Cuero</li>
          <li><strong>Precio:</strong> $199.99</li>
        </ul>

        <ul class="transaccion">
          <li><strong>Tienda:</strong> Tech World</li>
          <li><strong>Producto:</strong> Auriculares Bluetooth</li>
          <li><strong>Precio:</strong> $59.90</li>
        </ul>
      </section>

    );
};

export default (Section);