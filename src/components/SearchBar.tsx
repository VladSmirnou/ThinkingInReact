export const SearchBar = () => {
    const s = {
        display: 'grid',
    };
    return (
        <form style={s}>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                Only show products in stock
            </label>
        </form>
    );
};
