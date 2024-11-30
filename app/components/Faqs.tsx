interface FaqItem {
  question: string;
  answer: string;
}

const Faqs = () => {
  const faqs: FaqItem[] = [
    {
      question: "What are the Check-in & Check-out timings?",
      answer: "Standard check-in time is 2 PM and check-out time is 11 AM.",
    },
    {
      question: "What formalities are needed during check-in and check-out?",
      answer:
        "As required by law, all adults have to provide their government-approved Photo IDs, that clearly show their residential address at the time of Check-in. Your co-operation is of utmost importance to us.",
    },
    {
      question: "What are Pool timings?",
      answer: "Pool is open from 7 AM to 7 PM daily.",
    },
    {
      question: "Is Alcohol allowed in the Villa?",
      answer: "Yes, responsible consumption is permitted in designated areas.",
    },
    {
      question: "Are Pets allowed?",
      answer: "Please contact our support team for pet-friendly villa options.",
    },
  ];

  return (
    <section className="py-20 px-20 pb-[10rem]">
      <div className=" mx-auto">
        <h2 className="text-4xl font-serif text-white  mb-16 text-start">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-[#5C4033] rounded-lg">
              <summary className="flex justify-between items-center p-4 cursor-pointer text-white">
                {faq.question}
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="p-4 pt-0 text-white/80">{faq.answer}</div>
            </details>
          ))}
        </div>

        <div className="absolute pt-[2rem]">
          <button className="text-white/60 hover:text-white flex items-start gap-2 mx-auto">
            View All
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
