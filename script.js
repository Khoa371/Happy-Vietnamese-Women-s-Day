document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // DANH SÁCH LỜI CHÚC NGẪU NHIÊN
    // Bạn có thể thêm, sửa, hoặc xóa các lời chúc trong danh sách này
    // =================================================================
    const messages = [
        {
            recipientName: "một nửa thế giới siêu đáng yêu",
            letterMessage: `Nhân ngày 20/10 đặc biệt, xin gửi ngàn lời chúc ngọt ngào như những viên kẹo đến các bạn nữ xinh xắn.\n\nChúc các bạn luôn vui tươi, cười xinh như hoa và mỗi ngày đều là một ngày thật an yên, hạnh phúc. Hãy luôn nhớ rằng bạn là một ngôi sao lấp lánh và xứng đáng nhận được những điều tuyệt vời nhất nhé!`,
            signature: "Gửi ngàn tim! ❤️"
        },
        {
            recipientName: "những thiên thần xinh đẹp",
            letterMessage: `Chúc mừng ngày Phụ nữ Việt Nam! Mong bạn có một ngày ngập tràn hoa và quà, luôn rạng rỡ, tự tin và được yêu thương. Hãy luôn là đóa hoa thơm ngát và tô điểm cho cuộc đời này nhé!`,
            signature: "Yêu thương!"
        },
        {
            recipientName: "những cô gái tuyệt vời",
            letterMessage: `Happy Vietnamese Women's Day! Chúc bạn một ngày 20/10 thật ý nghĩa, nhận được nhiều sự quan tâm và luôn cảm thấy hạnh phúc. Hãy luôn mạnh khỏe, thành công và tỏa sáng theo cách riêng của mình nhé.`,
            signature: "Thân mến!"
        },
        {
            recipientName: "những bông hoa xinh đẹp nhất",
            letterMessage: `Ngày 20/10 đã đến rồi! Chúc bạn luôn mỉm cười, yêu đời và nhận được vô vàn quà tặng bất ngờ. Bạn xứng đáng với tất cả những điều tốt đẹp và ngọt ngào nhất trên thế giới này!`,
            signature: "Mãi yêu! 😘"
        }
    ];
    // =================================================================
    // KẾT THÚC PHẦN TÙY CHỈNH
    // =================================================================

    // Tự động chọn một lời chúc ngẫu nhiên từ danh sách
    const config = messages[Math.floor(Math.random() * messages.length)];

    const loader = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('main-content');
    const giftContainer = document.getElementById('gift-container');
    const giftBox = document.querySelector('.gift-box-svg');
    const envelopeContainer = document.getElementById('envelope-container');
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const backgroundMusic = document.getElementById('background-music');
    const letter = document.querySelector('.letter');
    const letterText = document.getElementById('letter-text');
    
    let musicStarted = false;
    let letterOpened = false;
    const typingSpeed = 50; // Tốc độ viết chữ (ms)

    function playMusic() {
        if (!musicStarted) {
            backgroundMusic.volume = 0.5;
            backgroundMusic.play().catch(error => console.log("Cần tương tác để bật nhạc:", error));
            musicStarted = true;
        }
    }

    // Kịch bản chính của trang web
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
        giftContainer.classList.remove('hidden');
        playMusic();
        setTimeout(() => giftBox.classList.add('open'), 1000);
        setTimeout(() => {
            giftContainer.classList.add('hidden');
            envelopeContainer.classList.remove('hidden');
        }, 3000);
    }, 4000);

    // Sự kiện khi nhấn vào phong bì
    envelopeWrapper.addEventListener('click', () => {
        if (!letterOpened) {
            envelopeWrapper.classList.add('open');
            letterOpened = true;
            setTimeout(typeLetter, 800); // Đợi phong bì rơi xuống rồi mới bắt đầu viết
        }
    });
    
    // Hàm viết thư với hiệu ứng chạy chữ và lá thư dài ra
    function typeLetter() {
        const fullMessage = `<strong>Gửi ${config.recipientName},</strong><br><br>${config.letterMessage.replace(/\n\n/g, '<br><br>').replace(/\n/g, '<br>')}<br><br><p class="signature">${config.signature}</p>`;
        
        letter.style.opacity = '1';
        letterText.innerHTML = '<span>.</span>'; 
        let initialHeight = letterText.scrollHeight;
        letter.style.height = `${initialHeight}px`;
        letterText.innerHTML = '';

        let i = 0;
        function typeWriter() {
            if (i < fullMessage.length) {
                // Xử lý để không in các thẻ HTML ra màn hình
                if (fullMessage[i] === '<') {
                    const closingTagIndex = fullMessage.indexOf('>', i);
                    if (closingTagIndex !== -1) {
                        letterText.innerHTML += fullMessage.substring(i, closingTagIndex + 1);
                        i = closingTagIndex + 1;
                    }
                } else {
                    // In từng ký tự ra màn hình
                    letterText.innerHTML += `<span>${fullMessage[i]}</span>`;
                    i++;
                }

                // Cập nhật lại chiều cao của lá thư để tạo hiệu ứng dài ra
                let currentHeight = letterText.scrollHeight;
                letter.style.height = `${currentHeight}px`;
                
                setTimeout(typeWriter, typingSpeed);
            }
        }
        typeWriter();
    }

    // Bật nhạc khi người dùng tương tác lần đầu
    document.body.addEventListener('click', playMusic, { once: true });
});