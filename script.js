document.addEventListener("DOMContentLoaded", function() {


    const today = new Date();

    // Get the year, month, and day
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so we add 1
    const day = String(today.getDate()).padStart(2, '0');

    // Format the date as "YYYY-MM-DD"
    const preferredDate = `${year}-${month}-${day}`;

  

    const blogPostsContainer = document.getElementById("blogPosts");

    // Sample blog post data
    const blogPosts = [
        {
            title: "How IoT is Revolutionizing Energy Efficiency",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            image: ""
        },
        {
            title: "Top 5 Smart Devices for an Energy-Smart Home",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
            image: ""
        },
        // Add more blog post objects as needed
    ];

    // Function to create HTML elements for each blog post
    function createBlogPostElement(post) {
        const article = document.createElement("article");

        //Create image element

        const image = document.createElement("img");
        image.src = post.image;
        image.alt = post.title;
        article.appendChild(image);

        //Create title element
        const title = document.createElement("h2");
        title.textContent = post.title;
        article.append(title)

        //Create a content element
        const content = document.createElement("p");
        content.textContent = post.content;
        article.append(content)

        const readMoreLink = document.createElement("a");
        readMoreLink.textContent = "Read More";
        readMoreLink.href = "#";
        article.appendChild(readMoreLink);
        return article;
    }

    // Function to render all blog posts
    function renderBlogPosts() {
        blogPosts.forEach(post => {
            const postElement = createBlogPostElement(post);
            blogPostsContainer.appendChild(postElement);
        });
    }


    // Render the blog posts when the DOM content is loaded
    renderBlogPosts();

      // Set the value of the preferredDate input field
      const preferredDateInput = document.getElementById("preferredDate");
      preferredDateInput.value = preferredDate;

      //Define the redirect function

      function redirectToContacts(){

        window.location.href = "contact.html";

      }

      //Add On Click function

      const contactButton = document.getElementById("contactButton");
      contactButton.addEventListener("click",redirectToContacts);

    
});
