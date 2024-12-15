<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jual Akun VPN & Kuota Internet</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f8f9fa;
            color: #333;
        }
        header {
            background: #007bff;
            color: white;
            padding: 15px 20px;
            text-align: center;
        }
        .container {
            padding: 20px;
        }
        .product {
            border: 1px solid #ddd;
            border-radius: 5px;
            background: white;
            margin-bottom: 20px;
            padding: 15px;
        }
        .product h2 {
            margin: 0 0 10px;
        }
        .product p {
            margin: 5px 0;
        }
        .product .price {
            font-size: 18px;
            font-weight: bold;
            color: #28a745;
        }
        .order-form {
            border: 1px solid #ddd;
            border-radius: 5px;
            background: white;
            padding: 15px;
        }
        .order-form label {
            display: block;
            margin: 10px 0 5px;
        }
        .order-form input, .order-form textarea, .order-form button {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .order-form button {
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        .order-form button:hover {
            background: #0056b3;
        }
    </style>
</head>
<body>
    <header>
        <h1>Jual Akun VPN & Kuota Internet</h1>
    </header>
    <div class="container">
        <div class="product">
            <h2>Paket VPN Premium</h2>
            <p>Akses internet aman dan cepat dengan server global.</p>
            <p class="price>Harga: Rp50.000/bulan</p>
        </div>
        <div class="product">
            <h2>Paket Kuota Internet</h2>
            <p>Kuota internet murah dengan jaringan stabil.</p>
            <p class="price">Harga: Rp25.000/5GB</p>
        </div>
        <div class="order-form">
            <h2>Form Pemesanan</h2>
            <form action="https://example.com/order" method="POST">
                <label for="name">Nama Lengkap</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
                <label for="product">Produk</label>
                <select id="product" name="product" required>
                    <option value="vpn">Paket VPN Premium</option>
                    <option value="kuota">Paket Kuota Internet</option>
                </select>
                <label for="message">Catatan</label>
                <textarea id="message" name="message" rows="4"></textarea>
                <button type="submit">Pesan Sekarang</button>
            </form>
        </div>
    </div>
</body>
</html>
