import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  markdown: string;
}

const Markdown: React.FC<Props> = props => {
  return <ReactMarkdown children={props.markdown} remarkPlugins={[remarkGfm]} />;
};

export default Markdown;
