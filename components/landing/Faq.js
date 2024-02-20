import React, { useState } from "react";

const Faq = () => {
  const [accordionItems, setAccordionItems] = useState([
    {
      title: "How does the product popularity algorithm work?",
      content:
        "Our algorithm analyzes historical sales data, customer behavior, and market trends to identify popular products and predict future demand. This helps you prioritize inventory, plan promotions, and make informed decisions about product placement.",
      isOpen: false,
    },
    {
      title: "How can I use the website to manage seasonal variations in demand?",
      content:
        "The website tracks past sales data for different seasons and identifies patterns. It then generates forecasts and suggests adjustments to inventory levels and pricing strategies to avoid stockouts or overstocking during peak and off-peak seasons.",
      isOpen: false,
    },
    {
      title: "Does the website help me optimize my profit margins?",
      content:
        "Yes, the website provides tools to calculate product costs and suggest optimal pricing strategies based on your desired profit margins and market competition. It also identifies areas for cost-saving opportunities and helps you track your overall profitability.",
      isOpen: false,
    },
    {
      title: "Is the website user-friendly for someone with no prior experience in inventory management?",
      content:
        "Absolutely! We prioritize a clean and intuitive interface with clear information about product performance, inventory levels, and profit margins. You can customize your dashboard and access various data visualizations for easy comprehension.",
      isOpen: false,
    },
    {
      title: "What kind of support do you offer to help me get started with the website?",
      content:
        "We offer a comprehensive range of support resources, including detailed tutorials, FAQs, and a dedicated customer support team. We also provide training materials and webinars to help you understand the platform and leverage its features effectively.",
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
              Welcome to our Q&A forum! We're here to answer your questions about our inventory management website and how it can help you optimize your business. 
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
