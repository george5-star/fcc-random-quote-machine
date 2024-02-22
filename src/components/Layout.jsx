import { ReactTyped } from "react-typed";
import { FaXTwitter } from "react-icons/fa6";
import { FaTumblr } from "react-icons/fa";
import { useEffect, useState } from "react";
import styled from "styled-components";
import QuoteBtn from "./QuoteBtn";

const Wrapper = styled.div`
  text-align: center;
  width: 95%;
`;

const MiniWrapper = styled.span`
  display: flex;
  width: 70%;
  margin-inline: auto;
  margin-block-start: 2em;
  justify-content: space-between;
`;

const BtnContainers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Layout() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(
    "" ||
      "Our brain isn't designed to get things done; it's designed to keep us safe."
  );
  const [author, setAuthor] = useState("" || "David Allen");
  useEffect(() => {
    async function getQuote() {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuotes(data);
    }

    getQuote();
  }, []);

  const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote.text);
    setAuthor(randomQuote.author.split(",")[0]);
  };

  return (
    <Wrapper id="quote-box">
      <div id="text">
        <span style={{ fontSize: "2rem" }}>
          <ReactTyped strings={[quote]} backSpeed={50} typeSpeed={70} />
          <br />
          <span
            id="author"
            style={{
              fontWeight: "bolder",
              textTransform: "uppercase",
              fontSize: ".8rem",
            }}
          >
            {` --- ${author}`}
          </span>
        </span>
        <MiniWrapper>
          <BtnContainers>
            <a href="">
              <FaTumblr />
            </a>
            <a
              href="twitter.com/intent/tweet"
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
          </BtnContainers>
          <QuoteBtn getQuote={generateQuote} />
        </MiniWrapper>
      </div>
    </Wrapper>
  );
}

export default Layout;
