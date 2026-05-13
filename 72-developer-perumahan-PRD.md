# PRD: Haventerra Residence — Developer Perumahan

## 1. Brand Identity

**Nama Brand:** Haventerra Residence
**Alasan Naming:** Gabungan "Haven" (tempat berlindung, surga) + "Terra" (tanah/bumi). Memberi kesan rumah sebagai sanctuary di atas tanah yang dipilih dengan baik. Terdengar premium, internasional, timeless — cocok untuk developer kelas menengah-atas.

**Tagline:** *"Rumah Impian, Tempat Cerita Bermula."*

**Target Audience:**
- Pasangan muda usia 28-40 (first-home buyer)
- Keluarga muda dengan 1-2 anak
- Profesional menengah-atas, dual income
- Investor properti (segmen sekunder)
- SES B+ sampai A
- Lokasi target: pinggiran kota besar (Tangerang, Bekasi, Bandung Timur)

**Brand Voice:**
- Tone: Aspirational, hangat, terpercaya, family-oriented
- Style copywriting: Storytelling lifestyle, fokus future-living & komunitas
- Avoid: Bahasa terlalu sales pushy, klaim ROI berlebihan

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo elegant, nav, CTA "Konsultasi" |
| 2 | Hero | React island `client:load` | Aerial shot cluster + tagline |
| 3 | About Project | `.astro` static | Cerita visi & lokasi strategis |
| 4 | Cluster / Type | React island `client:visible` | 3-4 tipe rumah dengan harga |
| 5 | Master Plan | React island `client:visible` | Interactive site map cluster |
| 6 | Lifestyle Facilities | React island `client:visible` | Clubhouse, kolam, jogging track, dll |
| 7 | Location Advantage | React island `client:visible` | Map akses, jarak ke landmark |
| 8 | Show Unit Gallery | React island `client:visible` | Lightbox gallery interior |
| 9 | Pricing & Payment | `.astro` static | Skema KPR, DP, cicilan |
| 10 | Developer Profile | `.astro` static | Track record developer |
| 11 | Testimonial Penghuni | React island `client:visible` | Cerita keluarga yang sudah tinggal |
| 12 | FAQ | React island `client:visible` | Pertanyaan umum buyer |
| 13 | Booking CTA | React island `client:idle` | Form konsultasi + survey visit |
| 14 | Footer | `.astro` static | Kontak, alamat marketing gallery |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Tentang • Tipe Rumah • Master Plan • Lokasi • Harga
- CTA: **Konsultasi Gratis**

### Hero
- **Headline:** Rumah Yang Tumbuh Bersama Keluargamu.
- **Subheadline:** Hunian premium dengan konsep eco-living di kawasan strategis Tangerang Selatan. 250 unit dalam 12 hektar lahan hijau, hanya 15 menit dari Stasiun Rawa Buntu.
- **CTA Primary:** Lihat Tipe Rumah
- **CTA Secondary:** Survey Lokasi

Trust badges: "Sertifikat HGB" • "12 Tahun Track Record" • "KPR 9 Bank Partner"

### About Project
- **Heading:** Lebih Dari Sekadar Rumah
- **Body:** Haventerra Residence lahir dari visi sederhana — menciptakan komunitas tempat keluarga bisa tumbuh dengan tenang. Setiap unit dirancang dengan natural lighting maksimal, ventilasi silang, dan dikelilingi 30% ruang hijau. Kami percaya, rumah yang baik adalah investasi untuk masa depan, bukan sekadar bangunan.
- 3 highlight pills:
  - 🌳 30% Open Green Space
  - 🏘️ 250 Unit Eksklusif
  - 🚉 15 Menit ke MRT

### Cluster / Type
- **Heading:** Pilih Tipe Yang Cocok
- **Subheading:** 4 tipe rumah, semua dengan kualitas konstruksi & finishing yang sama.

Grid 4 type cards:

**🏡 Type Anggrek — Rp 850 jt** (terbaik untuk first home)
- Luas tanah: 60 m² | Luas bangunan: 36 m²
- 2 kamar tidur, 1 kamar mandi
- Carport 1 mobil
- 105 unit tersedia

**🏡 Type Melati — Rp 1.2 M** ⭐ Best Seller
- Luas tanah: 72 m² | Luas bangunan: 45 m²
- 2 kamar tidur + 1 study, 2 kamar mandi
- Carport 1 mobil + motor
- 80 unit tersedia

**🏡 Type Cempaka — Rp 1.6 M**
- Luas tanah: 90 m² | Luas bangunan: 60 m²
- 3 kamar tidur, 2 kamar mandi, ruang kerja
- Carport 2 mobil
- 45 unit tersedia

**🏡 Type Anyelir — Rp 2.5 M** (semi-luxury)
- Luas tanah: 120 m² | Luas bangunan: 90 m²
- 3 kamar + master suite, 3 kamar mandi
- Carport 2 mobil + taman belakang
- 20 unit tersedia

### Master Plan
- **Heading:** Master Plan Kawasan
- **Body:** Site plan didesain dengan zoning yang jelas — area komersial di depan, hunian di tengah, dan facility hub di belakang. Tidak ada satu rumah pun yang berbatasan langsung dengan jalan utama.
- Interactive site map (klik area untuk detail)
- Legend: Hunian • Clubhouse • Kolam Renang • Jogging Track • Children Park • Commercial Area • Security Post

### Lifestyle Facilities
- **Heading:** Fasilitas Yang Bikin Betah
- 6 facility cards:
  1. **🏊 Olympic-Size Pool** — Untuk dewasa & anak-anak, lengkap dengan kabana
  2. **🏃 1.2 KM Jogging Track** — Mengelilingi kawasan, view rindang
  3. **🏛️ Clubhouse** — Gym, ruang serbaguna, co-working space
  4. **🎮 Children Playground** — 3 zona berbeda (toddler, kids, teens)
  5. **🛒 Commercial Area** — Minimarket, cafe, laundry, klinik
  6. **🛡️ 24/7 Security & CCTV** — One-gate system dengan akses RFID

### Location Advantage
- **Heading:** Strategis, Akses Mudah
- Interactive map dengan pin landmark:
  - 🚉 5 min — Stasiun Rawa Buntu (KRL)
  - 🛣️ 8 min — Tol Serpong-Pondok Aren
  - 🏫 10 min — Sekolah BSD, Ora et Labora
  - 🏥 12 min — RS Eka Hospital BSD
  - 🛍️ 15 min — AEON Mall, ICE BSD
  - 🛫 35 min — Bandara Soekarno-Hatta

### Show Unit Gallery
- **Heading:** Lihat Detail Setiap Sudut
- Tab filter: Eksterior • Living Room • Dapur • Kamar Tidur • Kamar Mandi • Taman
- Grid masonry 15-20 foto lightbox-able
- Caption: Tipe Melati - Living Room, etc.

### Pricing & Payment
- **Heading:** Skema Pembayaran Fleksibel
- 3 cards:

**💰 Cash Keras (hemat 15%)**
- Diskon 15% dari harga normal
- Surat-menyurat selesai 30 hari
- Bonus AC, water heater, kanopi

**🏦 KPR (paling populer)**
- DP mulai 10% (Rp 85 jt untuk Anggrek)
- Tenor 5 - 25 tahun
- Partner 9 bank: BCA, Mandiri, BRI, BNI, dll
- Bunga mulai 3.99% fixed 3 tahun

**📅 Cash Bertahap (24x)**
- DP 30%, sisa cicil bertahap 24 bulan
- Tanpa bunga
- Free finishing extra (granit upgrade)

Promo banner: *"Promo Grand Opening: Free BPHTB & AJB sampai 31 Desember!"*

### Developer Profile
- **Heading:** Dibangun Oleh Yang Berpengalaman
- **Body:** Haventerra dikembangkan oleh PT Sentral Properti Indonesia — developer yang sudah membangun 8 kawasan hunian sejak 2013. Track record kami: zero delay handover, sertifikat tepat waktu, dan after-sales yang responsif.
- Stats: "8 Kawasan • 12 Tahun • 4.500+ Unit • 0 Delay"
- Sertifikasi badges: REI Member, Bank Partner logos

### Testimonial Penghuni
- **Heading:** Cerita Dari Penghuni Haventerra
- 4 testimonial dengan foto keluarga di rumah:
  - "Pindah ke Haventerra 2 tahun lalu. Anak-anak suka main di playground, kami suka jogging tiap pagi." — *Keluarga Anggara*
  - "Akses ke kantor di SCBD masih nyaman pakai KRL. Lingkungan tenang, jauh dari macet." — *Ibu Rina, Marketing Manager*
  - "Konstruksinya solid, sudah 3 tahun belum ada masalah berarti. After-sales sigap." — *Pak Doni, IT Consultant*

### FAQ
- **Heading:** FAQ
Accordion:
1. Berapa lama proses serah terima? → 18-24 bulan dari tanda jadi, tergantung tipe
2. Apakah ada IPL bulanan? → Rp 200k - 350k tergantung tipe (security, kebersihan, maintenance)
3. Bisa booking online? → Bisa, NUP refundable Rp 5 juta untuk hold unit 14 hari
4. Sertifikat apa yang didapat? → HGB induk, akan dikonversi ke SHM setelah serah terima
5. Bank apa saja yang partner? → BCA, Mandiri, BRI, BNI, BTN, CIMB Niaga, Permata, Danamon, Maybank
6. Apakah cluster aman dari banjir? → Lokasi di elevation 45 mdpl, didesain dengan drainase yang baik

### Booking CTA
- **Heading:** Survey Lokasi, Konsultasi Gratis
- **Body:** Tim marketing kami siap mendampingi survey lokasi & konsultasi finansial. Booking 1 hari sebelumnya untuk slot prioritas.
- Form: Nama • WA • Tipe preferensi • Jadwal survey • Skema pembayaran preferensi
- **CTA:** Jadwalkan Survey

### Footer
- Tagline: *"Setiap rumah, setiap cerita."*
- Marketing gallery: Alamat lengkap + map embed
- Sosmed: IG (@haventerra.id), YouTube (virtual tour), TikTok
- Hotline: WA & telp 24/7

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/modern-housing-aerial | "Aerial cluster perumahan modern" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/modern%20house%20community/ | "Kawasan perumahan hijau" | 1920x1080 |
| About | Unsplash | https://unsplash.com/s/photos/family-modern-home | "Keluarga di rumah modern" | 1200x800 |
| Type Anggrek | Unsplash | https://unsplash.com/s/photos/small-modern-house | "Rumah type minimalis 2 lantai" | 800x600 |
| Type Melati | Pexels | https://www.pexels.com/search/modern%20small%20house%20facade/ | "Type Melati fasad" | 800x600 |
| Type Cempaka | Unsplash | https://unsplash.com/s/photos/modern-suburban-house | "Type Cempaka eksterior" | 800x600 |
| Type Anyelir | Unsplash | https://unsplash.com/s/photos/luxury-modern-house | "Type semi-luxury" | 800x600 |
| Master Plan | Pexels | https://www.pexels.com/search/architecture%20site%20plan/ | "Master plan kawasan" | 1600x900 |
| Facility - Pool | Unsplash | https://unsplash.com/s/photos/residential-pool-community | "Olympic pool kawasan" | 800x600 |
| Facility - Jogging | Pexels | https://www.pexels.com/search/jogging%20track%20park/ | "Jogging track rindang" | 800x600 |
| Facility - Clubhouse | Unsplash | https://unsplash.com/s/photos/modern-clubhouse-interior | "Clubhouse modern" | 800x600 |
| Facility - Playground | Pexels | https://www.pexels.com/search/children%20playground/ | "Children playground" | 800x600 |
| Facility - Commercial | Unsplash | https://unsplash.com/s/photos/neighborhood-cafe-modern | "Commercial area cafe" | 800x600 |
| Location | Pexels | https://www.pexels.com/search/jakarta%20suburb%20map/ | "Map lokasi strategis" | 1600x900 |
| Gallery - Living Room | Unsplash | https://unsplash.com/s/photos/modern-living-room-interior | "Living room show unit" | 800x600 |
| Gallery - Kitchen | Unsplash | https://unsplash.com/s/photos/modern-kitchen-island | "Dapur modern minimalis" | 800x600 |
| Gallery - Bedroom | Pexels | https://www.pexels.com/search/master%20bedroom%20modern/ | "Master bedroom" | 800x600 |
| Gallery - Bathroom | Unsplash | https://unsplash.com/s/photos/modern-bathroom-clean | "Kamar mandi clean" | 800x600 |
| Gallery - Garden | Pexels | https://www.pexels.com/search/small%20backyard%20garden/ | "Taman belakang" | 800x600 |
| Testimonial - Family | Pexels | https://www.pexels.com/search/asian%20family%20home/ | "Keluarga di rumah" | 800x600 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Aerial shot: subtle parallax zoom-in saat scroll
const heroParallax = {
  scale: [1, 1.08],
  transition: { duration: 25, repeat: Infinity, repeatType: "reverse" }
}

// Headline elegant reveal
const aspirationalReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 }
  }
}

// Trust badges: fade-in stagger after headline
```

### Cluster / Type Cards (React island, `client:visible`)
- 4 cards reveal stagger `staggerChildren: 0.1`
- Best Seller badge: floating bounce
- Hover: card lift `y: -12`, image scale `1.05`, soft shadow
- Type tag: subtle color shift on hover

### Master Plan Interactive Map (React island, `client:visible`)
- SVG map with clickable zones
- Hover zone: highlight overlay + tooltip slide-in
- Active zone: pulse ring animation
- Smooth zoom transition pakai `motion.svg` viewBox

### Lifestyle Facilities (React island, `client:visible`)
- 6 cards grid reveal stagger
- Icon scale pop on visible
- Hover: card lift + image inside subtle parallax

### Location Advantage Map (React island, `client:visible`)
- Map pins drop-in sequential
- Distance line draw from center (project) to each landmark
- Hover pin: tooltip with distance & icon

### Show Unit Gallery (React island, `client:visible`)
- Masonry grid layout dengan `layout` prop
- Filter tabs: `layoutId` smooth indicator
- Image hover: scale + overlay slide-up with caption
- Lightbox modal pakai `AnimatePresence` morphing

### Pricing Cards (React island, `client:visible`)
- 3 cards reveal stagger
- "KPR" card slightly emphasized (`scale: 1.05`)
- Promo banner: subtle pulse highlight
- Bank logos: marquee scroll smooth

### Developer Profile Stats
- Counter animation per stat (0 → target) saat scroll into view
- Pakai `useMotionValue` + `animate()`

### Testimonial Carousel (React island, `client:visible`)
- Auto-rotate 7s
- Slide direction-aware
- Pause on hover
- Background subtle gradient shift per slide

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate 180deg
- Active row background color shift

### Booking Form
- Multi-step form animation
- Field focus: label float up + border color
- Submit success: checkmark animation icon

### Scroll Reveal Pattern (reusable)
```tsx
const homelyFade = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Cluster, Master Plan, Facilities, Location, Gallery, Stats, Testimonial, FAQ
- `client:idle` → Booking form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Haventerra Residence — Perumahan Premium Tangerang Selatan
- **Description:** Hunian premium 250 unit dalam 12 hektar lahan hijau di Tangerang Selatan. 15 menit dari MRT, fasilitas lengkap, KPR 9 bank partner. Mulai Rp 850jt.
- **Keywords:** perumahan tangerang selatan, rumah BSD, cluster premium, perumahan KPR, hunian eco-living, rumah baru tangerang
- **OG Image:** Aerial shot kawasan dengan logo overlay (1200x630)
- **Schema:** `RealEstateAgent` + `Residence` + `Product` schema
