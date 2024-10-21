type Props = {
    name: string;
    price: string;
    stocked: boolean;
};

export const ProductEntry = (props: Props) => {
    const { name, price } = props;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
};
