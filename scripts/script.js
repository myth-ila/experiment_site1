// Show quote input
function showQuoteInput() {
    document.getElementById("quoteInput").style.display = "block";
}

// Submit quote
function submitQuote() {
    const quoteAmount = document.getElementById("quoteAmount").value;
    if (quoteAmount >= 1 && quoteAmount <= 20) {
        alert(`Your quote of $${quoteAmount} has been submitted.`);
    } else {
        alert("Please enter a value between $1 and $20.");
    }
}

// Load more reviews (simulated for now)
function loadMoreReviews() {
    const reviewList = document.getElementById("reviewList");
    for (let i = 0; i < 20; i++) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Reviewer ${i + 21}:</strong> ★★★☆☆ - Great product. Fast shipping. [Dummy Text]`;
        reviewList.appendChild(li);
    }
}
