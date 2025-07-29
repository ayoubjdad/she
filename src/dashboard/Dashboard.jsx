import React from "react";
import styles from "./Dashboard.module.scss";
import { clients, orders, products } from "../data/data";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Business Dashboard</h1>
      <div className={styles.summaryGrid}>
        <div className={styles.card}>
          <h2>Orders</h2>
          <p>{orders.length}</p>
        </div>
        <div className={styles.card}>
          <h2>Revenue</h2>
          <p>
            {orders
              .map((cmd) =>
                cmd.products
                  .map((p) =>
                    p.id
                      ? products.find((pr) => pr.id === p.id).price * p.quantity
                      : 0
                  )
                  .reduce((a, b) => a + b, 0)
              )
              .reduce((a, b) => a + b, 0)}{" "}
            DH
          </p>
        </div>
      </div>

      <div className={styles.tablesSection}>
        <div className={styles.tableBlock}>
          <h3>Orders</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>City</th>
                <th>Products</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((cmd) => {
                return (
                  <tr key={cmd.id}>
                    <td>{cmd.id}</td>
                    <td>{clients.find((c) => c.id === cmd.clientId).name}</td>
                    <td>{cmd.city}</td>
                    <td>
                      {!cmd.products?.length
                        ? "-"
                        : cmd.products
                            .map(
                              (p) => products.find((pr) => pr.id === p.id).name
                            )
                            .join(", ")}
                    </td>
                    <td>
                      {cmd.products
                        .map((p) =>
                          p.id
                            ? products.find((pr) => pr.id === p.id).price *
                              p.quantity
                            : 0
                        )
                        .reduce((a, b) => a + b, 0)}{" "}
                      DH
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.tableBlock}>
          <h3>Sells by Month</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Month</th>
                <th>Orders</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {(() => {
                // Group orders by month
                const monthMap = {};
                orders.forEach((cmd) => {
                  const d = new Date(cmd.date);
                  const month =
                    d.getFullYear() +
                    "-" +
                    String(d.getMonth() + 1).padStart(2, "0");
                  if (!monthMap[month])
                    monthMap[month] = { count: 0, revenue: 0 };
                  monthMap[month].count++;
                  monthMap[month].revenue += cmd.products
                    .map((p) =>
                      p.id
                        ? products.find((pr) => pr.id === p.id).price *
                          p.quantity
                        : 0
                    )
                    .reduce((a, b) => a + b, 0);
                });
                return Object.entries(monthMap)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([month, data]) => (
                    <tr key={month}>
                      <td>{month}</td>
                      <td>{data.count}</td>
                      <td>{data.revenue} DH</td>
                    </tr>
                  ));
              })()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
