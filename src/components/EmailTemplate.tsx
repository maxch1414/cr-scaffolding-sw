import {
  Html,
  Body,
  Container,
  Text,
  Preview,
  Heading,
  Hr,
  Section,
} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Preview>
        New Quote Request from {firstName} {lastName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Quote Request</Heading>

          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {firstName} {lastName}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Phone:</strong> {phone}
            </Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={text}>
              <strong>Project Details:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            This quote request was submitted through the CR Scaffolding website.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const section = {
  padding: "24px",
  backgroundColor: "#f6f9fc",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "8px 0",
};

const messageText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
  padding: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid #e1e5e9",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#dfe1e5",
  margin: "42px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: "32px",
};
