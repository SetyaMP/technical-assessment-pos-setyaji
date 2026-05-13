# Technical Assessment - POS Migration

## Overview

Project ini dibuat untuk menjawab technical assessment terkait migrasi sistem POS legacy ke arsitektur database relasional modern.

Fokus utama:
- Data Integrity
- Financial Precision
- Scalability
- Idempotent Import
- Reporting Consistency

---

## Tech Stack

- Node.js
- Express.js
- MySQL

---

## Key Architecture Decisions

### 1. Primary Key Strategy

Menggunakan:
- BIGINT AUTO_INCREMENT sebagai Primary Key internal
- UNIQUE KEY pada no_faktur untuk deduplication

Alasan:
- Lebih scalable
- JOIN lebih cepat
- Index lebih ringan

---

### 2. Financial Precision

Menggunakan:
- DECIMAL(18,2)

Menghindari:
- FLOAT

Karena FLOAT dapat menyebabkan floating point precision issue pada data finansial.

---

### 3. Historical Reporting Integrity

Soft delete pada master barang tidak boleh mengubah histori transaksi penjualan.

Laporan omzet tetap mengambil seluruh transaksi historis.

---

## Installation

```bash
npm install