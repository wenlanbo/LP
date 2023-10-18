import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { H1, H2, Paragraph } from '../components/atoms/Typography';
import { Container } from '../components/atoms/Container';

const Terms = () => {
  return (
    <>
      <Header />

      <Navbar />
      <Container>
        <div className="relative mx-auto flex min-h-screen w-full flex-wrap items-center ">
          <div className="mb-3">
            <H1 className="mb-6">Agreement – Terms</H1>
            <Paragraph className="mb-6">
              All access to any area on our website are governed by the terms and conditions below ("Terms"). If you are not comfortable with any of these Terms, we would advise you to exit. Please continue only if you can accept these Terms.
            </Paragraph>
            <Paragraph className="mb-6">
              In these Terms, the words "we", "our" and "us" refers to Anicca.          </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Access to Anicca
            </H2>
            <Paragraph className="mb-6">
              The accessibility and operation of our website relies on technologies outside our control. We are not able to guarantee continuous accessibility or uninterrupted operation of our website.
            </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Relying on information
            </H2>
            <Paragraph className="mb-6">
              We provide our website as a general information source only. Do note that we are not involved in giving professional advice here. The website may not cover all information available on a particular issue. We would advise that you conduct your own checks or obtain professional advice relevant to your particular circumstances, outside of our website.          </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Security
            </H2>
            <Paragraph className="mb-6">
              Where appropriate, we use available technology to protect the security of communications made through our website. Do note that we do not accept liability for the security, authenticity, integrity or confidentiality of any transactions and other communications made through our website. Internet communications may be susceptible to interference or interception by third parties. We will do our best but we cannot make any warranties that our website is free of infection by computer viruses or other unauthorised software.
            </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Hyperlinks
            </H2>
            <Paragraph className="mb-6">
              We are not responsible or liable for the availability or content of any other Internet site (not provided by us) linked to or from our website. Access to any other Internet site is at your own risk. If you create a link or frame to our website, you do so at your own risk.
              We reserve the right to object or disable any link or frame to or from our website.
            </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Restrictions on use of materials
            </H2>
            <Paragraph className="mb-6">
              No material from this web site shall be reproduced, republished, uploaded, posted, transmitted or otherwise distributed in any way without the prior written consent of Anicca. The downloading of any software, including any files, images and data accompanying the software (hereinafter called "the software") from the web site by you does not in any way transfer title of the software to you. You may not redistribute, sell, de-compile, reverse-engineer or disassemble or otherwise deal with the software nor create derivative works from this web site or the materials thereon. Any unauthorized use of the web site or the materials thereon is strictly prohibited.
            </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Third party content
            </H2>
            <Paragraph className="mb-6">
              Third party content may appear on the web site or may be accessible via links from the web site. Anicca shall not be responsible and assumes no liability for any infringement, mistakes, misstatements of law, defamation, libel, slander, omissions, falsehood or profanity in the statements, opinions, representations or any other form of content contained in any third party content appearing on the web site.            </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Non-confidentiality
            </H2>
            <Paragraph className="mb-6">
              You agree that all information and/or particulars sent or submitted by you to Anicca in relation to the access of this web site is non-confidential and non-proprietary unless otherwise expressly indicated by you. You further undertake not to submit any information and/or other materials which are or may be offensive, illegal or which may not be lawfully disseminated under the laws of Singapore or any other relevant country.              </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Modification to Terms and Conditions of Use
            </H2>
            <Paragraph className="mb-6">
              The Terms and Conditions set out here may be edited from time to time. Updated versions of the Terms and Conditions of Use will be posted on the web site and are effective immediately.                          </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Privacy
            </H2>
            <Paragraph className="mb-6">
              Your use of the web site is subject to our Privacy Policy.
            </Paragraph>
          </div>

          <div className="mb-3">
            <H2 className="mb-6">
              Registration on web site and e-services web sites
            </H2>
            <Paragraph className="mb-6">
              Information collected from our users may be used for various reasons.
              We are committed to safeguarding your privacy. We do not disclose specific information about our users to any third parties unless so required by law or any government agencies. In the event that you participate in contests or other promotional programs on our site sponsored or organized by third parties or purchase goods and services offered by third parties or offer goods and services to third parties on our sites, your information may be disclosed to and used by such third parties.

            </Paragraph>
          </div>

        </div>
      </Container>


      <Footer />
    </>
  );
}

export default Terms;