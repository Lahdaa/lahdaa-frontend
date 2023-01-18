import React from "react";
import { Section, Container, FaqItem } from "./style";
import Typography from "components/atoms/Typography";

interface Props {}
const FaqSection: React.FC<Props> = () => {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Simply search for the course and enroll. If you need more info, just contact us",
    },
    {
      question: "What kind of courses can I take on Stevia?",
      answer:
        "We are focused on these key courses, Creative, Marketing, Entrepreneur, Data, Software Development and Design. We are very focused on you getting practical knowledge of content and tools. The courses have been structured to help you acquire this knowledge at an accountable pace.",
    },
    {
      question:
        "I’m an absolute beginner with no experience or knowledge in the subject matter you teach (e.g., software engineering, digital marketing). Are your courses still for me?",
      answer:
        "Many of our courses are geared toward beginners and no previous understanding of a subject is required. Additionally, these courses often feature pre-work assignments to get you up to speed with essential concepts and tools. Inevitably, our courses attract students with a wide variety of backgrounds and expertise, so we make sure to have live class, office hours, and additional help available as needed to provide personalized feedback and support.",
    },
    {
      question: "What level of experience do i need?",
      answer:
        "Many of our courses are geared toward beginners and no previous understanding of a subject is required. Additionally, these courses often feature pre-work assignments to get you up to speed with essential concepts and tools. Inevitably, our courses attract students with a wide variety of backgrounds and expertise, so we make sure to have live class, office hours, and additional help available as needed to provide personalized feedback and support.",
    },
    {
      question: "Can I do the course at my pace?",
      answer:
        "No, you can’t, the course is designed for people who require accountability, so you have to take the course within the duration of the course. If for any reason you can’t continue, speak to us",
    },
    {
      question: "How much time do I need to dedicate to a course?",
      answer:
        "It varies by course and by the person, all courses are online and would require between 10hrs to 25hrs a week depending on your schedule. This would include live classes, office hours, study material and project or portfolio projects.",
    },
    {
      question: "Do I get a certificate at the end of my course?",
      answer:
        "Although our focus is not on the certificate but on you being able to execute your own projects using all you have been taught. Yes, you get a certificate of completion at the end of the course.",
    },
    {
      question: "What technical requirements do I need to succeed?",
      answer:
        "You will need access to high-speed internet and a dedicated, quiet workspace where you feel comfortable focusing, preferably in a private room. You'll also need to have your own computer. You would have to pay for a subscription for some of the tools you will be using.  ",
    },
    {
      question: "What is the length of the program?",
      answer:
        "Length of course varies from a minimum of 4 weeks to maximum of 26 weeks. We have structured the courses into modules. This way you can learn each aspect of a particular course step by step",
    },
    {
      question:
        "What benefits do students receive once they complete a Stevia course?",
      answer:
        "Our courses are designed to furnish students with the skills they need to embark on new career paths or elevate their current skill level. We equip students with hands-on training, and they gain knowledge of various digital tools ",
    },
  ];

  return (
    <Section className="faqs">
      <Container className="header">
        {faqs.map((faq, index) => (
          <FaqItem key={index}>
            <Typography as="h6" className="mb-15 heading-14">
              {faq.question}
            </Typography>
            <Typography as="p" className="mb-15 paragraph-13">
              {faq.answer}
            </Typography>
          </FaqItem>
        ))}
      </Container>
    </Section>
  );
};

export default FaqSection;
