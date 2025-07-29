import styles from "./Dashboard.module.scss";
import { clients, orders, products } from "../data/data";
import { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const [orderPage, setOrderPage] = useState(1);
  const ORDERS_PER_PAGE = 10;

  const revenue = useMemo(() => {
    try {
      return orders
        .map((cmd) =>
          cmd.products
            .map((p) =>
              p.id
                ? products.find((pr) => pr.id === p.id).price * p.quantity
                : 0
            )
            .reduce((a, b) => a + b, 0)
        )
        .reduce((a, b) => a + b, 0);
    } catch (error) {
      console.error("❌ Error calculating revenue:", error);
      return 0;
    }
  }, [orders]);

  const paginatedOrders = useMemo(() => {
    const start = (orderPage - 1) * ORDERS_PER_PAGE;
    return orders.slice(start, start + ORDERS_PER_PAGE);
  }, [orders, orderPage]);

  return (
    <div className={styles.dashboardContainer}>
      <h1 style={{ marginBottom: 32 }}>Business Dashboard</h1>
      <div className={styles.summaryGrid}>
        <div className={styles.card}>
          <p>Orders</p>
          <h2>{orders.length}</h2>
          <p className={styles.status}>10%</p>
        </div>
        <div className={styles.card}>
          <p>Revenue</p>
          <h2>{revenue} DH</h2>
          <p className={styles.status}>-2.4%</p>
        </div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
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
              {paginatedOrders.map((cmd) => {
                return (
                  <tr key={cmd.id}>
                    <td>{cmd.id}</td>
                    <td>{clients.find((c) => c.id === cmd.clientId)?.name}</td>
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
          {/* Pagination controls */}
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 12 }}
          >
            <button
              onClick={() => setOrderPage((p) => Math.max(1, p - 1))}
              disabled={orderPage === 1}
              style={{ marginRight: 8 }}
            >
              Previous
            </button>
            <span style={{ alignSelf: "center" }}>
              Page {orderPage} / {Math.ceil(orders.length / ORDERS_PER_PAGE)}
            </span>
            <button
              onClick={() =>
                setOrderPage((p) =>
                  Math.min(Math.ceil(orders.length / ORDERS_PER_PAGE), p + 1)
                )
              }
              disabled={
                orderPage === Math.ceil(orders.length / ORDERS_PER_PAGE)
              }
              style={{ marginLeft: 8 }}
            >
              Next
            </button>
          </div>
        </div>
        <div className={styles.tableBlock}>
          <h3>Sells by Month</h3>
          {/* Table for fallback/quick view */}
          {/* <table className={styles.table}>
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
          </table> */}

          {/* Bar chart for sells by month */}
          <OrdersRevenueChart orders={orders} products={products} />
        </div>
      </div>
    </div>
  );
};

const OrdersRevenueChart = ({ orders, products }) => {
  // Prepare chart data
  const monthMap = {};
  orders.forEach((cmd) => {
    const d = new Date(cmd.date);
    const month =
      d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
    if (!monthMap[month]) monthMap[month] = { count: 0, revenue: 0 };
    monthMap[month].count++;
    monthMap[month].revenue += cmd.products
      .map((p) =>
        p.id ? products.find((pr) => pr.id === p.id).price * p.quantity : 0
      )
      .reduce((a, b) => a + b, 0);
  });

  const months = Object.keys(monthMap).sort();
  const orderCounts = months.map((m) => monthMap[m].count);
  const revenues = months.map((m) => monthMap[m].revenue);

  const series = [
    {
      name: "Orders",
      type: "line",
      data: orderCounts,
    },
    {
      name: "Revenue (DH)",
      type: "line",
      data: revenues,
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      toolbar: { show: true },
    },
    stroke: {
      width: [3, 3],
      curve: "smooth",
    },
    colors: ["#6c63ff", "#ffb347"],
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 5,
    },
    xaxis: {
      categories: months,
      title: { text: "Months" },
    },
    yaxis: [
      {
        title: { text: "Orders" },
      },
      {
        opposite: true,
        title: { text: "Revenue (DH)" },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      position: "top",
    },
  };

  return (
    <div style={{ marginTop: 32 }}>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Dashboard;
