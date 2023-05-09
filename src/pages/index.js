import * as React from "react";
import InitialBlock from "../components/InitialBlock";
import EducationDivisionBlock from "../components/EducationDivisionBlock";
import LearnPlanBlock from "../components/LearnPlanBlock";
import CertificateBlock from "../components/CertificateBlock";
import InvestmentJourneyBlock from "../components/InvestmentJourneyBlock";
import AboutBotBlock from "../components/AboutBotBlock";
import QuizBlock from "../components/QuizBlock";
import AboutBakksyBlock from "../components/AboutBakksyBlock";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <main>
      {/* <Header /> */}
      <InitialBlock />
      <EducationDivisionBlock />
      <LearnPlanBlock />
      <CertificateBlock />
      <InvestmentJourneyBlock />
      <AboutBotBlock />
      <QuizBlock />
      <AboutBakksyBlock />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = ({ pageContext }) => (
  <>
    <html lang={pageContext.language} />
    <meta
      name="description"
      content={pageContext.intl.messages.pageDescription}
    />
    <title>{pageContext.intl.messages.pageTitle}</title>
  </>
);
