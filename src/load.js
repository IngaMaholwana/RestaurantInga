export default function loadContent() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    // header
    let header = document.createElement("div");
    header.classList.add("header");
    header.textContent = `🐱 Best Cat Themed Cafe 🐱`;
    content.appendChild(header);
    
    // others
    let others = document.createElement("div");
    others.classList.add("others");

    // story
    let story = document.createElement("div");
    story.classList.add("story");
    // story child creation
    let titleStory = document.createElement("div");
    titleStory.classList.add("title-story");
    titleStory.textContent = "Our Story";

    let storyContent = document.createElement("div");
    storyContent.classList.add("story-content");
    storyContent.innerHTML = `Welcome to the <div style="font-weight: bold; font-size: 20px; display: inline;">Best Cat Cafe</div>, the 
                        purrfect place for cat lovers and coffee enthusiasts alike! Located in busling location of Cape Town phillipi.`;
    //story appending
    story.appendChild(titleStory);
    story.appendChild(storyContent);
    others.appendChild(story);


    // location
    let location = document.createElement("div");
    location.classList.add("location");
    // location child creation
    let titleLocation = document.createElement("div");
    titleLocation.classList.add("title-location");
    titleLocation.textContent = "Our Location";
    
    let locationContent = document.createElement("div");
    locationContent.classList.add("location-content");
    locationContent.textContent = `123 BrownsFarm madeup street `;
    // location appending
    location.appendChild(titleLocation);
    location.appendChild(locationContent);
    others.appendChild(location);
    

    // reviews
    let reviews = document.createElement("div");
    reviews.classList.add("reviews");
    // review child creation
    let titleReview = document.createElement("div");
    titleReview.classList.add("title-reviews");
    titleReview.textContent = "Our Reviews";

    reviews.appendChild(titleReview);
    
    let reviewContent = document.createElement("div");
    reviewContent.classList.add("review-content");

    let reviewList = document.createElement("ul");
    reviewList.classList.add("reviews-list");

    // review 1 creation
    let review1 = document.createElement("li");
    review1.classList.add("1");

    let date = document.createElement("div");
    date.classList.add("date");
    date.textContent = "March 7, 2025";
    review1.appendChild(date);

    let stars = document.createElement("div");
    stars.classList.add("review-stars");
    stars.textContent = "⭐⭐⭐⭐⭐";
    review1.appendChild(stars);

    let text = document.createElement("div");
    text.classList.add("review-text");
    text.textContent = `"Absolutely loved the experience at this cafe! The ambiance was cozy, the service was friendly, 
                                and the food was out of this world. The cats are amazing too! Definitely coming back soon."`;
    review1.appendChild(text);
    
    let name = document.createElement("div");
    name.classList.add("review-name");
    name.textContent = "~ Happy Reviewer";
    review1.appendChild(name);

    reviewList.appendChild(review1);

    // review 2 creation 
    let review2 = document.createElement("li");
    review2.classList.add("2");

    let date2 = document.createElement("div");
    date2.classList.add("date");
    date2.textContent = "August 18, 2025";
    review2.appendChild(date2);

    let stars2 = document.createElement("div");
    stars2.classList.add("review-stars");
    stars2.textContent = "⭐⭐⭐⭐⭐";
    review2.appendChild(stars2);

    let text2 = document.createElement("div");
    text2.classList.add("review-text");
    text2.textContent = `"Meow meow, meow meow meow! Meow meow meow meow meow, meow meow, meow! 😻😻😻"`;
    review2.appendChild(text2);
    
    let name2 = document.createElement("div");
    name2.classList.add("review-name");
    name2.textContent = "~ Suspicious Reviewer";
    review2.appendChild(name2);

    reviewList.appendChild(review2);

    reviewContent.appendChild(reviewList);
    reviews.appendChild(reviewContent);
    others.appendChild(reviews);

    content.appendChild(others);

}