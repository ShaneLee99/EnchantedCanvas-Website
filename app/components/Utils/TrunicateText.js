const LimitString = (post) => {
    const { length: len } = post;
    if (10 < len) {
      const truncated = post.slice(0, 300);
      const lastSpaceIndex = truncated.lastIndexOf(' ');
      return truncated.slice(0, lastSpaceIndex) + '...';
    } else {
      return post;
    }
  };
const TrunicatedText = (
    text
) => {
    return (
        <div>
            <p className="text-white mt-2">{LimitString(text.text)}</p>
        </div>
    )
}

export default TrunicatedText