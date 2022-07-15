import Email from "./Email";

function Emails(props) {
  const { emails, toggleRead, toggleStar } = props;

  return (
    <ul>
      {emails.map((email) => (
        <Email
          key={email.id}
          email={email}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
        />
      ))}
    </ul>
  );
}

export default Emails;
