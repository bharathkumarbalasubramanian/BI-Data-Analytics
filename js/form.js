/**
 * CONTACT FORM & COPY BUTTONS CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
    initCopyButtons();
});

function initContactForm() {
    const form = document.getElementById('contact-form');
    const alertBox = document.getElementById('form-alert');
    const submitBtn = document.getElementById('submit-btn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please complete all required fields.');
            return;
        }

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending Message...`;
        }

        setTimeout(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Sent Successfully!`;
            }

            if (alertBox) {
                alertBox.style.display = 'flex';
            }

            form.reset();

            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;
                }
            }, 4000);
        }, 1000);
    });
}

function initCopyButtons() {
    const btns = document.querySelectorAll('.copy-btn[data-copy]');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-copy');
            if (!val) return;

            navigator.clipboard.writeText(val).then(() => {
                const orig = btn.innerHTML;
                btn.innerHTML = `<i class="fa-solid fa-check text-emerald"></i>`;

                setTimeout(() => {
                    btn.innerHTML = orig;
                }, 2000);
            });
        });
    });
}
