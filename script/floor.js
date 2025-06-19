$(document).ready(function () {


// 객체 정의 
// 1층
let floorItems1 = [
    {
        imageSrc: '1-1.jpg',
        altText: '1-1',
        title: '편백나무실',
        description: '편백나무에서 나오는 피톤치드는 심신을 안정시키고, 긴장을 완화해주는 효능이 있어 스트레스 해소를 돕습니다.'
    },
    {
        imageSrc: '1-2.jpg',
        altText: '1-2',
        title: '풋스파',
        description: '깨끗한 미온수로 족욕을 하면 혈액순환을 돕고, 쌓인 피로를 빠르게 회복할 수 있습니다.'
    },
    {
        imageSrc: '1-3.jpg',
        altText: '1-3',
        title: '오래다방',
        description: '정감가는 다방의 분위기를 그대로 살린 공간으로, 여러 가지의 전통차와 다과를 제공합니다.'
    },
    {
        imageSrc: '1-4.jpg',
        altText: '1-4',
        title: '의무실',
        description: '어르신들의 건강을 책임지는 보건선생님이 항시 계시는 공간입니다.'
    },
    {
        imageSrc: '1-5.jpg',
        altText: '1-5',
        title: '실내정원',
        description: '계절에 상관없이 4계절 내내 꽃이 피어있어 향기가 가득한 공간입니다.'
    }
];

// 콘텐츠를 생성하고 DOM에 추가합니다.
function createFloorBoxes() {
    const container1 = document.getElementById('floor-container1');

    // 빈 콘텐츠 박스를 제거
    container1.innerHTML = '';

    floorItems1.forEach((item, index) => {
        let floorBox1 = document.createElement('div');
        floorBox1.className = 'floor_box1';
        floorBox1.dataset.index = index;

        let img = document.createElement('img');
        img.src = item.imageSrc;
        img.alt = item.altText;

        let innerText = document.createElement('div');
        innerText.className = 'inner_text';

        let h3 = document.createElement('h3');
        h3.textContent = item.title;

        let p = document.createElement('p');
        p.textContent = item.description;

        innerText.appendChild(h3);
        innerText.appendChild(p);
        floorBox1.appendChild(img);
        floorBox1.appendChild(innerText);
        container1.appendChild(floorBox1);
    });

    // 기본적으로 첫 번째 박스만 표시
    const boxes1 = container1.querySelectorAll('.floor_box1');
    boxes1.forEach((box, index) => {
        box.style.display = (index === 0) ? 'flex' : 'none';
    });
}

// 탭 클릭 시 콘텐츠를 전환합니다.
function setupTabNavigation() {
    const tabs1 = document.querySelectorAll('.tab-link1');
    const boxes1 = document.querySelectorAll('.floor_box1');

    tabs1.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const index = tab.dataset.index;

            tabs1.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            boxes1.forEach(box => {
                box.style.display = (box.dataset.index === index) ? 'flex' : 'none';
            });
        });
    });
}

// 2층

let floorItems2 = [
    {
        imageSrc: '2-1.jpg',
        altText: '2-1',
        title: '도서관',
        description: '독서를 좋아하시는 어르신들을 위한 공간으로, 편안한 의자와 약 50,000권의 책을 보유하고 있습니다.'
    },
    {
        imageSrc: '2-2.jpg',
        altText: '2-2',
        title: '영화감상실',
        description: '방음 시설이 설비되어 있어 방해 받지 않고 영화 감상이 가능합니다. 다양한 시대의 영화가 등록되어 있어 원하시는 영화를 감상할 수 있습니다.'
    },
    {
        imageSrc: '2-3.jpg',
        altText: '2-3',
        title: '오래오래사진관',
        description: '장수사진, 프로필 사진, 증명사진, 가족사진 등 여러가지의 사진을 촬영하는 공간입니다.'
    },
    {
        imageSrc: '2-4.jpg',
        altText: '2-4',
        title: '오락실',
        description: '스포츠, 오락을 좋아하는 어르신들을 위한 공간으로 여러가지의 오락을 즐길 수 있습니다.'
    },
    {
        imageSrc: '2-5.jpg',
        altText: '2-5',
        title: '음악감상실',
        description: 'LP판부터 현재의 음악까지 원하시는 음악을 골라 감상할 수 있는 공간으로, 80년대의 음악다방의 인테리어로 구성되어 있습니다.'
    }
];

// 콘텐츠를 생성하고 DOM에 추가합니다.
function createFloorBoxes2() {
    const container2 = document.getElementById('floor-container2');

    // 빈 콘텐츠 박스를 제거
    container2.innerHTML = '';

    floorItems2.forEach((item, index) => {
        let floorBox2 = document.createElement('div');
        floorBox2.className = 'floor_box2';
        floorBox2.dataset.index = index;

        let img2 = document.createElement('img');
        img2.src = item.imageSrc;
        img2.alt = item.altText;

        let innerText2 = document.createElement('div');
        innerText2.className = 'inner_text2';

        let h32 = document.createElement('h3');
        h32.textContent = item.title;

        let p2 = document.createElement('p');
        p2.textContent = item.description;

        innerText2.appendChild(h32);
        innerText2.appendChild(p2);
        floorBox2.appendChild(img2);
        floorBox2.appendChild(innerText2);
        container2.appendChild(floorBox2);
    });

    // 기본적으로 첫 번째 박스만 표시
    const boxes2 = container2.querySelectorAll('.floor_box2');
    boxes2.forEach((box, index) => {
        box.style.display = (index === 0) ? 'flex' : 'none';
    });
}

// 탭 클릭 시 콘텐츠를 전환합니다.
function setupTabNavigation2() {
    const tabs2 = document.querySelectorAll('.tab-link2');
    const boxes2 = document.querySelectorAll('.floor_box2');

    tabs2.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const index = tab.dataset.index;

            tabs2.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            boxes2.forEach(box => {
                box.style.display = (box.dataset.index === index) ? 'flex' : 'none';
            });
        });
    });
}


// // 3층

let floorItems3 = [
    {
        imageSrc: '3-1.jpg',
        altText: '3-1',
        title: '제1공연장',
        description: '오래도록의 가장 큰 공연장으로 주로 뮤지컬과 클래식 등 규모가 큰 공연이 이루어지는 공간입니다.'
    },
    {
        imageSrc: '3-2.jpg',
        altText: '3-2',
        title: '제1공연장',
        description: '소규모의 연극, 무용 등 다양한 공연이 이루어지는 공간입니다. '
    },
    {
        imageSrc: '3-3.jpg',
        altText: '3-3',
        title: '전시관',
        description: '여러 아티스트의 작품을 전시하며, 시니어 사진전을 함께 펼치는 특별한 공간입니다.'
    },
    {
        imageSrc: '3-4.jpg',
        altText: '3-4',
        title: '이벤트홀',
        description: '오래도록의 이벤트가 열리는 공간으로, 넓은 대강당의 형태로 이루어져있습니다.'
    },
   
];

// 콘텐츠를 생성하고 DOM에 추가합니다.
function createFloorBoxes3() {
    const container3 = document.getElementById('floor-container3');

    // 빈 콘텐츠 박스를 제거
    container3.innerHTML = '';

    floorItems3.forEach((item, index) => {
        let floorBox3 = document.createElement('div');
        floorBox3.className = 'floor_box3';
        floorBox3.dataset.index = index;

        let img3 = document.createElement('img');
        img3.src = item.imageSrc;
        img3.alt = item.altText;

        let innerText3 = document.createElement('div');
        innerText3.className = 'inner_text3';

        let h33 = document.createElement('h3');
        h33.textContent = item.title;

        let p3 = document.createElement('p');
        p3.textContent = item.description;

        innerText3.appendChild(h33);
        innerText3.appendChild(p3);
        floorBox3.appendChild(img3);
        floorBox3.appendChild(innerText3);
        container3.appendChild(floorBox3);
    });

    // 기본적으로 첫 번째 박스만 표시
    const boxes3 = container3.querySelectorAll('.floor_box3');
    boxes3.forEach((box, index) => {
        box.style.display = (index === 0) ? 'flex' : 'none';
    });
}

// 탭 클릭 시 콘텐츠를 전환합니다.
function setupTabNavigation3() {
    const tabs3 = document.querySelectorAll('.tab-link3');
    const boxes3 = document.querySelectorAll('.floor_box3');

    tabs3.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const index = tab.dataset.index;

            tabs3.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            boxes3.forEach(box => {
                box.style.display = (box.dataset.index === index) ? 'flex' : 'none';
            });
        });
    });
}

// // 옥상

let floorItems4 = [
    {
        imageSrc: '4-1.jpg',
        altText: '4-1',
        title: '휴식공간',
        description: '옥상에 마련된 휴식 공간은 편안한 빈백 의자와 테이블이 있으며 앞에 펼쳐진 바다를 감상할 수 있습니다.'
    },
    {
        imageSrc: '4-2.jpg',
        altText: '4-2',
        title: '하늘 전망대',
        description: '넓게 탁 트인 하늘과 그 아래 펼쳐진 바다를 한 눈에 볼 수 있는 공간입니다.'
    },
    {
        imageSrc: '4-3.jpg',
        altText: '4-3',
        title: '운동시설',
        description: '어르신들의 건강을 위해 마련된 공간으로, 다양한 맨몸 운동 기구가 비치되어 있습니다.'
    },
   
];

// 콘텐츠를 생성하고 DOM에 추가합니다.
function createFloorBoxes4() {
    const container4 = document.getElementById('floor-container4');

    // 빈 콘텐츠 박스를 제거
    container4.innerHTML = '';

    floorItems4.forEach((item, index) => {
        let floorBox4 = document.createElement('div');
        floorBox4.className = 'floor_box4';
        floorBox4.dataset.index = index;

        let img4 = document.createElement('img');
        img4.src = item.imageSrc;
        img4.alt = item.altText;

        let innerText4 = document.createElement('div');
        innerText4.className = 'inner_text4';

        let h34 = document.createElement('h3');
        h34.textContent = item.title;

        let p4 = document.createElement('p');
        p4.textContent = item.description;

        innerText4.appendChild(h34);
        innerText4.appendChild(p4);
        floorBox4.appendChild(img4);
        floorBox4.appendChild(innerText4);
        container4.appendChild(floorBox4);
    });

    // 기본적으로 첫 번째 박스만 표시
    const boxes4 = container4.querySelectorAll('.floor_box4');
    boxes4.forEach((box, index) => {
        box.style.display = (index === 0) ? 'flex' : 'none';
    });
}

// 탭 클릭 시 콘텐츠를 전환합니다.
function setupTabNavigation4() {
    const tabs4 = document.querySelectorAll('.tab-link4');
    const boxes4 = document.querySelectorAll('.floor_box4');

    tabs4.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const index = tab.dataset.index;

            tabs4.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            boxes4.forEach(box => {
                box.style.display = (box.dataset.index === index) ? 'flex' : 'none';
            });
        });
    });
}
// 함수 실행

    createFloorBoxes();
    createFloorBoxes2();
    createFloorBoxes3();
    createFloorBoxes4();
    setupTabNavigation();
    setupTabNavigation2();
    setupTabNavigation3();
    setupTabNavigation4();


    // 전체 층별 이미지 보이기

$(".f1btn").click(function(){

    $(".floor1_wrap").show();
    $(".floor2_wrap").hide();
    $(".floor3_wrap").hide();
    $(".floor4_wrap").hide();

})

$(".f2btn").click(function(){

    $(".floor1_wrap").hide();
    $(".floor2_wrap").show();
    $(".floor3_wrap").hide();
    $(".floor4_wrap").hide();

})

$(".f3btn").click(function(){

    $(".floor1_wrap").hide();
    $(".floor2_wrap").hide();
    $(".floor3_wrap").show();
    $(".floor4_wrap").hide();

})

$(".f4btn").click(function(){

    $(".floor1_wrap").hide();
    $(".floor2_wrap").hide();
    $(".floor3_wrap").hide();
    $(".floor4_wrap").show();

})

// 층별 버튼 배경색 들어가게 toggleClass

$(".floor_title li button").click(function() {
    // 모든 li 요소에서 color 클래스를 제거하고 배경색을 초기화
    $(".floor_title li button").removeClass("color").css({
        background: 'none',
        color:'#000'
    });

    // 클릭한 요소에 color 클래스 추가하고 배경색 설정
    $(this).addClass("color").css({
        backgroundColor: '#FFD000',
        fontWeight:'900'
    });

})



///


});
