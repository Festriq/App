interface IndexProps {
    title?: string;
}

const Index: React.FC<IndexProps> = ({ title }) => {
    return (
        <div>
            <h1>{title || 'Welcome to the Index Page'}</h1>
        </div>
    );
};

export default Index;
