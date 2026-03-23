document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('card-grid');
    const tabs = document.querySelectorAll('.tab-btn');

    // 데이터를 변수에 직접 저장하여 CORS 문제 해결 및 로컬 실행 보장
    const vocabData = [
        // 히라가나 데이터
        { "id": "a", "script": "hira", "kana": "あ", "romaji": "a", "img": "assets/img/hiragana/a.png" },
        { "id": "i", "script": "hira", "kana": "い", "romaji": "i", "img": "assets/img/hiragana/i.png" },
        { "id": "u", "script": "hira", "kana": "う", "romaji": "u", "img": "assets/img/hiragana/u.png" },
        { "id": "e", "script": "hira", "kana": "え", "romaji": "e", "img": "assets/img/hiragana/e.png" },
        { "id": "o", "script": "hira", "kana": "お", "romaji": "o", "img": "assets/img/hiragana/o.png" },
        { "id": "ka", "script": "hira", "kana": "か", "romaji": "ka", "img": "assets/img/hiragana/ka.png" },
        { "id": "ki", "script": "hira", "kana": "き", "romaji": "ki", "img": "assets/img/hiragana/ki.png" },
        { "id": "ku", "script": "hira", "kana": "く", "romaji": "ku", "img": "assets/img/hiragana/ku.png" },
        { "id": "ke", "script": "hira", "kana": "け", "romaji": "ke", "img": "assets/img/hiragana/ke.png" },
        { "id": "ko", "script": "hira", "kana": "こ", "romaji": "ko", "img": "assets/img/hiragana/ko.png" },
        { "id": "sa", "script": "hira", "kana": "さ", "romaji": "sa", "img": "assets/img/hiragana/sa.png" },
        { "id": "shi", "script": "hira", "kana": "し", "romaji": "shi", "img": "assets/img/hiragana/shi.png" },
        { "id": "su", "script": "hira", "kana": "す", "romaji": "su", "img": "assets/img/hiragana/su.png" },
        { "id": "se", "script": "hira", "kana": "せ", "romaji": "se", "img": "assets/img/hiragana/se.png" },
        { "id": "so", "script": "hira", "kana": "そ", "romaji": "so", "img": "assets/img/hiragana/so.png" },
        { "id": "ta", "script": "hira", "kana": "た", "romaji": "ta", "img": "assets/img/hiragana/ta.png" },
        { "id": "chi", "script": "hira", "kana": "ち", "romaji": "chi", "img": "assets/img/hiragana/chi.png" },
        { "id": "tsu", "script": "hira", "kana": "つ", "romaji": "tsu", "img": "assets/img/hiragana/tsu.png" },
        { "id": "te", "script": "hira", "kana": "て", "romaji": "te", "img": "assets/img/hiragana/te.png" },
        { "id": "to", "script": "hira", "kana": "と", "romaji": "to", "img": "assets/img/hiragana/to.png" },
        { "id": "na", "script": "hira", "kana": "な", "romaji": "na", "img": "assets/img/hiragana/na.png" },
        { "id": "ni", "script": "hira", "kana": "に", "romaji": "ni", "img": "assets/img/hiragana/ni.png" },
        { "id": "nu", "script": "hira", "kana": "ぬ", "romaji": "nu", "img": "assets/img/hiragana/nu.png" },
        { "id": "ne", "script": "hira", "kana": "ね", "romaji": "ne", "img": "assets/img/hiragana/ne.png" },
        { "id": "no", "script": "hira", "kana": "の", "romaji": "no", "img": "assets/img/hiragana/no.png" },
        { "id": "ha", "script": "hira", "kana": "は", "romaji": "ha", "img": "assets/img/hiragana/ha.png" },
        { "id": "hi", "script": "hira", "kana": "ひ", "romaji": "hi", "img": "assets/img/hiragana/hi.png" },
        { "id": "fu", "script": "hira", "kana": "ふ", "romaji": "fu", "img": "assets/img/hiragana/fu.png" },
        { "id": "he", "script": "hira", "kana": "へ", "romaji": "he", "img": "assets/img/hiragana/he.png" },
        { "id": "ho", "script": "hira", "kana": "ほ", "romaji": "ho", "img": "assets/img/hiragana/ho.png" },
        { "id": "ma", "script": "hira", "kana": "ま", "romaji": "ma", "img": "assets/img/hiragana/ma.png" },
        { "id": "mi", "script": "hira", "kana": "み", "romaji": "mi", "img": "assets/img/hiragana/mi.png" },
        { "id": "mu", "script": "hira", "kana": "む", "romaji": "mu", "img": "assets/img/hiragana/mu.png" },
        { "id": "me", "script": "hira", "kana": "め", "romaji": "me", "img": "assets/img/hiragana/me.png" },
        { "id": "mo", "script": "hira", "kana": "も", "romaji": "mo", "img": "assets/img/hiragana/mo.png" },
        { "id": "ya", "script": "hira", "kana": "や", "romaji": "ya", "img": "assets/img/hiragana/ya.png" },
        { "id": "e1", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "yu", "script": "hira", "kana": "ゆ", "romaji": "yu", "img": "assets/img/hiragana/yu.png" },
        { "id": "e2", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "yo", "script": "hira", "kana": "よ", "romaji": "yo", "img": "assets/img/hiragana/yo.png" },
        { "id": "ra", "script": "hira", "kana": "ら", "romaji": "ra", "img": "assets/img/hiragana/ra.png" },
        { "id": "ri", "script": "hira", "kana": "り", "romaji": "ri", "img": "assets/img/hiragana/ri.png" },
        { "id": "ru", "script": "hira", "kana": "る", "romaji": "ru", "img": "assets/img/hiragana/ru.png" },
        { "id": "re", "script": "hira", "kana": "れ", "romaji": "re", "img": "assets/img/hiragana/re.png" },
        { "id": "ro", "script": "hira", "kana": "ろ", "romaji": "ro", "img": "assets/img/hiragana/ro.png" },
        { "id": "wa", "script": "hira", "kana": "わ", "romaji": "wa", "img": "assets/img/hiragana/wa.png" },
        { "id": "e3", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "e4", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "e5", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "wo", "script": "hira", "kana": "を", "romaji": "wo", "img": "assets/img/hiragana/wo.png" },
        { "id": "n", "script": "hira", "kana": "ん", "romaji": "n", "img": "assets/img/hiragana/n.png" },
        { "id": "e6", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "e7", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "e8", "script": "hira", "kana": "", "romaji": "", "img": "" },
        { "id": "e9", "script": "hira", "kana": "", "romaji": "", "img": "" },

        // 가타가나 데이터
        { "id": "a_k", "script": "kata", "kana": "ア", "romaji": "a", "img": "assets/img/katakana/a.png" },
        { "id": "i_k", "script": "kata", "kana": "イ", "romaji": "i", "img": "assets/img/katakana/i.png" },
        { "id": "u_k", "script": "kata", "kana": "ウ", "romaji": "u", "img": "assets/img/katakana/u.png" },
        { "id": "e_k", "script": "kata", "kana": "エ", "romaji": "e", "img": "assets/img/katakana/e.png" },
        { "id": "o_k", "script": "kata", "kana": "オ", "romaji": "o", "img": "assets/img/katakana/o.png" },
        { "id": "ka_k", "script": "kata", "kana": "カ", "romaji": "ka", "img": "assets/img/katakana/ka.png" },
        { "id": "ki_k", "script": "kata", "kana": "キ", "romaji": "ki", "img": "assets/img/katakana/ki.png" },
        { "id": "ku_k", "script": "kata", "kana": "ク", "romaji": "ku", "img": "assets/img/katakana/ku.png" },
        { "id": "ke_k", "script": "kata", "kana": "ケ", "romaji": "ke", "img": "assets/img/katakana/ke.png" },
        { "id": "ko_k", "script": "kata", "kana": "コ", "romaji": "ko", "img": "assets/img/katakana/ko.png" },
        { "id": "sa_k", "script": "kata", "kana": "サ", "romaji": "sa", "img": "assets/img/katakana/sa.png" },
        { "id": "shi_k", "script": "kata", "kana": "シ", "romaji": "shi", "img": "assets/img/katakana/shi.png" },
        { "id": "su_k", "script": "kata", "kana": "ス", "romaji": "su", "img": "assets/img/katakana/su.png" },
        { "id": "se_k", "script": "kata", "kana": "セ", "romaji": "se", "img": "assets/img/katakana/se.png" },
        { "id": "so_k", "script": "kata", "kana": "ソ", "romaji": "so", "img": "assets/img/katakana/so.png" },
        { "id": "ta_k", "script": "kata", "kana": "タ", "romaji": "ta", "img": "assets/img/katakana/ta.png" },
        { "id": "chi_k", "script": "kata", "kana": "チ", "romaji": "chi", "img": "assets/img/katakana/chi.png" },
        { "id": "tsu_k", "script": "kata", "kana": "ツ", "romaji": "tsu", "img": "assets/img/katakana/tsu.png" },
        { "id": "te_k", "script": "kata", "kana": "テ", "romaji": "te", "img": "assets/img/katakana/te.png" },
        { "id": "to_k", "script": "kata", "kana": "ト", "romaji": "to", "img": "assets/img/katakana/to.png" },
        { "id": "na_k", "script": "kata", "kana": "ナ", "romaji": "na", "img": "assets/img/katakana/na.png" },
        { "id": "ni_k", "script": "kata", "kana": "ニ", "romaji": "ni", "img": "assets/img/katakana/ni.png" },
        { "id": "nu_k", "script": "kata", "kana": "ヌ", "romaji": "nu", "img": "assets/img/katakana/nu.png" },
        { "id": "ne_k", "script": "kata", "kana": "ネ", "romaji": "ne", "img": "assets/img/katakana/ne.png" },
        { "id": "no_k", "script": "kata", "kana": "ノ", "romaji": "no", "img": "assets/img/katakana/no.png" },
        { "id": "ha_k", "script": "kata", "kana": "ハ", "romaji": "ha", "img": "assets/img/katakana/ha.png" },
        { "id": "hi_k", "script": "kata", "kana": "ヒ", "romaji": "hi", "img": "assets/img/katakana/hi.png" },
        { "id": "fu_k", "script": "kata", "kana": "フ", "romaji": "fu", "img": "assets/img/katakana/fu.png" },
        { "id": "he_k", "script": "kata", "kana": "ヘ", "romaji": "he", "img": "assets/img/katakana/he.png" },
        { "id": "ho_k", "script": "kata", "kana": "ホ", "romaji": "ho", "img": "assets/img/katakana/ho.png" },
        { "id": "ma_k", "script": "kata", "kana": "マ", "romaji": "ma", "img": "assets/img/katakana/ma.png" },
        { "id": "mi_k", "script": "kata", "kana": "ミ", "romaji": "mi", "img": "assets/img/katakana/mi.png" },
        { "id": "mu_k", "script": "kata", "kana": "ム", "romaji": "mu", "img": "assets/img/katakana/mu.png" },
        { "id": "me_k", "script": "kata", "kana": "メ", "romaji": "me", "img": "assets/img/katakana/me.png" },
        { "id": "mo_k", "script": "kata", "kana": "モ", "romaji": "mo", "img": "assets/img/katakana/mo.png" },
        { "id": "ya_k", "script": "kata", "kana": "ヤ", "romaji": "ya", "img": "assets/img/katakana/ya.png" },
        { "id": "ke1", "script": "kata", "kana": "", "romaji": "", "img": "" },
        { "id": "yu_k", "script": "kata", "kana": "ユ", "romaji": "yu", "img": "assets/img/katakana/yu.png" },
        { "id": "ke2", "script": "kata", "kana": "", "romaji": "", "img": "" },
        { "id": "yo_k", "script": "kata", "kana": "ヨ", "romaji": "yo", "img": "assets/img/katakana/yo.png" },
        { "id": "ra_k", "script": "kata", "kana": "ラ", "romaji": "ra", "img": "assets/img/katakana/ra.png" },
        { "id": "ri_k", "script": "kata", "kana": "リ", "romaji": "ri", "img": "assets/img/katakana/ri.png" },
        { "id": "ru_k", "script": "kata", "kana": "ル", "romaji": "ru", "img": "assets/img/katakana/ru.png" },
        { "id": "re_k", "script": "kata", "kana": "レ", "romaji": "re", "img": "assets/img/katakana/re.png" },
        { "id": "ro_k", "script": "kata", "kana": "ロ", "romaji": "ro", "img": "assets/img/katakana/ro.png" },
        { "id": "wa_k", "script": "kata", "kana": "ワ", "romaji": "wa", "img": "assets/img/katakana/wa.png" },
        { "id": "ke3", "script": "kata", "kana": "", "romaji": "", "img": "" },
        { "id": "ke4", "script": "kata", "kana": "", "romaji": "", "img": "" },
        { "id": "ke5", "script": "kata", "kana": "", "romaji": "", "img": "" },
        { "id": "wo_k", "script": "kata", "kana": "ヲ", "romaji": "wo", "img": "assets/img/katakana/wo.png" },
        { "id": "n_k", "script": "kata", "kana": "ン", "romaji": "n", "img": "assets/img/katakana/n.png" },

        // 숫자 데이터 (1~10) - 리스트형 전용
        { "id": "n1", "script": "num", "kana": "いち", "kanji": "一", "digit": "1", "romaji": "ichi" },
        { "id": "n2", "script": "num", "kana": "に", "kanji": "二", "digit": "2", "romaji": "ni" },
        { "id": "n3", "script": "num", "kana": "さん", "kanji": "三", "digit": "3", "romaji": "san" },
        { "id": "n4", "script": "num", "kana": "よん / し", "kanji": "四", "digit": "4", "romaji": "yon / shi" },
        { "id": "n5", "script": "num", "kana": "ご", "kanji": "五", "digit": "5", "romaji": "go" },
        { "id": "n6", "script": "num", "kana": "ろく", "kanji": "六", "digit": "6", "romaji": "roku" },
        { "id": "n7", "script": "num", "kana": "なな / しち", "kanji": "七", "digit": "7", "romaji": "nana / shichi" },
        { "id": "n8", "script": "num", "kana": "はち", "kanji": "八", "digit": "8", "romaji": "hachi" },
        { "id": "n9", "script": "num", "kana": "きゅう / く", "kanji": "九", "digit": "9", "romaji": "kyu / ku" },
        { "id": "n10", "script": "num", "kana": "じゅう", "kanji": "十", "digit": "10", "romaji": "ju" }
    ];

    // 초기 렌더링
    renderCards('hira');

    // 탭 클릭 이벤트
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;
            tabs.forEach(t => {
                t.classList.remove('bg-blue-500', 'text-white', 'shadow');
                t.classList.add('bg-gray-200', 'text-gray-600');
            });
            tab.classList.add('bg-blue-500', 'text-white', 'shadow');
            tab.classList.remove('bg-gray-200', 'text-gray-600');
            renderCards(target);
        });
    });

    function renderCards(filter) {
        gridContainer.innerHTML = '';
        
        // 레이아웃 스타일 변경: 히라가나/가타카나는 5열 그리드, 숫자는 1열(또는 2열) 리스트
        if (filter === 'num') {
            gridContainer.className = "grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto";
        } else {
            gridContainer.className = "grid grid-cols-5 gap-2 sm:gap-4";
        }

        const filteredData = vocabData.filter(item => item.script === filter);

        filteredData.forEach(item => {
            const element = document.createElement('div');
            
            if (filter === 'num') {
                // [숫자 탭 전용] 리스트형 단어장 템플릿
                element.className = "flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow";
                element.innerHTML = `
                    <div class="text-4xl font-bold text-blue-500 w-16 text-center border-r border-gray-100 mr-4">
                        ${item.digit}
                    </div>
                    <div class="flex-1">
                        <div class="flex items-baseline space-x-2">
                            <span class="text-xl font-bold text-gray-800">${item.kanji}</span>
                            <span class="text-sm text-blue-400 font-medium">${item.kana}</span>
                        </div>
                        <div class="text-xs text-gray-400 uppercase font-bold tracking-wider mt-1">
                            ${item.romaji}
                        </div>
                    </div>
                `;
            } else {
                // [히라가나/가타카나 전용] 기존 카드형 템플릿
                if (!item.kana) {
                    element.className = "aspect-square opacity-0 pointer-events-none";
                    gridContainer.appendChild(element);
                    return;
                }

                element.className = "card perspective-1000 aspect-square cursor-pointer group";
                element.innerHTML = `
                    <div class="card-inner w-full h-full relative preserve-3d">
                        <div class="card-front bg-white shadow-sm border border-gray-200 flex flex-col items-center justify-center group-hover:shadow-md transition-shadow">
                            <span class="text-4xl sm:text-5xl font-medium text-gray-800">${item.kana}</span>
                            <span class="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase font-bold">${item.romaji}</span>
                        </div>
                        <div class="card-back bg-white shadow-sm border border-gray-200 overflow-hidden flex items-center justify-center">
                            <img data-src="${item.img}" alt="${item.kana}" class="card-img object-cover w-full h-full">
                        </div>
                    </div>
                `;
                element.addEventListener('click', () => toggleCard(element));
            }

            gridContainer.appendChild(element);
        });
    }

    function toggleCard(card) {
        const isFlipped = card.classList.toggle('flipped');
        if (isFlipped) {
            const img = card.querySelector('.card-img');
            if (img && !img.src) {
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
            }
        }
    }
});
