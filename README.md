# PanganPeduli

PanganPeduli adalah website donasi dan relawan untuk kampanye bantuan pangan, edukasi gizi, dan kegiatan kemanusiaan. Aplikasi ini dibuat sebagai landing page interaktif yang mempertemukan donatur, calon relawan, dan masyarakat yang ingin mengetahui program-program bantuan.

Website ini menampilkan informasi kampanye donasi, detail kebutuhan bantuan, progres penggalangan dana, dialog donasi melalui QR, serta formulir kontak untuk kolaborasi atau pendaftaran relawan.

## Fitur Utama

- **Landing page responsif** dengan hero section, CTA donasi, dan ilustrasi visual.
- **Navigasi satu halaman** untuk berpindah ke Home, About, Events, dan Contact dengan smooth scroll.
- **Section About** berisi galeri kegiatan, video impact, dan statistik animasi.
- **Daftar kampanye donasi** dengan card berisi gambar, kategori, progres donasi, target, dan sisa hari.
- **Halaman detail kampanye** untuk melihat deskripsi, lokasi, penerima manfaat, penggunaan dana, dan dampak donasi.
- **Dialog donasi** dengan QR Saweria.
- **Dialog informasi** untuk donasi, inspirasi bantuan, dan relawan.
- **Form kontak** dengan notifikasi sukses setelah pesan dikirim.
- **Desain responsif** untuk desktop dan mobile.

## Teknologi

Project ini dibangun menggunakan:

- **React 19** sebagai library UI utama.
- **Vite 7** sebagai development server dan build tool.
- **Material UI 7** untuk komponen UI seperti Button, Card, Dialog, Grid, Snackbar, dan ThemeProvider.
- **MUI Icons** untuk ikon visual pada fitur dan detail kampanye.
- **Emotion** sebagai styling engine bawaan Material UI.
- **ESLint 9** untuk menjaga kualitas dan konsistensi kode.

## Struktur Project

```text
src/
  assets/               Asset gambar, video, dan QR donasi
  components/           Komponen reusable seperti Navbar dan dialog
  sections/             Section utama halaman: Home, About, Events, Contact
  App.jsx               Setup tema, navigasi section, dan layout utama
  main.jsx              Entry point React
  index.css             Global style dan CSS variable
  App.css               Style tambahan aplikasi
```

## Instalasi

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
```

## Menjalankan Development Server

```bash
npm run dev
```

Setelah server berjalan, buka URL lokal yang muncul di terminal, biasanya:

```text
http://localhost:5173
```

## Build Production

```bash
npm run build
```

Hasil build akan dibuat di folder `dist/`.

## Preview Build

```bash
npm run preview
```

## Linting

```bash
npm run lint
```

## Scripts

| Script | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan Vite development server |
| `npm run build` | Membuat build production |
| `npm run preview` | Menjalankan preview hasil build |
| `npm run lint` | Menjalankan ESLint |

## Catatan Donasi

Dialog donasi menggunakan QR Saweria yang tersedia di `src/assets/qr-saweria.png`. Teks di aplikasi menjelaskan bahwa dana dari QR tersebut masuk ke rekening pribadi developer dan tetap dianggap sebagai bentuk donasi.

## Status

Project ini merupakan website frontend statis berbasis React. Form kontak dan dialog donasi saat ini bersifat simulasi/front-end interaction, belum terhubung ke backend, payment gateway, atau database produksi.
