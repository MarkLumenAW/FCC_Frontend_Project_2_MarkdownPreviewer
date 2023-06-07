import BasicHeader from "./BasicHeader";
import Container from "./BasicContainer";
import { useSelector, useDispatch } from "react-redux";
import { marked } from "marked";
import { editorSwitch, previewerSwitch } from '../reducers/switchSlice';
import hljs from 'highlight.js';
import 'highlight.js/styles/an-old-hope.css';

export default function Previewer(props) {
  const content = useSelector(state => state.markdown.content);
  const editorOpen = useSelector(state => state.switch.editorOpen);
  const previewerOpen = useSelector(state => state.switch.previewerOpen);

  marked.setOptions({
    highlight: function(code, lang) {
      if (hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });
  
marked.use({ breaks: true })

  const convertedHTML = marked.parse(content);

  let iconToggler = true;

  if (!editorOpen && previewerOpen) {
    iconToggler = false;
  }

  return (
    <Container>
      <BasicHeader
        name='Previewer'
        switch={iconToggler}
        switchHandler={previewerSwitch}
      />
      <div
        id="preview"
        style={{
          minHeight: '15rem',
          backgroundColor: '#ece1dc',
          padding: '1rem',
          textAlign: 'left',
          overflow: 'auto',
        }}
        dangerouslySetInnerHTML={{ __html: convertedHTML }}
      ></div>
    </Container>
  );
};
