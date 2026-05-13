CREATE DATABASE technical_assessment_pos;

USE technical_assessment_pos;

CREATE TABLE master_barang (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    sku VARCHAR(50) UNIQUE NOT NULL,
    nama_barang VARCHAR(255) NOT NULL,
    is_active TINYINT(1) DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transaksi_penjualan (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    no_faktur VARCHAR(50) NOT NULL UNIQUE,
    barang_id BIGINT NOT NULL,
    tanggal_transaksi DATETIME NOT NULL,
    qty INT NOT NULL,
    harga_modal DECIMAL(18,2) NOT NULL,
    harga_jual DECIMAL(18,2) NOT NULL,
    subtotal DECIMAL(18,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_barang
    FOREIGN KEY (barang_id)
    REFERENCES master_barang(id)
);