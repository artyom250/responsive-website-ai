
//Price section
function togglePricing(type) {
    const isYearly = type === 'year';
    
    document.getElementById("year").classList.toggle('active', isYearly);
    document.getElementById("month").classList.toggle('active', !isYearly);

    const billingTypeText = isYearly ? '*billed yearly' : '*billed monthly';
    const prices = {
        'basic': isYearly ? '$120' : '$12',
        'premium': isYearly ? '$500' : '$52',
        'standard': isYearly ? '$200' : '$32'
    };

    document.querySelectorAll('.billing-type').forEach((element) => {
        element.innerText = billingTypeText;
    });

    document.getElementById('basic-price').innerText = prices['basic'];
    document.getElementById('premium-price').innerText = prices['premium'];
    document.getElementById('standard-price').innerText = prices['standard'];
}

// Faq section
document.querySelectorAll('.quest').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('#answer');
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});


// Fixed navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Sidebar 
function sideFunc() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("drop");
}