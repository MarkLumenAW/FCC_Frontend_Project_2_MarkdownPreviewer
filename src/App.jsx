import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { useSelector, useDispatch } from 'react-redux';
import { editorSwitch, previewerSwitch } from './reducers/switchSlice';
import { useSpring, animated,config } from 'react-spring';

function App() {

  const dispatch = useDispatch();

  const editorOpen = useSelector(state => state.switch.editorOpen);
  const previewerOpen = useSelector(state => state.switch.previewerOpen);

  const editorProps = useSpring({
    opacity: editorOpen ? 1 : 0,
    from: { opacity: 0 },
    config: config.slow,
  });

  const previewerProps = useSpring({
    opacity: previewerOpen ? 1 : 0,
    from: { opacity: 0 },
    config: config.slow,
  });


  if (!editorOpen && !previewerOpen) {
    dispatch(editorSwitch());
    dispatch(previewerSwitch());
  }

  return (
    <>
      {editorOpen &&
        <animated.div style={editorProps}>
          <Editor />
        </animated.div>}
      {previewerOpen &&
        <animated.div style={previewerProps}>
          <Previewer />
        </animated.div>}
    </>
  );
}

export default App;
