let currentPage = 1;

function nextPage() {
    document.getElementById(page${currentPage}).classList.add("hidden");
    currentPage++;
    document.getElementById(page${currentPage}).classList.remove("hidden");
}
