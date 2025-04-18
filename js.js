const today = new Date();
const birthday = new Date(today.getFullYear(), 3, 19); // Tháng 4 là 3 (0-based index)

if (
  today.getDate() === birthday.getDate() &&
  today.getMonth() === birthday.getMonth()
) {
  document.getElementById('birthday-message').textContent =
    "Chúc bạn một ngày 19/4 thật vui vẻ, tràn ngập yêu thương và bất ngờ! 💖";
} else {
  const diffDays = Math.ceil((birthday - today) / (1000 * 60 * 60 * 24));
  document.getElementById('birthday-message').textContent =
    `Sinh nhật sẽ đến sau ${diffDays} ngày nữa! 🎈`;
}