// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scroll
function scrollToServices() {
    document.getElementById('services').scrollIntoView({
        behavior: 'smooth'
    });
}

// Service Details Data
const serviceDetails = {
    perawatan1: {
        title: "Perawatan Wajah Lengkap",
        description: "Treatment komprehensif untuk semua jenis kulit wajah. Membersihkan, melembabkan, dan meremajakan kulit Anda.",
        features: [
            "Pembersihan wajah mendalam",
            "Eksfoliasi dan peeling",
            "Masker sesuai jenis kulit",
            "Moisturizing dan proteksi",
            "Durasi: 90 menit"
        ],
        price: "Rp 250.000",
        image: "💆"
    },
    perawatan2: {
        title: "Perawatan Tangan & Kaki",
        description: "Manicure dan pedicure profesional dengan teknik steril dan produk berkualitas tinggi.",
        features: [
            "Pemotongan dan shaping kuku",
            "Cuticle care",
            "Hand & foot massage",
            "Moisturizing treatment",
            "Polish optional",
            "Durasi: 60-75 menit"
        ],
        price: "Rp 150.000",
        image: "💅"
    },
    perawatan3: {
        title: "Perawatan Tubuh Total",
        description: "Relaksasi dan perawatan tubuh dari ujung kepala hingga ujung kaki untuk revitalisasi total.",
        features: [
            "Body massage tradisional",
            "Body scrub alami",
            "Aromatherapy",
            "Moisturizing full body",
            "Relaxation therapy",
            "Durasi: 120 menit"
        ],
        price: "Rp 350.000",
        image: "🧖"
    }
};

// Modal Functions
function showServiceDetail(serviceId) {
    const service = serviceDetails[serviceId];
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h2>${service.image} ${service.title}</h2>
        <p>${service.description}</p>
        
        <h3>Fitur Perawatan:</h3>
        <ul>
            ${service.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <div class="price-section">
            <h3>Harga: ${service.price}</h3>
        </div>
        
        <button class="cta-button" onclick="bookAppointment('${service.title}')">Booking Sekarang</button>
    `;
    
    document.getElementById('serviceModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('serviceModal').style.display = 'none';
}

function bookAppointment(serviceName) {
    alert(`Terima kasih! Anda akan melakukan booking untuk: ${serviceName}\nSilakan hubungi kami di 0812-3456-7890 untuk konfirmasi.`);
    closeModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('serviceModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. Kami akan menghubungi Anda segera.');
    this.reset();
});