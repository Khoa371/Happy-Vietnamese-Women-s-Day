document.addEventListener('DOMContentLoaded', () => {

    // =================================================================
    // DANH SÁCH 20 LỜI CHÚC HAY NHẤT VÀ ĐA DẠNG
    // =================================================================
    const messages = [
        // --- Nhóm lời chúc Dễ thương & Ngọt ngào ---
        {
            recipientName: "một nửa thế giới siêu đáng yêu",
            letterMessage: `Nhân ngày 20/10, xin gửi những lời chúc ngọt ngào nhất đến các bạn nữ. Chúc bạn một ngày thật chill, quên hết mọi âu lo và được yêu thương hết mực. Bạn xứng đáng mà!`,
            signature: "Gửi ngàn tim! ❤️"
        },
        {
            recipientName: "những đóa hoa xinh đẹp",
            letterMessage: `Chúc bạn một ngày 20/10 thật nhiều niềm vui và những bất ngờ ngọt ngào. Mong bạn sẽ luôn xinh đẹp, được yêu quý và hạnh phúc mỗi ngày, không chỉ riêng hôm nay.`,
            signature: "Yêu thương!"
        },
        {
            recipientName: "cô gái bé nhỏ",
            letterMessage: `Chúc mừng 20/10! Chúc cô gái nhỏ luôn hồn nhiên, vui tươi và được bao bọc trong tình yêu thương. Thế giới ngoài kia cứ để người lớn lo, việc của bạn là luôn hạnh phúc nhé!`,
            signature: "Thương mến!"
        },
        // --- Nhóm lời chúc Hài hước & Vui nhộn ---
        {
            recipientName: "hội chị em bạn dì",
            letterMessage: `Chúc mừng 20/10! Chúc chị em luôn xinh đẹp rạng ngời, không cần filter vẫn nét căng. Chúc túi tiền luôn đầy, tài khoản ting ting liên tục và không bao giờ phải ăn mì tôm cuối tháng nhé!`,
            signature: "Hehe! 😂"
        },
        {
            recipientName: "các chị đẹp",
            letterMessage: `Nhân ngày Phụ nữ Việt Nam, chúc chị em dẻo dai như lốp xe, mạnh mẽ như xe tăng, và xinh đẹp như tiên giáng trần. Chúc chị em shopping không cần nhìn giá, ăn cả thế giới không lo tăng cân!`,
            signature: "Quá đã! 😎"
        },
        {
            recipientName: "các bà",
            letterMessage: `20/10 tới rồi! Chúc các bà tay cầm hoa, giỏ cầm quà, được người thương đưa đi la cà khắp phố. Chúc một ngày không deadline, không muộn phiền, chỉ có niềm vui!`,
            signature: "Vui vẻ không quạu nha!"
        },
        // --- Nhóm lời chúc "Bắt trend" & Hiện đại ---
        {
            recipientName: "các 'queen'",
            letterMessage: `Happy 20/10! Chúc các bà luôn keo lỳ, mận vải và chanh sả. Hôm nay là ngày của mình, slay hết mình nha!`,
            signature: "Một chiếc fan cứng!"
        },
        {
            recipientName: "hội 'chị em chúng mình'",
            letterMessage: `20/10 'iu' phết! Chúc các chị em 'check VAR' không thấy red flag nào, luôn 'healing' và 'enjoy' cái moment này. Mãi đỉnh nha!`,
            signature: "Mãi keo! ✨"
        },
        // --- Nhóm lời chúc Truyền cảm hứng & Sâu sắc ---
        {
            recipientName: "người con gái mạnh mẽ",
            letterMessage: `Chúc mừng ngày của phái đẹp! Hãy luôn là chính mình, tỏa sáng theo cách riêng và đừng bao giờ quên đi giá trị của bản thân. Bạn là phiên bản giới hạn, và thế giới này cần màu sắc của bạn.`,
            signature: "Luôn ủng hộ bạn!"
        },
        {
            recipientName: "những người phụ nữ tuyệt vời",
            letterMessage: `Nhân ngày 20/10, chúc bạn có một bầu trời bình yên, một trái tim đầy nắng và một con đường trải đầy hoa. Hãy luôn tự tin, mạnh mẽ và sống một cuộc đời thật rực rỡ nhé!`,
            signature: "Trân trọng!"
        },
        {
            recipientName: "phái đẹp",
            letterMessage: `Chúc mừng ngày của chúng ta! Hãy yêu bản thân nhiều hơn, làm những điều mình thích và đừng ngần ngại theo đuổi ước mơ. Bạn là nữ hoàng trong thế giới của riêng mình.`,
            signature: "Tỏa sáng nhé!"
        },
        // --- Nhóm lời chúc Trang trọng & Tinh tế ---
        {
            recipientName: "Quý cô",
            letterMessage: `Nhân ngày 20/10, xin gửi lời chúc an lành và hạnh phúc đến phái đẹp. Chúc các bạn luôn giữ được nét duyên dáng, sự tinh tế và một tâm hồn an nhiên giữa cuộc sống bộn bề.`,
            signature: "Thân mến!"
        },
        {
            recipientName: "Phụ nữ Việt Nam",
            letterMessage: `Chúc mừng ngày tôn vinh vẻ đẹp Việt. Chúc bạn một ngày thật ý nghĩa, được bao quanh bởi những người thân yêu và những điều tốt đẹp. Hãy luôn là nguồn cảm hứng cho những người xung quanh.`,
            signature: "Trân trọng và ngưỡng mộ!"
        },
        // --- Nhóm lời chúc Ấm áp ---
        {
            recipientName: "bạn",
            letterMessage: `Gửi bạn một cái ôm thật chặt nhân ngày 20/10. Chúc bạn luôn cảm thấy bình yên, được che chở và mọi điều bạn làm đều suôn sẻ. Hãy luôn mỉm cười nhé!`,
            signature: "Ấm áp!"
        },
        {
            recipientName: "cô gái đang đọc những dòng này",
            letterMessage: `Chúc bạn một ngày 20/10 thật nhiều niềm vui. Dù bạn là ai, đang ở đâu, hãy luôn nhớ rằng bạn xứng đáng được yêu thương và hạnh phúc. Chúc mừng ngày của bạn!`,
            signature: "Từ một người bạn!"
        },
        // --- 5 LỜI CHÚC MỚI BỔ SUNG ---
        {
            recipientName: "vũ trụ của ai đó",
            letterMessage: `Chúc mừng 20/10! Chúc bạn luôn là 'nóc nhà' quyền lực, là 'ét o ét' của ai đó và mãi là 'mai đẹt ti ni' trong lòng người thương. Hãy tận hưởng một ngày thật trọn vẹn nhé!`,
            signature: "So cute! 🥰"
        },
        {
            recipientName: "những chiến thần",
            letterMessage: `Nhân ngày 20/10, xin chúc các 'chiến thần' săn sale thành công, chốt đơn lia lịa và luôn có đủ 'lúa' để theo đuổi đam mê. Chúc mừng ngày của chúng ta!`,
            signature: "Chốt đơn! 🛍️"
        },
        {
            recipientName: "cô gái hay cười",
            letterMessage: `Gửi đến cô gái hay cười một lời chúc thật ngọt ngào. Mong nụ cười của bạn sẽ luôn rạng rỡ trên môi và lan tỏa niềm vui đến mọi người. Happy Women's Day!`,
            signature: "Luôn vui vẻ nhé!"
        },
        {
            recipientName: "những tâm hồn mộng mơ",
            letterMessage: `Chúc bạn một ngày 20/10 thật thơ. Chúc bạn chân cứng đá mềm, tâm hồn treo ngược cành cây, và ví tiền thì luôn dày cộp. Hãy sống và yêu đời theo cách bạn muốn!`,
            signature: "Mãi mận! 🍑"
        },
        {
            recipientName: "những người phụ nữ phi thường",
            letterMessage: `Bạn không cần là hoa hậu, chỉ cần là chính bạn. Chúc mừng ngày 20/10! Chúc bạn luôn khỏe mạnh, kiên cường và hạnh phúc. Thế giới này tuyệt vời hơn rất nhiều vì có bạn.`,
            signature: "Tự hào về bạn!"
        }
    ];
    // =================================================================
    // KẾT THÚC PHẦN TÙY CHỈNH
    // =================================================================

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
    const typingSpeed = 50;

    function playMusic() {
        if (!musicStarted) {
            backgroundMusic.volume = 0.5;
            backgroundMusic.play().catch(error => console.log("Cần tương tác để bật nhạc:", error));
            musicStarted = true;
        }
    }

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

    envelopeWrapper.addEventListener('click', () => {
        if (!letterOpened) {
            envelopeWrapper.classList.add('open');
            letterOpened = true;
            setTimeout(typeLetter, 800);
        }
    });
    
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
                if (fullMessage[i] === '<') {
                    const closingTagIndex = fullMessage.indexOf('>', i);
                    if (closingTagIndex !== -1) {
                        letterText.innerHTML += fullMessage.substring(i, closingTagIndex + 1);
                        i = closingTagIndex + 1;
                    }
                } else {
                    letterText.innerHTML += `<span>${fullMessage[i]}</span>`;
                    i++;
                }
                let currentHeight = letterText.scrollHeight;
                letter.style.height = `${currentHeight}px`;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        typeWriter();
    }

    document.body.addEventListener('click', playMusic, { once: true });
});
