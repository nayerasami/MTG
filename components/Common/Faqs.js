import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faqs = () => {
  return (
    <>
      <div className="faq-area bg-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="top-title">FAQ,s</span>
            <h2>Frequently Asked Questions</h2>
            <p>
            Explore the following Frequently Asked Questions (FAQs) to gain a deeper understanding of our cutting-edge medical technologies and diagnostic solutions.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img">
                <img src="/img/faqs.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="mx-3">Sensitivity & Specificity?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      LUXEGEN's accuracy for specific conditions? LUXEGEN exhibits exceptional sensitivity and specificity tailored to the specific medical condition it's designed to diagnose, ensuring accurate and reliable results for patients.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span className="mx-3" >Therapeutic Approach?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      How does THERAMEND work, and who benefits? THERAMEND employs a unique therapeutic approach, targeting a well-defined patient population or specific medical conditions, thus enhancing its effectiveness in providing tailored treatments.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span  className="mx-3">
                        Future Plans?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Any future enhancements or expansions? Our ongoing research and development endeavors are focused on advancing THERAMEND's applications and exploring the potential for expanding its use to address a wider range of medical indications.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span  className="mx-3">Contamination Control?</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Minimizing qPCR contamination risks? Adhering to strict laboratory protocols and utilizing contamination control measures is essential for ensuring data integrity in qPCR testing.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span  className="mx-3">
                        Personalized Medicine?
                        </span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      qPCR's role and challenges in personalized medicine? qPCR plays a pivotal role in personalized medicine by detecting genetic markers, but translating this data into actionable clinical decisions poses challenges, including the need for robust interpretation and integration into patient care.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
