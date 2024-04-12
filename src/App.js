import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div className="container">
      <Accordion data={faqs} />;
    </div>
  );
}
function Accordion({ data }) {
  const [showIndex, setShowIndex] = useState(null);

  return (
    <div className="accordion">
      <h2 style={{ textAlign: "center" }}>Accordion</h2>

      {data.map((data, i) => (
        <AccordionItem
          title={data.title}
          text={data.text}
          num={i}
          key={data.title}
          showDetail={i === showIndex ? true : false}
          setShowIndex={() => setShowIndex(i)}
          setShowIndexClose={() => {
            setShowIndex(null);
          }}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  text,
  setShowIndex,
  showDetail,
  setShowIndexClose,
}) {
  // const [isOpen, setIsOpen] = useState(false);
  const changeHandler = () => {
    if (showDetail === true) {
      setShowIndexClose();
    } else {
      setShowIndex();
    }
  };
  return (
    <div className={`item ${showDetail ? "open" : ""}`} onClick={changeHandler}>
      <p className="number">{num <= 9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{showDetail ? "-" : "+"}</p>
      {showDetail && <p className="content-box">{text}</p>}
    </div>
  );
}
