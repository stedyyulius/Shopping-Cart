class Cart {
  constructor() {
    this.cart = {};
  }

  tambahProduk(produk, jumlah) {
    if (!this.cart[produk]) {
      this.cart[produk] = 0;
    }
    this.cart[produk] += jumlah;
  }

  hapusProduk(produk) {
    delete this.cart[produk];
  }

  tampilkanCart() {
    const produk = Object.keys(this.cart);
    for (let i = 0; i < produk.length; i++) {
      console.log(`${produk[i]} (${this.cart[produk[i]]})`);
    }
  }
}

const keranjang = new Cart();

keranjang.tambahProduk("Topi Putih", 2);

keranjang.tambahProduk("Kemeja Hitam", 3);

keranjang.tambahProduk("Sepatu Merah", 1);
keranjang.tambahProduk("Sepatu Merah", 4);
keranjang.tambahProduk("Sepatu Merah", 2);

keranjang.hapusProduk("Kemeja Hitam");

keranjang.hapusProduk("Baju Hijau");

keranjang.tampilkanCart();
