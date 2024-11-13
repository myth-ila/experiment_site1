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

// Array holding all reviews (dummy data for illustration)
const reviews = [
    { reviewer: "Reviewer 1", rating: "★★★★☆", text: "Really satisfied with the quality of these mugs." },
    { reviewer: "Reviewer 2", rating: "★★★☆☆", text: "Decent product but could be have been packed better for shipping." },
    { reviewer: "Reviewer 3", rating: "★★★★★", text: "Exceeded my expectations! The designs on the mugs are very pretty" },
    { reviewer: "Reviewer 4", rating: "★★☆☆☆", text: "Not quite what I was hoping for, arrived damaged" },
    { reviewer: "Reviewer 5", rating: "★★★★☆", text: "Beautiful mugs, great color and quality." },
    { reviewer: "Reviewer 6", rating: "★★★☆☆", text: "Good value for the price. [Dummy Text]" },
    { reviewer: "Reviewer 7", rating: "★★★★★", text: "Highly recommend this product! [Dummy Text]" },
    { reviewer: "Reviewer 8", rating: "★★★☆☆", text: "Fine, but some parts seem fragile. [Dummy Text]" },
    { reviewer: "Reviewer 9", rating: "★★★★☆", text: "Loved the color and design. [Dummy Text]" },
    { reviewer: "Reviewer 10", rating: "★☆☆☆☆", text: "Disappointed with the quality. [Dummy Text]" },
    { reviewer: "Reviewer 11", rating: "★★★★☆", text: "Worth every penny. [Dummy Text]" },
    { reviewer: "Reviewer 12", rating: "★★★☆☆", text: "Average experience overall. [Dummy Text]" },
    { reviewer: "Reviewer 13", rating: "★★★★☆", text: "Good quality and nice packaging. [Dummy Text]" },
    { reviewer: "Reviewer 14", rating: "★★★★☆", text: "Met my expectations. [Dummy Text]" },
    { reviewer: "Reviewer 15", rating: "★★★☆☆", text: "Nothing extraordinary, but works. [Dummy Text]" },
    { reviewer: "Reviewer 16", rating: "★★☆☆☆", text: "Not sure I'd buy this again. [Dummy Text]" },
    { reviewer: "Reviewer 17", rating: "★★★★★", text: "Absolutely perfect, just what I wanted! [Dummy Text]" },
    { reviewer: "Reviewer 18", rating: "★★★☆☆", text: "A bit overpriced for the quality. [Dummy Text]" },
    { reviewer: "Reviewer 19", rating: "★★★★☆", text: "Seems sturdy and well-made. [Dummy Text]" },
    { reviewer: "Reviewer 20", rating: "★★★★☆", text: "Great look, very sleek. [Dummy Text]" },
    { reviewer: "Reviewer 21", rating: "★★★☆☆", text: "Functional but lacks polish. [Dummy Text]" },
    { reviewer: "Reviewer 22", rating: "★★★★★", text: "Can’t imagine going without it now! [Dummy Text]" },
    { reviewer: "Reviewer 23", rating: "★★☆☆☆", text: "Looked better in the pictures. [Dummy Text]" },
    { reviewer: "Reviewer 24", rating: "★★★★☆", text: "Fits well and works as described. [Dummy Text]" },
    { reviewer: "Reviewer 25", rating: "★★★★☆", text: "High quality and very stylish. [Dummy Text]" }
];

let reviewsShown = 0; // Track how many reviews are currently shown
const reviewsPerPage = 5; // Number of reviews to show per load

// Function to load reviews in batches
function loadMoreReviews() {
    const reviewList = document.getElementById("reviewList");
    const nextBatch = reviews.slice(reviewsShown, reviewsShown + reviewsPerPage);
    
    nextBatch.forEach(review => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${review.reviewer}:</strong> ${review.rating} - ${review.text}`;
        reviewList.appendChild(listItem);
    });
    
    reviewsShown += reviewsPerPage; // Update count of shown reviews

    // Hide "Load More" button if all reviews are shown
    if (reviewsShown >= reviews.length) {
        document.querySelector("button").style.display = "none";
    }
}

// Initial load of 20 reviews
loadMoreReviews();
