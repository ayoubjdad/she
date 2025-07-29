import styles from "./Dashboard.module.scss";
import { products } from "../data/data";
import { useMemo, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import * as XLSX from "xlsx";

const GOOGLE_SHEET_ID =
  "e/2PACX-1vSrXEILebKHPO5BIh72gMN6YcAc-web3YwEf1VdhvPrAXLzQHes7XhcwXCB65X3frMm1wDxqofmidNU";
const XLSX_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/pub?output=xlsx`;

const statusColor = {
  Pending: { color: "#e28603", backgroundColor: "#f3d9b3" },
  Delivered: { color: "#0e973a", backgroundColor: "#b9eac7" },
  Shipped: { color: "#194cdc", backgroundColor: "#c9d7ff" },
};

const Dashboard = () => {
  const [orderPage, setOrderPage] = useState(1);
  const ORDERS_PER_PAGE = 10;
  const [orders, setOrders] = useState([]);

  // Load data directly from Google Sheets XLSX
  useEffect(() => {
    fetch(XLSX_URL)
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // First row is header
        const [header, ...rows] = jsonData;
        if (!header) return;

        const idx = (name) =>
          header.findIndex(
            (h) => h?.toString().trim().toLowerCase() === name.toLowerCase()
          );

        const newOrders = rows
          .filter((row) => row[idx("id")])
          .map((row) => {
            let productsList = [];
            try {
              const productsCell = row[idx("products")];
              if (productsCell && productsCell !== "undefined") {
                productsList = JSON.parse(productsCell);
              }
            } catch {
              console.warn("Invalid products JSON:", row[idx("products")]);
              productsList = [];
            }

            return {
              id: row[idx("id")] ?? null,
              city: row[idx("city")] ?? "",
              clientName: row[idx("clientName")] ?? "",
              products: productsList,
              date: row[idx("date")] ?? "",
              status: row[idx("status")] ?? "",
              address: row[idx("address")] ?? "",
            };
          });

        setOrders(newOrders.reverse());
      })
      .catch((err) => console.error("❌ Error loading XLSX:", err));
  }, []);

  const revenue = useMemo(() => {
    try {
      return orders
        .map((cmd) =>
          cmd.products
            .map((p) =>
              p.id
                ? products.find((pr) => pr.id === p.id)?.price * p.quantity
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
      {/* <h1 style={{ marginBottom: 32 }}>Business Dashboard</h1> */}
      <div className={styles.summaryGrid}>
        <div className={styles.card}>
          <p>Orders</p>
          <h2>{orders.length}</h2>
        </div>
        <div className={styles.card}>
          <p>Revenue</p>
          <h2>{revenue} DH</h2>
        </div>
        <div className={styles.card}>
          <p>Profit</p>
          <h2>{revenue} DH</h2>
        </div>
        {/* <div className={styles.card}>
          <p>Sells by Month</p>
          <OrdersRevenueChart orders={orders} products={products} />
        </div> */}
      </div>
      <div className={styles.tablesSection}>
        <div className={styles.tableBlock}>
          <h3>Orders</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Client</th>
                <th>Products</th>
                <th>Address</th>
                <th>City</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paginatedOrders.map((cmd) => (
                <tr key={cmd.id}>
                  <td>{cmd.id}</td>
                  <td>{cmd.clientName}</td>
                  <td>
                    {!cmd.products?.length
                      ? "-"
                      : cmd.products
                          .map(
                            (p) =>
                              `${p.quantity} ${
                                products.find((pr) => pr.id === p.id)?.name
                              }` || "?"
                          )
                          .join(", ")}
                  </td>
                  <td>{cmd.address}</td>
                  <td>{cmd.city}</td>
                  <td>
                    {cmd.products
                      .map((p) =>
                        p.id
                          ? products.find((pr) => pr.id === p.id)?.price *
                            p.quantity
                          : 0
                      )
                      .reduce((a, b) => a + b, 0)}{" "}
                    DH
                  </td>
                  <td>
                    <p
                      className={styles.status}
                      style={{
                        backgroundColor:
                          statusColor[cmd.status]?.backgroundColor,
                        color: statusColor[cmd.status]?.color,
                      }}
                    >
                      {cmd.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination controls */}
          <Pagination
            orderPage={orderPage}
            setOrderPage={setOrderPage}
            orders={orders}
            ORDERS_PER_PAGE={ORDERS_PER_PAGE}
          />
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ orderPage, setOrderPage, orders, ORDERS_PER_PAGE }) => {
  return (
    <div className={styles.paginationContainer}>
      <button
        className={`${styles.pageButton} ${
          orderPage === 1 ? styles.disabled : ""
        }`}
        onClick={() => setOrderPage((p) => Math.max(1, p - 1))}
        disabled={orderPage === 1}
      >
        ‹
      </button>

      {Array.from(
        { length: Math.ceil(orders.length / ORDERS_PER_PAGE) },
        (_, i) => i + 1
      )
        .filter(
          (page) =>
            page === 1 ||
            page === Math.ceil(orders.length / ORDERS_PER_PAGE) ||
            (page >= orderPage - 1 && page <= orderPage + 1)
        )
        .map((page, index, arr) => {
          if (index > 0 && page - arr[index - 1] > 1) {
            return (
              <span key={`dots-${page}`} className={styles.dots}>
                ...
              </span>
            );
          }
          return (
            <button
              key={page}
              className={`${styles.pageNumber} ${
                page === orderPage ? styles.activePage : ""
              }`}
              onClick={() => setOrderPage(page)}
            >
              {page}
            </button>
          );
        })}

      <button
        className={`${styles.pageButton} ${
          orderPage === Math.ceil(orders.length / ORDERS_PER_PAGE)
            ? styles.disabled
            : ""
        }`}
        onClick={() =>
          setOrderPage((p) =>
            Math.min(Math.ceil(orders.length / ORDERS_PER_PAGE), p + 1)
          )
        }
        disabled={orderPage === Math.ceil(orders.length / ORDERS_PER_PAGE)}
      >
        ›
      </button>

      <span className={styles.resultsInfo}>
        Showing {Math.min(orderPage * ORDERS_PER_PAGE, orders.length)} of{" "}
        {orders.length} results
      </span>
    </div>
  );
};

const OrdersRevenueChart = ({ orders, products }) => {
  const monthMap = {};
  orders.forEach((cmd) => {
    const d = new Date(cmd.date);
    if (isNaN(d)) return;
    const month =
      d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
    if (!monthMap[month]) monthMap[month] = { count: 0, revenue: 0 };
    monthMap[month].count++;
    monthMap[month].revenue += cmd.products
      .map((p) =>
        p.id
          ? products.find((pr) => pr.id === Number(p.id))?.price * p.quantity
          : 0
      )
      .reduce((a, b) => a + b, 0);
  });

  const months = Object.keys(monthMap).sort();
  const orderCounts = months.map((m) => monthMap[m].count);
  const revenues = months.map((m) => monthMap[m].revenue);

  const series = [
    { name: "Orders", type: "line", data: orderCounts },
    // { name: "Revenue (DH)", type: "line", data: revenues },
  ];

  const options = {
    chart: { height: 100, type: "line", toolbar: { show: false } },
    stroke: { width: [3, 3], curve: "smooth" },
    colors: ["#781428"],
    markers: { size: 0 },
    xaxis: {
      categories: months,
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: [
      {
        labels: { show: false },
        axisTicks: { show: false },
        axisBorder: { show: false },
      },
    ],
    grid: { show: false },
    tooltip: { shared: true, intersect: false },
    legend: { position: "top" },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={100}
      width="100%"
    />
  );
};

export default Dashboard;
