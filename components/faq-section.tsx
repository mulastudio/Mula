const questions = [
  {
    question: "Apa itu undangan digital MULA?",
    answer: "MULA membantu kalian membuat undangan digital yang dapat dipersonalisasi sesuai kebutuhan dan cerita acara.",
  },
  {
    question: "Apakah desain undangan bisa dikustomisasi?",
    answer: "Bisa. Detail seperti nama, tanggal, informasi acara, foto, dan elemen visual dapat disesuaikan berdasarkan pilihan template dan paket layanan.",
  },
  {
    question: "Bagaimana cara memesan undangan?",
    answer: "Pilih template yang disukai, hubungi tim MULA, lalu ikuti proses pengumpulan detail dan personalisasi undangan.",
  },
];

export function FaqSection() {
  return (
    <section className="faq-section section-space" id="faq">
      <div className="container faq-section__inner">
        <div className="faq-section__heading">
          <p className="eyebrow">A few things to know</p>
          <h2>Masih ada yang <span className="serif-italic">ingin ditanyakan?</span></h2>
          <p>Temukan jawaban singkat sebelum memulai undangan kalian bersama MULA.</p>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
