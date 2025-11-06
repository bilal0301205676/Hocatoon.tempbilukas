export function requireAuth() {
    window.addEventListener('load', () => {
        if (!sessionStorage.getItem('loggedIn')) {
            alert('Пожалуйста, зарегистрируйтесь.');
            window.location.href = 'register.html';
        } else {
            // Показываем первую букву email
            const email = sessionStorage.getItem('userEmail') || 'U';
            document.querySelectorAll('.profile-circle').forEach(el => {
                el.textContent = email[0].toUpperCase();
            });
        }
    });
}

export function logout() {
    sessionStorage.clear();
    window.location.href = 'register.html';
}