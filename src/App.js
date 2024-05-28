import { useState } from "react";
import "./styles.css";

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
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {

  const[currOpen,setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} num={i} key={el.title} currOpen={currOpen} onOpen={setCurrOpen} >
          {el.text}
        </AccordionItem>
      ))}
  <AccordionItem title="test 1" num={22} key="test 1" currOpen={currOpen} onOpen={setCurrOpen} >
        <p>Just another item to use children props</p>
        <ul>
          <li>react react</li>
          <li>react react react</li>
        </ul>
        
        </AccordionItem>

    </div>

  );
}

function AccordionItem({currOpen,onOpen, num, title, children }) {
 const isOpen = title===currOpen;

 function handleToggle(){
  onOpen(isOpen?null:title);
 }
  return (
     <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

       {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
