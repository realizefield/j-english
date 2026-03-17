const unitDataEA01 = {
    id: "EA01",
    title: "be動詞(1)",
    // 導入部分（四角い空欄の問題）
    intro: {
        text: "Be動詞には [is] [am] [are] があり、それぞれ「〜である」という意味をもちます。主語により変わります。",
        table: [
            { subject: "I", be: "am" },
            { subject: "You", be: "are" },
            { subject: "He / She / Tom", be: "is" }
        ]
    },
    // 例文並び替え問題
    sentences: [
        { jp: "私は日本の学生です。", en: ["I", "am", "a", "Japanese", "student"], correct: "I am a Japanese student" },
        { jp: "あなたはサッカー選手です。", en: ["You", "are", "a", "soccer", "player"], correct: "You are a soccer player" },
        { jp: "彼は歯医者です。", en: ["He", "is", "a", "dentist"], correct: "He is a dentist" },
        { jp: "彼女は看護師です。", en: ["She", "is", "a", "nurse"], correct: "She is a nurse" },
        { jp: "トムは芸術家です。", en: ["Tom", "is", "an", "artist"], correct: "Tom is an artist" }
    ]
};