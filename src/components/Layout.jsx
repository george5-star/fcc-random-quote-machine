import styled from "styled-components";
import Author from "./Author";
import QuoteBtn from "./QuoteBtn";
import TweetBtn from "./TweetBtn";
import TumbrBtn from "./TumbrBtn";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  border: 1px solid red;
  width: 95%;
`;

const MiniWrapper = styled.span`
  display: flex;
  width: 70%;
  margin-inline: auto;
  justify-content: space-between;
`;

const BtnContainers = styled.div`
  display: flex;
  width: 5em;
  border: 1px solid red;
  align-items: center;
  justify-content: space-between;
`;

function Layout() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function getQuote() {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();
      setQuotes(data);
    }

    getQuote();
  }, []);

  const generateQuote = () => {
    quotes.map((quote) => {
      const { text, author } = quote;
      const authorName = author.split(",")[0];
      console.log(text, authorName);
    });
  };

  return (
    <Wrapper id="quote-box">
      <p id="text">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est
          inventore itaque sed impedit accusantium fuga aut aliquid mollitia
          quisquam.
        </span>
        <span>
          <Author />
        </span>
        <MiniWrapper>
          <BtnContainers>
            <TumbrBtn />
            <TweetBtn />
          </BtnContainers>
          <QuoteBtn getQuote={generateQuote} />
        </MiniWrapper>
      </p>
    </Wrapper>
  );
}

export default Layout;
