import { FaXTwitter } from "react-icons/fa6";

function TweetBtn() {
  return (
    <a
      href="twitter.com/intent/tweet"
      id="tweet-quote"
      target="_blank"
      rel="noreferrer"
    >
      <FaXTwitter />
    </a>
  );
}

export default TweetBtn;
