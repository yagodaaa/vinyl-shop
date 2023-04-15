import { singleProduct } from '../entity/singleProduct';
import { SingleProductComponent } from '../single-product-in-list/single-product-in-list';
import { generateAllRecordsView } from '../../App';
import { useState, useEffect } from 'react'
import { SingleProductProps } from '../single-product-in-list/single-product-in-list'

interface ProductsListComponentProps {
    productList: SingleProductProps[];
}


export const ProductsListComponent = (props: ProductsListComponentProps): JSX.Element => {
    const [loading, setLoading] = useState(false)
    const [records, setRecords] = useState([] as any);

    const fetchData = async () => {
        setLoading(true);
        const res = await generateAllRecordsView();
        setRecords([...res])
        setLoading(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h2>Lista Produktów</h2>
            </header>
            {loading &&
                <p>loading...</p>
            }
            <ul>

                {records.length > 0 && records.map((recordItem: singleProduct) => (
                    <SingleProductComponent singleProductProps={recordItem} />

                ))}
            </ul>
        </section>
    )
}





