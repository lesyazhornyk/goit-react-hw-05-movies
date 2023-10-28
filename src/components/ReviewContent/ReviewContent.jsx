const ReviewContent = ({ review }) => {
  return (
    <li>
      <h5>Author: {review.author}</h5>
      <p>{review.content}</p>
    </li>
  );
};

export default ReviewContent;
