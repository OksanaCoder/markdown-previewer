import "./App.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

function App() {
  const [markdown, setMarkdown] = useState(`
  # Heading 1
  #### Heading
  * 1234
`);
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <Row className="p-5">
      <Col lg={6} md={6} sm={12} xs={12}>
        <h5>Editor:</h5>
        <textarea
          value={markdown}
          onChange={handleChange}
          className="editor"
        ></textarea>
      </Col>
      <Col lg={6} md={6} sm={12} xs={12}>
        <h5>Preview:</h5>
        <ReactMarkdown className="preview">{markdown}</ReactMarkdown>
      </Col>
    </Row>
  );
}

export default App;
