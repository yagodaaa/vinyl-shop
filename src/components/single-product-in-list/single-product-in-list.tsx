import { singleProduct } from '../entity/singleProduct';

export interface SingleProductProps {
    singleProductProps: singleProduct;
}

export function SingleProductComponent(props: SingleProductProps): JSX.Element {
    return (
        <li key={props.singleProductProps.id}>
            <h3>{props.singleProductProps.name}</h3>
            <p>{props.singleProductProps.artist}</p>
            <p>quantity: {props.singleProductProps.quantity}</p>
        </li>
    )
}


