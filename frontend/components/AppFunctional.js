import React, { useState } from "react";

// önerilen başlangıç stateleri
const initialMessage = "";
const initialEmail = "";
const initialSteps = 0;
const initialIndex = 4; //  "B" nin bulunduğu indexi

export default function AppFunctional(props) {
  // AŞAĞIDAKİ HELPERLAR SADECE ÖNERİDİR.
  // Bunları silip kendi mantığınızla sıfırdan geliştirebilirsiniz.
  const [selected, setSelected] = useState(initialIndex);
  const [steps, setSteps] = useState(initialSteps);
  const [email, setEmail] = useState(initialEmail);
  const [message, setMessage] = useState(initialMessage);
  function getXY() {
    // Koordinatları izlemek için bir state e sahip olmak gerekli değildir.
    // Bunları hesaplayabilmek için "B" nin hangi indexte olduğunu bilmek yeterlidir.
  }

  function getXYMesaj() {
    // Kullanıcı için "Koordinatlar (2, 2)" mesajını izlemek için bir state'in olması gerekli değildir.
    // Koordinatları almak için yukarıdaki "getXY" helperını ve ardından "getXYMesaj"ı kullanabilirsiniz.
    // tamamen oluşturulmuş stringi döndürür.
  }

  function reset() {
    setSelected(initialIndex);
    setMessage(initialMessage);
    setSteps(initialSteps);
    setEmail(initialEmail);
    // Tüm stateleri başlangıç ​​değerlerine sıfırlamak için bu helperı kullanın.
  }

  function sonrakiIndex(yon) {
    // Bu helper bir yön ("sol", "yukarı", vb.) alır ve "B" nin bir sonraki indeksinin ne olduğunu hesaplar.
    // Gridin kenarına ulaşıldığında başka gidecek yer olmadığı için,
    // şu anki indeksi değiştirmemeli.

    if (yon === "left") {
      if (selected % 3 !== 0) {
        setSelected(selected - 1);
        setSteps(steps + 1);
      } else {
        alert("hata");
      }
    }
    if (yon === "right") {
      if (selected % 3 !== 2) {
        setSelected(selected + 1);
        setSteps(steps + 1);
      } else {
        alert("hata");
      }
    }
    if (yon === "up") {
      if (selected > 2) {
        setSelected(selected - 3);
        setSteps(steps + 1);
      } else {
        alert("hata");
      }
    }
    if (yon === "down") {
      if (selected < 6) {
        setSelected(selected + 3);
        setSteps(steps + 1);
      } else {
        alert("hata");
      }
    }
  }

  function ilerle(evt) {
    // Bu event handler, "B" için yeni bir dizin elde etmek üzere yukarıdaki yardımcıyı kullanabilir,
    // ve buna göre state i değiştirir.
  }

  function onChange(evt) {
    // inputun değerini güncellemek için bunu kullanabilirsiniz
  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar (2, 2)</h3>
        <h3 id="steps">{steps} kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className={`square${idx === selected ? " active" : ""}`}
          >
            {idx === selected ? "B" : null}
          </div>
        ))}
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button onClick={(e) => sonrakiIndex(e.target.id)} id="left">
          SOL
        </button>
        <button onClick={(e) => sonrakiIndex(e.target.id)} id="up">
          YUKARI
        </button>
        <button onClick={(e) => sonrakiIndex(e.target.id)} id="right">
          SAĞ
        </button>
        <button onClick={(e) => sonrakiIndex(e.target.id)} id="down">
          AŞAĞI
        </button>
        <button onClick={(e) => reset(e.target.id)} id="reset">
          reset
        </button>
      </div>
      <form>
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  );
}
