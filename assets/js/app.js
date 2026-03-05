document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('card-grid');
    const tabs = document.querySelectorAll('.tab-btn');
    let vocabData = [];

    // JSON 데이터 가져오기
    fetch('data/vocab.json')
        .then(response => response.json())
        .then(data => {
            vocabData = data;
            renderCards('hira'); // 초기 화면 히라가나
        })
        .catch(error => console.error('데이터 로딩 실패:', error));

    // 탭 클릭 이벤트
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;
            
            // 탭 활성화 상태 변경
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            renderCards(target);
        });
    });

    // 카드 렌더링 함수
    function renderCards(filter) {
        gridContainer.innerHTML = '';
        const filteredData = vocabData.filter(item => item.script === filter);

        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', `${item.kana} 카드`);

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <span class="kana">${item.kana}</span>
                        <span class="romaji">${item.romaji}</span>
                    </div>
                    <div class="card-back">
                        <img data-src="${item.img}" alt="${item.kana}" class="card-img">
                    </div>
                </div>
            `;

            // 클릭 이벤트
            card.addEventListener('click', () => toggleCard(card));

            // 키보드 접근성 (Enter, Space)
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(card);
                }
            });

            gridContainer.appendChild(card);
        });
    }

    // 카드 뒤집기 및 이미지 지연 로딩
    function toggleCard(card) {
        const isFlipped = card.classList.toggle('flipped');
        
        if (isFlipped) {
            const img = card.querySelector('.card-img');
            // 이미지가 아직 로드되지 않았다면 src 할당
            if (img && !img.classList.contains('loaded')) {
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
            }
        }
    }
});