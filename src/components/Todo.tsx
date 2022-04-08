const Todo: React.FC<{ text: string, onDelete: () => void }> = ({ text, onDelete }) => {
    return (
        <>
            <li onClick={onDelete}>{text}</li>
        </>
    );
};

export default Todo;
