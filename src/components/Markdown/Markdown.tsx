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
        em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
        strong: ({ node, ...props }) => <strong style={{ color: '#353644', fontWeight: 700, lineHeight: '24px' }} {...props} />,
        h3: ({ node, ...props }) => <h3 style={{ marginBottom: '12px' }} {...props} />,
        p: ({ node, ...props }) => <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: '#626474', marginBottom: '12px' }} {...props} />,
        ol: ({ node, ...props }) => <ol style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: '#626474', marginBottom: '12px' }} {...props} />,
        ul: ({ node, ...props }) => <ul style={{ fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: '#626474', marginBottom: '12px' }} {...props} />,
      }}
    />
  );
};

export default Markdown;
