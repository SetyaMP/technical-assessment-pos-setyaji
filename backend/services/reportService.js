const db = require('../config/database');

const getDailyRevenue = async () => {

    const query = `
        SELECT
            DATE(tanggal_transaksi) AS tanggal,
            SUM(subtotal) AS total_omzet
        FROM transaksi_penjualan
        GROUP BY DATE(tanggal_transaksi)
        ORDER BY tanggal ASC
    `;

    const [rows] = await db.execute(query);

    return rows;
};

module.exports = {
    getDailyRevenue
};