import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((faq) => (
          <Accordion.Item key={faq.id}>
            <Accordion.Header>{faq.header}</Accordion.Header>
            <Accordion.Body>{faq.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>TRY 30 DAYS FREE</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}

export default FaqsContainer;
