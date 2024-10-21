type Props = {
    name: string;
    price: string;
    stocked: boolean;
};

export const ProductEntry = (props: Props) => {
    const { name, price, stocked } = props;

    const s = {
        color: stocked ? 'black' : 'red',
    };

    return (
        <tr>
            <td style={s}>{name}</td>
            <td>{price}</td>
        </tr>
    );
};
