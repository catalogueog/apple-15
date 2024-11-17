document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("giveawayForm");
  const imageSection = document.getElementById("imageSection");
    const textSection = document.getElementById("textSection");
  const resultSection = document.getElementById("resultSection");
  const loadingText = document.getElementById("loadingText");
  const progressBar = document.getElementById("progressBar");
  const progress = document.getElementById("progress");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission

    // Hide form and image, show loading section
    form.classList.add("hidden");
    textSection.classList.add("hidden");
    imageSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    progressBar.classList.remove("hidden");

    // Trigger progress bar animation after a slight delay
    setTimeout(() => {
      progress.style.width = "100%";
    }, 100); // Small delay to ensure animation is applied

    // Simulate waiting time for the extraction process
    setTimeout(() => {
      progressBar.classList.add("hidden"); // Hide progress bar
      successMessage.classList.remove("hidden"); // Show success message
    }, 7100); // Match animation duration + small buffer
  });

  const redeemBtn = document.getElementById("redeemBtn");
  redeemBtn.addEventListener("click", () => {
    alert("Redirecting to redeem your iPhone 15!");
  });
});
