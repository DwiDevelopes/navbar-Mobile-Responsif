        const navLinks = document.querySelectorAll('.nav-link');
        
        // Fungsi untuk menangani klik pada menu
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hapus kelas active dari semua link
                navLinks.forEach(item => item.classList.remove('active'));
                
                // Tambahkan kelas active ke link yang diklik
                this.classList.add('active');
                
                // Dapatkan target section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Scroll ke section target
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Fungsi untuk mengupdate menu aktif berdasarkan scroll
        window.addEventListener('scroll', function() {
            let current = '';
            const sections = document.querySelectorAll('section');
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
