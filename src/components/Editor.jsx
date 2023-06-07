import BasicHeader from "./BasicHeader";
import Container from "./BasicContainer";
import { useSelector, useDispatch } from "react-redux";
import { updateMarkdown } from "../reducers/markdownSlice";
import { editorSwitch, previewerSwitch } from '../reducers/switchSlice';

export default function Editor(props) {

  const dispatch = useDispatch();

  const content = useSelector(state => state.markdown.content);
  const editorOpen = useSelector(state => state.switch.editorOpen);
  const previewerOpen = useSelector(state => state.switch.previewerOpen);

  let heightToggler = '15rem';
  let iconToggler = true;

  if (editorOpen && !previewerOpen) {
    heightToggler = '80vh';
    iconToggler = false;
  }


  return (
    <Container>
      <BasicHeader
        name='Editor'
        switch={iconToggler}
        switchHandler={editorSwitch}
      />
      <textarea id="editor" style={{
        height: heightToggler,
        border: 'none',
        backgroundColor: '#ece1dc',
        padding: '1rem',
        outlineColor: '#9f8b82',
      }}
        value={content} onChange={(e) => {
          dispatch(updateMarkdown({ content: e.target.value }));
        }}
      ></textarea>
    </Container>
  );
};
