$(document).ready(function () {
  // Snowflake Effect
  function createSnowflake() {
    const isRound = Math.random() > 0.5; // 50% tạo bông tuyết tròn
    const snowflake = isRound
      ? $('<div class="snowflake round-snowflake"></div>')
      : $('<div class="snowflake">❄</div>');

    const size = Math.random() * 30 + 10; // Random size
    const position = Math.random() * 100; // Random horizontal position
    const duration = Math.random() * 5 + 5; // Random falling duration

    snowflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px", // For round snowflakes
      height: size + "px", // For round snowflakes
      animationDuration: duration + "s",
    });

    $("#snowflakes-container").append(snowflake);

    // Remove snowflake after animation
    setTimeout(() => snowflake.remove(), duration * 1000);
  }

  setInterval(createSnowflake, 200);

  // Button Click Effect
  $(".sparkle-button").click(function () {
    alert("🎅 Ho Ho Ho! You have opened a magical gift!");
  });
});
$(document).ready(function () {
  // Snowflake Effect (Giữ nguyên mã này từ trước)
  function createSnowflake() {
    const isRound = Math.random() > 0.5;
    const snowflake = isRound
      ? $('<div class="snowflake round-snowflake"></div>')
      : $('<div class="snowflake">❄</div>');

    const size = Math.random() * 30 + 10;
    const position = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    snowflake.css({
      left: position + "%",
      fontSize: size + "px",
      width: size + "px",
      height: size + "px",
      animationDuration: duration + "s",
    });

    $("#snowflakes-container").append(snowflake);
    setTimeout(() => snowflake.remove(), duration * 1000);
  }
  setInterval(createSnowflake, 200);

  // Countdown Timer
  function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // 25 December

    if (now > christmas) {
      christmas.setFullYear(christmas.getFullYear() + 1); // Chuyển sang năm sau nếu đã qua ngày Giáng Sinh
    }
    const timeRemaining = christmas - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $("#countdown").text(
      `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`
    );
    if (timeRemaining <= 0) {
      $("#countdown").text("🎄 Merry Christmas! 🎅");
    }
  }
  setInterval(updateCountdown, 1000);

  // Button Click Effect (Giữ nguyên mã này từ trước)
  $(".sparkle-button").click(function () {
    alert("🎅 Ho Ho Ho! You have opened a magical gift!");
  });
});
