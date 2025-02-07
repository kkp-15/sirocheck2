// 陣太鼓の音を再生する関数
function playTaiko() {
    const taikoAudio = document.getElementById('taiko-audio');
    taikoAudio.play();
}

// お城情報を表示する関数
function showCastle() {
    const castles = [
        {
            name: "姫路城",
            description: "姫路城は、兵庫県姫路市にある日本の城で、世界文化遺産にも登録されています。別名は白鷺城（しらさぎじょう）。",
            mapLink: "https://www.google.com/maps?q=姫路城"
        },
        {
            name: "松本城",
            description: "松本城は、長野県松本市にあり、別名を烏城（からすじょう）とも呼ばれる美しい城です。",
            mapLink: "https://www.google.com/maps?q=松本城"
        },
        {
            name: "名古屋城",
            description: "名古屋城は、愛知県名古屋市にある城で、別名は金鯱城（きんしゃちじょう）です。",
            mapLink: "https://www.google.com/maps?q=名古屋城"
        },
        {
            name: "熊本城",
            description: "熊本城は、熊本県熊本市にある城で、桜の名所としても知られています。",
            mapLink: "https://www.google.com/maps?q=熊本城"
        },
        {
            name: "大阪城",
            description: "大阪城は、大阪府大阪市にある城で、日本の城の中でも最も有名な一つです。",
            mapLink: "https://www.google.com/maps?q=大阪城"
        },
        // 他のお城データも追加できます
    ];

    // ランダムにお城を選んで表示
    const randomCastle = castles[Math.floor(Math.random() * castles.length)];
    document.getElementById('castle-name').textContent = randomCastle.name;
    document.getElementById('castle-description').textContent = randomCastle.description;
    document.getElementById('castle-map-link').innerHTML = `<a href="${randomCastle.mapLink}" target="_blank">地図を見る</a>`;
}
