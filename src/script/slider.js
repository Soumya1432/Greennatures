
// Sample data
const reviews = [
   { id: 1, content: "This is an amazing product I have.", user: "Darrell Steward", date: "July 2, 2020", likes: 128, type: "all" },
   { id: 2, content: "Highly recommend this product.", user: "Darlene Robertson", date: "July 2, 2020", likes: 82, type: "photo" },
   { id: 3, content: "Good quality for the price.", user: "Kathryn Murphy", date: "June 26, 2020", likes: 9, type: "description" },
   { id: 4, content: "Great purchase!", user: "Ronald Richards", date: "July 7, 2020", likes: 124, type: "all" },
   { id: 5, content: "This is an amazing product I have.", user: "Darrell Steward", date: "July 2, 2020", likes: 128, type: "all" },
   { id: 6, content: "Highly recommend this product.", user: "Darlene Robertson", date: "July 2, 2020", likes: 82, type: "photo" },
   { id: 7, content: "Good quality for the price.", user: "Kathryn Murphy", date: "June 26, 2020", likes: 9, type: "description" },
   { id: 8, content: "Great purchase!", user: "Ronald Richards", date: "July 7, 2020", likes: 124, type: "all" },
   { id: 9, content: "This is an amazing product I have.", user: "Darrell Steward", date: "July 2, 2020", likes: 128, type: "all" },
   { id: 10, content: "Highly recommend this product.", user: "Darlene Robertson", date: "July 2, 2020", likes: 82, type: "photo" },
   { id: 11, content: "Good quality for the price.", user: "Kathryn Murphy", date: "June 26, 2020", likes: 9, type: "description" },
   { id: 12, content: "Great purchase!", user: "Ronald Richards", date: "July 7, 2020", likes: 124, type: "all" },
   { id: 13, content: "This is an amazing product I have.", user: "Darrell Steward", date: "July 2, 2020", likes: 128, type: "all" },
   { id: 14, content: "Highly recommend this product.", user: "Darlene Robertson", date: "July 2, 2020", likes: 82, type: "photo" },
   { id: 15, content: "Good quality for the price.", user: "Kathryn Murphy", date: "June 26, 2020", likes: 9, type: "description" },
   { id: 16, content: "Great purchase!", user: "Ronald Richards", date: "July 7, 2020", likes: 124, type: "all" },
   // Add more reviews as needed
];

let currentPage = 1;
const reviewsPerPage = 4;
let currentTab = "all";

// Function to change tab
function changeTab(tab) {
   currentTab = tab;
   currentPage = 1;
   document.querySelectorAll(".tab-button").forEach(button => button.classList.remove("bg-green-500", "text-white"));
   event.target.classList.add("bg-green-500", "text-white");
   renderReviews();
}

// Pagination functions
function prevPage() {
   if (currentPage > 1) {
       currentPage--;
       renderReviews();
   }
}

function nextPage() {
   if (currentPage < Math.ceil(getFilteredReviews().length / reviewsPerPage)) {
       currentPage++;
       renderReviews();
   }
}

// Get reviews based on current tab
function getFilteredReviews() {
   if (currentTab === "all") {
       return reviews;
   }
   return reviews.filter(review => review.type === currentTab);
}

// Render reviews based on current page and tab
function renderReviews() {
   const reviewList = document.getElementById("reviewList");
   reviewList.innerHTML = "";

   const filteredReviews = getFilteredReviews();
   const start = (currentPage - 1) * reviewsPerPage;
   const paginatedReviews = filteredReviews.slice(start, start + reviewsPerPage);

   paginatedReviews.forEach(review => {
       const reviewItem = document.createElement("div");
       reviewItem.classList.add("p-4", "bg-gray-50", "rounded-lg", "shadow-md", "flex", "flex-col", "md:flex-row", "items-start", "gap-4");
       reviewItem.innerHTML = `
           <div class="flex-1">
               <div class="flex items-center justify-between">
                   <div class="flex items-center gap-1 text-green-600">
                       <span>⭐️⭐️⭐️⭐️⭐️</span>
                   </div>
                   <div class="text-sm text-gray-500">${review.date}</div>
               </div>
               <p class="text-gray-700 mt-2">${review.content}</p>
               <div class="flex items-center gap-4 mt-2">
                   <button class="flex items-center gap-1 text-green-600">
                       <span>👍</span>
                       <span>${review.likes}</span>
                   </button>
               </div>
           </div>
       `;
       reviewList.appendChild(reviewItem);
   });

   // Update pagination number
   document.getElementById("pageNumber").innerText = currentPage;
}

// Initial render
renderReviews();
