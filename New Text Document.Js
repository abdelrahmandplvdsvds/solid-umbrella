document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
  
    // Load comments from server when page loads
    loadComments();
  
    // Submit comment form
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        submitComment(commentText);
      }
    });
  
    // Function to load comments from server
    function loadComments() {
      // Simulate loading comments from server
      const comments = ['First comment', 'Second comment', 'Third comment'];
      commentsList.innerHTML = '';
      comments.forEach(function(comment) {
        appendComment(comment);
      });
    }
  
    // Function to submit comment to server
    function submitComment(commentText) {
      // Simulate submitting comment to server
      appendComment(commentText);
      commentInput.value = '';
    }
  
    // Function to append comment to the DOM
    function appendComment(commentText) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.textContent = commentText;
      commentsList.appendChild(commentDiv);
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
  
    // Load comments from server when page loads
    loadComments();
  
    // Submit comment form
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        submitComment(commentText);
      }
    });
  
    // Function to load comments from server
    function loadComments() {
      // Simulate loading comments from server
      const comments = [
        { text: 'First comment', likes: 0 },
        { text: 'Second comment', likes: 0 },
        { text: 'Third comment', likes: 0 }
      ];
      commentsList.innerHTML = '';
      comments.forEach(function(comment) {
        appendComment(comment);
      });
    }
  
    // Function to submit comment to server
    function submitComment(commentText) {
      // Simulate submitting comment to server
      const newComment = { text: commentText, likes: 0 };
      appendComment(newComment);
      commentInput.value = '';
    }
  
    // Function to append comment to the DOM
    function appendComment(comment) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.innerHTML = `
        <p>${comment.text}</p>
        <button class="like-btn">${comment.likes} Likes</button>
      `;
      const likeButton = commentDiv.querySelector('.like-btn');
      likeButton.addEventListener('click', function() {
        comment.likes++;
        likeButton.textContent = `${comment.likes} Likes`;
      });
      commentsList.appendChild(commentDiv);
    }
  });