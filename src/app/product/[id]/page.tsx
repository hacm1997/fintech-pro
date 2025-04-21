import MainLayout from "@/components/layout/main-layout";
import { ProductDetails } from "@/components/product-details";
import { Product } from "@/types/product";

/**
 * Fetches a single product by its ID from the API.
 * 
 * @param id - The ID of the product to fetch.
 * @returns A Promise that resolves to a Product object.
 * @throws An error if the product could not be fetched.
 */
async function getProduct(id: string): Promise<Product> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/products?id=${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    const data = await res.json();

    return data[0];
}

/**
 * Renders the product detail page.
 * 
 * Fetches product data based on the `id` parameter and displays it
 * using the `ProductDetails` component.
 * 
 * @param params - The route parameters containing the product ID.
 * @returns A React element displaying the product details.
 */
export default async function ProductPage({ params }: { params: Promise<Record<string, string>> }) {
    const { id } = await params;
    const product = await getProduct(id);

    return (
        <MainLayout>
            <ProductDetails product={product} />
        </MainLayout>
    );
}
