import React, { useState } from "react";

const Faq = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      title: "Do I need to complete KYC (Know Your Customer) verification?",
      content:
        "Yes, for security and regulatory compliance, we require all users to complete KYC verification. This helps us ensure the safety and legitimacy of all transactions.",
      isOpen: false,
    },
    {
      title: "How can I buy tokens on your platform?",
      content:
        "Buying tokens on our platform is easy. You can start by creating an account, verifying your identity, and then depositing funds. Once your account is funded, you can place buy orders for the tokens you want.",
      isOpen: false,
    },
    {
      title: "Are my transactions secure?",
      content:
        "Yes, we take security seriously. Our platform uses advanced encryption and security measures to protect your transactions and personal information.",
      isOpen: false,
    },
    {
      title: "Can I sell my tokens on your platform?",
      content:
        "Absolutely! You can sell your tokens on our platform by creating a sell order. Once the order is matched with a buyer, you'll receive the equivalent amount in your account.",
      isOpen: false,
    },
    {
      title: "Can I trade cryptocurrencies other than Bitcoin and Ethereum?",
      content:
        "Yes, we offer a wide range of cryptocurrencies for trading. You can explore various altcoins and tokens on our platform.",
      isOpen: false,
    },
    // Add more accordion items here
  ]);

  const toggleAccordion = (index) => {
    const updatedItems = [...accordionItems];
    setAccordionItems(
      updatedItems.map((item, i) =>
        i === index
          ? { ...item, isOpen: !item.isOpen }
          : { ...item, isOpen: false }
      )
    );
    // updatedItems[index].isOpen = !updatedItems[index].isOpen;
    // setAccordionItems(updatedItems);
  };

  return (
    <div className="faq-area pt-20 ">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dreamit-section-title up text-center ">
              <h4>FAQ</h4>
              <h1>
                Question & <span>Answer</span>
              </h1>
              <p className="section-text">
                Cryptocurrencies are used primarily outside existing banking
                governmental institutions and exchanged
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8">
            <div
              className="tab-content text-center wow fadeInDown"
              data-wow-delay=".3"
            >
              <ul className="tabs">
                {accordionItems.map((item, index) => (
                  <>
                    <li
                      key={index}
                      rel={`tab${index}`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <i className="fas fa-play"></i>
                      {item.title}
                    </li>
                    <li
                      style={{
                        display: item.isOpen ? "block" : "none",
                        height: "auto",
                        paddingBottom: "10px",
                        paddingRight: "5px",
                      }}
                    >
                      {item.content}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-6 col-md-6">
            <div className="tab-content text-center wow fadeInDown" data-wow-delay=".4">
            <ul className="tabs">
              {accordionItems.map((item, index) => (
                <div key={index} className={`accordion-item ${item.isOpen ? "active" : ""}`}>
                  <div className="accordion-title" onClick={() => toggleAccordion(index)}>
                    {item.title}
                  </div>
                  <div className="accordion-content" style={{ display: item.isOpen ? "block" : "none" }}>
                    {item.content}
                  </div>
                </div>
              ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
