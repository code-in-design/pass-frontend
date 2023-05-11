import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  markdown: string;
}

const Markdown: React.FC<Props> = props => {
  return (
    <ReactMarkdown
      children={props.markdown}
      remarkPlugins={[remarkGfm]}
      components={{
        // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
        em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
      }}
    />
  );
};

export default Markdown;
