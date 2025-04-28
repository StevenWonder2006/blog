(() => {
  "use strict";

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const setTheme = (theme) => {
    if (theme === "auto") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector("#bd-theme");

    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector("#bd-theme-text");
    const activeThemeIcon = document.querySelector(".theme-icon-active use");
    const btnToActive = document.querySelector(
      `[data-bs-theme-value="${theme}"]`
    );
    const svgOfActiveBtn = btnToActive
      .querySelector("svg use")
      .getAttribute("href");

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });

    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    activeThemeIcon.setAttribute("href", svgOfActiveBtn);
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);

    if (focus) {
      themeSwitcher.focus();
    }
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      const storedTheme = getStoredTheme();
      if (storedTheme !== "light" && storedTheme !== "dark") {
        setTheme(getPreferredTheme());
      }
    });

  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();


 




 function readmore(id){
  window.location.href=`home.html#${id}`;
  
} ;

  function nextRead(id){
  window.location.href = `blog1.html#${id}`;
} ;

function blog7(id){
  window.location.href = `blog7.html#${id}`;
};

function generalNews(id){
  window.location.href= `generalBlog.html# ${id}`
};

function blogging(id){
  window.location.href = `blog10.html#${id}`;
};


function blogTwo(id){
  window.location.href = `blog2.html#${id}`;
}
function blogThree(id){
  window.location.href = `blog3.html#${id}`;
}
function blogFour(id){
  window.location.href = `blog4.html#${id}`;
}
function blogFive(id){
  window.location.href = `blog5.html#${id}`;
}






/* // Initialize UI updates
document.addEventListener('DOMContentLoaded', () => {
  fetchLikes();

  const blogLikeButtons = document.querySelectorAll('.blog-like-button');
  blogLikeButtons.forEach((button) => {
    const blogId = button.dataset.blogId;
    updateBlogLikeCount(blogId);
    button.addEventListener('click', () => {
      handleBlogLike(blogId);
    });
  });

  const likeButton = document.querySelector('#like-button');
  if (likeButton) {
    likeButton.addEventListener('click', handleLike);
  }
});

// Replace mock functions with Netlify functions
if (window.location.hostname === 'localhost') {
  fetchLikes = mockNetlifyFunctions.getLikes;
  handleLike = mockNetlifyFunctions.like;
  updateBlogLikeCount = mockNetlifyFunctions.getBlogLikes;
  handleBlogLike = mockNetlifyFunctions.likeBlog;
}
 
/* const fetchLikes = async () => {
  try {
    const response = await fetch('/.netlify/functions/getLikes');
    const data = await response.json();
    likeCount = data.likes;
    updateLikeCountDisplay();
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
}; */
/*
const handleLike = async () => {
  try {
    const response = await fetch('/.netlify/functions/like', { method: 'POST' });
    const data = await response.json();
    if (data.success) {
      likeCount++;
      updateLikeCountDisplay();
    } else {
      console.error('Failed to like the post');
    }
  } catch (error) {
    console.error('Error liking the post:', error);
  }
};

const updateBlogLikeCount = async (blogId) => {
  try {
    const response = await fetch(`/.netlify/functions/getBlogLikes?blogId=${blogId}`);
    const data = await response.json();
    const likeCountElement = document.querySelector(`#like-count-${blogId}`);
    likeCountElement.textContent = data.likes;
  } catch (error) {
    console.error(`Error fetching likes for blog ID ${blogId}:`, error);
  }
};

const handleBlogLike = async (blogId) => {
  try {
    const response = await fetch(`/.netlify/functions/likeBlog?blogId=${blogId}`, { method: 'POST' });
    const data = await response.json();
    if (data.success) {
      updateBlogLikeCount(blogId);
    } else {
      console.error(`Failed to like the blog with ID: ${blogId}`);
    }
  } catch (error) {
    console.error(`Error liking the blog with ID ${blogId}:`, error);
  }
};
// Mock Netlify functions for local testing
const mockNetlifyFunctions = {
  getLikes: async () => ({ likes: likeCount }),
  like: async () => ({ success: true }),
  getBlogLikes: async (blogId) => ({ likes: blogLikes[blogId] || 0 }),
  likeBlog: async (blogId) => {
    blogLikes[blogId] = (blogLikes[blogId] || 0) + 1;
    return { success: true };
  },
}; */

function blog8(id){
  window.location.href=`blog8.html#${id}`
}

