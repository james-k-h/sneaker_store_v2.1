'use client';
import { CartContext, cartProductPrice } from '@/app/components/AppContext';
import AddressInputs from '@/app/components/layout/AddressInputs';
import SectionHeaders from '@/app/components/layout/header/SectionHeaders';
import CartProduct from '@/app/components/layout/cart/CartProduct';
import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';

const OrderPage = () => {
  const { clearCart } = useContext(CartContext);
  const [order, setOrder] = useState();
  const [loadingOrder, setLoadingOrder] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    if (typeof window.console !== 'undefined') {
      if (window.location.href.includes('clear-cart=1')) {
        clearCart();
      }
    }
    if (id) {
      setLoadingOrder(true);
      fetch('/api/orders?_id=' + id).then((res) => {
        res.json().then((orderData) => {
          setOrder(orderData);
          setLoadingOrder(false);
        });
      });
    }
  }, []);

  let subtotal = 0;

  if (order?.cartProducts) {
    for (const product of order?.cartProducts) {
      subtotal += cartProductPrice(product);
    }
  }

  return (
    <section className="max-w-4xl text-center mx-auto py-32 h-screen">
      <div className="text-center mt-8">
        <SectionHeaders mainHeader="Your Order" />
        <div className="my-4 text-primary font-semibold text-color_1">
          <p className="text-color_1">Thank you for your order.</p>
          <p className="text-color_1">
            You will receive your order as per our{' '}
            <Link className="hover:italic" href="/shipping">
              shipping policy.
            </Link>
          </p>
        </div>
      </div>
      {loadingOrder && <div>Loading your order</div>}
      {order && (
        <div className="text-primary  grid md:grid-cols-2 md:gap-16 mt-16 ">
          <div>
            {order.cartProducts.map((product) => (
              <CartProduct product={product} key={product._id} />
            ))}
            <div className="text-primary flex py-2 justify-end items-center pr-2 text-color_1">
              <div className="font-semibold text-color_1">
                Subtotal:
                <br />
                Delivery:
                <br />
                Total:
              </div>
              <div className="font-bold pl-2 text-right text-color_1">
                ${subtotal}
                <br />
                $0 <br />${subtotal}
              </div>
            </div>
          </div>
          <div>
            <div className="bg-black p-4 rounded-lg">
              <AddressInputs addressProps={order} disabled={true} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default OrderPage;
