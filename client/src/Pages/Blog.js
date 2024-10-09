import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/blog.css';

const Blog = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [reply, setReply] = useState({ id: null, text: '' });

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/comments');
      setCommentsList(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    try {
      const newComment = { name, comment, parentId: null };
      await axios.post('http://localhost:5000/api/comments', newComment);
      setName('');
      setComment('');
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/comments/${id}`);
      fetchComments();
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleReplyChange = (e) => {
    setReply({ ...reply, text: e.target.value });
  };

  const handleReply = async (commentId) => {
    if (!reply.text) return;

    try {
      const newReply = { name, comment: reply.text, parentId: commentId };
      await axios.post('http://localhost:5000/api/comments', newReply);
      setReply({ id: null, text: '' });
      fetchComments();
    } catch (error) {
      console.error('Error adding reply:', error);
    }
  };

  return (
    <div className="blog-container">
      <h1>Blogs</h1>
      <div className="comment-form-box">
        <h2>Add a Comment</h2>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            id="name"
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            id="comment"
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="comments-list">
        <h2>Comments</h2>
        {commentsList.map((c) => (
          <div key={c.id} className="comment-box">
            <p className="comment-author"><strong>{c.name}</strong></p>
            <p className="comment-text">{c.comment}</p>
            <div className="comment-actions">
              <button className="reply-button" onClick={() => handleReply(c.id)}>Reply</button>
              <button className="delete-button" onClick={() => handleDeleteComment(c.id)}>Delete</button>
            </div>
            {c.replies && c.replies.map((reply) => (
              <div key={reply.id} className="reply-box">
                <p><strong>{reply.name}:</strong> {reply.comment}</p>
                <button onClick={() => handleDeleteComment(reply.id)}>Delete Reply</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
