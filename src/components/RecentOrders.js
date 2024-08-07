import React from "react";
import "./RecentOrders.css"; // Ensure this file contains necessary styles

const RecentOrders = () => {
  // Dummy data for recent orders
  const orders = [
    { c_name: "Wade Wareen", id: 12334, amount: "$12.32", status: "Delivered" },
    { c_name: "Jane Cooper", id: 23134, amount: "$132.32", status: "Pending" },
    { c_name: "Cody Fisher", id: 14134, amount: "$42.32", status: "Delivered" },
    { c_name: "Guy Hawkins", id: 98734, amount: "$92.32", status: "Cancelled" },
    { c_name: "Wade Wareen", id: 96734, amount: "$22.32", status: "Delivered" },
  ];

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.c_name}</td>
              <td>{order.id}</td>
              <td>{order.amount}</td>
              <td id={`recent-${order.status.toLowerCase()}`}>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;