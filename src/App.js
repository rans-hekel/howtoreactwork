import { useState } from "react";

const content = [
  {
    title: "Pendidikan Berkualitas",
    body: "Mendapatkan pendidikan yang baik dan relevan dengan minat dan tujuan karir Anda adalah langkah pertama menuju sukses. Ini membantu membangun fondasi pengetahuan dan keterampilan yang diperlukan.",
  },
  {
    title: "Kerja Keras dan Konsistensi",
    body: "Kerja keras, dedikasi, dan konsistensi adalah kunci untuk mencapai tujuan. Tetap fokus pada upaya Anda, terus belajar, dan tidak mudah menyerah adalah bagian penting dari perjalanan menuju sukses.",
  },
  {
    title: "Networking dan Kolaborasi",
    body: "Membangun hubungan dengan orang lain di bidang Anda, belajar dari mereka, dan bekerja sama dalam proyek-proyek yang relevan dapat membuka pintu untuk peluang baru dan memperluas jaringan profesional Anda.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} />
      ) : (
        <AnotherTabContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }

  return (
    <div className="tab-content">
      <h4>{item.title}</h4>
      {showDetails && <p>{item.body}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Sembunyikan" : "Tampilkan"} Isi
        </button>

        <div className="hearts-counter">
          <span>{likes} 👍</span>
          <button onClick={handleInc}>+1</button>
          <button>+3</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Batal</button>
        <button>Batal dalam 2d</button>
      </div>
    </div>
  );
}

function AnotherTabContent() {
  return (
    <div className="tab-content">
      <h4>Saya adalah tab yg berbeda, jadi data pada State akan hilang 💣</h4>
      <p>
        Pada saat kamu kembali ke tab yang memiliki data, maka akan hilang dan
        mulai dari awal.
      </p>
    </div>
  );
}
